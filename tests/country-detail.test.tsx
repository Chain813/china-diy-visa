import { useState } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { findCountryByCode } from '../src/data';
import { PATHWAY_CATEGORIES } from '../src/data/categories';
import { buildChecklistKey, formatChecklistText, useChecklist } from '../src/hooks/useChecklist';
import type { PathwayCategoryId, ThemeMode } from '../src/types/visa';
import { CountryDetailView } from '../src/components/country/CountryDetailView';
import { ChecklistCard } from '../src/components/country/ChecklistCard';

function StatefulCountryDetailHarness({
  countryCode,
  initialTab = 'study',
  initialSubVisaId = null,
  theme = 'light',
  onBackHome = vi.fn(),
  onNotify = vi.fn(),
  onTabChange,
  onSubVisaChange,
  onResetSpy,
}: {
  countryCode: string;
  initialTab?: PathwayCategoryId;
  initialSubVisaId?: string | null;
  theme?: ThemeMode;
  onBackHome?: () => void;
  onNotify?: (msg: string) => void;
  onTabChange?: (tab: PathwayCategoryId) => void;
  onSubVisaChange?: (subVisaId: string) => void;
  onResetSpy?: (countryId: string, tab: PathwayCategoryId, subVisaId: string) => void;
}) {
  const country = findCountryByCode(countryCode)!;
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

  it('renders JPN metadata, WAI-ARIA tabs/panel, heading hierarchy, pitfalls, steps, and links', async () => {
    const user = userEvent.setup();
    const jpn = findCountryByCode('JPN')!;
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
    expect(backBtn).toHaveTextContent('← 返回 3D 全球地球');
    await user.click(backBtn);
    expect(onBackHome).toHaveBeenCalledTimes(1);

    expect(document.getElementById('country-region-badge')).toHaveTextContent(jpn.region);
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    expect(document.getElementById('detail-country-en')).toHaveTextContent('Japan (JPN)');
    expect(document.getElementById('detail-country-summary')).toHaveTextContent(jpn.summary);
    expect(document.getElementById('detail-processing')).toHaveTextContent(jpn.processing);
    expect(document.getElementById('detail-submission')).toHaveTextContent(jpn.submission);

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
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    expect(tabs[1]).toHaveAttribute('tabindex', '-1');

    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toHaveAttribute('id', 'detail-body-grid');
    expect(tabpanel).toHaveAttribute('aria-labelledby', 'detail-tab-study');

    await user.click(tablist.querySelector('[data-detail-cat="work"]')!);
    expect(onSelectTab).toHaveBeenCalledWith('work');

    // Single sub-visa pathway hides sub-visa selector
    expect(document.getElementById('sub-visa-selector')).toBeNull();

    const studyVisa = jpn.pathways.study[0];
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
    expect(screen.getByText('DIY 全流程步骤 / STEP-BY-STEP WORKFLOW')).toBeInTheDocument();
    expect(screen.getByText('按办理顺序执行')).toBeInTheDocument();
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

  it('supports ArrowRight, ArrowLeft, Home, and End keyboard navigation with wrap-around on tabs', () => {
    const onTabChange = vi.fn();

    render(
      <StatefulCountryDetailHarness
        countryCode="JPN"
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

  it('applies darkColor to category dots when theme is dark', () => {
    render(<StatefulCountryDetailHarness countryCode="JPN" initialTab="study" theme="dark" />);

    const workMeta = PATHWAY_CATEGORIES.find((c) => c.id === 'work')!;
    const workDot = document
      .getElementById('detail-tab-work')!
      .querySelector('.cat-dot') as HTMLElement;
    expect(workDot).toHaveStyle({ backgroundColor: workMeta.darkColor });
  });

  it('switches pathway category tabs and remounts detail body grid with updated key', async () => {
    const user = userEvent.setup();
    const onTabChange = vi.fn();

    render(
      <StatefulCountryDetailHarness
        countryCode="JPN"
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
    const deu = findCountryByCode('DEU')!;
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

  it('updates checklist progressbar ARIA values and resets checked items cleanly', async () => {
    const user = userEvent.setup();
    const jpn = findCountryByCode('JPN')!;
    const total = jpn.pathways.study[0].checklist.length;
    const onResetSpy = vi.fn();

    render(
      <StatefulCountryDetailHarness
        countryCode="JPN"
        initialTab="study"
        onResetSpy={onResetSpy}
      />
    );

    const progressBar = screen.getByRole('progressbar', { name: '材料准备进度' });
    expect(progressBar).toHaveAttribute('id', 'checklist-progress-bar');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', String(total));
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    expect(progressBar).toHaveStyle({ width: '0%' });
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(`0 / ${total}`);

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
    expect(progressBar).toHaveStyle({ width: `${expectedPct}%` });

    await user.click(document.getElementById('reset-checklist-btn')!);
    expect(onResetSpy).toHaveBeenCalledWith('392', 'study', 'main');
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent(`0 / ${total}`);
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    expect(progressBar).toHaveStyle({ width: '0%' });
  });

  it('renders specific (DS-160 / INZ 1027) and generic official form download links in checklist', () => {
    const usa = findCountryByCode('USA')!;
    const nzl = findCountryByCode('NZL')!;
    const jpn = findCountryByCode('JPN')!;

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
    expect(document.getElementById('checklist-progress-bar')).toHaveStyle({ width: '0%' });
  });

  it('copies formatted checklist via clipboard, falls back to execCommand on rejection, cleans up textarea, and notifies on failure', async () => {
    const jpn = findCountryByCode('JPN')!;
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

    fireEvent.click(copyBtn);
    await waitFor(() => {
      expect(rejectFallbackMock).toHaveBeenCalledWith(expectedText);
      expect(execCommandOnReject).toHaveBeenCalledWith('copy');
      expect(onNotify).toHaveBeenCalledWith('已复制材料清单到剪贴板');
    });
    expect(document.querySelectorAll('textarea')).toHaveLength(0);

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
