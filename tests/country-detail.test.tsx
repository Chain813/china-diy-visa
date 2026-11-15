import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { loadCountryByCode } from '../src/data';
import { PATHWAY_CATEGORIES } from '../src/data/categories';
import { buildChecklistKey, formatChecklistText, useChecklist } from '../src/hooks/useChecklist';
import type { CountryData, PathwayCategoryId, SubVisaItem, ThemeMode } from '../src/types/visa';
import { CountryDetailView } from '../src/components/country/CountryDetailView';
import { DEFAULT_ADVISORY_NOTE } from '../src/components/country/CountryHeader';
import { ChecklistCard } from '../src/components/country/ChecklistCard';
import { PathwayOverviewCard } from '../src/components/country/PathwayOverviewCard';
import { WorkflowStepsCard } from '../src/components/country/WorkflowStepsCard';

function StatefulCountryDetailHarness({
  country,
  initialTab = 'study',
  initialSubVisaId = null,
  theme = 'light',
  onBackHome = vi.fn(),
  onNotify = vi.fn(),
  onTabChange,
  onSubVisaChange,
  onResetSpy,
}: {
  country: CountryData;
  initialTab?: PathwayCategoryId;
  initialSubVisaId?: string | null;
  theme?: ThemeMode;
  onBackHome?: () => void;
  onNotify?: (msg: string) => void;
  onTabChange?: (tab: PathwayCategoryId) => void;
  onSubVisaChange?: (subVisaId: string) => void;
  onResetSpy?: (countryId: string, tab: PathwayCategoryId, subVisaId: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<PathwayCategoryId>(initialTab);
  const [subVisaId, setSubVisaId] = useState<string | null>(initialSubVisaId);
  const { isItemChecked, toggleItem, resetSubVisaChecklist, getCheckedCount } = useChecklist();

  return (
    <CountryDetailView
      country={country}
      activeTab={activeTab}
      subVisaId={subVisaId}
      theme={theme}
      onBackHome={onBackHome}
      onSelectTab={(tab) => {
        setActiveTab(tab);
        setSubVisaId(null);
        onTabChange?.(tab);
      }}
      onSelectSubVisa={(id) => {
        setSubVisaId(id);
        onSubVisaChange?.(id);
      }}
      isItemChecked={isItemChecked}
      getCheckedCount={getCheckedCount}
      onToggleItem={toggleItem}
      onResetChecklist={(countryId, tab, svId) => {
        resetSubVisaChecklist(countryId, tab, svId);
        onResetSpy?.(countryId, tab, svId);
      }}
      onNotify={onNotify}
    />
  );
}

describe('CountryDetailView and country subcomponents', () => {
  const originalClipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
  const originalExecCommandDescriptor = Object.getOwnPropertyDescriptor(document, 'execCommand');

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.documentElement.removeAttribute('data-theme');
    if (originalClipboardDescriptor) {
      Object.defineProperty(navigator, 'clipboard', originalClipboardDescriptor);
    } else {
      Reflect.deleteProperty(navigator, 'clipboard');
    }
    if (originalExecCommandDescriptor) {
      Object.defineProperty(document, 'execCommand', originalExecCommandDescriptor);
    } else {
      Reflect.deleteProperty(document, 'execCommand');
    }
  });

  it('renders JPN metadata, WAI-ARIA tabs/panel, heading hierarchy, pitfalls, timeline steps, and links', async () => {
    const user = userEvent.setup();
    const jpn = (await loadCountryByCode('JPN'))!;
    const studyVisa = jpn.pathways.study[0];
    const onBackHome = vi.fn();
    const onSelectTab = vi.fn();

    render(
      <CountryDetailView
        country={jpn}
        activeTab="study"
        subVisaId={null}
        onBackHome={onBackHome}
        onSelectTab={onSelectTab}
        onSelectSubVisa={vi.fn()}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );

    const detailSection = document.getElementById('country-detail-view')!;
    expect(detailSection).toHaveAttribute('aria-label', '日本签证详情');

    const backBtn = document.getElementById('back-home-btn')!;
    expect(backBtn).toHaveTextContent('← 返回世界地图');
    await user.click(backBtn);
    expect(onBackHome).toHaveBeenCalledTimes(1);

    expect(document.getElementById('country-region-badge')).toHaveTextContent(jpn.region);
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    expect(document.getElementById('detail-country-en')).toHaveTextContent('Japan (JPN)');
    expect(document.getElementById('detail-country-summary')).toHaveTextContent(jpn.summary);
    expect(document.getElementById('detail-processing')).toHaveTextContent(studyVisa.processing);
    expect(document.getElementById('detail-submission')).toHaveTextContent(studyVisa.submission);

    // Consistent heading hierarchy: h2 for country title, h3 for sibling cards, no skipped h4
    expect(detailSection.querySelectorAll('h2')).toHaveLength(1);
    expect(detailSection.querySelectorAll('h3').length).toBeGreaterThanOrEqual(5);
    expect(detailSection.querySelectorAll('h4')).toHaveLength(0);

    // WAI-ARIA tablist / tab / tabpanel
    const tablist = screen.getByRole('tablist', { name: '签证类别切换' });
    const tabs = within(tablist).getAllByRole('tab');
    expect(tabs).toHaveLength(5);
    expect(tabs[0]).toHaveAttribute('id', 'detail-tab-study');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[0]).toHaveAttribute('aria-controls', 'detail-body-grid');
    expect(tabs[0]).toHaveAttribute('tabindex', '0');
    expect(tabs[0]).toHaveClass('whitespace-nowrap', 'shrink-0');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    expect(tabs[1]).toHaveAttribute('tabindex', '-1');

    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toHaveAttribute('id', 'detail-body-grid');
    expect(tabpanel).toHaveAttribute('aria-labelledby', 'detail-tab-study');

    await user.click(tablist.querySelector('[data-detail-cat="work"]')!);
    expect(onSelectTab).toHaveBeenCalledWith('work');

    // Single sub-visa pathway hides sub-visa selector
    expect(document.getElementById('sub-visa-selector')).toBeNull();

    expect(document.getElementById('stream-cat-label')).toHaveTextContent('留学签证类别 · STUDY');
    expect(document.getElementById('stream-title')).toHaveTextContent(studyVisa.title);
    expect(document.getElementById('stream-fee')).toHaveTextContent(studyVisa.fee);
    expect(document.getElementById('stream-desc')).toHaveTextContent(studyVisa.desc);
    expect(document.getElementById('stream-tips')).toHaveTextContent(studyVisa.tips);

    const pitfallsList = document.getElementById('country-pitfalls')!;
    expect(
      screen.getByText('常见踩坑与必须避免的雷区 / PITFALLS & WHAT TO AVOID')
    ).toBeInTheDocument();
    expect(screen.getByText('RISK ALERT')).toBeInTheDocument();
    const pitfallItems = within(pitfallsList).getAllByRole('listitem');
    expect(pitfallItems).toHaveLength(jpn.pitfalls.length);
    expect(pitfallItems[0]).toHaveTextContent('✕');
    for (const pitfall of jpn.pitfalls) {
      expect(pitfallsList).toHaveTextContent(pitfall);
    }

    const stepsList = document.getElementById('stream-steps')!;
    expect(stepsList).toHaveClass('timeline-track');
    expect(screen.getByText('DIY 全流程步骤 / STEP-BY-STEP WORKFLOW')).toBeInTheDocument();
    expect(screen.getByText('按办理顺序执行')).toBeInTheDocument();
    const timelineNodes = stepsList.querySelectorAll('.timeline-node');
    expect(timelineNodes).toHaveLength(studyVisa.steps.length);
    expect(stepsList.querySelectorAll('.timeline-connector')).toHaveLength(
      studyVisa.steps.length - 1
    );
    const badges = stepsList.querySelectorAll('.step-badge');
    expect(badges).toHaveLength(studyVisa.steps.length);
    expect(badges[0]).toHaveTextContent('01');
    expect(badges[studyVisa.steps.length - 1]).toHaveTextContent(
      String(studyVisa.steps.length).padStart(2, '0')
    );
    expect(stepsList).toHaveTextContent(studyVisa.steps[0].title);
    expect(stepsList).toHaveTextContent(studyVisa.steps[0].detail);

    expect(
      screen.getByText('官方入口与实用链接 / OFFICIAL & HELPFUL LINKS')
    ).toBeInTheDocument();
    expect(screen.getByText('DIRECT HTTPS')).toBeInTheDocument();
    const officialLinks = document.getElementById('country-links')!;
    const officialAnchors = within(officialLinks).getAllByRole('link');
    expect(officialAnchors).toHaveLength(jpn.links.length);
    expect(officialAnchors[0]).toHaveAttribute('href', jpn.links[0].url);
    expect(officialAnchors[0]).toHaveAttribute('target', '_blank');
    expect(officialAnchors[0]).toHaveAttribute('rel', 'noopener noreferrer');

    expect(
      screen.getByText('寻找当地雇主与招聘网站 / EMPLOYER & JOB PORTALS')
    ).toBeInTheDocument();
    expect(screen.getByText('WORK & SPONSORSHIP')).toBeInTheDocument();
    const jobLinks = document.getElementById('country-job-links')!;
    const jobAnchors = within(jobLinks).getAllByRole('link');
    expect(jobAnchors).toHaveLength(jpn.jobLinks.length);
    expect(jobAnchors[0]).toHaveAttribute('href', jpn.jobLinks[0].url);
    expect(jobAnchors[0]).toHaveAttribute('target', '_blank');
    expect(jobAnchors[0]).toHaveAttribute('rel', 'noopener noreferrer');

    // Landmark aria-labels on sections and aside
    expect(screen.getByRole('region', { name: '签证类别概览' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: '常见踩坑与风险提示' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'DIY 办理流程步骤' })).toBeInTheDocument();
    expect(screen.getByRole('complementary', { name: '所需材料核对清单' })).toBeInTheDocument();
  });

  it('dynamically updates processing and submission on JPN across tourism -> study -> work -> immigration without leaking tourism processing', async () => {
    const user = userEvent.setup();
    const jpn = (await loadCountryByCode('JPN'))!;

    render(<StatefulCountryDetailHarness country={jpn} initialTab="tourism" />);

    const processingEl = document.getElementById('detail-processing')!;
    const submissionEl = document.getElementById('detail-submission')!;

    // 1. Tourism: displays 5 个工作日
    const tourismVisa = jpn.pathways.tourism[0];
    expect(processingEl).toHaveTextContent('5 个工作日');
    expect(processingEl).toHaveTextContent(tourismVisa.processing);
    expect(submissionEl).toHaveTextContent(tourismVisa.submission);

    // 2. Study: updates to COE 审理周期 and does NOT leak '5 个工作日'
    await user.click(document.getElementById('detail-tab-study')!);
    const studyVisa = jpn.pathways.study[0];
    expect(processingEl).toHaveTextContent(studyVisa.processing);
    expect(processingEl.textContent).not.toContain('5 个工作日');
    expect(submissionEl).toHaveTextContent(studyVisa.submission);

    // 3. Work: updates to gijinkoku, does NOT leak '5 个工作日', and switches to ssw on sub-visa click
    await user.click(document.getElementById('detail-tab-work')!);
    const gijinkoku = jpn.pathways.work[0];
    const ssw = jpn.pathways.work[1];
    expect(processingEl).toHaveTextContent(gijinkoku.processing);
    expect(processingEl.textContent).not.toContain('5 个工作日');
    expect(submissionEl).toHaveTextContent(gijinkoku.submission);

    await user.click(document.querySelector('[data-sub-visa="ssw"]')!);
    expect(processingEl).toHaveTextContent(ssw.processing);
    expect(processingEl.textContent).not.toContain('5 个工作日');
    expect(submissionEl).toHaveTextContent(ssw.submission);

    // 4. Immigration: updates to HSP / 永住 processing & submission
    await user.click(document.getElementById('detail-tab-immigration')!);
    const immigrationVisa = jpn.pathways.immigration[0];
    expect(processingEl).toHaveTextContent(immigrationVisa.processing);
    expect(processingEl.textContent).not.toContain('5 个工作日');
    expect(submissionEl).toHaveTextContent(immigrationVisa.submission);
  });

  it('renders DIY status banner for diy channels and advisory banner with advisoryNote for advisory channels', async () => {
    const user = userEvent.setup();
    const jpn = (await loadCountryByCode('JPN'))!;
    const deu = (await loadCountryByCode('DEU'))!;
    const ind = (await loadCountryByCode('IND'))!;

    const { rerender } = render(
      <StatefulCountryDetailHarness country={jpn} initialTab="tourism" />
    );

    const getBanner = () => document.getElementById('diy-support-banner')!;

    // JPN tourism is standard DIY
    expect(getBanner()).toHaveAttribute('role', 'status');
    expect(getBanner()).toHaveAttribute('aria-live', 'polite');
    expect(getBanner()).toHaveAttribute('data-diy-status', 'diy');
    expect(getBanner()).toHaveTextContent('标准可 DIY 通道 · 支持个人按官方流程自助筹备递交');

    // JPN work is advisory with explicit advisoryNote
    await user.click(document.getElementById('detail-tab-work')!);
    expect(getBanner()).toHaveAttribute('role', 'status');
    expect(getBanner()).toHaveAttribute('aria-live', 'polite');
    expect(getBanner()).toHaveAttribute('data-diy-status', 'advisory');
    expect(getBanner()).toHaveTextContent('非标准 DIY · 原则与材料指引');
    expect(getBanner()).toHaveTextContent(jpn.pathways.work[0].advisoryNote!);

    // DEU work: bluecard (advisory) <-> chancenkarte (diy)
    document.documentElement.setAttribute('data-theme', 'dark');
    rerender(<StatefulCountryDetailHarness country={deu} initialTab="work" theme="dark" />);
    expect(getBanner()).toHaveAttribute('data-diy-status', 'advisory');
    expect(getBanner()).toHaveTextContent('非标准 DIY · 原则与材料指引');
    expect(getBanner()).toHaveTextContent(deu.pathways.work[0].advisoryNote!);
    // Uses CSS-var surfaces/text rather than hardcoded light hexes when dark theme is active
    expect(getBanner().innerHTML).not.toContain('#FDF8EE');
    expect(getBanner().innerHTML).toContain('bg-[var(--bg-soft)]');
    expect(getBanner().innerHTML).toContain('text-[var(--text-main)]');

    await user.click(document.querySelector('[data-sub-visa="chancenkarte"]')!);
    expect(getBanner()).toHaveAttribute('data-diy-status', 'diy');
    expect(getBanner()).toHaveTextContent('标准可 DIY 通道 · 支持个人按官方流程自助筹备递交');

    // Expanded country IND work is advisory with advisoryNote; also verify CSS vars even when theme prop is omitted under data-theme="dark"
    rerender(
      <CountryDetailView
        country={ind}
        activeTab="work"
        subVisaId={null}
        onBackHome={vi.fn()}
        onSelectTab={vi.fn()}
        onSelectSubVisa={vi.fn()}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );
    expect(getBanner()).toHaveAttribute('data-diy-status', 'advisory');
    expect(getBanner()).toHaveTextContent('非标准 DIY · 原则与材料指引');
    expect(getBanner()).toHaveTextContent(ind.pathways.work[0].advisoryNote!);
    expect(getBanner().innerHTML).not.toContain('#FDF8EE');
    expect(getBanner().innerHTML).toContain('border-l-[var(--ochre)]');

    // Advisory fallback to DEFAULT_ADVISORY_NOTE when advisoryNote is undefined or whitespace-only
    const advisoryWithoutNote: CountryData = {
      ...ind,
      pathways: {
        ...ind.pathways,
        work: [
          {
            ...ind.pathways.work[0],
            advisoryNote: undefined,
          },
        ],
      },
    };
    rerender(
      <CountryDetailView
        country={advisoryWithoutNote}
        activeTab="work"
        subVisaId={null}
        onBackHome={vi.fn()}
        onSelectTab={vi.fn()}
        onSelectSubVisa={vi.fn()}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );
    expect(getBanner()).toHaveTextContent(DEFAULT_ADVISORY_NOTE);

    const advisoryBlankNote: CountryData = {
      ...ind,
      pathways: {
        ...ind.pathways,
        work: [
          {
            ...ind.pathways.work[0],
            advisoryNote: '   ',
          },
        ],
      },
    };
    rerender(
      <CountryDetailView
        country={advisoryBlankNote}
        activeTab="work"
        subVisaId={null}
        onBackHome={vi.fn()}
        onSelectTab={vi.fn()}
        onSelectSubVisa={vi.fn()}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );
    expect(getBanner()).toHaveTextContent(DEFAULT_ADVISORY_NOTE);
  });

  it('renders PathwayOverviewCard subVisaCount pill and shared DiyStatusBadge for diy vs advisory pathways', async () => {
    const jpn = (await loadCountryByCode('JPN'))!;
    const deu = (await loadCountryByCode('DEU'))!;
    const workMeta = PATHWAY_CATEGORIES.find((c) => c.id === 'work')!;
    const studyMeta = PATHWAY_CATEGORIES.find((c) => c.id === 'study')!;

    const { rerender } = render(
      <PathwayOverviewCard
        category={studyMeta}
        subVisa={jpn.pathways.study[0]}
        subVisaCount={jpn.pathways.study.length}
      />
    );

    const studyCard = screen.getByRole('region', { name: '签证类别概览' });
    expect(studyCard).toHaveTextContent('标准 DIY');
    expect(studyCard).toHaveTextContent('单一主通道');
    expect(studyCard.querySelector('[data-diy-badge="diy"]')).toBeInTheDocument();

    rerender(
      <PathwayOverviewCard
        category={workMeta}
        subVisa={deu.pathways.work[0]}
        subVisaCount={deu.pathways.work.length}
      />
    );

    const workCard = screen.getByRole('region', { name: '签证类别概览' });
    expect(workCard).toHaveTextContent('原则指引');
    expect(workCard).toHaveTextContent('3 种独立通道');
    expect(workCard.querySelector('[data-diy-badge="advisory"]')).toBeInTheDocument();
  });

  it('supports ArrowRight, ArrowLeft, Home, and End keyboard navigation with wrap-around on tabs', async () => {
    const jpn = (await loadCountryByCode('JPN'))!;
    const onTabChange = vi.fn();

    render(
      <StatefulCountryDetailHarness
        country={jpn}
        initialTab="study"
        onTabChange={onTabChange}
      />
    );

    const studyTab = document.getElementById('detail-tab-study')!;
    const workTab = document.getElementById('detail-tab-work')!;
    const otherTab = document.getElementById('detail-tab-other')!;

    studyTab.focus();
    expect(document.activeElement).toBe(studyTab);

    // ArrowRight moves from study -> work
    fireEvent.keyDown(studyTab, { key: 'ArrowRight' });
    expect(onTabChange).toHaveBeenLastCalledWith('work');
    expect(document.activeElement).toBe(workTab);
    expect(workTab).toHaveAttribute('aria-selected', 'true');
    expect(workTab).toHaveAttribute('tabindex', '0');
    expect(studyTab).toHaveAttribute('tabindex', '-1');
    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', 'detail-tab-work');

    // ArrowLeft wraps back to study
    fireEvent.keyDown(workTab, { key: 'ArrowLeft' });
    expect(onTabChange).toHaveBeenLastCalledWith('study');
    expect(document.activeElement).toBe(studyTab);

    // ArrowLeft from first tab wraps around to last tab (other)
    fireEvent.keyDown(studyTab, { key: 'ArrowLeft' });
    expect(onTabChange).toHaveBeenLastCalledWith('other');
    expect(document.activeElement).toBe(otherTab);

    // ArrowRight from last tab wraps around to first tab (study)
    fireEvent.keyDown(otherTab, { key: 'ArrowRight' });
    expect(onTabChange).toHaveBeenLastCalledWith('study');
    expect(document.activeElement).toBe(studyTab);

    // End jumps to last tab, Home jumps back to first tab
    fireEvent.keyDown(studyTab, { key: 'End' });
    expect(onTabChange).toHaveBeenLastCalledWith('other');
    expect(document.activeElement).toBe(otherTab);

    fireEvent.keyDown(otherTab, { key: 'Home' });
    expect(onTabChange).toHaveBeenLastCalledWith('study');
    expect(document.activeElement).toBe(studyTab);
  });

  it('applies darkColor to category dots when theme is dark', async () => {
    const jpn = (await loadCountryByCode('JPN'))!;
    render(<StatefulCountryDetailHarness country={jpn} initialTab="study" theme="dark" />);

    const workMeta = PATHWAY_CATEGORIES.find((c) => c.id === 'work')!;
    const workDot = document
      .getElementById('detail-tab-work')!
      .querySelector('.cat-dot') as HTMLElement;
    expect(workDot).toHaveStyle({ backgroundColor: workMeta.darkColor });
  });

  it('switches pathway category tabs and remounts detail body grid with updated key', async () => {
    const user = userEvent.setup();
    const jpn = (await loadCountryByCode('JPN'))!;
    const onTabChange = vi.fn();

    render(
      <StatefulCountryDetailHarness
        country={jpn}
        initialTab="study"
        onTabChange={onTabChange}
      />
    );

    const initialGrid = document.getElementById('detail-body-grid')!;
    expect(initialGrid).toHaveClass('animate-tab-swap');
    expect(document.getElementById('stream-cat-label')).toHaveTextContent('留学签证类别 · STUDY');

    await user.click(
      document.getElementById('detail-category-tabs')!.querySelector('[data-detail-cat="work"]')!
    );
    expect(onTabChange).toHaveBeenCalledWith('work');

    const updatedGrid = document.getElementById('detail-body-grid')!;
    expect(updatedGrid).not.toBe(initialGrid);
    expect(updatedGrid).toHaveAttribute('aria-labelledby', 'detail-tab-work');
    expect(document.getElementById('stream-cat-label')).toHaveTextContent('工作签证类别 · WORK');
    expect(document.getElementById('sub-visa-selector')).toHaveTextContent('2 种独立签证');
  });

  it('renders DEU work multi-visa selector with 3 cards, explicit subVisaId, and invalid fallback', async () => {
    const user = userEvent.setup();
    const deu = (await loadCountryByCode('DEU'))!;
    const onSubVisaChange = vi.fn();

    const { rerender } = render(
      <CountryDetailView
        country={deu}
        activeTab="work"
        subVisaId="ausbildung"
        onBackHome={vi.fn()}
        onSelectTab={vi.fn()}
        onSelectSubVisa={onSubVisaChange}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );

    const selectorGroup = screen.getByRole('group', {
      name: '该类别包含多个独立签证，请点击选择进入对应详情：',
    });
    expect(selectorGroup).toHaveAttribute('id', 'sub-visa-selector');
    expect(selectorGroup).toHaveTextContent('3 种独立签证');

    // Explicit subVisaId selects 3rd card ("ausbildung")
    expect(document.getElementById('stream-title')).toHaveTextContent('双元制带薪职业培训');
    let cards = within(document.getElementById('sub-visa-cards')!).getAllByRole('button');
    expect(cards).toHaveLength(3);
    expect(cards[2]).toHaveAttribute('aria-pressed', 'true');
    expect(cards[2]).toHaveTextContent('当前查看');
    expect(cards[2]).toHaveClass(
      'border-[var(--accent-red)]',
      'bg-[var(--bg-paper)]',
      'shadow-sm'
    );
    expect(cards[0]).toHaveAttribute('aria-pressed', 'false');
    expect(cards[0]).toHaveTextContent('进入 →');
    expect(cards[0]).toHaveClass('border-[var(--border)]', 'bg-[var(--bg-card)]');

    // Invalid subVisaId falls back cleanly to first sub-visa ("bluecard")
    rerender(
      <CountryDetailView
        country={deu}
        activeTab="work"
        subVisaId="non-existent-id"
        onBackHome={vi.fn()}
        onSelectTab={vi.fn()}
        onSelectSubVisa={onSubVisaChange}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );
    expect(document.getElementById('stream-title')).toHaveTextContent('欧盟蓝卡');
    cards = within(document.getElementById('sub-visa-cards')!).getAllByRole('button');
    expect(cards[0]).toHaveTextContent('当前查看');
    expect(cards[0]).toHaveTextContent('参考费率：75 EUR');

    await user.click(cards[1]);
    expect(onSubVisaChange).toHaveBeenCalledWith('chancenkarte');
  });

  it('renders WorkflowStepsCard as a vertical milestone timeline with ordered badges and connectors', () => {
    const steps = [
      { title: '在线注册账号', detail: '登录官方门户创建个人申请账户。' },
      { title: '上传核验材料', detail: '按清单上传扫描件并缴纳签证规费。' },
      { title: '录指纹与贴签', detail: '预约前往签证中心提交原件并录入生物信息。' },
    ];

    const { rerender } = render(<WorkflowStepsCard steps={steps} />);

    const list = document.getElementById('stream-steps')!;
    expect(list.tagName).toBe('OL');
    expect(list).toHaveClass('timeline-track');

    const nodes = list.querySelectorAll('.timeline-node');
    expect(nodes).toHaveLength(3);

    const connectors = list.querySelectorAll('.timeline-connector');
    expect(connectors).toHaveLength(2);
    expect(nodes[0].querySelector('.timeline-connector')).not.toBeNull();
    expect(nodes[1].querySelector('.timeline-connector')).not.toBeNull();
    expect(nodes[2].querySelector('.timeline-connector')).toBeNull();

    const badges = list.querySelectorAll('.step-badge');
    expect(Array.from(badges).map((el) => el.textContent?.trim())).toEqual(['01', '02', '03']);
    for (const step of steps) {
      expect(list).toHaveTextContent(step.title);
      expect(list).toHaveTextContent(step.detail);
    }

    // Single-step timeline renders 1 node and 0 connectors
    rerender(<WorkflowStepsCard steps={[steps[0]]} />);
    expect(list.querySelectorAll('.timeline-node')).toHaveLength(1);
    expect(list.querySelectorAll('.timeline-connector')).toHaveLength(0);
    expect(list.querySelectorAll('.step-badge')[0]).toHaveTextContent('01');
  });

  it('updates checklist progressbar ARIA values, completion percentage readout (0% -> 50% -> 100%), and resets cleanly', async () => {
    const user = userEvent.setup();
    const jpn = (await loadCountryByCode('JPN'))!;
    const total = jpn.pathways.study[0].checklist.length;
    const onResetSpy = vi.fn();

    const { unmount } = render(
      <StatefulCountryDetailHarness
        country={jpn}
        initialTab="study"
        onResetSpy={onResetSpy}
      />
    );

    const progressBar = screen.getByRole('progressbar', { name: '材料准备进度' });
    const progressPct = document.getElementById('checklist-progress-pct')!;
    const readoutContainer = progressPct.parentElement!;
    expect(readoutContainer).toHaveAttribute('aria-live', 'polite');
    expect(readoutContainer).toHaveAttribute('aria-atomic', 'true');
    expect(progressBar).toHaveAttribute('id', 'checklist-progress-bar');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', String(total));
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    expect(progressBar).toHaveAttribute('aria-valuetext', '0%');
    expect(progressBar).toHaveStyle({ width: '0%' });
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(`0 / ${total}`);
    expect(progressPct).toHaveTextContent('0%');

    const checklistContainer = document.getElementById('checklist-items')!;
    expect(checklistContainer.tagName).toBe('UL');
    const checklistRows = within(checklistContainer).getAllByRole('listitem');
    expect(checklistRows).toHaveLength(total);

    const checkboxes = within(checklistContainer).getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    expect(checkboxes[0]).toBeChecked();
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(`1 / ${total}`);
    expect(progressBar).toHaveAttribute('aria-valuenow', '1');
    const expectedPct = Math.round((1 / total) * 100);
    expect(progressBar).toHaveAttribute('aria-valuetext', `${expectedPct}%`);
    expect(progressBar).toHaveStyle({ width: `${expectedPct}%` });
    expect(progressPct).toHaveTextContent(`${expectedPct}%`);

    await user.click(document.getElementById('reset-checklist-btn')!);
    expect(onResetSpy).toHaveBeenCalledWith('392', 'study', 'main');
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(`0 / ${total}`);
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    expect(progressBar).toHaveAttribute('aria-valuetext', '0%');
    expect(progressBar).toHaveStyle({ width: '0%' });
    expect(progressPct).toHaveTextContent('0%');

    unmount();
    localStorage.clear();

    // 2-item fixture verifying exact 0% -> 50% -> 100% -> 0% transitions and aria-valuetext
    const twoItemSubVisa: SubVisaItem = {
      id: 'fixture-two-items',
      title: '测试双项清单签证',
      fee: '100 USD',
      processing: '5–10 个工作日',
      submission: '官方在线网申',
      diySupport: 'diy',
      desc: '测试材料清单进度百分比计算。',
      tips: '核对两项基础材料。',
      steps: [{ title: '步骤一', detail: '在线提交。' }],
      checklist: ['有效期内中国因私护照原件', '近6个月银行流水单'],
    };
    const fixtureCountry: CountryData = {
      ...jpn,
      pathways: {
        ...jpn.pathways,
        tourism: [twoItemSubVisa],
      },
    };

    const twoItemRender = render(
      <StatefulCountryDetailHarness country={fixtureCountry} initialTab="tourism" />
    );

    const fixtureBar = screen.getByRole('progressbar', { name: '材料准备进度' });
    const fixturePct = document.getElementById('checklist-progress-pct')!;
    const fixtureCheckboxes = within(document.getElementById('checklist-items')!).getAllByRole(
      'checkbox'
    );
    expect(fixturePct).toHaveTextContent('0%');
    expect(fixtureBar).toHaveAttribute('aria-valuetext', '0%');

    await user.click(fixtureCheckboxes[0]);
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent('1 / 2');
    expect(fixturePct).toHaveTextContent('50%');
    expect(fixtureBar).toHaveAttribute('aria-valuetext', '50%');

    await user.click(fixtureCheckboxes[1]);
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent('2 / 2');
    expect(fixturePct).toHaveTextContent('100%');
    expect(fixtureBar).toHaveAttribute('aria-valuetext', '100%');

    await user.click(document.getElementById('reset-checklist-btn')!);
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent('0 / 2');
    expect(fixturePct).toHaveTextContent('0%');
    expect(fixtureBar).toHaveAttribute('aria-valuetext', '0%');

    twoItemRender.unmount();

    // Clamps aria-valuenow when getCheckedCount returns an out-of-range count
    render(
      <ChecklistCard
        country={jpn}
        activeTab="tourism"
        categoryLabel="旅游"
        subVisa={twoItemSubVisa}
        isItemChecked={() => true}
        getCheckedCount={() => 99}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );
    const clampedBar = screen.getByRole('progressbar', { name: '材料准备进度' });
    expect(clampedBar).toHaveAttribute('aria-valuemax', '2');
    expect(clampedBar).toHaveAttribute('aria-valuenow', '2');
    expect(clampedBar).toHaveAttribute('aria-valuetext', '100%');
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent('2 / 2');
  });

  it('persists checked items per pathway/sub-visa and isolates state across tabs, sub-visas, and countries', async () => {
    const user = userEvent.setup();
    const jpn = (await loadCountryByCode('JPN'))!;
    const deu = (await loadCountryByCode('DEU'))!;

    const { rerender } = render(
      <StatefulCountryDetailHarness country={jpn} initialTab="study" />
    );

    const studyTotal = jpn.pathways.study[0].checklist.length;
    const gijinkokuTotal = jpn.pathways.work[0].checklist.length;
    const sswTotal = jpn.pathways.work[1].checklist.length;

    // Check 1st item on JPN:study
    let checkboxes = within(document.getElementById('checklist-items')!).getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    expect(checkboxes[0]).toBeChecked();
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(
      `1 / ${studyTotal}`
    );

    // Switch to JPN:work (gijinkoku) -> isolated at 0%
    await user.click(document.getElementById('detail-tab-work')!);
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(
      `0 / ${gijinkokuTotal}`
    );
    expect(document.getElementById('checklist-progress-pct')).toHaveTextContent('0%');

    checkboxes = within(document.getElementById('checklist-items')!).getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(
      `1 / ${gijinkokuTotal}`
    );

    // Switch sub-visa to ssw -> isolated at 0%
    await user.click(document.querySelector('[data-sub-visa="ssw"]')!);
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(`0 / ${sswTotal}`);
    expect(document.getElementById('checklist-progress-pct')).toHaveTextContent('0%');

    // Return to JPN:study -> previously checked item persists
    await user.click(document.getElementById('detail-tab-study')!);
    checkboxes = within(document.getElementById('checklist-items')!).getAllByRole('checkbox');
    expect(checkboxes[0]).toBeChecked();
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(
      `1 / ${studyTotal}`
    );

    // Switch to DEU:study -> isolated from JPN:study
    rerender(<StatefulCountryDetailHarness key={deu.id} country={deu} initialTab="study" />);
    const deuStudyTotal = deu.pathways.study[0].checklist.length;
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(
      `0 / ${deuStudyTotal}`
    );
    expect(document.getElementById('checklist-progress-pct')).toHaveTextContent('0%');
  });

  it('renders specific (DS-160 / INZ 1027 / SGAC) and generic form links while preventing false-positive scoping across countries', async () => {
    const usa = (await loadCountryByCode('USA'))!;
    const nzl = (await loadCountryByCode('NZL'))!;
    const jpn = (await loadCountryByCode('JPN'))!;
    const sgp = (await loadCountryByCode('SGP'))!;

    const { rerender } = render(
      <ChecklistCard
        country={usa}
        activeTab="study"
        categoryLabel="留学"
        subVisa={usa.pathways.study[0]}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );

    const ds160Link = screen.getByRole('link', { name: '官网填报/下载 ↗' });
    expect(ds160Link).toHaveAttribute('href', 'https://ceac.state.gov/genniv/');
    expect(ds160Link).toHaveAttribute('target', '_blank');
    expect(ds160Link).toHaveAttribute('rel', 'noopener noreferrer');

    rerender(
      <ChecklistCard
        country={nzl}
        activeTab="study"
        categoryLabel="留学"
        subVisa={nzl.pathways.study[0]}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );

    const inzLink = screen.getByRole('link', { name: '官网下载表格 ↗' });
    expect(inzLink).toHaveAttribute('href', 'https://www.immigration.govt.nz/visas/');

    // Scoping regression: generic '许可'/'清单'/'回执' and SGAC must NOT match on non-Singapore pages
    const scopedFixtureSubVisa: SubVisaItem = {
      id: 'scoped-check',
      title: '作用域回归测试',
      fee: '0',
      processing: '5 个工作日',
      submission: '官网在线提交',
      diySupport: 'diy',
      desc: '验证表单关键词不会跨国误匹配。',
      tips: '仅真实表单关键词触发链接。',
      steps: [{ title: '步骤一', detail: '核对清单。' }],
      checklist: [
        '当地官方签发的工作许可批准函 (Work Permit)',
        'SGAC 电子入境卡确认回执',
        '指定医院体检回执',
        '5年出入境清单',
        '签证申请表',
      ],
    };

    rerender(
      <ChecklistCard
        country={jpn}
        activeTab="work"
        categoryLabel="工作"
        subVisa={scopedFixtureSubVisa}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );

    const nonSgpLinks = within(document.getElementById('checklist-items')!).getAllByRole('link');
    expect(nonSgpLinks).toHaveLength(1);
    expect(nonSgpLinks[0]).toHaveTextContent('前往官网下载 ↗');
    expect(nonSgpLinks[0]).toHaveAttribute('href', jpn.links[0].url);

    expect(
      within(screen.getByText('当地官方签发的工作许可批准函 (Work Permit)').closest('li')!).queryByRole(
        'link'
      )
    ).toBeNull();
    expect(
      within(screen.getByText('SGAC 电子入境卡确认回执').closest('li')!).queryByRole('link')
    ).toBeNull();
    expect(
      within(screen.getByText('指定医院体检回执').closest('li')!).queryByRole('link')
    ).toBeNull();
    expect(
      within(screen.getByText('5年出入境清单').closest('li')!).queryByRole('link')
    ).toBeNull();

    // On Singapore (SGP), SGAC matches the official ICA SGAC link
    rerender(
      <ChecklistCard
        country={sgp}
        activeTab="tourism"
        categoryLabel="旅游"
        subVisa={sgp.pathways.tourism[0]}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );
    const sgacLink = screen.getByRole('link', { name: '官方免费填报 ↗' });
    expect(sgacLink).toHaveAttribute(
      'href',
      'https://www.ica.gov.sg/information-and-e-services/entry-and-departure/entering-singapore/sg-arrival-card-with-electronic-health-declaration'
    );

    // Real JPN study checklist key & empty checklist edge case
    rerender(
      <ChecklistCard
        country={jpn}
        activeTab="study"
        categoryLabel="留学"
        subVisa={jpn.pathways.study[0]}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );

    const genericLinks = screen.getAllByRole('link', { name: '前往官网下载 ↗' });
    expect(genericLinks.length).toBeGreaterThanOrEqual(1);
    expect(genericLinks[0]).toHaveAttribute('href', jpn.links[0].url);
    expect(buildChecklistKey(jpn.id, 'study', jpn.pathways.study[0].id, 0)).toBe('392:study:main:0');

    const firstRow = screen.getByText('有效期内中国因私护照原件').closest('li')!;
    expect(within(firstRow).queryByRole('link')).toBeNull();

    rerender(
      <ChecklistCard
        country={jpn}
        activeTab="study"
        categoryLabel="留学"
        subVisa={{ ...jpn.pathways.study[0], checklist: [] }}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={vi.fn()}
      />
    );
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent('0 / 0');
    expect(document.getElementById('checklist-progress-pct')).toHaveTextContent('0%');
    expect(document.getElementById('checklist-progress-bar')).toHaveAttribute(
      'aria-valuetext',
      '0%'
    );
    expect(document.getElementById('checklist-progress-bar')).toHaveStyle({ width: '0%' });
  });

  it('copies formatted checklist via clipboard, falls back to execCommand on rejection, cleans up textarea, and notifies on failure', async () => {
    const jpn = (await loadCountryByCode('JPN'))!;
    const subVisa = jpn.pathways.study[0];
    const expectedText = formatChecklistText(jpn.nameZh, '留学', subVisa);
    const onNotify = vi.fn();

    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: writeTextMock },
    });

    render(
      <ChecklistCard
        country={jpn}
        activeTab="study"
        categoryLabel="留学"
        subVisa={subVisa}
        isItemChecked={() => false}
        getCheckedCount={() => 0}
        onToggleItem={vi.fn()}
        onResetChecklist={vi.fn()}
        onNotify={onNotify}
      />
    );

    const copyBtn = document.getElementById('copy-checklist-btn')!;
    expect(copyBtn).toHaveClass('copy-btn-primary');

    fireEvent.click(copyBtn);
    await waitFor(() => {
      expect(writeTextMock).toHaveBeenCalledWith(expectedText);
      expect(onNotify).toHaveBeenCalledWith('已复制材料清单到剪贴板');
    });

    // Rejection in navigator.clipboard.writeText falls back to document.execCommand('copy') and cleans up temporary textarea
    onNotify.mockClear();
    const rejectFallbackMock = vi.fn().mockRejectedValue(new Error('Permission denied'));
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: rejectFallbackMock },
    });
    const execCommandOnReject = vi.fn().mockImplementation(() => {
      const tempTextarea = document.body.querySelector('textarea');
      expect(tempTextarea).not.toBeNull();
      expect(tempTextarea).toHaveAttribute('aria-hidden', 'true');
      expect(tempTextarea).toHaveAttribute('tabindex', '-1');
      expect(tempTextarea?.value).toBe(expectedText);
      return true;
    });
    Object.defineProperty(document, 'execCommand', {
      configurable: true,
      value: execCommandOnReject,
    });

    copyBtn.focus();
    expect(document.activeElement).toBe(copyBtn);
    fireEvent.click(copyBtn);
    await waitFor(() => {
      expect(rejectFallbackMock).toHaveBeenCalledWith(expectedText);
      expect(execCommandOnReject).toHaveBeenCalledWith('copy');
      expect(onNotify).toHaveBeenCalledWith('已复制材料清单到剪贴板');
    });
    expect(document.querySelectorAll('textarea')).toHaveLength(0);
    expect(document.activeElement).toBe(copyBtn);

    // Fallback when navigator.clipboard is unavailable
    onNotify.mockClear();
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: undefined,
    });
    const execCommandNoClipboard = vi.fn().mockReturnValue(true);
    Object.defineProperty(document, 'execCommand', {
      configurable: true,
      value: execCommandNoClipboard,
    });

    fireEvent.click(copyBtn);
    await waitFor(() => {
      expect(execCommandNoClipboard).toHaveBeenCalledWith('copy');
      expect(onNotify).toHaveBeenCalledWith('已复制材料清单到剪贴板');
    });
    expect(document.querySelectorAll('textarea')).toHaveLength(0);

    // Failure path when clipboard rejects and execCommand returns false
    onNotify.mockClear();
    const rejectFailMock = vi.fn().mockRejectedValue(new Error('Clipboard blocked'));
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: rejectFailMock },
    });
    Object.defineProperty(document, 'execCommand', {
      configurable: true,
      value: vi.fn().mockReturnValue(false),
    });

    fireEvent.click(copyBtn);
    await waitFor(() => {
      expect(onNotify).toHaveBeenCalledWith('复制失败，请手动复制');
    });
    expect(document.querySelectorAll('textarea')).toHaveLength(0);
  });
});
