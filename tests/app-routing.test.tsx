import { StrictMode, useEffect } from 'react';
import * as d3 from 'd3';
import {
  MemoryRouter,
  useLocation,
  useNavigate,
  type NavigateFunction,
} from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const { mockLoadCountryByCode, actualLoadRef } = vi.hoisted(() => ({
  mockLoadCountryByCode: vi.fn(),
  actualLoadRef: {
    current: null as null | ((code: string | undefined) => Promise<import('../src/types/visa').CountryData | undefined>),
  },
}));

vi.mock('../src/data', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../src/data')>();
  actualLoadRef.current = actual.loadCountryByCode;
  mockLoadCountryByCode.mockImplementation(actual.loadCountryByCode);
  return {
    ...actual,
    loadCountryByCode: (...args: Parameters<typeof actual.loadCountryByCode>) =>
      mockLoadCountryByCode(...args),
  };
});

import { App } from '../src/App';
import { getMapStatusText } from '../src/components/map/MapOverlays';
import {
  COUNTRY_DIRECTORY,
  filterCountrySummaries,
  loadAllCountries,
  loadCountryByCode,
} from '../src/data';
import { CHECKLIST_STORAGE_KEY } from '../src/hooks/useChecklist';
import { THEME_STORAGE_KEY } from '../src/hooks/useTheme';
import type { CountryData } from '../src/types/visa';
import { resetWorldAtlasCacheForTests } from '../src/utils/worldAtlas';

const MINIMAL_WORLD_TOPOLOGY = {
  type: 'Topology',
  objects: {
    countries: {
      type: 'GeometryCollection',
      geometries: [
        { type: 'Polygon', id: '392', arcs: [[0]] },
        { type: 'Polygon', id: '276', arcs: [[1]] },
      ],
    },
  },
  arcs: [
    [
      [137, 35],
      [139, 35],
      [139, 37],
      [137, 37],
      [137, 35],
    ],
    [
      [9, 50],
      [11, 50],
      [11, 52],
      [9, 52],
      [9, 50],
    ],
  ],
};

function createMockCanvasContext(): CanvasRenderingContext2D {
  return {
    save: vi.fn(),
    restore: vi.fn(),
    translate: vi.fn(),
    scale: vi.fn(),
    clip: vi.fn(),
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    closePath: vi.fn(),
    arc: vi.fn(),
    rect: vi.fn(),
    roundRect: vi.fn(),
    fill: vi.fn(),
    stroke: vi.fn(),
    fillText: vi.fn(),
    measureText: vi.fn((text: string) => ({ width: text.length * 10 }) as TextMetrics),
    fillStyle: '',
    strokeStyle: '',
    lineWidth: 1,
    lineJoin: 'miter',
    lineCap: 'butt',
    font: '',
    textBaseline: 'alphabetic',
  } as unknown as CanvasRenderingContext2D;
}

function createDeferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function LocationObserver({
  onNavigateReady,
}: {
  onNavigateReady?: (navigate: NavigateFunction) => void;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onNavigateReady?.(navigate);
  }, [navigate, onNavigateReady]);

  return <output data-testid="router-location">{`${location.pathname}${location.search}`}</output>;
}

function renderAppAt(
  initialEntry: string | string[],
  options?: {
    strict?: boolean;
    initialIndex?: number;
    onNavigateReady?: (navigate: NavigateFunction) => void;
  }
) {
  const initialEntries = Array.isArray(initialEntry) ? initialEntry : [initialEntry];
  const tree = (
    <MemoryRouter initialEntries={initialEntries} initialIndex={options?.initialIndex}>
      <App />
      <LocationObserver onNavigateReady={options?.onNavigateReady} />
    </MemoryRouter>
  );

  return render(options?.strict ? <StrictMode>{tree}</StrictMode> : tree);
}

async function waitForMapReady() {
  await waitFor(() => {
    expect(document.getElementById('map-filter-status')).toBeInTheDocument();
    expect(screen.queryByText('正在加载 50m 全球矢量地图数据...')).not.toBeInTheDocument();
  });
}

async function waitForDetailReady() {
  await waitFor(() => {
    expect(document.getElementById('country-detail-view')).toBeInTheDocument();
  });
}

