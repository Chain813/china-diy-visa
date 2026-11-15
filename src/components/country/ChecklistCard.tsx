import { buildChecklistKey, formatChecklistText } from '../../hooks/useChecklist';
import type { CountryData, PathwayCategoryId, SubVisaItem } from '../../types/visa';
import { getFormDownloadLink } from '../../utils/formLinks';

export interface ChecklistCardProps {
  country: CountryData;
  activeTab: PathwayCategoryId;
  categoryLabel: string;
  subVisa: SubVisaItem;
  isItemChecked: (key: string) => boolean;
  getCheckedCount: (
    countryId: string,
    tab: PathwayCategoryId,
    subVisaId: string,
    total: number
  ) => number;
  onToggleItem: (key: string) => void;
  onResetChecklist: () => void;
  onNotify: (msg: string) => void;
}

function copyWithTextareaFallback(text: string): boolean {
  if (typeof document === 'undefined' || typeof document.execCommand !== 'function') {
    return false;
  }

  const previousFocus =
    document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.setAttribute('aria-hidden', 'true');
  textarea.tabIndex = -1;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '-9999px';
  document.body.appendChild(textarea);

  try {
    textarea.focus({ preventScroll: true });
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    textarea.remove();
    previousFocus?.focus({ preventScroll: true });
  }
}

/** Sticky interactive document checklist with progress bar, form links, copy, and reset actions. */
export function ChecklistCard({
  country,
  activeTab,
  categoryLabel,
  subVisa,
  isItemChecked,
  getCheckedCount,
  onToggleItem,
  onResetChecklist,
  onNotify,
}: ChecklistCardProps) {
  const items = subVisa.checklist;
  const rawCheckedCount = getCheckedCount(country.id, activeTab, subVisa.id, items.length);
  const checkedCount = Math.max(0, Math.min(rawCheckedCount, items.length));
  const pct = items.length > 0 ? Math.round((checkedCount / items.length) * 100) : 0;

  const handleCopy = async () => {
    const formatted = formatChecklistText(country.nameZh, categoryLabel, subVisa);
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(formatted);
        onNotify('已复制材料清单到剪贴板');
        return;
      } catch {
        // Fall back to execCommand when Clipboard API rejects (e.g., permission or non-HTTPS).
      }
    }

    const copied = copyWithTextareaFallback(formatted);
    onNotify(copied ? '已复制材料清单到剪贴板' : '复制失败，请手动复制');
  };

  return (
    <aside
      aria-label="所需材料核对清单"
      className="lg:col-span-5 hairline-card rounded-lg p-5 lg:sticky lg:top-6"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-sm font-bold text-[var(--text-main)]">所需材料核对清单</h3>
          <div className="editorial-subtitle text-[10px] text-[var(--text-sub)]">
            INTERACTIVE DOCUMENT CHECKLIST
          </div>
        </div>
        <div
          aria-live="polite"
          aria-atomic="true"
          className="flex items-center gap-2 shrink-0"
        >
          <span
            id="checklist-progress-text"
            className="font-mono-num text-xs font-bold text-[var(--text-sub)]"
          >
            {`${checkedCount} / ${items.length}`}
          </span>
          <span
            id="checklist-progress-pct"
            className={`font-mono-num text-[11px] font-bold px-2 py-0.5 rounded border transition-colors ${
              pct === 100
                ? 'bg-[var(--ocean)] border-[var(--teal)] text-[var(--text-main)]'
                : 'bg-[var(--bg-muted)] border-[var(--border)] text-[var(--teal)]'
            }`}
          >
            {`${pct}%`}
          </span>
        </div>
      </div>

      <div className="w-full h-1.5 bg-[var(--bg-muted)] rounded-full overflow-hidden mb-4">
        <div
          id="checklist-progress-bar"
          role="progressbar"
          aria-label="材料准备进度"
          aria-valuemin={0}
          aria-valuemax={items.length}
          aria-valuenow={checkedCount}
          aria-valuetext={`${pct}%`}
          className="h-full bg-[var(--teal)] transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      <ul id="checklist-items" className="space-y-2.5 mb-5">
        {items.map((item, idx) => {
          const itemKey = buildChecklistKey(country.id, activeTab, subVisa.id, idx);
          const checked = isItemChecked(itemKey);
          const formLink = getFormDownloadLink(item, country);

          return (
            <li
              key={itemKey}
              className="flex items-start justify-between gap-2 p-2.5 rounded-md border border-[var(--border-soft)] bg-[var(--bg-soft)] hover:border-[var(--border)] transition-colors"
            >
              <label className="check-item flex items-start gap-2.5 cursor-pointer flex-1 min-w-0 text-xs sm:text-sm text-[var(--text-main)] leading-snug select-none">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggleItem(itemKey)}
                  className="mt-0.5 w-4 h-4 accent-[var(--teal)] rounded shrink-0 cursor-pointer"
                />
                <span>{item}</span>
              </label>

              {formLink && (
                <a
                  href={formLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[11px] font-medium text-[var(--teal)] hover:text-[var(--accent-red)] whitespace-nowrap pt-0.5 transition-colors"
                >
                  {formLink.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-soft)]">
        <button
          id="copy-checklist-btn"
          type="button"
          onClick={handleCopy}
          className="copy-btn-primary flex-1 px-3 py-2 text-xs font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]"
        >
          复制材料清单
        </button>
        <button
          id="reset-checklist-btn"
          type="button"
          onClick={onResetChecklist}
          className="px-3 py-2 text-xs font-medium border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent-red)] hover:text-[var(--accent-red)] text-[var(--text-sub)] rounded-md transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--teal)]"
        >
          重置勾选
        </button>
      </div>
    </aside>
  );
}

export default ChecklistCard;
