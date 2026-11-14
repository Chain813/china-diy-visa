import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CATEGORIES } from '../src/data/categories';
import type { CountryData, SubVisaItem } from '../src/types/visa';
import { SearchDropdown } from '../src/components/layout/SearchDropdown';
import { Header, type HeaderProps } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { Toast } from '../src/components/layout/Toast';

afterEach(() => {
  vi.restoreAllMocks();
});

function makeSubVisa(id: string, title: string): SubVisaItem {
  return {
    id,
    title,
    fee: '100 EUR',
    desc: `${title} description`,
    tips: `${title} tips`,
    steps: [{ title: 'Step 1', detail: 'Detail 1' }],
    checklist: ['Passport'],
  };
}

function makeCountry(
  overrides: Partial<CountryData> & {
    id: string;
    code: string;
    nameZh: string;
    nameEn: string;
  }
): CountryData {
  return {
    region: '欧洲 / EUROPE',
    coords: [10.45, 51.16],
    badge: '申根签证',
    tierColor: '#4A7B82',
    labelPriority: true,
    processing: '15 工作日',
    submission: '签证中心递签',
    summary: 'Summary text',
    pitfalls: ['Pitfall 1', 'Pitfall 2', 'Pitfall 3'],
    links: [{ title: 'Official', url: 'https://example.com', desc: 'Official portal' }],
    jobLinks: [
      { title: 'Job 1', url: 'https://example.com/jobs1', desc: 'Job portal 1' },
      { title: 'Job 2', url: 'https://example.com/jobs2', desc: 'Job portal 2' },
    ],
    pathways: {
      study: [makeSubVisa('study-1', '留学学生签证')],
      work: [makeSubVisa('work-1', '工作签证')],
      immigration: [makeSubVisa('imm-1', '永久居留')],
      tourism: [makeSubVisa('tour-1', '短期旅游签证')],
      other: [makeSubVisa('other-1', '探亲访友签证')],
    },
    ...overrides,
  };
}

const SAMPLE_COUNTRIES: CountryData[] = [
  makeCountry({
    id: '276',
    code: 'DEU',
    nameZh: '德国',
    nameEn: 'Germany',
    badge: '欧盟蓝卡 / 申根',
    pathways: {
      study: [makeSubVisa('student', '德国留学签证')],
      work: [makeSubVisa('bluecard', '欧盟蓝卡 (EU Blue Card)')],
      immigration: [makeSubVisa('pr', '德国永居')],
      tourism: [makeSubVisa('schengen', '申根旅游/访友签证')],
      other: [makeSubVisa('family', '家庭团聚签证')],
    },
  }),
  makeCountry({
    id: '392',
    code: 'JPN',
    nameZh: '日本',
    nameEn: 'Japan',
    region: '东亚 / EAST ASIA',
    coords: [138.25, 36.2],
    badge: '单次eVISA / 在留资格',
    pathways: {
      study: [makeSubVisa('study', '留学在留资格')],
      work: [makeSubVisa('gijinkoku', '技术·人文知识·国际业务')],
      immigration: [makeSubVisa('hsp', '高度人才永住')],
      tourism: [makeSubVisa('evisa', '单次旅游 eVISA')],
      other: [makeSubVisa('visit', '探亲/商务签证')],
    },
  }),
];

function makeHeaderProps(overrides: Partial<HeaderProps> = {}): HeaderProps {
  return {
    activeCategory: 'all',
    onSelectCategory: vi.fn(),
    searchQuery: '',
    onSearchChange: vi.fn(),
    onClearSearch: vi.fn(),
    searchResults: SAMPLE_COUNTRIES,
    onSelectCountry: vi.fn(),
    isSpinning: true,
    onToggleSpin: vi.fn(),
    theme: 'light',
    onToggleTheme: vi.fn(),
    ...overrides,
  };
}

