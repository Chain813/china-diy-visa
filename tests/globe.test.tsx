import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRef } from 'react';
import * as d3 from 'd3';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { COUNTRIES_DATA, filterCountries, findCountryByCode } from '../src/data';
import { loadWorldAtlas, resetWorldAtlasCacheForTests } from '../src/utils/worldAtlas';
import { GlobeOverlays } from '../src/components/globe/GlobeOverlays';
import {
  GlobeView,
  getGlobeStatusText,
  type GlobeViewHandle,
} from '../src/components/globe/GlobeView';
import {
  createShortestRotationInterpolator,
  normalizeLongitude,
  shortestLongitudeTarget,
} from '../src/components/globe/globeRenderer';
import { findCountryAtPointer } from '../src/components/globe/globeHitTest';

const WORLD_TOPOLOGY_RAW = readFileSync(
  resolve(__dirname, '../public/world-110m.json'),
  'utf8'
);

interface MockCanvasContext extends CanvasRenderingContext2D {
  clearRect: ReturnType<typeof vi.fn>;
  arc: ReturnType<typeof vi.fn>;
  rect: ReturnType<typeof vi.fn>;
  fill: ReturnType<typeof vi.fn>;
}

function createMockCanvasContext(options?: { withRoundRect?: boolean }): MockCanvasContext {
  const ctx: Record<string, unknown> = {
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
  };
  if (options?.withRoundRect !== false) {
    ctx.roundRect = vi.fn();
  }
  return ctx as unknown as MockCanvasContext;
}

function stubAtlasFetch(payload: unknown = JSON.parse(WORLD_TOPOLOGY_RAW)): void {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => payload,
    })
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolveTimer) => setTimeout(resolveTimer, ms));
}

function dispatchMouseWithView(
  target: EventTarget,
  type: string,
  init: MouseEventInit
): void {
  const event = new MouseEvent(type, { bubbles: true, cancelable: true, ...init });
  Object.defineProperty(event, 'view', { value: window });
  act(() => {
    target.dispatchEvent(event);
  });
}

describe('worldAtlas loader', () => {
  beforeEach(() => {
    resetWorldAtlasCacheForTests();
  });

  afterEach(() => {
    resetWorldAtlasCacheForTests();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('fetches /world-110m.json once, caches the promise, and maps DIY countries', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => JSON.parse(WORLD_TOPOLOGY_RAW),
    });
    vi.stubGlobal('fetch', fetchMock);

    const [first, second] = await Promise.all([loadWorldAtlas(), loadWorldAtlas()]);
    const third = await loadWorldAtlas();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('/world-110m.json');
    expect(first).toBe(second);
    expect(first).toBe(third);
    expect(first.worldFeatures.length).toBeGreaterThan(100);
    expect(first.diyFeatures.length).toBeGreaterThan(90);
    expect(first.countryBordersMesh.type).toBe('MultiLineString');

    const japanFeature = first.diyFeatures.find((f) => f._cid === '392');
    expect(japanFeature?._countryData?.code).toBe('JPN');
  });

  it('pads valid numeric ids and safely ignores malformed feature ids', async () => {
    const minimalTopology = {
      type: 'Topology',
      objects: {
        countries: {
          type: 'GeometryCollection',
          geometries: [
            { type: 'Polygon', id: 8, arcs: [[0]] },
            { type: 'Polygon', id: '999', arcs: [[0]] },
            { type: 'Polygon', id: 'abc', arcs: [[0]] },
            { type: 'Polygon', id: -5, arcs: [[0]] },
            { type: 'Polygon', arcs: [[0]] },
          ],
        },
      },
      arcs: [
        [
          [19, 41],
          [20, 41],
          [20, 42],
          [19, 42],
          [19, 41],
        ],
      ],
    };

    stubAtlasFetch(minimalTopology);

    const atlas = await loadWorldAtlas();
    expect(atlas.worldFeatures).toHaveLength(5);
    expect(atlas.diyFeatures).toHaveLength(1);
    expect(atlas.diyFeatures[0]._cid).toBe('008');
    expect(atlas.diyFeatures[0]._countryData?.code).toBe('ALB');
    expect(atlas.worldFeatures[2]._cid).toBe('');
    expect(atlas.worldFeatures[3]._cid).toBe('');
    expect(atlas.worldFeatures[4]._cid).toBe('');
  });

  it('rejects invalid TopoJSON payloads and clears cache so subsequent load can succeed', async () => {
    const invalidPayloads: unknown[] = [
      null,
      { type: 'FeatureCollection', features: [] },
      { type: 'Topology', objects: { countries: { type: 'GeometryCollection', geometries: [] } } },
      { type: 'Topology', arcs: [], objects: {} },
      { type: 'Topology', arcs: [], objects: { countries: { type: 'Polygon', arcs: [] } } },
    ];

    for (const badPayload of invalidPayloads) {
      resetWorldAtlasCacheForTests();
      stubAtlasFetch(badPayload);
      await expect(loadWorldAtlas()).rejects.toThrow('Invalid world atlas TopoJSON payload');
    }

    // Cache should be clear after the last failure so valid retry succeeds
    stubAtlasFetch();
    const recovered = await loadWorldAtlas();
    expect(recovered.diyFeatures.length).toBeGreaterThan(90);
  });

  it('clears cached promise on HTTP error or network rejection so retries succeed', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: false, status: 503, json: async () => ({}) })
      .mockRejectedValueOnce(new Error('Network down'))
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => JSON.parse(WORLD_TOPOLOGY_RAW),
      });
    vi.stubGlobal('fetch', fetchMock);

    await expect(loadWorldAtlas()).rejects.toThrow('Failed to load world atlas: 503');
    await expect(loadWorldAtlas()).rejects.toThrow('Network down');

    const recovered = await loadWorldAtlas();
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(recovered.diyFeatures.length).toBeGreaterThan(90);
  });
});

