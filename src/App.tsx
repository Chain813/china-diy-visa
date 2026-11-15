import {
  Component,
  createRef,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ErrorInfo,
  type ReactNode,
  type RefObject,
} from 'react';
import {
  matchPath,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Toast } from './components/layout/Toast';
import type { WorldMapViewHandle } from './components/map/WorldMapView';
import {
  COUNTRY_DIRECTORY,
  filterCountrySummaries,
  findSummaryByCode,
  isPathwayCategoryId,
  loadCountryByCode,
} from './data';
import { PATHWAY_CATEGORIES } from './data/categories';
import { useChecklist } from './hooks/useChecklist';
import { useTheme } from './hooks/useTheme';
import type {
  CategoryId,
  CountryData,
  CountrySummary,
  PathwayCategoryId,
} from './types/visa';

const BASE_TITLE = '中国公民 DIY 出国签证指南';
const EXIT_TRANSITION_MS = 200;
const TOAST_DURATION_MS = 2400;
const SEARCH_RESET_TOAST = '已清空搜索过滤，恢复全球视图';

const createLazyCountryDetailView = () =>
  lazy(() => import('./components/country/CountryDetailView'));

const createLazyWorldMapView = () =>
  lazy(() =>
    import('./components/map/WorldMapView').then((mod) => ({ default: mod.WorldMapView }))
  );

// Module-level lazy singletons prevent re-suspending across mounts/transitions when healthy;
// RouteErrorBoundary retries bump lazyRetryToken to allocate fresh retryable wrappers.
const DEFAULT_LAZY_COUNTRY_DETAIL_VIEW = createLazyCountryDetailView();
const DEFAULT_LAZY_WORLD_MAP_VIEW = createLazyWorldMapView();

const MAP_SUSPENSE_FALLBACK = (
  <section
    id="map-stage"
    role="status"
    aria-live="polite"
    aria-label="正在加载世界签证交互地图"
    style={{ cursor: 'default' }}
    className="relative flex-1 flex w-full overflow-hidden"
  >
    <div className="atlas-dot-grid relative flex-1 flex items-center justify-center px-6 text-center">
      <span className="px-3.5 py-2 rounded-xl bg-[var(--bg-glass)] backdrop-blur-md border border-[var(--border)] text-xs text-[var(--text-sub)] shadow-sm">
        正在加载世界地图工作台...
      </span>
    </div>
  </section>
);

interface DetailLoadState {
  code: string | null;
  country: CountryData | null;
  error: string | null;
}

const INITIAL_DETAIL_STATE: DetailLoadState = {
  code: null,
  country: null,
  error: null,
};

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

function getDefaultDirectoryOpen(): boolean {
  return typeof window !== 'undefined' ? window.innerWidth >= 1024 : true;
}

interface RouteErrorBoundaryProps {
  resetKey: string;
  onRetry: () => void;
  onBackHome: () => void;
  onErrorChange?: (hasError: boolean) => void;
  children: ReactNode;
}

interface RouteErrorBoundaryState {
  hasError: boolean;
}

/** Isolates route-level chunk loading or rendering failures so Header and Footer remain interactive. */
class RouteErrorBoundary extends Component<RouteErrorBoundaryProps, RouteErrorBoundaryState> {
  private readonly alertRef = createRef<HTMLElement>();

