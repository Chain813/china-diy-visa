import { useMemo, useState, type FC } from 'react';
import { CATEGORIES } from '../../data/categories';
import { COUNTRY_DIRECTORY } from '../../data';
import type { CategoryId, CountrySummary, RegionId } from '../../types/visa';

export interface CountryDirectoryProps {
  countries: CountrySummary[];
  activeCategory: CategoryId;
  isOpen: boolean;
  onClose: () => void;
  onSelectCountry: (country: CountrySummary) => void;
}

export const DIRECTORY_REGIONS: ReadonlyArray<{
  id: RegionId;
  label: string;
  en: string;
}> = [
  { id: 'asia-pacific', label: '亚太与大洋洲', en: 'ASIA-PACIFIC' },
  { id: 'europe', label: '欧洲', en: 'EUROPE' },
  { id: 'americas', label: '美洲', en: 'AMERICAS' },
  { id: 'middle-east-africa', label: '中东与非洲', en: 'MEA' },
];

const INITIAL_EXPANDED: Record<RegionId, boolean> = {
  'asia-pacific': true,
  europe: true,
  americas: true,
  'middle-east-africa': true,
};

/** Collapsible Atlas Bento country directory grouped into 4 global regions. */
export const CountryDirectory: FC<CountryDirectoryProps> = ({
  countries,
  activeCategory,
  isOpen,
  onClose,
  onSelectCountry,
}) => {
  const [expandedRegions, setExpandedRegions] =
    useState<Record<RegionId, boolean>>(INITIAL_EXPANDED);

  const groupedCountries = useMemo(() => {
    const groups: Record<RegionId, CountrySummary[]> = {
      'asia-pacific': [],
      europe: [],
      americas: [],
      'middle-east-africa': [],
    };
    for (const country of countries) {
      groups[country.regionId].push(country);
    }
    return groups;
  }, [countries]);

  if (!isOpen) {
    return null;
  }

  const totalCount = COUNTRY_DIRECTORY.length;
  const activeCategoryMeta = CATEGORIES.find((cat) => cat.id === activeCategory);

  const toggleRegion = (regionId: RegionId) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [regionId]: !prev[regionId],
    }));
  };

  return (
    <>
      {/* Mobile drawer scrim */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="lg:hidden absolute inset-0 z-20 bg-black/25 backdrop-blur-[1px]"
      />

      <aside
        id="country-directory-panel"
        aria-label="国家目录"
        className="cursor-default absolute inset-y-0 right-0 z-30 w-[min(92vw,336px)] lg:static lg:z-10 lg:w-[332px] lg:shrink-0 h-full flex flex-col bg-[var(--bg-card)] border-l border-[var(--border)] shadow-xl lg:shadow-none"
      >
        {/* Directory Header */}
        <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-soft)] flex items-start justify-between gap-2 shrink-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-[var(--text-main)] tracking-tight">
                国家目录
              </h2>
              <span className="text-[10px] editorial-subtitle text-[var(--text-sub)]">
                DIRECTORY
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px]">
              <span
                id="directory-count-badge"
                className="font-mono-num font-semibold text-[var(--teal)]"
              >
                {`共 ${countries.length} / ${totalCount} 国`}
              </span>
              {activeCategory !== 'all' && activeCategoryMeta && (
                <span className="px-1.5 py-0.5 rounded bg-[var(--bg-muted)] border border-[var(--border)] text-[10px] text-[var(--text-sub)]">
                  {activeCategoryMeta.label} · DIY直申
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="收起国家目录"
            title="收起国家目录"
            className="w-7 h-7 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-muted)] text-[var(--text-sub)] hover:text-[var(--text-main)] text-sm font-bold flex items-center justify-center shrink-0 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Scrollable Region Accordions */}
        <div
          className="flex-1 overflow-y-auto px-3 py-3 space-y-3"
          style={{ touchAction: 'pan-y' }}
        >
          {countries.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--bg-soft)] p-5 text-center">
              <p className="text-xs font-medium text-[var(--text-main)]">
                当前筛选下暂无匹配国家
              </p>
              <p className="text-[11px] text-[var(--text-sub)] mt-1">
                请尝试切换顶部通道分类或清空搜索关键词
              </p>
            </div>
          ) : (
            DIRECTORY_REGIONS.map((region) => {
              const regionCountries = groupedCountries[region.id];
              const isExpanded = expandedRegions[region.id];
              if (regionCountries.length === 0) return null;

              return (
                <section
                  key={region.id}
                  aria-label={region.label}
                  className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-soft)] overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => toggleRegion(region.id)}
                    className="w-full px-3 py-2 flex items-center justify-between gap-2 text-left hover:bg-[var(--bg-muted)] transition-colors"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-bold text-[var(--text-main)] truncate">
                        {region.label}
                      </span>
                      <span className="text-[10px] editorial-subtitle text-[var(--text-sub)] hidden sm:inline">
                        {region.en}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-1.5 py-0.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] font-mono-num text-[10px] font-semibold text-[var(--text-sub)]">
                        {regionCountries.length}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`text-[10px] text-[var(--text-sub)] transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      >
                        ▾
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-2 pb-2 pt-1 space-y-1.5 border-t border-[var(--border-soft)] bg-[var(--bg-card)]">
                      {regionCountries.map((country) => {
                        const channelHint =
                          activeCategory !== 'all'
                            ? country.previewTitles[activeCategory]
                            : `可 DIY ${country.diyCategories.length} 类通道`;

                        return (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => onSelectCountry(country)}
                            className="w-full text-left rounded-lg border border-[var(--border-soft)] hover:border-[var(--teal)] bg-[var(--bg-soft)] hover:bg-[var(--bg-card)] px-2.5 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span
                                  className="w-2 h-2 rounded-full shrink-0"
                                  style={{ backgroundColor: country.tierColor }}
                                  aria-hidden="true"
                                />
                                <span className="text-xs font-bold text-[var(--text-main)] truncate">
                                  {country.nameZh}
                                </span>
                                <span className="text-[11px] text-[var(--text-sub)] truncate">
                                  {country.nameEn}
                                </span>
                              </div>
                              <span className="px-1.5 py-0.5 rounded bg-[var(--bg-muted)] font-mono-num text-[10px] font-semibold text-[var(--text-sub)] shrink-0">
                                {country.code}
                              </span>
                            </div>

                            <div className="mt-1 flex items-center justify-between gap-2 text-[10px]">
                              <span className="text-[var(--teal)] font-medium truncate">
                                {country.badge}
                              </span>
                              <span className="text-[var(--text-sub)] truncate max-w-[46%] text-right">
                                {channelHint}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })
          )}
        </div>
      </aside>
    </>
  );
};