describe('globeRenderer angle normalization and shortest-arc interpolation', () => {
  it('normalizes longitudes to [-180, 180) and interpolates along shortest arc across antimeridian', () => {
    expect(normalizeLongitude(180)).toBe(-180);
    expect(normalizeLongitude(-180)).toBe(-180);
    expect(normalizeLongitude(190)).toBe(-170);
    expect(normalizeLongitude(-190)).toBe(170);
    expect(normalizeLongitude(360)).toBe(0);

    expect(shortestLongitudeTarget(170, -170)).toBe(190);
    expect(shortestLongitudeTarget(-170, 170)).toBe(-190);

    const interp = createShortestRotationInterpolator([170, 10, 0], [-170, -10, 0]);
    expect(interp(0)).toEqual([170, 10, 0]);
    expect(interp(0.5)).toEqual([-180, 0, 0]);
    expect(interp(1)).toEqual([-170, -10, 0]);
  });
});

describe('globeHitTest pin priority vs geoContains polygon fallback', () => {
  afterEach(() => {
    resetWorldAtlasCacheForTests();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('prefers pin hit within 14px and falls back to d3.geoContains on polygon interior', async () => {
    resetWorldAtlasCacheForTests();
    stubAtlasFetch();
    const atlas = await loadWorldAtlas();

    const aus = findCountryByCode('AUS')!;
    const rotation: [number, number, number] = [-aus.coords[0], -aus.coords[1], 0];
    const projection = d3
      .geoOrthographic()
      .scale(240)
      .translate([430, 280])
      .rotate(rotation)
      .clipAngle(90);

    // Pin hit within 14px
    const pinPos = projection(aus.coords)!;
    expect(findCountryAtPointer(pinPos[0] + 6, pinPos[1] - 6, projection, atlas, rotation)).toBe(
      aus
    );

    // Polygon hit in Western Australia (>14px away from Australia's center pin)
    const waCoords: [number, number] = [120, -25];
    const waPos = projection(waCoords)!;
    expect(Math.hypot(waPos[0] - pinPos[0], waPos[1] - pinPos[1])).toBeGreaterThan(20);
    expect(findCountryAtPointer(waPos[0], waPos[1], projection, atlas, rotation)).toBe(aus);

    // Outside globe sphere returns null
    expect(findCountryAtPointer(0, 0, projection, atlas, rotation)).toBeNull();
  });
});

describe('getGlobeStatusText', () => {
  it('formats status text for all, category-filtered, and search-query modes', () => {
    expect(getGlobeStatusText('all', '', 102, 102)).toBe(
      '102 国已点亮 · 拖拽旋转 / 滚轮缩放 / 点击国家进入'
    );
    expect(getGlobeStatusText('all', '   ', 102, 102)).toBe(
      '102 国已点亮 · 拖拽旋转 / 滚轮缩放 / 点击国家进入'
    );
    expect(getGlobeStatusText('work', '', 48, 102)).toBe('【工作】通道 · 48 国可DIY');
    expect(getGlobeStatusText('study', '日本', 1, 102)).toBe(
      '匹配 1 国 · 点击地球或下拉项进入'
    );
  });
});

describe('GlobeOverlays', () => {
  it('renders accessible zoom controls, status, legend, and triggers zoom/reset/region callbacks', () => {
    const onZoomIn = vi.fn();
    const onZoomOut = vi.fn();
    const onReset = vi.fn();
    const onFocusRegion = vi.fn();

    render(
      <GlobeOverlays
        zoomLevel={1.35}
        statusText="102 国已点亮 · 拖拽旋转 / 滚轮缩放 / 点击国家进入"
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onReset={onReset}
        onFocusRegion={onFocusRegion}
      />
    );

    expect(screen.getByText('1.4x')).toHaveAttribute('id', 'zoom-level-badge');
    expect(
      screen.getByText('102 国已点亮 · 拖拽旋转 / 滚轮缩放 / 点击国家进入')
    ).toHaveAttribute('id', 'globe-filter-status');

    expect(screen.getByText('网申/中心')).toBeInTheDocument();
    expect(screen.getByText('互免/电子签')).toBeInTheDocument();
    expect(screen.getByText('悬停/匹配')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '放大' }));
    fireEvent.click(screen.getByRole('button', { name: '缩小' }));
    fireEvent.click(screen.getByRole('button', { name: '重置视角' }));
    expect(onZoomIn).toHaveBeenCalledTimes(1);
    expect(onZoomOut).toHaveBeenCalledTimes(1);
    expect(onReset).toHaveBeenCalledTimes(1);

    const expectedRegions: Array<[string, number, number]> = [
      ['亚太', -105, -30],
      ['欧洲', -12, -48],
      ['北美', 98, -38],
      ['拉美', 62, 15],
      ['中东/非', -25, -5],
      ['澳新', -145, 25],
    ];

    for (const [label, lon, lat] of expectedRegions) {
      const btn = screen.getByRole('button', { name: label });
      expect(btn).toHaveClass('whitespace-nowrap', 'shrink-0');
      fireEvent.click(btn);
      expect(onFocusRegion).toHaveBeenLastCalledWith(lon, lat);
    }
    expect(onFocusRegion).toHaveBeenCalledTimes(6);
  });
});