  state: RouteErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): RouteErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo): void {
    this.props.onErrorChange?.(true);
  }

  componentDidMount(): void {
    if (this.state.hasError) {
      this.alertRef.current?.focus();
    }
  }

  componentDidUpdate(
    prevProps: RouteErrorBoundaryProps,
    prevState: RouteErrorBoundaryState
  ): void {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
      this.props.onErrorChange?.(false);
      return;
    }

    if (this.state.hasError && !prevState.hasError) {
      this.alertRef.current?.focus();
    }
  }

  private handleRetryClick = (): void => {
    this.setState({ hasError: false }, () => {
      this.props.onErrorChange?.(false);
      this.props.onRetry();
    });
  };

  private handleBackHomeClick = (): void => {
    this.setState({ hasError: false }, () => {
      this.props.onErrorChange?.(false);
      this.props.onBackHome();
    });
  };

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <section
        id="route-error-boundary"
        ref={this.alertRef}
        role="alert"
        tabIndex={-1}
        aria-label="页面加载异常"
        className="w-full max-w-[1440px] mx-auto px-3.5 sm:px-8 py-8 focus:outline-none"
      >
        <div className="hairline-card rounded-lg p-6 sm:p-8 border-l-4 border-l-[var(--accent-red)]">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="w-1.5 h-6 bg-[var(--accent-red)] shrink-0" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] tracking-tight">
              页面加载或渲染异常
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-sub)] mb-5">
            部分视图资源或分片未能正常加载，请点击重试或返回世界地图首页。
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              id="route-error-retry-btn"
              type="button"
              onClick={this.handleRetryClick}
              className="copy-btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]"
            >
              重试加载
            </button>
            <button
              id="route-error-home-btn"
              type="button"
              onClick={this.handleBackHomeClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--teal)] hover:text-[var(--teal)] text-[var(--text-main)] rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]"
            >
              ← 返回世界地图
            </button>
          </div>
        </div>
      </section>
    );
  }
}

interface DetailFallbackShellProps {
  id: string;
  role: 'status' | 'alert';
  ariaLabel: string;
  summary: CountrySummary;
  onBackHome: () => void;
  sectionRef?: RefObject<HTMLElement | null>;
  tabIndex?: number;
  children: ReactNode;
}

function DetailFallbackShell({
  id,
  role,
  ariaLabel,
  summary,
  onBackHome,
  sectionRef,
  tabIndex,
  children,
}: DetailFallbackShellProps) {
  return (
    <section
      id={id}
      ref={sectionRef}
      role={role}
      tabIndex={tabIndex}
      aria-live={role === 'status' ? 'polite' : undefined}
      aria-label={ariaLabel}
      className="w-full max-w-[1440px] mx-auto px-3.5 sm:px-8 py-6 focus:outline-none"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <button
          id="back-home-btn"
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--teal)] hover:text-[var(--teal)] text-[var(--text-main)] rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]"
        >
          ← 返回世界地图
        </button>
        <span className="font-mono-num text-[11px] px-2.5 py-1 bg-[var(--bg-muted)] border border-[var(--border)] text-[var(--text-sub)] rounded-md">
          {summary.region}
        </span>
      </div>

      <div
        className={`hairline-card rounded-lg p-6 sm:p-8${
          role === 'alert' ? ' border-l-4 border-l-[var(--accent-red)]' : ''
        }`}
      >
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span className="w-1.5 h-6 bg-[var(--accent-red)] shrink-0" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] tracking-tight">
            {summary.nameZh}
          </h2>
          <span className="text-sm sm:text-base text-[var(--text-sub)] font-mono-num">
            {`${summary.nameEn} (${summary.code})`}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}

