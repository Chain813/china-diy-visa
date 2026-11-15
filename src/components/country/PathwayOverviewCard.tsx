import type { CategoryMeta, SubVisaItem } from '../../types/visa';
import { DiyStatusBadge } from './DiyStatusBadge';

export interface PathwayOverviewCardProps {
  category: CategoryMeta;
  subVisa: SubVisaItem;
  subVisaCount?: number;
}

/** Displays the selected visa pathway title, DIY status, official fee, summary description, and key eligibility tips. */
export function PathwayOverviewCard({
  category,
  subVisa,
  subVisaCount,
}: PathwayOverviewCardProps) {
  return (
    <section aria-label="签证类别概览" className="hairline-card rounded-lg p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3 pb-3 border-b border-[var(--border-soft)]">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <div
              id="stream-cat-label"
              className="editorial-subtitle text-[11px] font-semibold text-[var(--teal)]"
            >
              {`${category.label}签证类别 · ${category.en}`}
            </div>
            <DiyStatusBadge diySupport={subVisa.diySupport} />
            {subVisaCount !== undefined && (
              <span className="font-mono-num text-[10px] px-2 py-0.5 rounded bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--text-sub)]">
                {subVisaCount > 1 ? `${subVisaCount} 种独立通道` : '单一主通道'}
              </span>
            )}
          </div>
          <h3 id="stream-title" className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
            {subVisa.title}
          </h3>
        </div>

        <div className="muted-panel px-3 py-2 rounded-md shrink-0 text-right">
          <div className="text-[10px] text-[var(--text-sub)]">官方参考费用</div>
          <div
            id="stream-fee"
            className="font-mono-num text-xs sm:text-sm font-bold text-[var(--text-main)]"
          >
            {subVisa.fee}
          </div>
        </div>
      </div>

      <p id="stream-desc" className="text-sm text-[var(--text-main)] leading-relaxed mb-3">
        {subVisa.desc}
      </p>

      <div className="bg-[var(--bg-soft)] border border-[var(--border-soft)] rounded-md p-3 text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed">
        <span className="font-bold text-[var(--accent-red)]">核心门槛：</span>
        <span id="stream-tips">{subVisa.tips}</span>
      </div>
    </section>
  );
}

export default PathwayOverviewCard;