describe('GlobeView interactions and lifecycle', () => {
  beforeEach(() => {
    resetWorldAtlasCacheForTests();
  });

  afterEach(() => {
    resetWorldAtlasCacheForTests();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('shows loading state and then fallback message if world atlas fails to load', async () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);

    let rejectFetch!: (reason?: unknown) => void;
    const pendingFetch = new Promise<Response>((_resolve, reject) => {
      rejectFetch = reject;
    });
    vi.stubGlobal('fetch', vi.fn().mockReturnValue(pendingFetch));

    const ref = createRef<GlobeViewHandle>();
    const { unmount } = render(
      <GlobeView
        ref={ref}
        activeCategory="all"
        searchQuery=""
        filteredCountries={COUNTRIES_DATA}
        theme="light"
        isSpinning={true}
        isTransitioning={false}
        onCountryClick={vi.fn()}
      />
    );

    expect(screen.getByText('正在加载全球矢量地图数据...')).toBeInTheDocument();

    const jpn = findCountryByCode('JPN')!;
    await expect(ref.current!.flyToCountry(jpn)).resolves.toBeUndefined();

    await act(async () => {
      rejectFetch(new Error('Atlas fetch failed'));
    });

    await waitFor(() => {
      expect(
        screen.getByText(
          `全球矢量底图加载受限，请使用上方搜索框检索全部 ${COUNTRIES_DATA.length} 国DIY签证指南。`
        )
      ).toBeInTheDocument();
    });

    expect(() => unmount()).not.toThrow();
  });

  it('renders atlas, supports wheel/button zoom, first mousemove hover, flyToCountry, and drag click-suppression', async () => {
    const mockCtx = createMockCanvasContext({ withRoundRect: false });
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(mockCtx);
    stubAtlasFetch();

    const onCountryClick = vi.fn();
    const ref = createRef<GlobeViewHandle>();
    const { container, rerender, unmount } = render(
      <GlobeView
        ref={ref}
        activeCategory="all"
        searchQuery=""
        filteredCountries={COUNTRIES_DATA}
        theme="light"
        isSpinning={false}
        isTransitioning={false}
        onCountryClick={onCountryClick}
      />
    );

    await waitFor(() => {
      expect(screen.queryByText('正在加载全球矢量地图数据...')).not.toBeInTheDocument();
    });

    expect(mockCtx.fill).toHaveBeenCalled();
    expect(mockCtx.rect).toHaveBeenCalled();

    const canvas = container.querySelector('canvas')!;
    fireEvent.click(screen.getByRole('button', { name: '放大' }));
    expect(screen.getByText('1.3x')).toBeInTheDocument();

    fireEvent.wheel(canvas, { deltaY: -100 });
    expect(screen.getByText('1.4x')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '重置视角' }));
    expect(screen.getByText('1.0x')).toBeInTheDocument();

    const workCountries = filterCountries('work', '');
    rerender(
      <GlobeView
        ref={ref}
        activeCategory="work"
        searchQuery=""
        filteredCountries={workCountries}
        theme="dark"
        isSpinning={false}
        isTransitioning={false}
        onCountryClick={onCountryClick}
      />
    );
    expect(screen.getByText(`【工作】通道 · ${workCountries.length} 国可DIY`)).toBeInTheDocument();

    const jpn = findCountryByCode('JPN')!;
    await act(async () => {
      await ref.current!.flyToCountry(jpn);
    });
    expect(screen.getByText('1.4x')).toBeInTheDocument();

    // Very first mousemove after mount should not be dropped by throttle
    fireEvent.mouseMove(canvas, { clientX: 430, clientY: 280 });
    expect(screen.getByText('点击进入DIY全流程 →')).toBeInTheDocument();
    expect(screen.getByText(jpn.nameZh)).toBeInTheDocument();

    // Normal click triggers onCountryClick
    fireEvent.click(canvas, { clientX: 430, clientY: 280 });
    expect(onCountryClick).toHaveBeenCalledTimes(1);
    expect(onCountryClick).toHaveBeenCalledWith(jpn);

    // Drag rotates globe, skips hover hit-testing while dragging, and suppresses trailing click
    const clearCountBeforeDrag = mockCtx.clearRect.mock.calls.length;
    dispatchMouseWithView(canvas, 'mousedown', { clientX: 430, clientY: 280, button: 0 });
    dispatchMouseWithView(window, 'mousemove', { clientX: 470, clientY: 295 });
    dispatchMouseWithView(canvas, 'mousemove', { clientX: 470, clientY: 295 });
    const tooltipEl = container.querySelector('#globe-tooltip') as HTMLElement;
    expect(tooltipEl.style.opacity).toBe('0');
    dispatchMouseWithView(window, 'mouseup', { clientX: 470, clientY: 295 });

    expect(mockCtx.clearRect.mock.calls.length).toBeGreaterThan(clearCountBeforeDrag);

    fireEvent.click(canvas, { clientX: 470, clientY: 295 });
    expect(onCountryClick).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(canvas);
    expect(tooltipEl.style.opacity).toBe('0');
    expect(() => unmount()).not.toThrow();
  });

  it('advances rotation during auto-spin, pauses when disabled or interacting, and handles pinch/touchcancel/focus/reset recovery', async () => {
    const mockCtx = createMockCanvasContext();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(mockCtx);
    stubAtlasFetch();

    const { container, rerender, unmount } = render(
      <GlobeView
        activeCategory="all"
        searchQuery=""
        filteredCountries={COUNTRIES_DATA}
        theme="light"
        isSpinning={true}
        isTransitioning={false}
        onCountryClick={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.queryByText('正在加载全球矢量地图数据...')).not.toBeInTheDocument();
    });

    // Auto-spin timer advances frames and rotates pins
    const initialDraws = mockCtx.clearRect.mock.calls.length;
    const firstArcArgs = mockCtx.arc.mock.calls[0]?.slice(0, 2);
    await act(async () => {
      await sleep(80);
    });
    expect(mockCtx.clearRect.mock.calls.length).toBeGreaterThan(initialDraws);
    const laterArcArgs = mockCtx.arc.mock.calls.at(-1)?.slice(0, 2);
    expect(laterArcArgs).not.toEqual(firstArcArgs);

    // Pause when isSpinning turns false
    rerender(
      <GlobeView
        activeCategory="all"
        searchQuery=""
        filteredCountries={COUNTRIES_DATA}
        theme="light"
        isSpinning={false}
        isTransitioning={false}
        onCountryClick={vi.fn()}
      />
    );
    const pausedDraws = mockCtx.clearRect.mock.calls.length;
    await act(async () => {
      await sleep(70);
    });
    expect(mockCtx.clearRect.mock.calls.length).toBe(pausedDraws);

    // Resume auto-spin, then test 2-finger pinch zoom + partial 2->1 finger touchend + final 0-finger touchend
    rerender(
      <GlobeView
        activeCategory="all"
        searchQuery=""
        filteredCountries={COUNTRIES_DATA}
        theme="light"
        isSpinning={true}
        isTransitioning={false}
        onCountryClick={vi.fn()}
      />
    );

    const canvas = container.querySelector('canvas')!;
    fireEvent.touchStart(canvas, {
      touches: [
        { clientX: 0, clientY: 0 },
        { clientX: 100, clientY: 0 },
      ],
    });
    fireEvent.touchMove(canvas, {
      touches: [
        { clientX: 0, clientY: 0 },
        { clientX: 150, clientY: 0 },
      ],
    });
    expect(screen.getByText('1.5x')).toBeInTheDocument();

    // Lifting 1 finger leaves 1 touch remaining: interaction must remain active (auto-spin stays paused)
    fireEvent.touchEnd(canvas, {
      touches: [{ clientX: 0, clientY: 0 }],
    });
    const oneFingerDraws = mockCtx.clearRect.mock.calls.length;
    await act(async () => {
      await sleep(60);
    });
    expect(mockCtx.clearRect.mock.calls.length).toBe(oneFingerDraws);

    // Lifting final finger resumes auto-spin
    fireEvent.touchEnd(canvas, { touches: [] });
    await act(async () => {
      await sleep(60);
    });
    expect(mockCtx.clearRect.mock.calls.length).toBeGreaterThan(oneFingerDraws);

    // Pinch then touchcancel recovers interaction state and resumes auto-spin
    fireEvent.touchStart(canvas, {
      touches: [
        { clientX: 10, clientY: 10 },
        { clientX: 110, clientY: 10 },
      ],
    });
    const canceledStartDraws = mockCtx.clearRect.mock.calls.length;
    fireEvent.touchCancel(canvas, { touches: [] });
    await act(async () => {
      await sleep(60);
    });
    expect(mockCtx.clearRect.mock.calls.length).toBeGreaterThan(canceledStartDraws);

    // focusRegion interrupted by resetView cleanly resets zoom and restores auto-spin
    fireEvent.click(screen.getByRole('button', { name: '欧洲' }));
    fireEvent.click(screen.getByRole('button', { name: '重置视角' }));
    expect(screen.getByText('1.0x')).toBeInTheDocument();
    const afterResetDraws = mockCtx.clearRect.mock.calls.length;
    await act(async () => {
      await sleep(70);
    });
    expect(mockCtx.clearRect.mock.calls.length).toBeGreaterThan(afterResetDraws);

    // Completed focusRegion also restores auto-spin
    fireEvent.click(screen.getByRole('button', { name: '亚太' }));
    await act(async () => {
      await sleep(600);
    });
    const afterFocusDraws = mockCtx.clearRect.mock.calls.length;
    await act(async () => {
      await sleep(60);
    });
    expect(mockCtx.clearRect.mock.calls.length).toBeGreaterThan(afterFocusDraws);

    expect(() => unmount()).not.toThrow();
  });
});
