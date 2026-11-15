import { useRef, type KeyboardEvent } from 'react';
import { PATHWAY_CATEGORIES } from '../../data/categories';
import type { CountryData, PathwayCategoryId, SubVisaItem, ThemeMode } from '../../types/visa';
import { DiyStatusBadge } from './DiyStatusBadge';

export interface CountryHeaderProps {
  country: CountryData;
  activeTab: PathwayCategoryId;
  subVisas: SubVisaItem[];
  selectedSubVisa?: SubVisaItem;
  theme?: ThemeMode;
  onBackHome: () => void;
  onSelectTab: (tab: PathwayCategoryId) => void;
  onSelectSubVisa: (subVisaId: string) => void;
}

export const DEFAULT_ADVISORY_NOTE =
  '该通道通常须由当地雇主、院校或担保机构前置发起申请，本页提供核心条件与材料准备指引。';

function DiySupportBanner({ subVisa }: { subVisa: SubVisaItem }) {
  const isDiy = subVisa.diySupport === 'diy';

  return (
    <div
      id="diy-support-banner"
      data-diy-status={subVisa.diySupport}
      role="status"
      aria-live="polite"
      className="mt-4 pt-4 border-t border-[var(--border-soft)]"
    >
      {isDiy ? (
        <div className="flex flex-wrap items-center gap-2.5 px-3.5 py-2.5 rounded-md border border-[var(--border)] border-l-4 border-l-[var(--teal)] bg-[var(--bg-soft)] text-[var(--text-main)]">
          <DiyStatusBadge diySupport="diy" label="DIY 可自助" className="text-[11px] py-0.5" />
          <span className="text-xs text-[var(--text-main)] leading-relaxed">
            标准可 DIY 通道 · 支持个人按官方流程自助筹备递交
          </span>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-start gap-2.5 px-3.5 py-3 rounded-md border border-[var(--border)] border-l-4 border-l-[var(--ochre)] bg-[var(--bg-soft)] text-[var(--text-main)]">
          <DiyStatusBadge
            diySupport="advisory"
            label="非标准 DIY · 原则与材料指引"
            className="text-[11px] py-0.5 self-start"
          />
          <p className="text-xs sm:text-[13px] text-[var(--text-main)] leading-relaxed">
            {subVisa.advisoryNote?.trim() || DEFAULT_ADVISORY_NOTE}
          </p>
        </div>
      )}
    </div>
  );
}

