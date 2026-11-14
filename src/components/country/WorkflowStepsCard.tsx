import type { VisaStep } from '../../types/visa';

export interface WorkflowStepsCardProps {
  steps: VisaStep[];
}

/** Renders the ordered step-by-step DIY application workflow for a visa pathway. */
export function WorkflowStepsCard({ steps }: WorkflowStepsCardProps) {
  return (
    <section aria-label="DIY 办理流程步骤" className="hairline-card p-5">
      <div className="flex items-center justify-between gap-2 mb-4 pb-2.5 border-b border-[var(--border-soft)]">
        <h3 className="text-sm font-bold text-[var(--text-main)]">
          DIY 全流程步骤 / STEP-BY-STEP WORKFLOW
        </h3>
        <span className="text-[11px] text-[var(--text-sub)] shrink-0">按办理顺序执行</span>
      </div>

      <ol id="stream-steps" className="space-y-4">
        {steps.map((st, idx) => (
          <li key={`${idx}-${st.title}`} className="flex items-start gap-3">
            <span className="step-badge font-mono-num text-xs font-bold w-6 h-6 shrink-0 flex items-center justify-center rounded-sm mt-0.5">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-[var(--text-main)] mb-0.5">{st.title}</div>
              <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed">
                {st.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default WorkflowStepsCard;