describe('App routing, state coordination, lazy detail loading, and persistence', () => {
  const originalInnerWidth = window.innerWidth;
  let scrollToSpy: ReturnType<typeof vi.fn>;
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.title = '';
    resetWorldAtlasCacheForTests();

    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: 1280,
    });

    if (actualLoadRef.current) {
      mockLoadCountryByCode.mockReset();
      mockLoadCountryByCode.mockImplementation(actualLoadRef.current);
    }

    fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => MINIMAL_WORLD_TOPOLOGY,
    });
    vi.stubGlobal('fetch', fetchMock);

    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      createMockCanvasContext()
    );
    scrollToSpy = vi.fn();
    vi.spyOn(window, 'scrollTo').mockImplementation(scrollToSpy);
  });

  afterEach(() => {
    resetWorldAtlasCacheForTests();
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: originalInnerWidth,
    });
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('renders WorldMapView on / with /world-50m.json fetch, default document.title, global status, and open desktop directory', async () => {
    const { unmount } = renderAppAt('/');

    expect(document.getElementById('map-stage')).toBeInTheDocument();
    expect(document.title).toBe('中国公民 DIY 出国签证指南');
    expect(screen.getByTestId('router-location').textContent).toBe('/');

    await waitForMapReady();

    expect(fetchMock).toHaveBeenCalledWith('/world-50m.json');
    expect(document.getElementById('map-filter-status')).toHaveTextContent(
      getMapStatusText('all', '', COUNTRY_DIRECTORY.length, COUNTRY_DIRECTORY.length)
    );
    expect(document.getElementById('map-filter-status')).toHaveTextContent(
      '全球直申地图 · 102 / 102 国'
    );

    const dirBtn = document.getElementById('toggle-directory-btn')!;
    expect(dirBtn).toHaveAttribute('aria-expanded', 'true');
    expect(dirBtn).toHaveAttribute('aria-pressed', 'true');
    expect(document.getElementById('country-directory-panel')).toBeInTheDocument();

    const desktopAllBtn = document
      .getElementById('category-nav')!
      .querySelector('button[data-category="all"]')!;
    expect(desktopAllBtn).toHaveAttribute('aria-pressed', 'true');

    unmount();
  });

  it('initializes category filter from /?cat=work, updates document.title, map status, and header filters', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/?cat=work');

    const workCountries = filterCountrySummaries('work', '');
    const studyCountries = filterCountrySummaries('study', '');
    expect(document.getElementById('map-stage')).toBeInTheDocument();
    expect(document.title).toBe('工作签证通道 | 中国公民 DIY 出国签证指南');

    await waitForMapReady();

    expect(document.getElementById('map-filter-status')).toHaveTextContent(
      getMapStatusText('work', '', workCountries.length, COUNTRY_DIRECTORY.length)
    );
    expect(document.getElementById('map-filter-status')).toHaveTextContent(
      `【工作】直申通道 · ${workCountries.length} / 102 国`
    );

    const desktopNav = document.getElementById('category-nav')!;
    expect(desktopNav.querySelector('button[data-category="work"]')).toHaveAttribute(
      'aria-pressed',
      'true'
    );

    await user.click(desktopNav.querySelector('button[data-category="study"]')!);
    expect(screen.getByTestId('router-location').textContent).toBe('/?cat=study');
    expect(document.title).toBe('留学签证通道 | 中国公民 DIY 出国签证指南');
    expect(document.getElementById('map-filter-status')).toHaveTextContent(
      getMapStatusText('study', '', studyCountries.length, COUNTRY_DIRECTORY.length)
    );

    await user.click(desktopNav.querySelector('button[data-category="all"]')!);
    expect(screen.getByTestId('router-location').textContent).toBe('/');
    expect(document.title).toBe('中国公民 DIY 出国签证指南');
    expect(document.getElementById('map-filter-status')).toHaveTextContent(
      '全球直申地图 · 102 / 102 国'
    );

    unmount();
  });

  it('renders CountryDetailView on /country/JPN?tab=work&sub=gijinkoku after async load and syncs tab & sub-visa URL params', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/country/JPN?tab=work&sub=gijinkoku');

    // Summary-derived title and absence of map directory button take effect immediately
    expect(document.title).toBe('日本 - 工作签证 DIY 指南 | 中国公民 DIY 出国签证指南');
    expect(document.getElementById('toggle-directory-btn')).toBeNull();

    await waitForDetailReady();

    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    expect(document.getElementById('detail-tab-work')).toHaveAttribute('aria-selected', 'true');
    expect(document.querySelector('[data-sub-visa="gijinkoku"]')).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(document.getElementById('stream-title')).toHaveTextContent(
      '技术·人文知识·国际业务签证'
    );

    await user.click(document.querySelector('[data-sub-visa="ssw"]')!);
    expect(screen.getByTestId('router-location').textContent).toBe(
      '/country/JPN?tab=work&sub=ssw'
    );
    expect(document.getElementById('stream-title')).toHaveTextContent('特定技能 1 号签证');

    await user.click(document.getElementById('detail-tab-study')!);
    expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN?tab=study');
    expect(document.getElementById('stream-title')).toHaveTextContent('留学签证');
    expect(document.title).toBe('日本 - 留学签证 DIY 指南 | 中国公民 DIY 出国签证指南');

    unmount();
  });

  it('shows #country-detail-loading during async chunk fetch and recovers cleanly via Retry after failure', async () => {
    const user = userEvent.setup();
    const allCountries = await loadAllCountries();
    expect(allCountries).toHaveLength(102);
    const jpnData = await loadCountryByCode('JPN');
    expect(jpnData).toBeDefined();

    const firstAttempt = createDeferred<CountryData | undefined>();
    const retryAttempt = createDeferred<CountryData | undefined>();
    mockLoadCountryByCode
      .mockImplementationOnce(() => firstAttempt.promise)
      .mockImplementationOnce(() => retryAttempt.promise);

    const { unmount } = renderAppAt('/country/JPN?tab=work&sub=gijinkoku');

    // Loading Bento card appears immediately with country name and back-home button
    const loadingCard = document.getElementById('country-detail-loading')!;
    expect(loadingCard).toBeInTheDocument();
    expect(loadingCard).toHaveTextContent('日本');
    expect(within(loadingCard).getByRole('button', { name: '← 返回世界地图' })).toBeInTheDocument();
    expect(document.getElementById('country-detail-view')).not.toBeInTheDocument();
    expect(document.title).toBe('日本 - 工作签证 DIY 指南 | 中国公民 DIY 出国签证指南');

    // Simulate region chunk failure
    await act(async () => {
      firstAttempt.reject(new Error('Simulated region chunk network failure'));
    });

    await waitFor(() => {
      expect(document.getElementById('country-detail-error')).toBeInTheDocument();
    });

    const errorCard = document.getElementById('country-detail-error')!;
    expect(errorCard).toHaveTextContent('日本');
    const retryBtn = within(errorCard).getByRole('button', { name: '重试加载' });
    expect(within(errorCard).getByRole('button', { name: '← 返回世界地图' })).toBeInTheDocument();

    // Retry switches back to loading state, then resolves to full CountryDetailView
    await user.click(retryBtn);
    expect(document.getElementById('country-detail-loading')).toBeInTheDocument();
    expect(document.getElementById('country-detail-error')).not.toBeInTheDocument();

    await act(async () => {
      retryAttempt.resolve(jpnData);
    });

    await waitForDetailReady();
    expect(document.getElementById('country-detail-loading')).not.toBeInTheDocument();
    expect(document.getElementById('country-detail-error')).not.toBeInTheDocument();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    expect(document.getElementById('stream-title')).toHaveTextContent(
      '技术·人文知识·国际业务签证'
    );

    unmount();
  });

  it('toggles #country-directory-panel via #toggle-directory-btn and navigates from directory click', async () => {
    const user = userEvent.setup();

    // Desktop (>= 1024): directory defaults to open, toggles closed/open, and selects a country
    const desktopMount = renderAppAt('/');
    await waitForMapReady();

    const dirBtn = document.getElementById('toggle-directory-btn')!;
    expect(dirBtn).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById('country-directory-panel')).toBeInTheDocument();

    await user.click(dirBtn);
    expect(dirBtn).toHaveAttribute('aria-expanded', 'false');
    expect(dirBtn).toHaveAttribute('aria-pressed', 'false');
    expect(document.getElementById('country-directory-panel')).not.toBeInTheDocument();

    await user.click(dirBtn);
    expect(dirBtn).toHaveAttribute('aria-expanded', 'true');
    const panel = document.getElementById('country-directory-panel')!;
    expect(panel).toBeInTheDocument();

    await user.click(within(panel).getByRole('button', { name: /新加坡/ }));

    await waitFor(() => {
      expect(screen.getByText('3.2x')).toBeInTheDocument();
    });
    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/country/SGP');
      },
      { timeout: 2500 }
    );
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('新加坡');
    expect(document.getElementById('toggle-directory-btn')).toBeNull();
    desktopMount.unmount();

    // Narrow viewport (< 1024): directory defaults to collapsed and opens on toggle
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: 768,
    });
    const mobileMount = renderAppAt('/');
    await waitForMapReady();

    const mobileDirBtn = document.getElementById('toggle-directory-btn')!;
    expect(mobileDirBtn).toHaveAttribute('aria-expanded', 'false');
    expect(document.getElementById('country-directory-panel')).not.toBeInTheDocument();

    await user.click(mobileDirBtn);
    expect(mobileDirBtn).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById('country-directory-panel')).toBeInTheDocument();
    mobileMount.unmount();
  });

  it('handles case-insensitive /country/jpn, invalid /country/INVALID redirect + toast (StrictMode), invalid params fallback, and catch-all route', async () => {
    const first = renderAppAt('/country/jpn');
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    first.unmount();

    const invalid = renderAppAt('/country/INVALID', { strict: true });
    await waitFor(() => {
      expect(screen.getByTestId('router-location').textContent).toBe('/');
    });
    expect(document.getElementById('map-stage')).toBeInTheDocument();
    const toast = document.getElementById('toast')!;
    expect(toast).toHaveClass('show');
    expect(toast).toHaveTextContent('未找到对应国家或地区代码: INVALID');
    await waitForMapReady();
    invalid.unmount();

    const bogusParams = renderAppAt('/country/JPN?tab=bogus&sub=bogus');
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    expect(document.getElementById('detail-tab-tourism')).toHaveAttribute('aria-selected', 'true');
    expect(document.getElementById('stream-title')).toHaveTextContent('个人旅游签证');
    expect(document.title).toBe('日本 - 旅游签证 DIY 指南 | 中国公民 DIY 出国签证指南');
    bogusParams.unmount();

    const unknownRoute = renderAppAt('/not-a-valid-route/123');
    await waitFor(() => {
      expect(screen.getByTestId('router-location').textContent).toBe('/');
    });
    expect(document.getElementById('map-stage')).toBeInTheDocument();
    await waitForMapReady();
    unknownRoute.unmount();
  });

  it('clears active search query and shows reset Toast when returning via back button (preserving category) or header "all"', async () => {
    const user = userEvent.setup();
    const workCountries = filterCountrySummaries('work', '');

    // Case 1: Search "日本" on /?cat=work -> enter detail -> click ← 返回世界地图
    const backMount = renderAppAt('/?cat=work');
    await waitForMapReady();

    expect(screen.getByText('1.0x')).toBeInTheDocument();

    const searchInput = document.getElementById('global-search') as HTMLInputElement;
    await user.type(searchInput, '日本');

    const jpnOption = document.querySelector('[data-search-country="392"]') as HTMLButtonElement;
    expect(jpnOption).toBeInTheDocument();
    await user.click(jpnOption);

    // flyToCountry zooms the flat map toward 3.2x before navigating away
    await waitFor(() => {
      expect(screen.getByText('3.2x')).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN?tab=work');
      },
      { timeout: 2500 }
    );
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    await user.click(document.getElementById('back-home-btn')!);
    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/?cat=work');
      },
      { timeout: 1500 }
    );

    await waitForMapReady();
    expect(document.getElementById('map-stage')).toBeInTheDocument();
    expect((document.getElementById('global-search') as HTMLInputElement).value).toBe('');
    expect(document.getElementById('toast')).toHaveClass('show');
    expect(document.getElementById('toast')).toHaveTextContent('已清空搜索过滤，恢复全球视图');
    expect(document.getElementById('map-filter-status')).toHaveTextContent(
      getMapStatusText('work', '', workCountries.length, COUNTRY_DIRECTORY.length)
    );
    backMount.unmount();

    // Case 2: Search "日本" on /?cat=work -> enter detail -> click Header "all" clears search & resets to /
    const allMount = renderAppAt('/?cat=work');
    await waitForMapReady();

    const searchInput2 = document.getElementById('global-search') as HTMLInputElement;
    await user.type(searchInput2, '日本');
    await user.click(document.querySelector('[data-search-country="392"]')!);

    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN?tab=work');
      },
      { timeout: 2500 }
    );
    await waitForDetailReady();

    const desktopNav = document.getElementById('category-nav')!;
    await user.click(desktopNav.querySelector('button[data-category="all"]')!);
    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/');
      },
      { timeout: 1500 }
    );

    await waitForMapReady();
    expect(document.getElementById('map-stage')).toBeInTheDocument();
    expect((document.getElementById('global-search') as HTMLInputElement).value).toBe('');
    expect(document.getElementById('toast')).toHaveClass('show');
    expect(document.getElementById('toast')).toHaveTextContent('已清空搜索过滤，恢复全球视图');
    expect(document.getElementById('map-filter-status')).toHaveTextContent(
      '全球直申地图 · 102 / 102 国'
    );
    allMount.unmount();

    // Case 3: Clicking Header "all" on /?cat=work while search is active clears search & shows reset Toast
    const homeAllMount = renderAppAt('/?cat=work');
    await waitForMapReady();
    const searchInput3 = document.getElementById('global-search') as HTMLInputElement;
    await user.type(searchInput3, '德国');
    await user.click(
      document.getElementById('category-nav')!.querySelector('button[data-category="all"]')!
    );
    expect(screen.getByTestId('router-location').textContent).toBe('/');
    expect(searchInput3.value).toBe('');
    expect(document.getElementById('toast')).toHaveClass('show');
    expect(document.getElementById('toast')).toHaveTextContent('已清空搜索过滤，恢复全球视图');
    homeAllMount.unmount();
  });

  it('coordinates header category clicks, search-from-detail navigation with focus preserved, and country-to-country search transitions', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/country/JPN?tab=work&sub=gijinkoku');
    await waitForDetailReady();

    const desktopNav = document.getElementById('category-nav')!;

    // Clicking a pathway category in Header while on detail switches ?tab and clears ?sub
    await user.click(desktopNav.querySelector('button[data-category="study"]')!);
    expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN?tab=study');
    expect(document.getElementById('detail-tab-study')).toHaveAttribute('aria-selected', 'true');

    // Typing into search while on detail navigates immediately back to / while retaining query and input focus
    const searchInput = document.getElementById('global-search') as HTMLInputElement;
    await user.click(searchInput);
    fireEvent.change(searchInput, { target: { value: '德国' } });
    expect(screen.getByTestId('router-location').textContent).toBe('/');
    expect(searchInput.value).toBe('德国');
    expect(document.activeElement).toBe(searchInput);
    expect(document.getElementById('map-stage')).toBeInTheDocument();
    expect(document.querySelector('[data-search-country="276"]')).toBeInTheDocument();

    await waitForMapReady();
    unmount();

    // Verify clicking header "all" from /country/JPN?tab=work without active search returns to / without reset toast
    const detailMount = renderAppAt('/country/JPN?tab=work');
    await waitForDetailReady();
    const navOnDetail = document.getElementById('category-nav')!;
    await user.click(navOnDetail.querySelector('button[data-category="all"]')!);
    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/');
      },
      { timeout: 1500 }
    );
    expect(document.getElementById('map-stage')).toBeInTheDocument();
    expect(document.getElementById('toast')).not.toHaveClass('show');
    await waitForMapReady();
    detailMount.unmount();

    // Switch country via SearchDropdown while already on /country/JPN?tab=work
    const detailSearchSwitch = renderAppAt('/country/JPN?tab=work');
    await waitForDetailReady();
    const input2 = document.getElementById('global-search') as HTMLInputElement;
    await user.type(input2, '东亚');
    expect(screen.getByTestId('router-location').textContent).toBe('/');
    expect(document.activeElement).toBe(input2);

    // Wait for atlas and click Japan in search dropdown to land on /country/JPN
    await waitForMapReady();
    await user.click(document.querySelector('[data-search-country="392"]')!);
    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN');
      },
      { timeout: 2500 }
    );
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');

    // Focusing existing search input on detail page opens dropdown without changing route,
    // allowing direct country-to-country selection from /country/JPN to /country/KOR
    scrollToSpy.mockClear();
    fireEvent.focus(input2);
    const korOption = document.querySelector('[data-search-country="410"]') as HTMLButtonElement;
    expect(korOption).toBeInTheDocument();
    await user.click(korOption);

    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/country/KOR');
      },
      { timeout: 1500 }
    );
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('韩国');
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    detailSearchSwitch.unmount();
  });

  it('persists checklist items and dark theme across remounts and updates dark category dot colors on detail page', async () => {
    const user = userEvent.setup();
    const firstRender = renderAppAt('/country/JPN?tab=work&sub=gijinkoku');
    await waitForDetailReady();

    const firstCheckbox = document.querySelector(
      '#checklist-items input[type="checkbox"]'
    ) as HTMLInputElement;
    expect(firstCheckbox.checked).toBe(false);

    await user.click(firstCheckbox);
    expect(firstCheckbox.checked).toBe(true);
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent('1 / 5');

    const storedChecklist = JSON.parse(localStorage.getItem(CHECKLIST_STORAGE_KEY) || '{}');
    expect(storedChecklist['392:work:gijinkoku:0']).toBe(true);

    // Toggle theme to dark mode
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    const studyDot = document.querySelector('#detail-tab-study .cat-dot') as HTMLElement;
    expect(studyDot.style.backgroundColor).toBe('rgb(74, 123, 130)');

    await user.click(document.getElementById('theme-toggle-btn')!);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    expect(studyDot.style.backgroundColor).toBe('rgb(90, 154, 163)');

    const workDot = document.querySelector('#detail-tab-work .cat-dot') as HTMLElement;
    expect(workDot.style.backgroundColor).toBe('rgb(77, 138, 194)');

    firstRender.unmount();

    // Remount and verify checklist + dark theme persist cleanly
    const secondRender = renderAppAt('/country/JPN?tab=work&sub=gijinkoku');
    await waitForDetailReady();
    const remountedCheckbox = document.querySelector(
      '#checklist-items input[type="checkbox"]'
    ) as HTMLInputElement;
    expect(remountedCheckbox.checked).toBe(true);
    expect(document.getElementById('checklist-progress-text')).toHaveTextContent('1 / 5');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(document.getElementById('theme-toggle-btn')).toHaveTextContent('日间');
    expect(
      (document.querySelector('#detail-tab-study .cat-dot') as HTMLElement).style.backgroundColor
    ).toBe('rgb(90, 154, 163)');

    secondRender.unmount();
  });

  it('cleans up pending transition timers and toast timers cleanly on unmount', async () => {
    const user = userEvent.setup();
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const originalClipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
    });

    try {
      // Trigger both a Toast timer (2400ms) and an exit transition timer (200ms) before unmounting
      const detailRender = renderAppAt('/country/JPN?tab=work&sub=gijinkoku');
      await waitForDetailReady();
      await user.click(document.getElementById('copy-checklist-btn')!);
      await waitFor(() => {
        expect(document.getElementById('toast')).toHaveClass('show');
      });

      await user.click(document.getElementById('back-home-btn')!);
      expect(document.querySelector('.animate-view-exit.pointer-events-none')).toBeInTheDocument();

      const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');
      expect(() => detailRender.unmount()).not.toThrow();
      expect(clearTimeoutSpy.mock.calls.length).toBeGreaterThanOrEqual(2);
      clearTimeoutSpy.mockRestore();

      await new Promise((resolve) => setTimeout(resolve, 300));

      // Also verify unmount mid-flyToCountry on / leaves no dangling timer callbacks
      const homeRender = renderAppAt('/');
      await waitForMapReady();
      const searchInput = document.getElementById('global-search') as HTMLInputElement;
      await user.type(searchInput, '日本');
      await user.click(document.querySelector('[data-search-country="392"]')!);

      expect(() => homeRender.unmount()).not.toThrow();
      await new Promise((resolve) => setTimeout(resolve, 850));
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    } finally {
      if (originalClipboardDescriptor) {
        Object.defineProperty(navigator, 'clipboard', originalClipboardDescriptor);
      } else {
        Reflect.deleteProperty(navigator, 'clipboard');
      }
    }
  });

  it('cancels pending flyToCountry and exitToHome transitions when browser Back occurs mid-transition', async () => {
    const user = userEvent.setup();
    let routerNavigate!: NavigateFunction;

    // Case A: browser Back mid-flyToCountry from / should keep Back destination (/country/DEU)
    const flyRender = renderAppAt(['/country/DEU', '/'], {
      initialIndex: 1,
      onNavigateReady: (nav) => {
        routerNavigate = nav;
      },
    });
    await waitForMapReady();

    const searchInput = document.getElementById('global-search') as HTMLInputElement;
    await user.type(searchInput, '日本');
    await user.click(document.querySelector('[data-search-country="392"]')!);

    act(() => {
      routerNavigate(-1);
    });
    expect(screen.getByTestId('router-location').textContent).toBe('/country/DEU');
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('德国');

    // Wait longer than flyToCountry (550ms + safety 150ms) + exit (200ms) and ensure route was not overwritten
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 950));
    });
    expect(screen.getByTestId('router-location').textContent).toBe('/country/DEU');
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('德国');

    // Transition guard must have reset so detail tab interaction works normally
    await user.click(document.getElementById('detail-tab-work')!);
    expect(screen.getByTestId('router-location').textContent).toBe('/country/DEU?tab=work');
    flyRender.unmount();

    // Case B: browser Back mid-exitToHome on /country/JPN?tab=work should keep Back destination (/country/DEU)
    const exitRender = renderAppAt(['/country/DEU', '/country/JPN?tab=work'], {
      initialIndex: 1,
      onNavigateReady: (nav) => {
        routerNavigate = nav;
      },
    });
    await waitForDetailReady();

    await user.click(document.getElementById('back-home-btn')!);
    expect(document.querySelector('.animate-view-exit.pointer-events-none')).toBeInTheDocument();

    act(() => {
      routerNavigate(-1);
    });
    expect(screen.getByTestId('router-location').textContent).toBe('/country/DEU');
    await waitForDetailReady();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 350));
    });
    expect(screen.getByTestId('router-location').textContent).toBe('/country/DEU');
    expect(document.querySelector('.animate-view-exit')).not.toBeInTheDocument();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('德国');
    exitRender.unmount();
  });

  it('recovers cleanly when d3 zoom transition throws without unhandled rejection and allows subsequent navigation', async () => {
    const user = userEvent.setup();
    const unhandledErrors: unknown[] = [];
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      unhandledErrors.push(event.reason);
    };
    window.addEventListener('unhandledrejection', onUnhandledRejection);

    const selectionProto = Object.getPrototypeOf(
      d3.select(document.createElement('canvas'))
    ) as { transition: (...args: unknown[]) => unknown };
    const transitionSpy = vi
      .spyOn(selectionProto, 'transition')
      .mockImplementationOnce(() => {
        throw new Error('Simulated flyToCountry transition failure');
      });

    try {
      const { unmount } = renderAppAt('/');
      await waitForMapReady();

      const searchInput = document.getElementById('global-search') as HTMLInputElement;
      await user.type(searchInput, '日本');
      await user.click(document.querySelector('[data-search-country="392"]')!);

      // MapCanvas catches the synchronous transition error and settles flyToCountry cleanly
      await waitFor(
        () => {
          expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN');
        },
        { timeout: 1500 }
      );
      expect(transitionSpy).toHaveBeenCalledTimes(1);
      expect(unhandledErrors).toHaveLength(0);
      await waitForDetailReady();
      expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');

      // Transition state remains unlocked for subsequent back navigation, category switching, and re-entry
      await user.click(document.getElementById('back-home-btn')!);
      await waitFor(
        () => {
          expect(screen.getByTestId('router-location').textContent).toBe('/');
        },
        { timeout: 1500 }
      );
      await waitForMapReady();

      const desktopNav = document.getElementById('category-nav')!;
      await user.click(desktopNav.querySelector('button[data-category="study"]')!);
      expect(screen.getByTestId('router-location').textContent).toBe('/?cat=study');

      await user.type(document.getElementById('global-search') as HTMLInputElement, '日本');
      await user.click(document.querySelector('[data-search-country="392"]')!);

      await waitFor(
        () => {
          expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN?tab=study');
        },
        { timeout: 2500 }
      );
      await waitForDetailReady();
      expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
      unmount();
    } finally {
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    }
  });

  it('closes search dropdown on Escape and clears query via #clear-search-btn while staying on /country/:code', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/');
    await waitForMapReady();

    // Enter /country/JPN from search so searchQuery starts populated on detail view
    const searchInput = document.getElementById('global-search') as HTMLInputElement;
    await user.type(searchInput, '东亚');
    await user.click(document.querySelector('[data-search-country="392"]')!);

    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN');
      },
      { timeout: 2500 }
    );
    await waitForDetailReady();

    // Focus search input to open dropdown on detail route, then press Escape
    fireEvent.focus(searchInput);
    expect(document.getElementById('search-dropdown')).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('aria-expanded', 'true');

    await user.keyboard('{Escape}');
    expect(document.getElementById('search-dropdown')).not.toBeInTheDocument();
    expect(searchInput).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN');
    expect(searchInput.value).toBe('东亚');

    // Re-open dropdown and click #clear-search-btn; query clears while staying on /country/JPN
    fireEvent.focus(searchInput);
    expect(document.getElementById('search-dropdown')).toBeInTheDocument();
    await user.click(document.getElementById('clear-search-btn')!);

    expect(searchInput.value).toBe('');
    expect(document.getElementById('search-dropdown')).not.toBeInTheDocument();
    expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN');
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');

    unmount();
  });

  it('ignores stale lazy chunk resolution on rapid /country/JPN -> /country/DEU navigation and clears error state when going Back', async () => {
    const actualLoad = actualLoadRef.current!;
    const realJpn = await actualLoad('JPN');
    const realDeu = await actualLoad('DEU');
    expect(realJpn).toBeDefined();
    expect(realDeu).toBeDefined();

    // Part 1: stale JPN deferred resolving AFTER DEU must not overwrite DEU
    const jpnDeferred = createDeferred<CountryData | undefined>();
    const deuDeferred = createDeferred<CountryData | undefined>();
    mockLoadCountryByCode.mockImplementation((code) => {
      if (code === 'JPN') return jpnDeferred.promise;
      if (code === 'DEU') return deuDeferred.promise;
      return actualLoad(code);
    });

    let nav!: NavigateFunction;
    const firstRender = renderAppAt('/country/JPN', {
      onNavigateReady: (n) => {
        nav = n;
      },
    });

    await waitFor(() => {
      expect(document.getElementById('country-detail-loading')).toHaveTextContent('日本');
    });

    await act(async () => {
      nav('/country/DEU');
    });

    await waitFor(() => {
      expect(document.getElementById('country-detail-loading')).toHaveTextContent('德国');
    });

    await act(async () => {
      deuDeferred.resolve(realDeu);
    });
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('德国');

    await act(async () => {
      jpnDeferred.resolve(realJpn);
      await Promise.resolve();
    });
    expect(screen.getByTestId('router-location').textContent).toBe('/country/DEU');
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('德国');
    firstRender.unmount();

    // Part 2: /country/JPN error -> /country/DEU -> Back /country/JPN renders loading (never flashes stale error)
    const jpnRetryDeferred = createDeferred<CountryData | undefined>();
    let jpnAttempts = 0;
    mockLoadCountryByCode.mockImplementation((code) => {
      if (code === 'JPN') {
        jpnAttempts += 1;
        return jpnAttempts === 1
          ? Promise.reject(new Error('network glitch'))
          : jpnRetryDeferred.promise;
      }
      return actualLoad(code);
    });

    const secondRender = renderAppAt('/country/JPN', {
      onNavigateReady: (n) => {
        nav = n;
      },
    });

    await waitFor(() => {
      expect(document.getElementById('country-detail-error')).toBeInTheDocument();
    });

    await act(async () => {
      nav('/country/DEU');
    });
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('德国');

    await act(async () => {
      nav(-1);
    });
    expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN');
    expect(document.getElementById('country-detail-loading')).toBeInTheDocument();
    expect(document.getElementById('country-detail-error')).toBeNull();

    await act(async () => {
      jpnRetryDeferred.resolve(realJpn);
    });
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    secondRender.unmount();
  });

  it('unmounts cleanly without warnings while loadCountryByCode is still pending', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const pendingDeferred = createDeferred<CountryData | undefined>();
    mockLoadCountryByCode.mockReturnValueOnce(pendingDeferred.promise);

    const realJpn = await actualLoadRef.current!('JPN');
    const { unmount } = renderAppAt('/country/JPN');

    await waitFor(() => {
      expect(document.getElementById('country-detail-loading')).toBeInTheDocument();
    });

    unmount();

    await act(async () => {
      pendingDeferred.resolve(realJpn);
      await Promise.resolve();
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
    expect(consoleWarnSpy).not.toHaveBeenCalled();
  });

  it('renders focused role="alert" card when loadCountryByCode resolves undefined and allows retry', async () => {
    const user = userEvent.setup();
    mockLoadCountryByCode.mockResolvedValueOnce(undefined);

    const { unmount } = renderAppAt('/country/JPN');

    await waitFor(() => {
      expect(document.getElementById('country-detail-error')).toBeInTheDocument();
    });

    const errorCard = document.getElementById('country-detail-error')!;
    expect(errorCard).toHaveAttribute('role', 'alert');
    expect(errorCard).toHaveAttribute('tabindex', '-1');
    expect(document.activeElement).toBe(errorCard);

    await user.click(document.getElementById('retry-country-load-btn')!);
    await waitForDetailReady();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    unmount();
  });

  it('mounts distinct role="status" vs role="alert" nodes and recovers from RouteErrorBoundary via retry and home buttons', async () => {
    const user = userEvent.setup();
    const realJpn = await actualLoadRef.current!('JPN');
    expect(realJpn).toBeDefined();

    // Verify distinct DOM element identity between role="status" loading and role="alert" error
    const failDeferred = createDeferred<CountryData | undefined>();
    mockLoadCountryByCode.mockReturnValueOnce(failDeferred.promise);
    const firstRender = renderAppAt('/country/JPN');

    const loadingNode = await waitFor(() => {
      const el = document.getElementById('country-detail-loading');
      expect(el).toBeInTheDocument();
      return el!;
    });
    expect(loadingNode).toHaveAttribute('role', 'status');

    await act(async () => {
      failDeferred.reject(new Error('chunk unavailable'));
    });

    const errorNode = await waitFor(() => {
      const el = document.getElementById('country-detail-error');
      expect(el).toBeInTheDocument();
      return el!;
    });
    expect(errorNode).toHaveAttribute('role', 'alert');
    expect(errorNode).not.toBe(loadingNode);
    expect(document.body.contains(loadingNode)).toBe(false);
    firstRender.unmount();

    // Verify RouteErrorBoundary catches render errors while preserving Header/Footer and supports retry & home recovery
    const malformedJpn = {
      ...realJpn!,
      pathways: undefined as unknown as CountryData['pathways'],
    };
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    try {
      mockLoadCountryByCode.mockResolvedValueOnce(malformedJpn);
      const secondRender = renderAppAt('/country/JPN');

      const boundaryEl = await waitFor(() => {
        const el = document.getElementById('route-error-boundary');
        expect(el).toBeInTheDocument();
        return el!;
      });
      expect(boundaryEl).toHaveAttribute('role', 'alert');
      expect(document.activeElement).toBe(boundaryEl);
      expect(document.querySelector('header')).toBeInTheDocument();
      expect(document.querySelector('footer')).toBeInTheDocument();

      // Retry resets boundary + reloads clean realJpn
      await user.click(document.getElementById('route-error-retry-btn')!);
      await waitForDetailReady();
      expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
      secondRender.unmount();

      // Second boundary trigger -> recover back to world map via #route-error-home-btn
      mockLoadCountryByCode.mockResolvedValueOnce(malformedJpn);
      const thirdRender = renderAppAt('/country/JPN');
      await waitFor(() => {
        expect(document.getElementById('route-error-boundary')).toBeInTheDocument();
      });
      await user.click(document.getElementById('route-error-home-btn')!);
      await waitForMapReady();
      expect(screen.getByTestId('router-location').textContent).toBe('/');
      thirdRender.unmount();
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });

  it('clicking #brand-home-btn from /country/JPN returns to /, clears searchQuery, and shows toast', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/?cat=work');
    await waitForMapReady();

    const searchInput = document.getElementById('global-search') as HTMLInputElement;
    await user.type(searchInput, '日本');
    await user.click(document.querySelector('[data-search-country="392"]')!);

    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN?tab=work');
      },
      { timeout: 2500 }
    );
    await waitForDetailReady();

    await user.click(document.getElementById('brand-home-btn')!);

    await waitFor(() => {
      expect(screen.getByTestId('router-location').textContent).toBe('/');
    });
    expect(searchInput.value).toBe('');
    expect(screen.getByText('已清空搜索过滤，恢复全球视图')).toBeInTheDocument();
    await waitForMapReady();
    unmount();
  });

  it('handles rapid country clicks and directory toggle mid-flyToCountry cleanly without errors', async () => {
    const user = userEvent.setup();
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const onUnhandledRejection = () => {
      throw new Error('Unexpected unhandledrejection during rapid flyToCountry clicks');
    };
    window.addEventListener('unhandledrejection', onUnhandledRejection);

    try {
      const { unmount } = renderAppAt('/');
      await waitForMapReady();

      const panel = document.getElementById('country-directory-panel')!;
      const jpnDirItem = within(panel).getByRole('button', { name: /日本/ });
      const deuDirItem = within(panel).getByRole('button', { name: /德国/ });

      // Click JPN -> immediately click DEU mid-flyToCountry -> toggle directory closed mid-transition
      await user.click(jpnDirItem);
      await user.click(deuDirItem);
      const toggleBtn = document.getElementById('toggle-directory-btn')!;
      await user.click(toggleBtn);
      expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
      expect(document.getElementById('country-directory-panel')).not.toBeInTheDocument();

      await waitFor(
        () => {
          expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN');
        },
        { timeout: 2500 }
      );
      await waitForDetailReady();
      expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
      expect(consoleErrorSpy).not.toHaveBeenCalled();

      unmount();
    } finally {
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    }
  });
});