/** Country detail header with back navigation, dynamic sub-visa metadata, DIY status banner, and tabs. */
export function CountryHeader({
  country,
  activeTab,
  subVisas,
  selectedSubVisa,
  theme = 'light',
  onBackHome,
  onSelectTab,
  onSelectSubVisa,
}: CountryHeaderProps) {
  const tabRefs = useRef<Partial<Record<PathwayCategoryId, HTMLButtonElement | null>>>({});
  const processingText = selectedSubVisa?.processing ?? country.processing;
  const submissionText = selectedSubVisa?.submission ?? country.submission;

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    const count = PATHWAY_CATEGORIES.length;
    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % count;
        break;
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + count) % count;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = count - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextCategory = PATHWAY_CATEGORIES[nextIndex];
    if (!nextCategory) {
      return;
    }
    onSelectTab(nextCategory.id);
    tabRefs.current[nextCategory.id]?.focus();
  };

  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <button
          id="back-home-btn"
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--teal)] hover:text-[var(--teal)] text-[var(--text-main)] rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]"
        >
          ← 返回世界地图
        </button>
        <span
          id="country-region-badge"
          className="font-mono-num text-[11px] px-2.5 py-1 bg-[var(--bg-muted)] border border-[var(--border)] text-[var(--text-sub)] rounded-md"
        >
          {country.region}
        </span>
      </div>

      <div className="hairline-card rounded-lg p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <span className="w-1.5 h-6 bg-[var(--accent-red)] shrink-0" aria-hidden="true" />
              <h2
                id="detail-country-zh"
                className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] tracking-tight"
              >
                {country.nameZh}
              </h2>
              <span
                id="detail-country-en"
                className="text-sm sm:text-base text-[var(--text-sub)] font-mono-num"
              >
                {`${country.nameEn} (${country.code})`}
              </span>
            </div>
            <p
              id="detail-country-summary"
              className="text-sm text-[var(--text-sub)] leading-relaxed"
            >
              {country.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:w-[440px] shrink-0">
            <div className="muted-panel p-3 rounded-md">
              <div className="text-[11px] text-[var(--text-sub)] mb-1">办理周期</div>
              <div
                id="detail-processing"
                className="text-xs sm:text-sm font-semibold text-[var(--text-main)] leading-snug"
              >
                {processingText}
              </div>
            </div>
            <div className="muted-panel p-3 rounded-md">
              <div className="text-[11px] text-[var(--text-sub)] mb-1">办理方式</div>
              <div
                id="detail-submission"
                className="text-xs sm:text-sm font-semibold text-[var(--text-main)] leading-snug"
              >
                {submissionText}
              </div>
            </div>
          </div>
        </div>

        <div
          id="detail-category-tabs"
          role="tablist"
          aria-label="签证类别切换"
          className="flex items-center gap-2 mt-5 pt-4 border-t border-[var(--border-soft)] overflow-x-auto pb-1 sm:overflow-visible sm:flex-wrap sm:pb-0"
        >
          {PATHWAY_CATEGORIES.map((cat, idx) => {
            const isActive = cat.id === activeTab;
            const dotColor = theme === 'dark' ? (cat.darkColor ?? cat.color) : cat.color;

            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[cat.id] = el;
                }}
                id={`detail-tab-${cat.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="detail-body-grid"
                tabIndex={isActive ? 0 : -1}
                data-detail-cat={cat.id}
                onClick={() => onSelectTab(cat.id)}
                onKeyDown={(event) => handleTabKeyDown(event, idx)}
                className={`cat-pill ${isActive ? 'active' : ''} whitespace-nowrap shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]`}
              >
                <span
                  className="cat-dot w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: dotColor }}
                  aria-hidden="true"
                />
                <span>{cat.label}</span>
                <span className="editorial-subtitle text-[10px] opacity-75">{cat.en}</span>
              </button>
            );
          })}
        </div>

        {subVisas.length > 1 && (
          <div
            id="sub-visa-selector"
            role="group"
            aria-labelledby="sub-visa-selector-label"
            className="mt-4 pt-4 border-t border-[var(--border-soft)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 text-xs">
              <span id="sub-visa-selector-label" className="text-[var(--text-sub)]">
                该类别包含多个独立签证，请点击选择进入对应详情：
              </span>
              <span className="font-mono-num text-[var(--teal)] font-semibold">
                {`${subVisas.length} 种独立签证`}
              </span>
            </div>

            <div
              id="sub-visa-cards"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5"
            >
              {subVisas.map((sv) => {
                const isSelected = sv.id === selectedSubVisa?.id;
                return (
                  <button
                    key={sv.id}
                    type="button"
                    data-sub-visa={sv.id}
                    aria-pressed={isSelected}
                    onClick={() => onSelectSubVisa(sv.id)}
                    className={`text-left p-3 rounded-md border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)] ${
                      isSelected
                        ? 'border-[var(--accent-red)] bg-[var(--bg-paper)] shadow-sm'
                        : 'border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--teal)]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="text-xs sm:text-sm font-bold text-[var(--text-main)] leading-snug">
                        {sv.title}
                      </span>
                      <span
                        className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-[var(--accent-red)] text-white'
                            : 'text-[var(--teal)] bg-[var(--bg-muted)]'
                        }`}
                      >
                        {isSelected ? '当前查看' : '进入 →'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] text-[var(--text-sub)] font-mono-num truncate">
                        {`参考费率：${sv.fee}`}
                      </span>
                      <DiyStatusBadge diySupport={sv.diySupport} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {selectedSubVisa && <DiySupportBanner subVisa={selectedSubVisa} />}
      </div>
    </div>
  );
}

export default CountryHeader;
