import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import { CATEGORIES } from '../../data/categories';
import type { CategoryId, CountryData, ThemeMode } from '../../types/visa';
import { SearchDropdown } from './SearchDropdown';

export interface HeaderProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onClearSearch: () => void;
  searchResults: CountryData[];
  onSelectCountry: (country: CountryData) => void;
  isSpinning: boolean;
  onToggleSpin: () => void;
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
              compact ? 'px-2 py-1.5 justify-center' : 'px-3 py-1.5'
            } text-xs rounded-full font-medium flex items-center gap-1.5 whitespace-nowrap`}
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

export function Header({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
  searchResults,
  onSelectCountry,
  isSpinning,
  onToggleSpin,
  theme,
  onToggleTheme,
}: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const isOpen = isDropdownOpen && searchQuery.trim().length > 0;

  useEffect(() => {
    const handleOutsideMouseDown = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        event.target instanceof Node &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
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
    setIsDropdownOpen(nextQuery.trim().length > 0);
  };

  const handleInputFocus = () => {
    if (searchQuery.trim().length > 0) {
      setIsDropdownOpen(true);
    }
  };

  const handleClear = () => {
    setIsDropdownOpen(false);
    onClearSearch();
  };

  const handleSelectCountry = (country: CountryData) => {
    setIsDropdownOpen(false);
    onSelectCountry(country);
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
          <button
            id="toggle-spin-btn"
            type="button"
            onClick={onToggleSpin}
            title="暂停或继续地球自转"
            className="px-2.5 sm:px-3 py-1.5 text-xs font-medium border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--teal)] text-[var(--text-main)] rounded transition-colors whitespace-nowrap"
          >
            {isSpinning ? '暂停自转' : '继续自转'}
          </button>
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={onToggleTheme}
            title="切换日间/黑夜模式"
            className="px-2.5 sm:px-3 py-1.5 text-xs font-medium border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--teal)] text-[var(--text-main)] rounded transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span>{theme === 'dark' ? '日间' : '黑夜'}</span>
          </button>
        </div>

        <div ref={searchContainerRef} className="w-full xl:w-64 xl:order-2 relative">
          <div className="relative">
            <input
              id="global-search"
              type="text"
              role="combobox"
              aria-expanded={isOpen}
              aria-controls="search-dropdown"
              aria-autocomplete="list"
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="搜索国家 / 免签 / 蓝卡 / WHV..."
              autoComplete="off"
              aria-label="搜索国家或签证关键词"
              className="w-full pl-3 pr-8 py-1.5 text-xs bg-[var(--bg-card)] border border-[var(--border)] rounded focus:outline-none focus:border-[var(--teal)] text-[var(--text-main)] placeholder:text-[var(--text-placeholder)]"
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
            onSelectCountry={handleSelectCountry}
          />
        </div>
      </div>

      <nav
        aria-label="签证五大类导航"
        className="xl:hidden border-t border-[var(--border-soft)] px-3.5 sm:px-8 py-2"
      >
        <div
          id="category-nav-mobile"
          className="grid grid-cols-3 sm:grid-cols-6 gap-1.5"
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
