import { StrictMode, useEffect } from 'react';
import * as d3 from 'd3';
import {
  MemoryRouter,
  useLocation,
  useNavigate,
  type NavigateFunction,
} from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '../src/App';
import { COUNTRIES_DATA, filterCountries } from '../src/data';
import { CHECKLIST_STORAGE_KEY } from '../src/hooks/useChecklist';
import { THEME_STORAGE_KEY } from '../src/hooks/useTheme';
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
    scale: vi.fn(),
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

async function waitForGlobeReady() {
  await waitFor(() => {
    expect(screen.queryByText('正在加载全球矢量地图数据...')).not.toBeInTheDocument();
  });
}

describe('App routing, state coordination, and persistence', () => {
  let scrollToSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.title = '';
    resetWorldAtlasCacheForTests();

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => MINIMAL_WORLD_TOPOLOGY,
      })
    );
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      createMockCanvasContext()
    );
    scrollToSpy = vi.fn();
    vi.spyOn(window, 'scrollTo').mockImplementation(scrollToSpy);
  });

  afterEach(() => {
    resetWorldAtlasCacheForTests();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('renders GlobeView on / with default document.title and global status', async () => {
    const { unmount } = renderAppAt('/');

    expect(document.getElementById('home-view')).toBeInTheDocument();
    expect(document.title).toBe('中国公民 DIY 出国签证指南');
    expect(screen.getByTestId('router-location').textContent).toBe('/');

    await waitForGlobeReady();

    expect(document.getElementById('globe-filter-status')).toHaveTextContent(
      `${COUNTRIES_DATA.length} 国已点亮 · 拖拽旋转 / 滚轮缩放 / 点击国家进入`
    );

    const desktopAllBtn = document
      .getElementById('category-nav')!
      .querySelector('button[data-category="all"]')!;
    expect(desktopAllBtn).toHaveAttribute('aria-pressed', 'true');

    unmount();
  });

  it('initializes category filter from /?cat=work, updates document.title, globe status, and header filters', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/?cat=work');

    const workCountries = filterCountries('work', '');
    expect(document.getElementById('home-view')).toBeInTheDocument();
    expect(document.title).toBe('工作签证通道 | 中国公民 DIY 出国签证指南');
    expect(document.getElementById('globe-filter-status')).toHaveTextContent(
      `【工作】通道 · ${workCountries.length} 国可DIY`
    );

    const desktopNav = document.getElementById('category-nav')!;
    expect(desktopNav.querySelector('button[data-category="work"]')).toHaveAttribute(
      'aria-pressed',
      'true'
    );

    await user.click(desktopNav.querySelector('button[data-category="study"]')!);
    expect(screen.getByTestId('router-location').textContent).toBe('/?cat=study');
    expect(document.title).toBe('留学签证通道 | 中国公民 DIY 出国签证指南');

    await user.click(desktopNav.querySelector('button[data-category="all"]')!);
    expect(screen.getByTestId('router-location').textContent).toBe('/');
    expect(document.title).toBe('中国公民 DIY 出国签证指南');

    await waitForGlobeReady();
    unmount();
  });

  it('renders CountryDetailView on /country/JPN?tab=work&sub=gijinkoku and syncs tab & sub-visa URL params', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/country/JPN?tab=work&sub=gijinkoku');

    expect(document.getElementById('country-detail-view')).toBeInTheDocument();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    expect(document.getElementById('detail-tab-work')).toHaveAttribute('aria-selected', 'true');
    expect(document.querySelector('[data-sub-visa="gijinkoku"]')).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(document.getElementById('stream-title')).toHaveTextContent(
      '技术·人文知识·国际业务签证'
    );
    expect(document.title).toBe('日本 - 工作签证 DIY 指南 | 中国公民 DIY 出国签证指南');

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

  it('handles case-insensitive /country/jpn, invalid /country/INVALID redirect + toast (StrictMode), invalid params fallback, and catch-all route', async () => {
    const first = renderAppAt('/country/jpn');
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    first.unmount();

    const invalid = renderAppAt('/country/INVALID', { strict: true });
    await waitFor(() => {
      expect(screen.getByTestId('router-location').textContent).toBe('/');
    });
    expect(document.getElementById('home-view')).toBeInTheDocument();
    const toast = document.getElementById('toast')!;
    expect(toast).toHaveClass('show');
    expect(toast).toHaveTextContent('未找到对应国家或地区代码: INVALID');
    await waitForGlobeReady();
    invalid.unmount();

    const bogusParams = renderAppAt('/country/JPN?tab=bogus&sub=bogus');
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    expect(document.getElementById('detail-tab-tourism')).toHaveAttribute('aria-selected', 'true');
    expect(document.getElementById('stream-title')).toHaveTextContent('个人旅游签证');
    expect(document.title).toBe('日本 - 旅游签证 DIY 指南 | 中国公民 DIY 出国签证指南');
    bogusParams.unmount();

    const unknownRoute = renderAppAt('/not-a-valid-route/123');
    await waitFor(() => {
      expect(screen.getByTestId('router-location').textContent).toBe('/');
    });
    expect(document.getElementById('home-view')).toBeInTheDocument();
    await waitForGlobeReady();
    unknownRoute.unmount();
  });

  it('triggers flyToCountry when selecting a country from search on /, navigates to detail, and preserves remembered homeCategory on back', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/?cat=work');

    await waitForGlobeReady();

    expect(screen.getByText('1.0x')).toBeInTheDocument();

    const searchInput = document.getElementById('global-search') as HTMLInputElement;
    await user.type(searchInput, '日本');

    const jpnOption = document.querySelector('[data-search-country="392"]') as HTMLButtonElement;
    expect(jpnOption).toBeInTheDocument();
    await user.click(jpnOption);

    // flyToCountry zooms the globe toward 1.35x (rounded 1.4x) before navigating away
    await waitFor(() => {
      expect(screen.getByText('1.4x')).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN?tab=work');
      },
      { timeout: 2500 }
    );

    expect(document.getElementById('country-detail-view')).toBeInTheDocument();
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    await user.click(document.getElementById('back-home-btn')!);
    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/?cat=work');
      },
      { timeout: 1500 }
    );
    expect(document.getElementById('home-view')).toBeInTheDocument();

    await waitForGlobeReady();
    unmount();
  });

  it('coordinates header category clicks, search-from-detail navigation with focus preserved, and country-to-country search transitions', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/country/JPN?tab=work&sub=gijinkoku');

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
    expect(document.getElementById('home-view')).toBeInTheDocument();
    expect(document.querySelector('[data-search-country="276"]')).toBeInTheDocument();

    await waitForGlobeReady();
    unmount();

    // Verify clicking header "all" from /country/JPN?tab=work returns to / (clearing ?cat)
    const detailMount = renderAppAt('/country/JPN?tab=work');
    const navOnDetail = document.getElementById('category-nav')!;
    await user.click(navOnDetail.querySelector('button[data-category="all"]')!);
    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/');
      },
      { timeout: 1500 }
    );
    expect(document.getElementById('home-view')).toBeInTheDocument();
    await waitForGlobeReady();
    detailMount.unmount();

    // Switch country via SearchDropdown while already on /country/JPN?tab=work
    const detailSearchSwitch = renderAppAt('/country/JPN?tab=work');
    const input2 = document.getElementById('global-search') as HTMLInputElement;
    await user.type(input2, '东亚');
    expect(screen.getByTestId('router-location').textContent).toBe('/');
    expect(document.activeElement).toBe(input2);

    // Wait for atlas and click Japan in search dropdown to land on /country/JPN
    await waitForGlobeReady();
    await user.click(document.querySelector('[data-search-country="392"]')!);
    await waitFor(
      () => {
        expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN');
      },
      { timeout: 2500 }
    );
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
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('韩国');
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    detailSearchSwitch.unmount();
  });

  it('persists checklist items and dark theme across remounts and updates dark category dot colors on detail page', async () => {
    const user = userEvent.setup();
    const firstRender = renderAppAt('/country/JPN?tab=work&sub=gijinkoku');

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
      await waitForGlobeReady();
      const searchInput = document.getElementById('global-search') as HTMLInputElement;
      await user.type(searchInput, '日本');
      await user.click(document.querySelector('[data-search-country="392"]')!);

      expect(() => homeRender.unmount()).not.toThrow();
      await new Promise((resolve) => setTimeout(resolve, 750));
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
    await waitForGlobeReady();

    const searchInput = document.getElementById('global-search') as HTMLInputElement;
    await user.type(searchInput, '日本');
    await user.click(document.querySelector('[data-search-country="392"]')!);

    act(() => {
      routerNavigate(-1);
    });
    expect(screen.getByTestId('router-location').textContent).toBe('/country/DEU');
    expect(document.getElementById('detail-country-zh')).toHaveTextContent('德国');

    // Wait longer than flyToCountry (460ms) + exit (200ms) and ensure route was not overwritten
    await new Promise((resolve) => setTimeout(resolve, 800));
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

    await user.click(document.getElementById('back-home-btn')!);
    expect(document.querySelector('.animate-view-exit.pointer-events-none')).toBeInTheDocument();

    act(() => {
      routerNavigate(-1);
    });
    expect(screen.getByTestId('router-location').textContent).toBe('/country/DEU');

    await new Promise((resolve) => setTimeout(resolve, 350));
    expect(screen.getByTestId('router-location').textContent).toBe('/country/DEU');
    expect(document.querySelector('.animate-view-exit')).not.toBeInTheDocument();
    exitRender.unmount();
  });

  it('recovers cleanly when flyToCountry rejects without unhandled rejection and allows subsequent navigation', async () => {
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
        throw new Error('Simulated flyToCountry failure');
      });

    try {
      const { unmount } = renderAppAt('/');
      await waitForGlobeReady();

      const searchInput = document.getElementById('global-search') as HTMLInputElement;
      await user.type(searchInput, '日本');
      await user.click(document.querySelector('[data-search-country="392"]')!);

      // Wait a tick for async rejection handling; should stay on / with no unhandled rejection
      await new Promise((resolve) => setTimeout(resolve, 100));
      expect(transitionSpy).toHaveBeenCalledTimes(1);
      expect(unhandledErrors).toHaveLength(0);
      expect(screen.getByTestId('router-location').textContent).toBe('/');
      expect(document.getElementById('home-view')).toBeInTheDocument();

      // Transition state must be unlocked so category switching and retry navigation succeed
      const desktopNav = document.getElementById('category-nav')!;
      await user.click(desktopNav.querySelector('button[data-category="study"]')!);
      expect(screen.getByTestId('router-location').textContent).toBe('/?cat=study');

      await user.click(searchInput);
      await user.click(document.querySelector('[data-search-country="392"]')!);

      await waitFor(
        () => {
          expect(screen.getByTestId('router-location').textContent).toBe('/country/JPN?tab=study');
        },
        { timeout: 2500 }
      );
      expect(document.getElementById('detail-country-zh')).toHaveTextContent('日本');
      unmount();
    } finally {
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    }
  });

  it('closes search dropdown on Escape and clears query via #clear-search-btn while staying on /country/:code', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAppAt('/');
    await waitForGlobeReady();

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
});
