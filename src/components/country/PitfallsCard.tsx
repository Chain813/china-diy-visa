export interface PitfallsCardProps {
  pitfalls: string[];
}

/** Highlights common visa rejection traps and compliance warnings for the destination country. */
export function PitfallsCard({ pitfalls }: PitfallsCardProps) {
  return (
    <section
      aria-label="常见踩坑与风险提示"
      className="hairline-card rounded-lg p-5 border-l-4 border-l-[var(--accent-red)]"
    >
      <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-[var(--border-soft)]">
        <h3 className="text-sm font-bold text-[var(--text-main)]">
          常见踩坑与必须避免的雷区 / PITFALLS &amp; WHAT TO AVOID
        </h3>
        <span className="editorial-subtitle text-[10px] font-bold px-2 py-0.5 bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--accent-red)] rounded shrink-0">
          RISK ALERT
        </span>
      </div>

      <ul id="country-pitfalls" className="space-y-2.5">
        {pitfalls.map((pitfall, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2.5 p-2.5 rounded-md border border-[var(--border-soft)] bg-[var(--bg-soft)] text-xs sm:text-sm text-[var(--text-main)] leading-relaxed"
          >
            <span className="text-[var(--accent-red)] font-bold shrink-0 mt-0.5" aria-hidden="true">
              ✕
            </span>
            <span>{pitfall}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PitfallsCard;
