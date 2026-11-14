import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  matchPath,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { CountryDetailView } from './components/country/CountryDetailView';
import { GlobeView, type GlobeViewHandle } from './components/globe/GlobeView';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Toast } from './components/layout/Toast';
import { PATHWAY_CATEGORIES } from './data/categories';
import { filterCountries, findCountryByCode, isPathwayCategoryId } from './data';
import { useChecklist } from './hooks/useChecklist';
import { useTheme } from './hooks/useTheme';
import type { CategoryId, CountryData, PathwayCategoryId } from './types/visa';

const BASE_TITLE = '中国公民 DIY 出国签证指南';
const EXIT_TRANSITION_MS = 200;
const TOAST_DURATION_MS = 2400;

function buildHomeUrl(cat: CategoryId): string {
  return cat !== 'all' ? `/?cat=${cat}` : '/';
}

function buildCountryUrl(code: string, tab: PathwayCategoryId): string {
  return `/country/${code}${tab !== 'tourism' ? `?tab=${tab}` : ''}`;
}

function scrollToTop(): void {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function getPathwayLabel(id: PathwayCategoryId): string {
  return PATHWAY_CATEGORIES.find((cat) => cat.id === id)?.label ?? id;
}

/** Root application coordinating routing, 3D globe / country detail transitions, theme, and checklist state. */
export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { theme, toggleTheme } = useTheme();
  const { isItemChecked, toggleItem, resetSubVisaChecklist, getCheckedCount } = useChecklist();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSpinning, setIsSpinning] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isViewExiting, setIsViewExiting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const globeRef = useRef<GlobeViewHandle | null>(null);
  const isUnmountedRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const transitionSeqRef = useRef(0);
  const exitTimerRef = useRef<number | null>(null);
  const pendingExitResolveRef = useRef<((completed: boolean) => void) | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const rememberedHomeCategoryRef = useRef<CategoryId>('all');

  const isHomeRoute = location.pathname === '/';
  const countryMatch = matchPath('/country/:code', location.pathname);
  const routeCode = countryMatch?.params.code ?? null;
  const matchedCountry = routeCode ? findCountryByCode(routeCode) : undefined;
  const invalidRouteCode = routeCode !== null && !matchedCountry ? routeCode : null;

  const catParam = searchParams.get('cat');
  const homeCategory: CategoryId =
    catParam && isPathwayCategoryId(catParam) ? catParam : 'all';

  const tabParam = searchParams.get('tab');
  const activeDetailTab: PathwayCategoryId =
    tabParam && isPathwayCategoryId(tabParam) ? tabParam : 'tourism';
  const activeSubVisaId = searchParams.get('sub') || null;

  const activeHeaderCategory: CategoryId = matchedCountry ? activeDetailTab : homeCategory;

  const filteredCountries = useMemo(
    () => filterCountries(homeCategory, searchQuery),
    [homeCategory, searchQuery]
  );

  const searchResults = useMemo(
    () => filterCountries(activeHeaderCategory, searchQuery),
    [activeHeaderCategory, searchQuery]
  );

  const clearToastTimer = useCallback(() => {
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  }, []);

  const clearExitTimer = useCallback(() => {
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
  }, []);

  const cancelPendingTransition = useCallback(() => {
    transitionSeqRef.current += 1;
    clearExitTimer();
    pendingExitResolveRef.current?.(false);
    pendingExitResolveRef.current = null;
    isTransitioningRef.current = false;
    setIsTransitioning(false);
    setIsViewExiting(false);
  }, [clearExitTimer]);

  // Lifecycle guard: initialize mounted state (StrictMode-safe) and clear all timers on unmount.
  useEffect(() => {
    isUnmountedRef.current = false;
    return () => {
      isUnmountedRef.current = true;
      clearToastTimer();
      clearExitTimer();
      pendingExitResolveRef.current?.(false);
      pendingExitResolveRef.current = null;
    };
  }, [clearExitTimer, clearToastTimer]);

  // Cancel any in-flight view transition if route changes externally (e.g., browser Back/Forward).
  useEffect(() => {
    if (isTransitioningRef.current) {
      cancelPendingTransition();
    }
  }, [cancelPendingTransition, location.key, location.pathname, location.search]);

  useEffect(() => {
    if (isHomeRoute) {
      rememberedHomeCategoryRef.current = homeCategory;
    }
  }, [homeCategory, isHomeRoute]);

  const showToast = useCallback(
    (message: string) => {
      if (isUnmountedRef.current) return;
      clearToastTimer();
      setToastMessage(message);
      setToastVisible(true);
      toastTimerRef.current = window.setTimeout(() => {
        toastTimerRef.current = null;
        if (!isUnmountedRef.current) {
          setToastVisible(false);
        }
      }, TOAST_DURATION_MS);
    },
    [clearToastTimer]
  );

  useEffect(() => {
    if (invalidRouteCode !== null) {
      showToast(`未找到对应国家或地区代码: ${invalidRouteCode}`);
      navigate('/', { replace: true });
    }
  }, [invalidRouteCode, navigate, showToast]);

  useEffect(() => {
    if (matchedCountry) {
      document.title = `${matchedCountry.nameZh} - ${getPathwayLabel(activeDetailTab)}签证 DIY 指南 | ${BASE_TITLE}`;
      return;
    }
    if (isHomeRoute && homeCategory !== 'all') {
      document.title = `${getPathwayLabel(homeCategory)}签证通道 | ${BASE_TITLE}`;
      return;
    }
    document.title = BASE_TITLE;
  }, [activeDetailTab, homeCategory, isHomeRoute, matchedCountry]);

  const waitForExitAnimation = useCallback((): Promise<boolean> => {
    clearExitTimer();
    setIsViewExiting(true);
    return new Promise<boolean>((resolve) => {
      pendingExitResolveRef.current = resolve;
      exitTimerRef.current = window.setTimeout(() => {
        exitTimerRef.current = null;
        pendingExitResolveRef.current = null;
        resolve(!isUnmountedRef.current);
      }, EXIT_TRANSITION_MS);
    });
  }, [clearExitTimer]);

  const exitToHome = useCallback(
    async (targetHomeUrl: string) => {
      if (isTransitioningRef.current) return;

      const seq = ++transitionSeqRef.current;
      isTransitioningRef.current = true;
      setIsTransitioning(true);

      try {
        const shouldProceed = await waitForExitAnimation();
        if (!shouldProceed || isUnmountedRef.current || transitionSeqRef.current !== seq) {
          return;
        }
        isTransitioningRef.current = false;
        setIsTransitioning(false);
        setIsViewExiting(false);
        navigate(targetHomeUrl);
        scrollToTop();
      } finally {
        if (!isUnmountedRef.current && transitionSeqRef.current === seq) {
          isTransitioningRef.current = false;
          setIsTransitioning(false);
          setIsViewExiting(false);
        }
      }
    },
    [navigate, waitForExitAnimation]
  );

  const handleSelectCountry = useCallback(
    async (country: CountryData) => {
      if (isTransitioningRef.current) return;

      const seq = ++transitionSeqRef.current;
      isTransitioningRef.current = true;
      setIsTransitioning(true);

      try {
        if (isHomeRoute) {
          try {
            await globeRef.current?.flyToCountry(country);
          } catch {
            return;
          }
          if (isUnmountedRef.current || transitionSeqRef.current !== seq) {
            return;
          }
        }

        const shouldProceed = await waitForExitAnimation();
        if (!shouldProceed || isUnmountedRef.current || transitionSeqRef.current !== seq) {
          return;
        }

        const targetTab: PathwayCategoryId = isHomeRoute
          ? homeCategory !== 'all'
            ? homeCategory
            : 'tourism'
          : activeDetailTab;
        const targetUrl = buildCountryUrl(country.code, targetTab);

        isTransitioningRef.current = false;
        setIsTransitioning(false);
        setIsViewExiting(false);
        navigate(targetUrl);
        scrollToTop();
      } finally {
        if (!isUnmountedRef.current && transitionSeqRef.current === seq) {
          isTransitioningRef.current = false;
          setIsTransitioning(false);
          setIsViewExiting(false);
        }
      }
    },
    [activeDetailTab, homeCategory, isHomeRoute, navigate, waitForExitAnimation]
  );

  const handleBackHome = useCallback(() => {
    void exitToHome(buildHomeUrl(rememberedHomeCategoryRef.current));
  }, [exitToHome]);

  const handleSelectDetailTab = useCallback(
    (nextTab: PathwayCategoryId) => {
      if (isTransitioningRef.current) return;
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          next.set('tab', nextTab);
          next.delete('sub');
          return next;
        },
        { replace: false }
      );
    },
    [setSearchParams]
  );

  const handleSelectSubVisa = useCallback(
    (nextSubId: string) => {
      if (isTransitioningRef.current) return;
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          next.set('tab', activeDetailTab);
          next.set('sub', nextSubId);
          return next;
        },
        { replace: true }
      );
    },
    [activeDetailTab, setSearchParams]
  );

  const handleSelectHeaderCategory = useCallback(
    (cat: CategoryId) => {
      if (isTransitioningRef.current) return;

      if (isHomeRoute) {
        rememberedHomeCategoryRef.current = cat;
        navigate(buildHomeUrl(cat));
        return;
      }

      if (cat === 'all') {
        rememberedHomeCategoryRef.current = 'all';
        void exitToHome('/');
        return;
      }

      handleSelectDetailTab(cat);
    },
    [exitToHome, handleSelectDetailTab, isHomeRoute, navigate]
  );

  const handleSearchChange = useCallback(
    (nextQuery: string) => {
      setSearchQuery(nextQuery);
      if (!isHomeRoute) {
        cancelPendingTransition();
        navigate(buildHomeUrl(rememberedHomeCategoryRef.current));
      }
    },
    [cancelPendingTransition, isHomeRoute, navigate]
  );

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const handleToggleSpin = useCallback(() => {
    setIsSpinning((prev) => !prev);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-paper)] text-[var(--text-main)]">
      <Header
        activeCategory={activeHeaderCategory}
        onSelectCategory={handleSelectHeaderCategory}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
        searchResults={searchResults}
        onSelectCountry={handleSelectCountry}
        isSpinning={isSpinning}
        onToggleSpin={handleToggleSpin}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 flex flex-col">
        <div
          className={`w-full flex-1 flex flex-col${
            isViewExiting ? ' animate-view-exit pointer-events-none' : ''
          }`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <GlobeView
                  ref={globeRef}
                  activeCategory={homeCategory}
                  searchQuery={searchQuery}
                  filteredCountries={filteredCountries}
                  theme={theme}
                  isSpinning={isSpinning}
                  isTransitioning={isTransitioning}
                  onCountryClick={handleSelectCountry}
                />
              }
            />
            <Route
              path="/country/:code"
              element={
                matchedCountry ? (
                  <CountryDetailView
                    key={matchedCountry.id}
                    country={matchedCountry}
                    activeTab={activeDetailTab}
                    subVisaId={activeSubVisaId}
                    theme={theme}
                    onBackHome={handleBackHome}
                    onSelectTab={handleSelectDetailTab}
                    onSelectSubVisa={handleSelectSubVisa}
                    isItemChecked={isItemChecked}
                    getCheckedCount={getCheckedCount}
                    onToggleItem={toggleItem}
                    onResetChecklist={resetSubVisaChecklist}
                    onNotify={showToast}
                  />
                ) : null
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      <Footer />
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}

export default App;
