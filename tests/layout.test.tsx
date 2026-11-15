import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { COUNTRY_DIRECTORY, findSummaryByCode } from '../src/data';
import { CATEGORIES } from '../src/data/categories';
import type { CategoryId, CountrySummary } from '../src/types/visa';
import { Footer } from '../src/components/layout/Footer';
import { Header, type HeaderProps } from '../src/components/layout/Header';
import { SearchDropdown } from '../src/components/layout/SearchDropdown';
import { Toast } from '../src/components/layout/Toast';

afterEach(() => {
  delete document.documentElement.dataset.theme;
  vi.restoreAllMocks();
});

function makeSummary(
  overrides: Partial<CountrySummary> & {
    id: string;
    code: string;
    nameZh: string;
    nameEn: string;
  }
): CountrySummary {
  const { id, code, nameZh, nameEn, ...rest } = overrides;
  return {
    id,
    code,
    regionId: 'europe',
    region: '欧洲 / EUROPE',
    nameZh,
    nameEn,
    coords: [10.45, 51.16],
    badge: '申根签证',
    tierColor: '#4A7B82',
    labelPriority: true,
    diyCategories: ['study', 'work', 'immigration', 'tourism', 'other'],
    previewTitles: {
      study: '留学学生签证',
      work: '工作签证',
      immigration: '永久居留',
      tourism: '短期旅游签证',
      other: '探亲访友签证',
    },
    searchText: `${code.toLowerCase()} ${nameZh} ${nameEn.toLowerCase()}`,
    ...rest,
  };
}

const GERMANY_SUMMARY =
  findSummaryByCode('DEU') ??
  makeSummary({ id: '276', code: 'DEU', nameZh: '德国', nameEn: 'Germany' });

const JAPAN_SUMMARY =
  findSummaryByCode('JPN') ??
  makeSummary({
    id: '392',
    code: 'JPN',
    regionId: 'asia-pacific',
    nameZh: '日本',
    nameEn: 'Japan',
    diyCategories: ['study', 'immigration', 'tourism'],
  });

const SAMPLE_SUMMARIES: CountrySummary[] = [GERMANY_SUMMARY, JAPAN_SUMMARY];

function makeHeaderProps(overrides: Partial<HeaderProps> = {}): HeaderProps {
  return {
    activeCategory: 'all',
    onSelectCategory: vi.fn(),
    searchQuery: '',
    onSearchChange: vi.fn(),
    onClearSearch: vi.fn(),
    searchResults: SAMPLE_SUMMARIES,
    onSelectSearchResult: vi.fn(),
    isDirectoryOpen: true,
    onToggleDirectory: vi.fn(),
    theme: 'light',
    onToggleTheme: vi.fn(),
    ...overrides,
  };
}

