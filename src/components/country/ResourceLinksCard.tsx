import type { ExternalLink } from '../../types/visa';

export interface ResourceLinksCardProps {
  links: ExternalLink[];
  jobLinks: ExternalLink[];
}

interface LinkCardSectionProps {
  heading: string;
  badge: string;
  listId: string;
  items: ExternalLink[];
}

function LinkCardSection({ heading, badge, listId, items }: LinkCardSectionProps) {
  return (
    <section aria-label={heading} className="hairline-card p-5">
      <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[var(--border-soft)]">
        <h3 className="text-sm font-bold text-[var(--text-main)]">{heading}</h3>
        <span className="editorial-subtitle text-[10px] font-semibold text-[var(--teal)] shrink-0">
          {badge}
        </span>
      </div>

      <div id={listId} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((link) => (
          <a
            key={`${link.url}-${link.title}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded border border-[var(--border)] bg-[var(--bg-soft)] hover:border-[var(--teal)] transition-colors group"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs sm:text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--teal)] transition-colors">
                {link.title}
              </span>
              <span className="text-xs text-[var(--teal)] shrink-0" aria-hidden="true">
                ↗
              </span>
            </div>
            <p className="text-[11px] text-[var(--text-sub)] leading-snug">{link.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

/** Renders official government portals and employer/job search links for the country. */
export function ResourceLinksCard({ links, jobLinks }: ResourceLinksCardProps) {
  return (
    <div className="space-y-6">
      <LinkCardSection
        heading="官方入口与实用链接 / OFFICIAL & HELPFUL LINKS"
        badge="DIRECT HTTPS"
        listId="country-links"
        items={links}
      />
      <LinkCardSection
        heading="寻找当地雇主与招聘网站 / EMPLOYER & JOB PORTALS"
        badge="WORK & SPONSORSHIP"
        listId="country-job-links"
        items={jobLinks}
      />
    </div>
  );
}

export default ResourceLinksCard;