/** Root application coordinating routing, flat 50m world map, lazy country chunk loading, theme, and checklist state. */
export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { theme, toggleTheme } = useTheme();
  const { isItemChecked, toggleItem, resetSubVisaChecklist, getCheckedCount } = useChecklist();

  const [searchQuery, setSearchQuery] = useState('');
  const [isDirectoryOpen, setIsDirectoryOpen] = useState<boolean>(getDefaultDirectoryOpen);
  const [isViewExiting, setIsViewExiting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [loadedState, setLoadedState] = useState<DetailLoadState>(INITIAL_DETAIL_STATE);
  const [reloadToken, setReloadToken] = useState(0);
  const [lazyRetryToken, setLazyRetryToken] = useState(0);

  const LazyWorldMapView = useMemo(
    () => (lazyRetryToken === 0 ? DEFAULT_LAZY_WORLD_MAP_VIEW : createLazyWorldMapView()),
    [lazyRetryToken]
  );
  const LazyCountryDetailView = useMemo(
    () =>
      lazyRetryToken === 0 ? DEFAULT_LAZY_COUNTRY_DETAIL_VIEW : createLazyCountryDetailView(),
    [lazyRetryToken]
  );

  const mapRef = useRef<WorldMapViewHandle | null>(null);
  const detailErrorRef = useRef<HTMLElement | null>(null);
  const hasRouteErrorRef = useRef(false);
  const isUnmountedRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const transitionSeqRef = useRef(0);
  const exitTimerRef = useRef<number | null>(null);
  const pendingExitResolveRef = useRef<((completed: boolean) => void) | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const rememberedHomeCategoryRef = useRef<CategoryId>('all');
  const searchQueryRef = useRef(searchQuery);
  searchQueryRef.current = searchQuery;

  const isHomeRoute = location.pathname === '/';
  const countryMatch = matchPath('/country/:code', location.pathname);
  const routeCode = countryMatch?.params.code ?? null;
  const matchedSummary = routeCode ? findSummaryByCode(routeCode) : undefined;
  const matchedSummaryCode = matchedSummary?.code ?? null;
  const invalidRouteCode = routeCode !== null && !matchedSummary ? routeCode : null;

  const catParam = searchParams.get('cat');
  const homeCategory: CategoryId =
    catParam && isPathwayCategoryId(catParam) ? catParam : 'all';

  const tabParam = searchParams.get('tab');
  const activeDetailTab: PathwayCategoryId =
    tabParam && isPathwayCategoryId(tabParam) ? tabParam : 'tourism';
  const activeSubVisaId = searchParams.get('sub') || null;

  const activeHeaderCategory: CategoryId = matchedSummary ? activeDetailTab : homeCategory;

  const filteredCountries = useMemo<CountrySummary[]>(
    () =>
      homeCategory === 'all' && !searchQuery.trim()
        ? COUNTRY_DIRECTORY
        : filterCountrySummaries(homeCategory, searchQuery),
    [homeCategory, searchQuery]
  );

  const searchResults = useMemo<CountrySummary[]>(() => {
    const matches = filterCountrySummaries('all', searchQuery);
    if (activeHeaderCategory === 'all') {
      return matches;
    }
    return [...matches].sort((a, b) => {
      const aMatch = a.diyCategories.includes(activeHeaderCategory) ? 0 : 1;
      const bMatch = b.diyCategories.includes(activeHeaderCategory) ? 0 : 1;
      return aMatch - bMatch;
    });
  }, [activeHeaderCategory, searchQuery]);

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

  // Lazily load full region country data when visiting /country/:code.
  useEffect(() => {
    if (!matchedSummaryCode) {
      setLoadedState((prev) =>
        prev.code === null && prev.country === null && prev.error === null
          ? prev
          : INITIAL_DETAIL_STATE
      );
      return;
    }

    let cancelled = false;
    setLoadedState((prev) =>
      prev.code === null && prev.country === null && prev.error === null
        ? prev
        : INITIAL_DETAIL_STATE
    );

    loadCountryByCode(matchedSummaryCode)
      .then((country) => {
        if (cancelled) return;
        if (!country) {
          setLoadedState({
            code: matchedSummaryCode,
            country: null,
            error: '未能加载该国家或地区的签证详情数据，请稍后重试。',
          });
          return;
        }
        setLoadedState({
          code: matchedSummaryCode,
          country,
          error: null,
        });
      })
      .catch(() => {
        if (cancelled) return;
        setLoadedState({
          code: matchedSummaryCode,
          country: null,
          error: '签证详情数据加载失败，请检查网络连接后重试。',
        });
      });

    return () => {
      cancelled = true;
    };
  }, [matchedSummaryCode, reloadToken]);

  useEffect(() => {
    if (matchedSummary) {
      document.title = `${matchedSummary.nameZh} - ${getPathwayLabel(activeDetailTab)}签证 DIY 指南 | ${BASE_TITLE}`;
      return;
    }
    if (isHomeRoute && homeCategory !== 'all') {
      document.title = `${getPathwayLabel(homeCategory)}签证通道 | ${BASE_TITLE}`;
      return;
    }
    document.title = BASE_TITLE;
  }, [activeDetailTab, homeCategory, isHomeRoute, matchedSummary]);

  const clearSearchOnReturnToMap = useCallback(() => {
    const currentQuery = searchQueryRef.current;
    if (currentQuery.trim().length > 0) {
      setSearchQuery('');
      showToast(SEARCH_RESET_TOAST);
    } else if (currentQuery.length > 0) {
      setSearchQuery('');
    }
  }, [showToast]);

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

  const runExclusiveTransition = useCallback(
    async (task: (isStillActive: () => boolean) => Promise<void>) => {
      if (isTransitioningRef.current) return;

      const seq = ++transitionSeqRef.current;
      isTransitioningRef.current = true;

      const isStillActive = () =>
        !isUnmountedRef.current && transitionSeqRef.current === seq;

      try {
        await task(isStillActive);
      } finally {
        if (isStillActive()) {
          isTransitioningRef.current = false;
          setIsViewExiting(false);
        }
      }
    },
    []
  );

  const exitToHome = useCallback(
    async (targetHomeUrl: string, options?: { clearSearch?: boolean }) => {
      await runExclusiveTransition(async (isStillActive) => {
        const shouldProceed = await waitForExitAnimation();
        if (!shouldProceed || !isStillActive()) {
          return;
        }
        isTransitioningRef.current = false;
        setIsViewExiting(false);
        if (options?.clearSearch) {
          clearSearchOnReturnToMap();
        }
        navigate(targetHomeUrl);
        scrollToTop();
      });
    },
    [clearSearchOnReturnToMap, navigate, runExclusiveTransition, waitForExitAnimation]
  );

  const handleSelectCountry = useCallback(
    async (summary: CountrySummary) => {
      await runExclusiveTransition(async (isStillActive) => {
        if (isHomeRoute) {
          try {
            await mapRef.current?.flyToCountry(summary);
          } catch {
            return;
          }
          if (!isStillActive()) {
            return;
          }
        }

        const shouldProceed = await waitForExitAnimation();
        if (!shouldProceed || !isStillActive()) {
          return;
        }

        const targetTab: PathwayCategoryId = isHomeRoute
          ? homeCategory !== 'all'
            ? homeCategory
            : 'tourism'
          : activeDetailTab;
        const targetUrl = buildCountryUrl(summary.code, targetTab);

        isTransitioningRef.current = false;
        setIsViewExiting(false);
        navigate(targetUrl);
        scrollToTop();
      });
    },
    [
      activeDetailTab,
      homeCategory,
      isHomeRoute,
      navigate,
      runExclusiveTransition,
      waitForExitAnimation,
    ]
  );

  const handleBackHome = useCallback(() => {
    void exitToHome(buildHomeUrl(rememberedHomeCategoryRef.current), { clearSearch: true });
  }, [exitToHome]);

  const handleGoHome = useCallback(() => {
    if (isTransitioningRef.current) return;
    rememberedHomeCategoryRef.current = 'all';

    if (hasRouteErrorRef.current) {
      setLazyRetryToken((prev) => prev + 1);
    }

    if (!isHomeRoute) {
      void exitToHome('/', { clearSearch: true });
      return;
    }

    clearSearchOnReturnToMap();
    navigate('/');
  }, [clearSearchOnReturnToMap, exitToHome, isHomeRoute, navigate]);

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

      if (cat === 'all') {
        handleGoHome();
        return;
      }

      if (isHomeRoute) {
        rememberedHomeCategoryRef.current = cat;
        navigate(buildHomeUrl(cat));
        return;
      }

      handleSelectDetailTab(cat);
    },
    [handleGoHome, handleSelectDetailTab, isHomeRoute, navigate]
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

  const handleToggleDirectory = useCallback(() => {
    setIsDirectoryOpen((prev) => !prev);
  }, []);

  const handleRetryLoadCountry = useCallback(() => {
    setLoadedState(INITIAL_DETAIL_STATE);
    setReloadToken((prev) => prev + 1);
  }, []);

  const handleRetryRouteBoundary = useCallback(() => {
    setLazyRetryToken((prev) => prev + 1);
    setLoadedState(INITIAL_DETAIL_STATE);
    setReloadToken((prev) => prev + 1);
  }, []);

  const handleBoundaryBackHome = useCallback(() => {
    setLazyRetryToken((prev) => prev + 1);
    rememberedHomeCategoryRef.current = 'all';
    clearSearchOnReturnToMap();
    navigate('/');
    scrollToTop();
  }, [clearSearchOnReturnToMap, navigate]);

  const handleBoundaryErrorChange = useCallback((hasError: boolean) => {
    hasRouteErrorRef.current = hasError;
  }, []);

  const loadedCountry =
    matchedSummary &&
    loadedState.code === matchedSummary.code &&
    loadedState.country !== null
      ? loadedState.country
      : null;

  const detailError =
    matchedSummary &&
    loadedState.code === matchedSummary.code &&
    loadedState.error !== null
      ? loadedState.error
      : null;

  useEffect(() => {
    if (detailError) {
      detailErrorRef.current?.focus();
    }
  }, [detailError, matchedSummaryCode]);

  let detailRouteElement: ReactNode = null;
  if (matchedSummary) {
    const loadingCard = (
      <DetailFallbackShell
        key={`loading-${matchedSummary.code}`}
        id="country-detail-loading"
        role="status"
        ariaLabel={`正在加载${matchedSummary.nameZh}签证详情`}
        summary={matchedSummary}
        onBackHome={handleBackHome}
      >
        <p className="text-sm text-[var(--text-sub)]">
          {`正在按需加载 ${matchedSummary.nameZh} 签证全流程、官链与材料清单...`}
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4" aria-hidden="true">
          <div className="muted-panel rounded-md p-4 h-24 animate-pulse" />
          <div className="muted-panel rounded-md p-4 h-24 animate-pulse" />
          <div className="muted-panel rounded-md p-4 h-24 animate-pulse" />
        </div>
      </DetailFallbackShell>
    );

    if (loadedCountry) {
      detailRouteElement = (
        <Suspense fallback={loadingCard}>
          <LazyCountryDetailView
            key={loadedCountry.id}
            country={loadedCountry}
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
        </Suspense>
      );
    } else if (detailError) {
      detailRouteElement = (
        <DetailFallbackShell
          key={`error-${matchedSummary.code}`}
          id="country-detail-error"
          sectionRef={detailErrorRef}
          tabIndex={-1}
          role="alert"
          ariaLabel={`${matchedSummary.nameZh}签证详情加载失败`}
          summary={matchedSummary}
          onBackHome={handleBackHome}
        >
          <p className="text-sm font-medium text-[var(--text-main)] mb-1">
            详情数据加载失败
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-sub)] mb-5">
            {detailError}
          </p>
          <button
            id="retry-country-load-btn"
            type="button"
            onClick={handleRetryLoadCountry}
            className="copy-btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]"
          >
            重试加载
          </button>
        </DetailFallbackShell>
      );
    } else {
      detailRouteElement = loadingCard;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-paper)] text-[var(--text-main)]">
      <Header
        activeCategory={activeHeaderCategory}
        onSelectCategory={handleSelectHeaderCategory}
        onGoHome={handleGoHome}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
        searchResults={searchResults}
        onSelectSearchResult={handleSelectCountry}
        isDirectoryOpen={isHomeRoute ? isDirectoryOpen : undefined}
        onToggleDirectory={isHomeRoute ? handleToggleDirectory : undefined}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 flex flex-col">
        <div
          className={`w-full flex-1 flex flex-col${
            isViewExiting ? ' animate-view-exit pointer-events-none' : ''
          }`}
        >
          <RouteErrorBoundary
            resetKey={`${location.pathname}${location.search}:${lazyRetryToken}`}
            onRetry={handleRetryRouteBoundary}
            onBackHome={handleBoundaryBackHome}
            onErrorChange={handleBoundaryErrorChange}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={MAP_SUSPENSE_FALLBACK}>
                    <LazyWorldMapView
                      ref={mapRef}
                      filteredCountries={filteredCountries}
                      activeCategory={homeCategory}
                      searchQuery={searchQuery}
                      theme={theme}
                      isDirectoryOpen={isDirectoryOpen}
                      onToggleDirectory={handleToggleDirectory}
                      onSelectCountry={handleSelectCountry}
                    />
                  </Suspense>
                }
              />
              <Route path="/country/:code" element={detailRouteElement} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </RouteErrorBoundary>
        </div>
      </main>

      <Footer />
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}

export default App;