describe('SearchDropdown', () => {
  it('returns null when closed or query is empty/whitespace', () => {
    const onSelect = vi.fn();
    const { container, rerender } = render(
      <SearchDropdown
        query="德国"
        results={SAMPLE_SUMMARIES}
        activeCategory="all"
        isOpen={false}
        onSelect={onSelect}
      />
    );
    expect(container.querySelector('#search-dropdown')).toBeNull();

    rerender(
      <SearchDropdown
        query="   "
        results={SAMPLE_SUMMARIES}
        activeCategory="all"
        isOpen={true}
        onSelect={onSelect}
      />
    );
    expect(container.querySelector('#search-dropdown')).toBeNull();
  });

  it('renders empty state safely via React JSX without raw HTML injection', () => {
    const { container, rerender } = render(
      <SearchDropdown
        query="  火星  "
        results={[]}
        activeCategory="all"
        isOpen={true}
        onSelect={vi.fn()}
      />
    );
    const listbox = screen.getByRole('listbox', { name: '搜索结果' });
    expect(listbox).toHaveAttribute('id', 'search-dropdown');
    expect(
      within(listbox).getByText('未找到匹配“火星”的国家或签证关键词')
    ).toBeInTheDocument();

    rerender(
      <SearchDropdown
        query='<img src="x" onerror="alert(1)" />'
        results={[]}
        activeCategory="all"
        isOpen={true}
        onSelect={vi.fn()}
      />
    );
    expect(container.querySelector('img')).toBeNull();
    expect(
      screen.getByText('未找到匹配“<img src="x" onerror="alert(1)" />”的国家或签证关键词')
    ).toBeInTheDocument();
  });

  it('truncates to 12 items, shows tierColor & DIY match indicators, and calls onSelect with CountrySummary', () => {
    const manySummaries: CountrySummary[] = COUNTRY_DIRECTORY.slice(0, 15).map(
      (item, index) => ({
        ...item,
        nameZh: `国家${index + 1}`,
        nameEn: `Country ${index + 1}`,
        badge: `徽章${index + 1}`,
        tierColor: index % 2 === 0 ? '#4A7B82' : '#789882',
        diyCategories: index === 0 ? ['study', 'work', 'tourism'] : ['tourism'],
        previewTitles: {
          study: `留学项目${index + 1}`,
          work: `工签项目${index + 1}`,
          immigration: `移民项目${index + 1}`,
          tourism: `旅游项目${index + 1}`,
          other: `其他项目${index + 1}`,
        },
      })
    );

    const onSelect = vi.fn();
    const { rerender } = render(
      <SearchDropdown
        query="国"
        results={manySummaries}
        activeCategory="all"
        isOpen={true}
        onSelect={onSelect}
      />
    );

    const dropdown = screen.getByRole('listbox', { name: '搜索结果' });
    expect(dropdown).toHaveAttribute('id', 'search-dropdown');
    expect(within(dropdown).getByText('搜索结果 (15 国)')).toBeInTheDocument();
    expect(within(dropdown).getByText('点击或回车直达')).toBeInTheDocument();

    const options = within(dropdown).getAllByRole('option');
    expect(options).toHaveLength(12);
    expect(options[0]).toHaveAttribute('id', `search-option-${manySummaries[0].code}`);
    expect(options[0]).toHaveAttribute('aria-selected', 'false');
    expect(options[0]).toHaveAttribute('data-search-country', manySummaries[0].id);
    expect(options[0]).toHaveAttribute('data-diy-match', 'true');
    expect(within(options[0]).getByText('Country 1')).toBeInTheDocument();
    expect(within(options[0]).getByText('3类可DIY')).toBeInTheDocument();
    expect(within(dropdown).getByText('徽章1 · 旅游项目1')).toBeInTheDocument();

    const firstTierDot = options[0].querySelector('[aria-hidden="true"]') as HTMLElement;
    expect(firstTierDot.style.backgroundColor).toBe('rgb(74, 123, 130)');
    const secondTierDot = options[1].querySelector('[aria-hidden="true"]') as HTMLElement;
    expect(secondTierDot.style.backgroundColor).toBe('rgb(120, 152, 130)');

    rerender(
      <SearchDropdown
        query="国"
        results={manySummaries}
        activeCategory="work"
        isOpen={true}
        onSelect={onSelect}
      />
    );

    const updatedDropdown = screen.getByRole('listbox', { name: '搜索结果' });
    const updatedOptions = within(updatedDropdown).getAllByRole('option');
    expect(within(updatedDropdown).getByText('徽章1 · 工签项目1')).toBeInTheDocument();
    expect(updatedOptions[0]).toHaveAttribute('data-diy-match', 'true');
    expect(within(updatedOptions[0]).getByText('DIY 匹配')).toBeInTheDocument();
    expect(updatedOptions[1]).toHaveAttribute('data-diy-match', 'false');
    expect(within(updatedOptions[1]).getByText('原则提示')).toBeInTheDocument();

    fireEvent.click(updatedOptions[0]);
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(manySummaries[0]);
  });

  it('omits separator when pathway preview or badge is empty', () => {
    const sparseSummaries: CountrySummary[] = [
      makeSummary({
        id: '901',
        code: 'AAA',
        nameZh: '测试国A',
        nameEn: 'Test A',
        badge: '免签入境',
        diyCategories: ['tourism'],
        previewTitles: {
          study: '',
          work: '',
          immigration: '',
          tourism: '',
          other: '',
        },
      }),
      makeSummary({
        id: '902',
        code: 'BBB',
        nameZh: '测试国B',
        nameEn: 'Test B',
        badge: '',
        diyCategories: ['work'],
        previewTitles: {
          study: '',
          work: '工作许可',
          immigration: '',
          tourism: '',
          other: '',
        },
      }),
    ];

    render(
      <SearchDropdown
        query="测试"
        results={sparseSummaries}
        activeCategory="work"
        isOpen={true}
        onSelect={vi.fn()}
      />
    );

    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveTextContent('免签入境');
    expect(options[0]).not.toHaveTextContent('免签入境 ·');
    expect(options[1]).toHaveTextContent('工作许可');
    expect(options[1]).not.toHaveTextContent('· 工作许可');
  });
});

