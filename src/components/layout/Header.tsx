import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import { CATEGORIES } from '../../data/categories';
import type { CategoryId, CountrySummary, ThemeMode } from '../../types/visa';
import { MAX_RESULTS, SearchDropdown } from './SearchDropdown';

export interface HeaderProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onClearSearch: () => void;
  searchResults: CountrySummary[];
  onSelectSearchResult: (country: CountrySummary) => void;
  isDirectoryOpen?: boolean;
  onToggleDirectory?: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

interface CategoryPillsProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  theme: ThemeMode;
  compact?: boolean;
}

function CategoryPills({
  activeCategory,
  onSelectCategory,
  theme,
  compact = false,
}: CategoryPillsProps) {
  return (
    <>
      {CATEGORIES.map((category) => {
        const isActive = category.id === activeCategory;
        const dotColor =
          theme === 'dark' ? (category.darkColor ?? '#ECEFF4') : category.color;

        return (
          <button
            key={category.id}
            type="button"
            data-category={category.id}
            aria-pressed={isActive}
            onClick={() => onSelectCategory(category.id)}
            className={`cat-pill${isActive ? ' active' : ''} ${
              compact ? 'px-2.5 py-1.5' : 'px-3 py-1.5'
            } text-xs rounded-full font-medium flex items-center gap-1.5 whitespace-nowrap shrink-0`}
          >
            <span
              className="cat-dot w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: dotColor }}
              aria-hidden="true"
            />
            <span>{category.label}</span>
          </button>
        );
      })}
    </>
  );
}

