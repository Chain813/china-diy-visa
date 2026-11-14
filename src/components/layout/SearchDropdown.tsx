import type { CategoryId, CountryData, PathwayCategoryId } from '../../types/visa';

export interface SearchDropdownProps {
  query: string;
  results: CountryData[];
  activeCategory: CategoryId;
  isOpen: boolean;
  onSelectCountry: (country: CountryData) => void;
}

const MAX_RESULTS = 12;

export function SearchDropdown({
  query,
  results,
  activeCategory,
  isOpen,
  onSelectCountry,
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
            <span>点击直达国家页面</span>
          </div>
          <div>
            {visibleResults.map((country) => {
              const previewTitle = country.pathways[previewCat]?.[0]?.title ?? '';
              const metaText = [country.badge, previewTitle]
                .filter(Boolean)
                .join(' · ');

              return (
                <button
                  key={country.id}
                  type="button"
                  role="option"
                  aria-selected={false}
                  data-search-country={country.id}
                  onClick={() => onSelectCountry(country)}
                  className="w-full text-left px-3.5 py-2.5 border-b border-[var(--border-soft)] last:border-b-0 hover:bg-[var(--bg-muted)] transition-colors flex items-center justify-between gap-2 group"
                >
                  <span className="min-w-0 flex-1 block">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--text-main)]">
                        {country.nameZh}
                      </span>
                      <span className="text-[11px] text-[var(--text-sub)] uppercase tracking-wide font-mono-num">
                        {country.nameEn}
                      </span>
                    </span>
                    <span className="block text-[11px] text-[var(--text-sub)] truncate mt-0.5">
                      {metaText}
                    </span>
                  </span>
                  <span className="text-xs font-medium text-[var(--teal)] group-hover:text-[var(--accent-red)] shrink-0">
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