describe('SearchDropdown', () => {
  it('returns null when closed or query is empty/whitespace', () => {
    const onSelectCountry = vi.fn();
    const { container, rerender } = render(
      <SearchDropdown
        query="德国"
        results={SAMPLE_COUNTRIES}
        activeCategory="all"
        isOpen={false}
        onSelectCountry={onSelectCountry}
      />
    );
    expect(container.querySelector('#search-dropdown')).toBeNull();

    rerender(
      <SearchDropdown
        query="   "
        results={SAMPLE_COUNTRIES}
        activeCategory="all"
        isOpen={true}
        onSelectCountry={onSelectCountry}
      />
    );
    expect(container.querySelector('#search-dropdown')).toBeNull();
  });

  it('shows empty state message when no countries match', () => {
    render(
      <SearchDropdown
        query="  火星  "
        results={[]}
        activeCategory="all"
        isOpen={true}
        onSelectCountry={vi.fn()}
      />
    );
    const listbox = screen.getByRole('listbox', { name: '搜索结果' });
    expect(listbox).toHaveAttribute('id', 'search-dropdown');
    expect(
      within(listbox).getByText('未找到匹配“火星”的国家或签证关键词')
    ).toBeInTheDocument();
  });

  it('truncates rendered results to 12 items, uses option roles, and displays category-appropriate preview', () => {
    const manyCountries: CountryData[] = Array.from({ length: 15 }, (_, index) =>
      makeCountry({
        id: String(100 + index),
        code: `C${String(index).padStart(2, '0')}`,
        nameZh: `国家${index + 1}`,
        nameEn: `Country ${index + 1}`,
        badge: `徽章${index + 1}`,
        pathways: {
          study: [makeSubVisa('s', `留学项目${index + 1}`)],
          work: [makeSubVisa('w', `工签项目${index + 1}`)],
          immigration: [makeSubVisa('i', `移民项目${index + 1}`)],
          tourism: [makeSubVisa('t', `旅游项目${index + 1}`)],
          other: [makeSubVisa('o', `其他项目${index + 1}`)],
        },
      })
    );

    const onSelectCountry = vi.fn();
    const { rerender } = render(
      <SearchDropdown
        query="国"
        results={manyCountries}
        activeCategory="all"
        isOpen={true}
        onSelectCountry={onSelectCountry}
      />
    );

    const dropdown = screen.getByRole('listbox', { name: '搜索结果' });
    expect(dropdown).toHaveAttribute('id', 'search-dropdown');
    expect(within(dropdown).getByText('搜索结果 (15 国)')).toBeInTheDocument();
    expect(within(dropdown).getByText('点击直达国家页面')).toBeInTheDocument();

    const options = within(dropdown).getAllByRole('option');
    expect(options).toHaveLength(12);
    expect(options[0]).toHaveAttribute('data-search-country', '100');
    expect(within(dropdown).getByText('徽章1 · 旅游项目1')).toBeInTheDocument();

    rerender(
      <SearchDropdown
        query="国"
        results={manyCountries}
        activeCategory="work"
        isOpen={true}
        onSelectCountry={onSelectCountry}
      />
    );

    const updatedDropdown = screen.getByRole('listbox', { name: '搜索结果' });
    expect(within(updatedDropdown).getByText('徽章1 · 工签项目1')).toBeInTheDocument();

    const firstUpdatedOption = within(updatedDropdown).getAllByRole('option')[0];
    fireEvent.click(firstUpdatedOption);
    expect(onSelectCountry).toHaveBeenCalledTimes(1);
    expect(onSelectCountry).toHaveBeenCalledWith(manyCountries[0]);
  });

  it('omits separator when pathway preview or badge is empty', () => {
    const sparseCountries: CountryData[] = [
      makeCountry({
        id: '901',
        code: 'AAA',
        nameZh: '测试国A',
        nameEn: 'Test A',
        badge: '免签入境',
        pathways: {
          study: [],
          work: [],
          immigration: [],
          tourism: [],
          other: [],
        },
      }),
      makeCountry({
        id: '902',
        code: 'BBB',
        nameZh: '测试国B',
        nameEn: 'Test B',
        badge: '',
        pathways: {
          study: [],
          work: [makeSubVisa('w1', '工作许可')],
          immigration: [],
          tourism: [],
          other: [],
        },
      }),
    ];

    render(
      <SearchDropdown
        query="测试"
        results={sparseCountries}
        activeCategory="work"
        isOpen={true}
        onSelectCountry={vi.fn()}
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
  it('renders brand title, semantic desktop & mobile category navs with aria-pressed, and invokes onSelectCategory', async () => {
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

    const desktopButtons = within(desktopNav).getAllByRole('button');
    const mobileButtons = within(mobileNav).getAllByRole('button');
    expect(desktopButtons).toHaveLength(CATEGORIES.length);
    expect(mobileButtons).toHaveLength(CATEGORIES.length);

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

    await user.click(within(desktopNav).getByRole('button', { name: '留学' }));
    expect(onSelectCategory).toHaveBeenCalledWith('study');

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

  it('handles spin and theme toggle buttons with correct labels', async () => {
    const user = userEvent.setup();
    const onToggleSpin = vi.fn();
    const onToggleTheme = vi.fn();

    const { rerender } = render(
      <Header
        {...makeHeaderProps({
          isSpinning: true,
          theme: 'light',
          onToggleSpin,
          onToggleTheme,
        })}
      />
    );

    const spinBtn = screen.getByRole('button', { name: '暂停自转' });
    const themeBtn = screen.getByRole('button', { name: '黑夜' });

    expect(spinBtn).toHaveAttribute('id', 'toggle-spin-btn');
    expect(spinBtn).toHaveAttribute('title', '暂停或继续地球自转');
    expect(themeBtn).toHaveAttribute('id', 'theme-toggle-btn');
    expect(themeBtn).toHaveTextContent('🌙');
    expect(themeBtn).toHaveAttribute('title', '切换日间/黑夜模式');

    await user.click(spinBtn);
    await user.click(themeBtn);
    expect(onToggleSpin).toHaveBeenCalledTimes(1);
    expect(onToggleTheme).toHaveBeenCalledTimes(1);

    rerender(
      <Header
        {...makeHeaderProps({
          isSpinning: false,
          theme: 'dark',
          onToggleSpin,
          onToggleTheme,
        })}
      />
    );

    const updatedSpinBtn = screen.getByRole('button', { name: '继续自转' });
    const updatedThemeBtn = screen.getByRole('button', { name: '日间' });
    expect(updatedSpinBtn).toHaveAttribute('id', 'toggle-spin-btn');
    expect(updatedThemeBtn).toHaveAttribute('id', 'theme-toggle-btn');
    expect(updatedThemeBtn).toHaveTextContent('☀️');
  });

  it('manages combobox ARIA attributes, search input, clear button, inside/outside clicks, Escape, and whitespace queries', async () => {
    const user = userEvent.setup();
    const onSearchChange = vi.fn();
    const onClearSearch = vi.fn();
    const onSelectCountry = vi.fn();

    const { container, rerender } = render(
      <div>
        <Header
          {...makeHeaderProps({
            searchQuery: '',
            onSearchChange,
            onClearSearch,
            onSelectCountry,
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
    expect(initialInput).toHaveAttribute('aria-controls', 'search-dropdown');
    expect(initialInput).toHaveAttribute('aria-autocomplete', 'list');
    expect(initialInput).toHaveAttribute(
      'placeholder',
      '搜索国家 / 免签 / 蓝卡 / WHV...'
    );
    expect(initialInput).toHaveAttribute('autocomplete', 'off');

    const clearBtnInitial = container.querySelector('#clear-search-btn') as HTMLElement;
    expect(clearBtnInitial).not.toBeVisible();
    expect(container.querySelector('#search-dropdown')).toBeNull();

    // Whitespace-only input must not open dropdown
    fireEvent.change(initialInput, { target: { value: '   ' } });
    expect(onSearchChange).toHaveBeenCalledWith('   ');
    rerender(
      <div>
        <Header
          {...makeHeaderProps({
            searchQuery: '   ',
            searchResults: SAMPLE_COUNTRIES,
            onSearchChange,
            onClearSearch,
            onSelectCountry,
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

    // Typing non-empty query opens dropdown
    fireEvent.change(whitespaceInput, { target: { value: '德国' } });
    expect(onSearchChange).toHaveBeenCalledWith('德国');

    rerender(
      <div>
        <Header
          {...makeHeaderProps({
            searchQuery: '德国',
            searchResults: [SAMPLE_COUNTRIES[0]],
            onSearchChange,
            onClearSearch,
            onSelectCountry,
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
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();

    // Mousedown inside dropdown does NOT close prematurely
    const germanyOption = screen.getByRole('option', { name: /德国/ });
    fireEvent.mouseDown(germanyOption);
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();

    // Pressing Escape closes the dropdown
    fireEvent.keyDown(searchInput, { key: 'Escape' });
    expect(searchInput).toHaveAttribute('aria-expanded', 'false');
    expect(container.querySelector('#search-dropdown')).toBeNull();

    // Re-focusing when query is non-empty re-opens dropdown
    fireEvent.focus(searchInput);
    expect(searchInput).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();

    // Clicking outside closes dropdown
    await user.click(screen.getByRole('button', { name: '外部区域' }));
    expect(searchInput).toHaveAttribute('aria-expanded', 'false');
    expect(container.querySelector('#search-dropdown')).toBeNull();

    // Mousedown outside also closes dropdown
    fireEvent.focus(searchInput);
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(container.querySelector('#search-dropdown')).toBeNull();

    // Re-open and select country closes dropdown & triggers callback
    fireEvent.focus(searchInput);
    const germanyRow = screen.getByRole('option', { name: /德国/ });
    await user.click(germanyRow);
    expect(onSelectCountry).toHaveBeenCalledWith(SAMPLE_COUNTRIES[0]);
    expect(searchInput).toHaveAttribute('aria-expanded', 'false');
    expect(container.querySelector('#search-dropdown')).toBeNull();

    // Clear button invokes onClearSearch and keeps dropdown closed
    fireEvent.focus(searchInput);
    expect(screen.getByRole('listbox', { name: '搜索结果' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '清空搜索' }));
    expect(onClearSearch).toHaveBeenCalledTimes(1);
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
  it('renders official disclaimer, portal metadata, and @routeking_ X external link', () => {
    render(<Footer />);

    expect(
      screen.getByText(
        '资料来源：各国移民局、外交部及官方指定签证中心公开指引（2026年11月核对）。政策与费率请以各使领馆官网实时公布为准。'
      )
    ).toBeInTheDocument();
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

describe('Toast', () => {
  it('toggles visibility class and renders message with polite status role', () => {
    const { rerender } = render(<Toast message="已复制链接" visible={true} />);
    const initialToast = screen.getByRole('status');
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
});
