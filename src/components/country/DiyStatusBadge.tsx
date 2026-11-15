import type { DiySupportLevel } from '../../types/visa';

export interface DiyStatusBadgeProps {
  diySupport: DiySupportLevel;
  label?: string;
  className?: string;
}

/** Displays a theme-adaptive status pill distinguishing standard DIY channels from advisory-only guidance. */
export function DiyStatusBadge({ diySupport, label, className = '' }: DiyStatusBadgeProps) {
  const isDiy = diySupport === 'diy';
  const resolvedLabel = label ?? (isDiy ? '标准 DIY' : '原则指引');

  return (
    <span
      data-diy-badge={diySupport}
      className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded border shrink-0 ${
        isDiy
          ? 'bg-[var(--ocean)] border-[var(--teal)] text-[var(--text-main)]'
          : 'bg-[var(--bg-muted)] border-[var(--ochre)] text-[var(--text-main)]'
      } ${className}`.trim()}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
          isDiy ? 'bg-[var(--teal)]' : 'bg-[var(--terracotta)]'
        }`}
        aria-hidden="true"
      />
      <span>{resolvedLabel}</span>
    </span>
  );
}

export default DiyStatusBadge;
