import type { CategoryId, CountrySummary, PathwayCategoryId } from '../../types/visa';

export const MAX_RESULTS = 12;

export interface SearchDropdownProps {
  query: string;
  results: CountrySummary[];
  activeCategory: CategoryId;
  isOpen: boolean;
  activeIndex?: number;
  onSelect: (country: CountrySummary) => void;
}

/** Renders live search matches against lightweight country summaries with DIY tier indicators. */
export function SearchDropdown({
  query,
  results,
  activeCategory,
  isOpen,
  activeIndex = -1,
  onSelect,
}: SearchDropdownProps) {
  const trimmedQuery = query.trim();
  if (!isOpen || !trimmedQuery) {
    return null;
  }

  const previewCat: PathwayCategoryId =
    activeCategory === 'all' ? 'tourism' : activeCategory;
  const visibleResults = results.slice(0, MAX_RESULTS);

  return (
    <div
      id="search-dropdown"
      role="listbox"
      aria-label="搜索结果"
      onMouseDown={(event) => event.preventDefault()}
      className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-full sm:w-96 bg-[var(--bg-card)] border border-[var(--border)] shadow-xl z-50 max-h-80 overflow-y-auto rounded-lg"
    >
      {results.length === 0 ? (
        <div className="px-4 py-5 text-center text-xs text-[var(--text-sub)]">
          未找到匹配“{trimmedQuery}”的国家或签证关键词
        </div>
      ) : (
        <>
          <div
            role="presentation"
            className="px-3.5 py-2 border-b border-[var(--border-soft)] bg-[var(--bg-soft)] flex items-center justify-between text-[11px] text-[var(--text-sub)]"
          >
            <span>搜索结果 ({results.length} 国)</span>
            <span>点击或回车直达</span>
          </div>
          <div>
            {visibleResults.map((country, index) => {
              const previewTitle = country.previewTitles[previewCat] ?? '';
              const metaText = [country.badge, previewTitle]
                .filter(Boolean)
                .join(' · ');
              const isDiyMatch =
                activeCategory === 'all'
                  ? country.diyCategories.length > 0
                  : country.diyCategories.includes(activeCategory);
              const isSelected = index === activeIndex;

              return (
                <button
                  key={country.id}
                  id={`search-option-${country.code}`}
                  type="button"
                  role="option"
                  tabIndex={-1}
                  aria-selected={isSelected}
                  data-search-country={country.id}
                  data-diy-match={isDiyMatch ? 'true' : 'false'}
                  onClick={() => onSelect(country)}
                  className={`w-full text-left px-3.5 py-2.5 border-b border-[var(--border-soft)] last:border-b-0 transition-colors flex items-center justify-between gap-2 group ${
                    isSelected
                      ? 'bg-[var(--bg-muted)] border-l-2 border-l-[var(--teal)]'
                      : 'hover:bg-[var(--bg-muted)]'
                  }`}
                >
                  <span className="min-w-0 flex-1 block">
                    <span className="flex items-center gap-2 flex-wrap">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: country.tierColor }}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-bold text-[var(--text-main)]">
                        {country.nameZh}
                      </span>
                      <span className="text-[11px] text-[var(--text-sub)] uppercase tracking-wide font-mono-num">
                        {country.nameEn}
                      </span>
                      {activeCategory !== 'all' ? (
                        <span
                          className={`text-[10px] font-medium px-1.5 py-0.5 rounded border shrink-0 ${
                            isDiyMatch
                              ? 'border-[var(--teal-text)] text-[var(--teal-text)] bg-[var(--bg-soft)]'
                              : 'border-[var(--border)] text-[var(--text-sub)] bg-[var(--bg-muted)]'
                          }`}
                        >
                          {isDiyMatch ? 'DIY 匹配' : '原则提示'}
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono-num px-1.5 py-0.5 rounded border border-[var(--border-soft)] text-[var(--text-sub)] bg-[var(--bg-soft)] shrink-0">
                          {country.diyCategories.length > 0
                            ? `${country.diyCategories.length}类可DIY`
                            : '仅参考'}
                        </span>
                      )}
                    </span>
                    {metaText && (
                      <span className="block text-[11px] text-[var(--text-sub)] truncate mt-0.5 pl-4">
                        {metaText}
                      </span>
                    )}
                  </span>
                  <span
                    className={`text-xs font-medium shrink-0 transition-colors ${
                      isSelected
                        ? 'text-[var(--text-main)]'
                        : 'text-[var(--teal-text)] group-hover:text-[var(--text-main)]'
                    }`}
                  >
                    进入 →
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchDropdown;
