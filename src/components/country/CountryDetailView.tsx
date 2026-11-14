import { PATHWAY_CATEGORIES } from '../../data/categories';
import type { CountryData, PathwayCategoryId, ThemeMode } from '../../types/visa';
import { ChecklistCard } from './ChecklistCard';
import { CountryHeader } from './CountryHeader';
import { PathwayOverviewCard } from './PathwayOverviewCard';
import { PitfallsCard } from './PitfallsCard';
import { ResourceLinksCard } from './ResourceLinksCard';
import { WorkflowStepsCard } from './WorkflowStepsCard';

export interface CountryDetailViewProps {
  country: CountryData;
  activeTab: PathwayCategoryId;
  subVisaId: string | null;
  theme?: ThemeMode;
  onBackHome: () => void;
  onSelectTab: (tab: PathwayCategoryId) => void;
  onSelectSubVisa: (subVisaId: string) => void;
  isItemChecked: (key: string) => boolean;
  getCheckedCount: (
    countryId: string,
    tab: PathwayCategoryId,
    subVisaId: string,
    total: number
  ) => number;
  onToggleItem: (key: string) => void;
  onResetChecklist: (countryId: string, tab: PathwayCategoryId, subVisaId: string) => void;
  onNotify: (msg: string) => void;
}

/** Composes the full country visa detail page with pathway switching, workflow guides, and checklist. */
export function CountryDetailView({
  country,
  activeTab,
  subVisaId,
  theme = 'light',
  onBackHome,
  onSelectTab,
  onSelectSubVisa,
  isItemChecked,
  getCheckedCount,
  onToggleItem,
  onResetChecklist,
  onNotify,
}: CountryDetailViewProps) {
  const subVisas = country.pathways[activeTab];
  const selectedSubVisa = subVisas.find((sv) => sv.id === subVisaId) ?? subVisas[0];
  const activeCategoryMeta =
    PATHWAY_CATEGORIES.find((c) => c.id === activeTab) ?? PATHWAY_CATEGORIES[0];

  return (
    <section
      id="country-detail-view"
      aria-label={`${country.nameZh}签证详情`}
      className="max-w-[1440px] mx-auto px-3.5 sm:px-8 py-6 animate-view-enter"
    >
      <CountryHeader
        country={country}
        activeTab={activeTab}
        subVisas={subVisas}
        selectedSubVisa={selectedSubVisa}
        theme={theme}
        onBackHome={onBackHome}
        onSelectTab={onSelectTab}
        onSelectSubVisa={onSelectSubVisa}
      />

      {selectedSubVisa && (
        <div
          id="detail-body-grid"
          key={`${country.id}:${activeTab}:${selectedSubVisa.id}`}
          role="tabpanel"
          aria-labelledby={`detail-tab-${activeTab}`}
          tabIndex={0}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-tab-swap"
        >
          <div className="lg:col-span-7 space-y-6">
            <PathwayOverviewCard category={activeCategoryMeta} subVisa={selectedSubVisa} />
            <PitfallsCard pitfalls={country.pitfalls} />
            <WorkflowStepsCard steps={selectedSubVisa.steps} />
            <ResourceLinksCard links={country.links} jobLinks={country.jobLinks} />
          </div>

          <ChecklistCard
            country={country}
            activeTab={activeTab}
            categoryLabel={activeCategoryMeta.label}
            subVisa={selectedSubVisa}
            isItemChecked={isItemChecked}
            getCheckedCount={getCheckedCount}
            onToggleItem={onToggleItem}
            onResetChecklist={() =>
              onResetChecklist(country.id, activeTab, selectedSubVisa.id)
            }
            onNotify={onNotify}
          />
        </div>
      )}
    </section>
  );
}

export default CountryDetailView;
