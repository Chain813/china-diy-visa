import type { VisaStep } from '../../types/visa';

export interface WorkflowStepsCardProps {
  steps: VisaStep[];
}

/** Renders the ordered step-by-step DIY application workflow as a vertical milestone timeline. */
export function WorkflowStepsCard({ steps }: WorkflowStepsCardProps) {
  return (
    <section aria-label="DIY 办理流程步骤" className="hairline-card rounded-lg p-5">
      <div className="flex items-center justify-between gap-2 mb-4 pb-2.5 border-b border-[var(--border-soft)]">
        <h3 className="text-sm font-bold text-[var(--text-main)]">
          DIY 全流程步骤 / STEP-BY-STEP WORKFLOW
        </h3>
        <span className="text-[11px] text-[var(--text-sub)] shrink-0">按办理顺序执行</span>
      </div>

      <ol id="stream-steps" className="timeline-track relative">
        {steps.map((st, idx) => {
          const isLast = idx === steps.length - 1;
          return (
            <li
              key={`${idx}-${st.title}`}
              className="timeline-node relative flex items-stretch gap-3.5 pb-4 last:pb-0"
            >
              <div className="flex flex-col items-center shrink-0">
                <span className="step-badge relative z-10 font-mono-num text-xs font-bold w-7 h-7 shrink-0 flex items-center justify-center rounded-md ring-4 ring-[var(--bg-card)]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {!isLast && (
                  <span aria-hidden="true" className="timeline-connector w-px flex-1 my-1.5" />
                )}
              </div>

              <div className="min-w-0 flex-1 rounded-md border border-[var(--border-soft)] bg-[var(--bg-soft)] px-3.5 py-2.5">
                <div className="text-sm font-bold text-[var(--text-main)] mb-1">{st.title}</div>
                <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed">
                  {st.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default WorkflowStepsCard;