/** Persistent editorial top navigation bar with category filters, accessible search combobox, directory toggle, and theme switcher. */
export function Header({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
  searchResults,
  onSelectSearchResult,
  isDirectoryOpen,
  onToggleDirectory,
  theme,
  onToggleTheme,
}: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeResultIndex, setActiveResultIndex] = useState(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suppressNextFocusOpenRef = useRef(false);

  const trimmedQuery = searchQuery.trim();
  const isOpen = isDropdownOpen && trimmedQuery.length > 0;
  const visibleResults = searchResults.slice(0, MAX_RESULTS);
  const safeActiveIndex =
    isOpen && activeResultIndex >= 0 && activeResultIndex < visibleResults.length
      ? activeResultIndex
      : -1;
  const activeOption =
    safeActiveIndex >= 0 ? visibleResults[safeActiveIndex] : undefined;
  const activeDescendantId = activeOption
    ? `search-option-${activeOption.code}`
    : undefined;
  const directoryExpanded = Boolean(isDirectoryOpen);

  useEffect(() => {
    setActiveResultIndex(-1);
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    const handleOutsideMouseDown = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        event.target instanceof Node &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setActiveResultIndex(-1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setActiveResultIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleOutsideMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextQuery = event.target.value;
    onSearchChange(nextQuery);
    setActiveResultIndex(-1);
    setIsDropdownOpen(nextQuery.trim().length > 0);
  };

  const handleInputFocus = () => {
    if (suppressNextFocusOpenRef.current) {
      return;
    }
    if (trimmedQuery.length > 0) {
      setIsDropdownOpen(true);
    }
  };

  const handleContainerBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextFocusTarget = event.relatedTarget as Node | null;
    if (!searchContainerRef.current?.contains(nextFocusTarget)) {
      setIsDropdownOpen(false);
      setActiveResultIndex(-1);
    }
  };

  const handleClear = () => {
    suppressNextFocusOpenRef.current = true;
    try {
      setIsDropdownOpen(false);
      setActiveResultIndex(-1);
      onClearSearch();
      searchInputRef.current?.focus();
    } finally {
      suppressNextFocusOpenRef.current = false;
    }
  };

  const handleSelectCountry = (country: CountrySummary) => {
    setIsDropdownOpen(false);
    setActiveResultIndex(-1);
    onSelectSearchResult(country);
  };

  const handleInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (!trimmedQuery) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        setIsDropdownOpen(true);
        setActiveResultIndex(visibleResults.length > 0 ? 0 : -1);
        return;
      }
      if (visibleResults.length > 0) {
        setActiveResultIndex((prev) => (prev + 1) % visibleResults.length);
      }
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!isOpen) {
        setIsDropdownOpen(true);
        setActiveResultIndex(
          visibleResults.length > 0 ? visibleResults.length - 1 : -1
        );
        return;
      }
      if (visibleResults.length > 0) {
        setActiveResultIndex((prev) =>
          prev <= 0 ? visibleResults.length - 1 : prev - 1
        );
      }
      return;
    }

    if (event.key === 'Enter' && isOpen && visibleResults.length > 0) {
      event.preventDefault();
      const targetIndex = safeActiveIndex >= 0 ? safeActiveIndex : 0;
      const targetCountry = visibleResults[targetIndex];
      if (targetCountry) {
        handleSelectCountry(targetCountry);
      }
      return;
    }

    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      setIsDropdownOpen(false);
      setActiveResultIndex(-1);
    }
  };

  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg-header)] backdrop-blur-sm relative z-40">
      <div className="max-w-[1440px] mx-auto px-3.5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2.5 shrink-0">
          <span
            className="w-1 h-5 sm:h-6 bg-[var(--accent-red)] shrink-0"
            aria-hidden="true"
          />
          <h1 className="text-base sm:text-lg font-bold tracking-tight text-[var(--text-main)] leading-tight">
            中国公民 DIY 出国签证指南
          </h1>
        </div>

        <nav
          aria-label="签证五大类导航"
          className="hidden xl:flex items-center"
        >
          <div id="category-nav" className="flex items-center gap-1.5">
            <CategoryPills
              activeCategory={activeCategory}
              onSelectCategory={onSelectCategory}
              theme={theme}
            />
          </div>
        </nav>

        <div className="flex items-center gap-2 xl:order-3 shrink-0">
          {typeof onToggleDirectory === 'function' && (
            <button
              id="toggle-directory-btn"
              type="button"
              aria-controls="country-directory-panel"
              aria-expanded={directoryExpanded}
              aria-pressed={directoryExpanded}
              onClick={onToggleDirectory}
              title={directoryExpanded ? '收起国家目录' : '展开国家目录'}
              className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium border rounded transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                directoryExpanded
                  ? 'border-[var(--teal)] bg-[var(--bg-muted)] text-[var(--text-main)]'
                  : 'border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--teal)] text-[var(--text-main)]'
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="w-3.5 h-3.5 stroke-current fill-none shrink-0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 4h11M2.5 8h11M2.5 12h7" />
              </svg>
              <span>国家目录</span>
            </button>
          )}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={onToggleTheme}
            title="切换日间/黑夜模式"
            className="px-2.5 sm:px-3 py-1.5 text-xs font-medium border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--teal)] text-[var(--text-main)] rounded transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span>{theme === 'dark' ? '日间' : '黑夜'}</span>
          </button>
        </div>

        <div
          ref={searchContainerRef}
          onBlur={handleContainerBlur}
          className="w-full xl:w-64 xl:order-2 relative"
        >
          <div className="relative">
            <input
              ref={searchInputRef}
              id="global-search"
              type="text"
              role="combobox"
              aria-expanded={isOpen}
              aria-controls={isOpen ? 'search-dropdown' : undefined}
              aria-activedescendant={activeDescendantId}
              aria-autocomplete="list"
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onKeyDown={handleInputKeyDown}
              placeholder="搜索国家 / 免签 / 蓝卡 / WHV..."
              autoComplete="off"
              aria-label="搜索国家或签证关键词"
              className="w-full pl-3 pr-8 py-1.5 text-xs bg-[var(--bg-card)] border border-[var(--border)] rounded focus:outline-none focus:border-[var(--teal)] focus-visible:ring-2 focus-visible:ring-[var(--teal)] text-[var(--text-main)] placeholder:text-[var(--text-placeholder)]"
            />
            <button
              id="clear-search-btn"
              type="button"
              aria-label="清空搜索"
              onClick={handleClear}
              hidden={!searchQuery}
              className={`${
                searchQuery ? 'flex' : 'hidden'
              } items-center justify-center absolute right-1.5 top-1/2 -translate-y-1/2 w-5 h-5 text-xs text-[var(--text-sub)] hover:text-[var(--text-main)] rounded`}
            >
              ✕
            </button>
          </div>

          <SearchDropdown
            query={searchQuery}
            results={searchResults}
            activeCategory={activeCategory}
            isOpen={isOpen}
            activeIndex={safeActiveIndex}
            onSelect={handleSelectCountry}
          />
        </div>
      </div>

      <nav
        aria-label="签证五大类导航"
        className="xl:hidden border-t border-[var(--border-soft)] px-3.5 sm:px-8 py-2"
      >
        <div
          id="category-nav-mobile"
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar"
        >
          <CategoryPills
            activeCategory={activeCategory}
            onSelectCategory={onSelectCategory}
            theme={theme}
            compact
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