describe('Header', () => {
  it('renders brand title, desktop & horizontal-scroll mobile category navs, and invokes onSelectCategory for every category', async () => {
    const user = userEvent.setup();
    const onSelectCategory = vi.fn();
    const { container, rerender } = render(
      <Header {...makeHeaderProps({ activeCategory: 'work', onSelectCategory })} />
    );

    expect(
      screen.getByRole('heading', { level: 1, name: '中国公民 DIY 出国签证指南' })
    ).toBeInTheDocument();

    const navs = screen.getAllByRole('navigation', { name: '签证五大类导航' });
    expect(navs).toHaveLength(2);

    const desktopNav = container.querySelector('#category-nav') as HTMLElement;
    const mobileNav = container.querySelector('#category-nav-mobile') as HTMLElement;
    expect(navs[0]).toContainElement(desktopNav);
    expect(navs[1]).toContainElement(mobileNav);
    expect(mobileNav).toHaveClass('overflow-x-auto');

    const desktopButtons = within(desktopNav).getAllByRole('button');
    const mobileButtons = within(mobileNav).getAllByRole('button');
    expect(desktopButtons).toHaveLength(CATEGORIES.length);
    expect(mobileButtons).toHaveLength(CATEGORIES.length);

    for (const button of [...desktopButtons, ...mobileButtons]) {
      expect(button).toHaveClass('whitespace-nowrap', 'shrink-0');
    }

    expect(within(desktopNav).getByRole('button', { name: '工作' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(within(desktopNav).getByRole('button', { name: '工作' })).toHaveClass(
      'cat-pill',
      'active'
    );
    expect(within(desktopNav).getByRole('button', { name: '留学' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
    expect(within(mobileNav).getByRole('button', { name: '工作' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );

    const expectedClicks: Array<{ label: string; id: CategoryId }> = [
      { label: '全部国家', id: 'all' },
      { label: '留学', id: 'study' },
      { label: '工作', id: 'work' },
      { label: '移民', id: 'immigration' },
      { label: '旅游', id: 'tourism' },
      { label: '其他', id: 'other' },
    ];

    for (const entry of expectedClicks) {
      await user.click(within(desktopNav).getByRole('button', { name: entry.label }));
      expect(onSelectCategory).toHaveBeenCalledWith(entry.id);
    }

    await user.click(within(mobileNav).getByRole('button', { name: '移民' }));
    expect(onSelectCategory).toHaveBeenCalledWith('immigration');

    rerender(
      <Header {...makeHeaderProps({ activeCategory: 'study', onSelectCategory })} />
    );
    const updatedDesktopNav = container.querySelector('#category-nav') as HTMLElement;
    expect(
      within(updatedDesktopNav).getByRole('button', { name: '留学' })
    ).toHaveAttribute('aria-pressed', 'true');
    expect(
      within(updatedDesktopNav).getByRole('button', { name: '工作' })
    ).toHaveAttribute('aria-pressed', 'false');
  });

  it('uses visible category dot colors in both light and dark themes', () => {
    const { container, rerender } = render(<Header {...makeHeaderProps({ theme: 'light' })} />);

    const lightAllDot = container.querySelector(
      '#category-nav [data-category="all"] .cat-dot'
    ) as HTMLElement;
    const lightStudyDot = container.querySelector(
      '#category-nav [data-category="study"] .cat-dot'
    ) as HTMLElement;
    expect(lightAllDot.style.backgroundColor).toBe('rgb(31, 35, 40)');
    expect(lightStudyDot.style.backgroundColor).toBe('rgb(74, 123, 130)');

    rerender(<Header {...makeHeaderProps({ theme: 'dark' })} />);

    const darkAllDot = container.querySelector(
      '#category-nav [data-category="all"] .cat-dot'
    ) as HTMLElement;
    const darkStudyDot = container.querySelector(
      '#category-nav [data-category="study"] .cat-dot'
    ) as HTMLElement;
    expect(darkAllDot.style.backgroundColor).toBe('rgb(236, 239, 244)');
    expect(darkStudyDot.style.backgroundColor).toBe('rgb(90, 154, 163)');
  });

  it('renders #toggle-directory-btn when onToggleDirectory is provided and omits it when undefined', async () => {
    const user = userEvent.setup();
    const onToggleDirectory = vi.fn();
    const onToggleTheme = vi.fn();

    const { container, rerender } = render(
      <Header
        {...makeHeaderProps({
          isDirectoryOpen: false,
          onToggleDirectory,
          theme: 'light',
          onToggleTheme,
        })}
      />
    );

    expect(container.querySelector('#toggle-spin-btn')).toBeNull();

    const dirBtn = screen.getByRole('button', { name: '国家目录' });
    expect(dirBtn).toHaveAttribute('id', 'toggle-directory-btn');
    expect(dirBtn).toHaveAttribute('type', 'button');
    expect(dirBtn).toHaveAttribute('aria-controls', 'country-directory-panel');
    expect(dirBtn).toHaveAttribute('aria-expanded', 'false');
    expect(dirBtn).toHaveAttribute('aria-pressed', 'false');
    expect(dirBtn).toHaveAttribute('title', '展开国家目录');

    const themeBtn = screen.getByRole('button', { name: '黑夜' });
    expect(themeBtn).toHaveAttribute('id', 'theme-toggle-btn');
    expect(themeBtn).toHaveTextContent('🌙');

    await user.click(dirBtn);
    await user.click(themeBtn);
    expect(onToggleDirectory).toHaveBeenCalledTimes(1);
    expect(onToggleTheme).toHaveBeenCalledTimes(1);

    rerender(
      <Header
        {...makeHeaderProps({
          isDirectoryOpen: true,
          onToggleDirectory,
          theme: 'dark',
          onToggleTheme,
        })}
      />
    );

    const openDirBtn = screen.getByRole('button', { name: '国家目录' });
    expect(openDirBtn).toHaveAttribute('aria-expanded', 'true');
    expect(openDirBtn).toHaveAttribute('aria-pressed', 'true');
    expect(openDirBtn).toHaveAttribute('title', '收起国家目录');

    const updatedThemeBtn = screen.getByRole('button', { name: '日间' });
    expect(updatedThemeBtn).toHaveAttribute('id', 'theme-toggle-btn');
    expect(updatedThemeBtn).toHaveTextContent('☀️');

    rerender(
      <Header
        {...makeHeaderProps({
          isDirectoryOpen: undefined,
          onToggleDirectory: undefined,
          theme: 'light',
          onToggleTheme,
        })}
      />
    );

    expect(container.querySelector('#toggle-directory-btn')).toBeNull();
    expect(screen.queryByRole('button', { name: '国家目录' })).toBeNull();
  });

  it('renders #brand-home-btn inside the h1 landmark when onGoHome is provided and omits it when undefined', async () => {
    const user = userEvent.setup();
    const onGoHome = vi.fn();

    const { container, rerender } = render(
      <Header {...makeHeaderProps({ onGoHome })} />
    );

    const heading = screen.getByRole('heading', { level: 1, name: '中国公民 DIY 出国签证指南' });
    const brandBtn = container.querySelector('#brand-home-btn');
    expect(brandBtn).toBeInTheDocument();
    expect(brandBtn?.tagName).toBe('BUTTON');
    expect(brandBtn).toHaveAttribute('type', 'button');
    expect(heading).toContainElement(brandBtn as HTMLElement);

    await user.click(brandBtn!);
    expect(onGoHome).toHaveBeenCalledTimes(1);

    rerender(<Header {...makeHeaderProps({ onGoHome: undefined })} />);
    expect(container.querySelector('#brand-home-btn')).toBeNull();
    expect(screen.getByRole('heading', { level: 1, name: '中国公民 DIY 出国签证指南' })).toBeInTheDocument();
  });

  it('manages combobox ARIA attributes, search input, clear button, inside/outside clicks, Escape, and CountrySummary selection', async () => {
    const user = userEvent.setup();
    const onSearchChange = vi.fn();
    const onClearSearch = vi.fn();
    const onSelectSearchResult = vi.fn();

    const { container, rerender } = render(
      <div>
        <Header
          {...makeHeaderProps({
            searchQuery: '',
            onSearchChange,
            onClearSearch,
            onSelectSearchResult,
          })}
        />
        <button type="button">外部区域</button>
      </div>
    );

    const initialInput = screen.getByRole('combobox', {
      name: '搜索国家或签证关键词',
    }) as HTMLInputElement;
    expect(initialInput).toHaveAttribute('id', 'global-search');
    expect(initialInput).toHaveAttribute('aria-expanded', 'false');
    expect(initialInput).not.toHaveAttribute('aria-controls');
    expect(initialInput).not.toHaveAttribute('aria-activedescendant');
    expect(initialInput).toHaveAttribute('aria-autocomplete', 'list');
    expect(initialInput).toHaveAttribute(
      'placeholder',
      '搜索国家 / 免签 / 蓝卡 / WHV...'
    );
    expect(initialInput).toHaveAttribute('autocomplete', 'off');

    const clearBtnInitial = container.querySelector('#clear-search-btn') as HTMLElement;
    expect(clearBtnInitial).not.toBeVisible();
    expect(container.querySelector('#search-dropdown')).toBeNull();

    fireEvent.change(initialInput, { target: { value: '   ' } });
    expect(onSearchChange).toHaveBeenCalledWith('   ');
    rerender(
      <div>
        <Header
          {...makeHeaderProps({
            searchQuery: '   ',
            searchResults: SAMPLE_SUMMARIES,
            onSearchChange,
            onClearSearch,
            onSelectSearchResult,
          })}
        />
        <button type="button">外部区域</button>
      </div>
    );
    const whitespaceInput = screen.getByRole('combobox', {
      name: '搜索国家或签证关键词',
    });
    fireEvent.focus(whitespaceInput);
    expect(whitespaceInput).toHaveAttribute('aria-expanded', 'false');
    expect(container.querySelector('#search-dropdown')).toBeNull();
    expect(screen.getByRole('button', { name: '清空搜索' })).toBeVisible();

    fireEvent.change(whitespaceInput, { target: { value: '德国' } });
    expect(onSearchChange).toHaveBeenCalledWith('德国');

    rerender(
      <div>
        <Header
          {...makeHeaderProps({
            searchQuery: '德国',
            searchResults: [GERMANY_SUMMARY],
            onSearchChange,
            onClearSearch,
            onSelectSearchResult,
          })}
        />
        <button type="button">外部区域</button>
      </div>
    );

    const searchInput = screen.getByRole('combobox', {
      name: '搜索国家或签证关键词',
    });
    const clearBtn = screen.getByRole('button', { name: '清空搜索' });
    expect(clearBtn).toBeVisible();
    expect(searchInput).toHaveAttribute('aria-expanded', 'true');
    expect(searchInput).toHaveAttribute('aria-controls', 'search-dropdown');
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();

    const germanyOption = screen.getByRole('option', { name: /德国/ });
    fireEvent.mouseDown(germanyOption);
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();

    fireEvent.keyDown(searchInput, { key: 'Escape' });
    expect(searchInput).toHaveAttribute('aria-expanded', 'false');
    expect(searchInput).not.toHaveAttribute('aria-controls');
    expect(container.querySelector('#search-dropdown')).toBeNull();

    fireEvent.focus(searchInput);
    expect(searchInput).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '外部区域' }));
    expect(searchInput).toHaveAttribute('aria-expanded', 'false');
    expect(container.querySelector('#search-dropdown')).toBeNull();

    fireEvent.focus(searchInput);
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(container.querySelector('#search-dropdown')).toBeNull();

    fireEvent.focus(searchInput);
    const germanyRow = screen.getByRole('option', { name: /德国/ });
    await user.click(germanyRow);
    expect(onSelectSearchResult).toHaveBeenCalledWith(GERMANY_SUMMARY);
    expect(searchInput).toHaveAttribute('aria-expanded', 'false');
    expect(container.querySelector('#search-dropdown')).toBeNull();

    fireEvent.focus(searchInput);
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '清空搜索' }));
    expect(onClearSearch).toHaveBeenCalledTimes(1);
    expect(searchInput).toHaveFocus();
    expect(container.querySelector('#search-dropdown')).toBeNull();
  });

  it('closes dropdown when Tab moves focus outside search container while keeping it open on internal Tab', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <div>
        <Header
          {...makeHeaderProps({
            searchQuery: '德',
            searchResults: SAMPLE_SUMMARIES,
          })}
        />
        <button type="button">外部区域</button>
      </div>
    );

    const searchInput = screen.getByRole('combobox', {
      name: '搜索国家或签证关键词',
    });
    const clearBtn = screen.getByRole('button', { name: '清空搜索' });
    const searchContainer = searchInput.closest('div.relative')?.parentElement as HTMLElement;

    await user.click(searchInput);
    expect(searchInput).toHaveFocus();
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();

    await user.tab();
    expect(clearBtn).toHaveFocus();
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();

    await user.tab();
    expect(searchContainer.contains(document.activeElement)).toBe(false);
    expect(searchInput).toHaveAttribute('aria-expanded', 'false');
    expect(searchInput).not.toHaveAttribute('aria-controls');
    expect(container.querySelector('#search-dropdown')).toBeNull();
  });

  it('supports ArrowDown, ArrowUp, and Enter keyboard navigation across up to 12 rendered options', () => {
    const onSelectSearchResult = vi.fn();
    const manySummaries = COUNTRY_DIRECTORY.slice(0, 15);

    const { container, rerender } = render(
      <Header
        {...makeHeaderProps({
          searchQuery: '国',
          searchResults: manySummaries,
          onSelectSearchResult,
        })}
      />
    );

    const searchInput = screen.getByRole('combobox', {
      name: '搜索国家或签证关键词',
    });
    fireEvent.focus(searchInput);
    expect(searchInput).not.toHaveAttribute('aria-activedescendant');

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(12);

    // ArrowDown starts at index 0
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    expect(searchInput).toHaveAttribute(
      'aria-activedescendant',
      `search-option-${manySummaries[0].code}`
    );
    expect(options[0]).toHaveAttribute('aria-selected', 'true');
    expect(options[1]).toHaveAttribute('aria-selected', 'false');

    // ArrowDown moves to index 1
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    expect(searchInput).toHaveAttribute(
      'aria-activedescendant',
      `search-option-${manySummaries[1].code}`
    );
    expect(options[0]).toHaveAttribute('aria-selected', 'false');
    expect(options[1]).toHaveAttribute('aria-selected', 'true');

    // ArrowUp moves back to 0, then wraps to 11 (last rendered item out of 12)
    fireEvent.keyDown(searchInput, { key: 'ArrowUp' });
    expect(searchInput).toHaveAttribute(
      'aria-activedescendant',
      `search-option-${manySummaries[0].code}`
    );
    fireEvent.keyDown(searchInput, { key: 'ArrowUp' });
    expect(searchInput).toHaveAttribute(
      'aria-activedescendant',
      `search-option-${manySummaries[11].code}`
    );
    expect(options[11]).toHaveAttribute('aria-selected', 'true');

    // ArrowDown from 11 wraps back to 0
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    expect(searchInput).toHaveAttribute(
      'aria-activedescendant',
      `search-option-${manySummaries[0].code}`
    );

    // Query change resets active index
    rerender(
      <Header
        {...makeHeaderProps({
          searchQuery: '国a',
          searchResults: manySummaries,
          onSelectSearchResult,
        })}
      />
    );
    expect(searchInput).not.toHaveAttribute('aria-activedescendant');

    // Navigate to second option and select with Enter
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    expect(onSelectSearchResult).toHaveBeenCalledTimes(1);
    expect(onSelectSearchResult).toHaveBeenCalledWith(manySummaries[1]);
    expect(searchInput).toHaveAttribute('aria-expanded', 'false');
    expect(container.querySelector('#search-dropdown')).toBeNull();
  });

  it('cleans up document event listeners on unmount', () => {
    const removeSpy = vi.spyOn(document, 'removeEventListener');
    try {
      const { unmount } = render(<Header {...makeHeaderProps()} />);
      unmount();

      const removedTypes = removeSpy.mock.calls.map(([type]) => type);
      expect(removedTypes).toContain('mousedown');
      expect(removedTypes).toContain('keydown');
    } finally {
      removeSpy.mockRestore();
    }
  });
});

describe('Footer', () => {
  it('renders 102-country flat-map copy, MIT/CC BY 4.0 note, portal metadata, and @routeking_ link', () => {
    render(<Footer />);

    expect(
      screen.getByText(/102 国平铺世界地图 & 通道分层指南/)
    ).toBeInTheDocument();
    expect(screen.getByText(/MIT/)).toBeInTheDocument();
    expect(screen.getByText(/CC BY 4\.0/)).toBeInTheDocument();
    expect(screen.getByText('CHINA DIY VISA PORTAL · 102 DESTINATIONS')).toBeInTheDocument();

    const xLink = document.getElementById('footer-x-link') as HTMLAnchorElement;
    expect(xLink).toBeInTheDocument();
    expect(xLink).toHaveAttribute('href', 'https://x.com/routeking_');
    expect(xLink).toHaveAttribute('target', '_blank');
    expect(xLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(xLink).toHaveTextContent('@routeking_');

    const svg = xLink.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('Toast, CSS theme tokens, and index.html metadata', () => {
  it('toggles visibility class and renders message with polite status role in light and dark mode', () => {
    document.documentElement.dataset.theme = 'dark';
    const { rerender } = render(<Toast message="已复制链接" visible={true} />);
    const initialToast = screen.getByRole('status');
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(initialToast).toHaveAttribute('id', 'toast');
    expect(initialToast).toHaveAttribute('aria-live', 'polite');
    expect(initialToast).toHaveClass('toast-banner', 'show');
    expect(initialToast).toHaveTextContent('已复制链接');

    rerender(<Toast message="已复制链接" visible={false} />);
    const hiddenToast = screen.getByRole('status');
    expect(hiddenToast).toHaveClass('toast-banner');
    expect(hiddenToast).not.toHaveClass('show');

    rerender(<Toast message={null} visible={true} />);
    const emptyToast = screen.getByRole('status');
    expect(emptyToast).not.toHaveClass('show');
    expect(emptyToast).toHaveTextContent('');
  });

  it('defines inverted dark toast, 100dvh #map-stage, dot-grid, timeline, and nowrap pill rules in src/index.css', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/index.css'), 'utf8');

    expect(css).toContain('#map-stage');
    expect(css).not.toContain('#globe-stage');
    expect(css).not.toContain('.globe-tooltip');
    expect(css).not.toContain('--bg-surface');
    expect(css).toContain('.map-tooltip');
    expect(css).toContain('--teal-text: #345E64;');
    expect(css).toContain('--teal-text: #6CB3BD;');
    expect(css).toContain('height: calc(100vh - 140px);');
    expect(css).toContain('height: calc(100dvh - 140px);');
    expect(css).toContain('min-height: 460px;');
    expect(css).toContain('max-height: 780px;');

    expect(css).toMatch(
      /html\[data-theme="dark"\]\s*\.toast-banner\s*\{[^}]*background:\s*var\(--text-main\);[^}]*color:\s*#121518;[^}]*border-top:\s*1px\s+solid\s+var\(--border\);/s
    );
    expect(css).toContain('.atlas-dot-grid');
    expect(css).toContain('.timeline-track');
    expect(css).toContain('.timeline-node');
    expect(css).toMatch(/\.focus-btn\s*\{[^}]*white-space:\s*nowrap;/s);
  });

  it('updates index.html meta description for flat interactive world map & collapsible directory', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');
    expect(html).toContain('平铺交互式世界地图浏览与可折叠国家目录');
    expect(html).not.toContain('3D 交互式地球浏览');
  });
});
