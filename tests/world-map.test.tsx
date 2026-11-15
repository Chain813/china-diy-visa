import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRef } from 'react';
import * as d3 from 'd3';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { COUNTRY_DIRECTORY, filterCountrySummaries, findSummaryByCode } from '../src/data';
import {
  isCountryFeature,
  loadWorldAtlas,
  resetWorldAtlasCacheForTests,
} from '../src/utils/worldAtlas';
import {
  MAP_PALETTES,
  MAP_REGIONS,
  createMapProjection,
  getGraticuleData,
  renderFlatWorldMap,
  resetGraticuleCacheForTests,
  resolveCountryFillColor,
} from '../src/components/map/mapRenderer';
import { findCountryAtPointer, getPointerPosition } from '../src/components/map/mapHitTest';
import { MapOverlays } from '../src/components/map/MapOverlays';
import { CountryDirectory } from '../src/components/map/CountryDirectory';
import { WorldMapView, type WorldMapViewHandle } from '../src/components/map/WorldMapView';

const WORLD_50M_RAW = readFileSync(resolve(__dirname, '../public/world-50m.json'), 'utf8');

interface MockCanvasContext extends CanvasRenderingContext2D {
  clearRect: ReturnType<typeof vi.fn>;
  translate: ReturnType<typeof vi.fn>;
  scale: ReturnType<typeof vi.fn>;
  clip: ReturnType<typeof vi.fn>;
  arc: ReturnType<typeof vi.fn>;
  rect: ReturnType<typeof vi.fn>;
  fill: ReturnType<typeof vi.fn>;
  stroke: ReturnType<typeof vi.fn>;
  fillText: ReturnType<typeof vi.fn>;
}

function createMockCanvasContext(options?: {
  withRoundRect?: boolean;
  onStroke?: (ctx: CanvasRenderingContext2D) => void;
}): MockCanvasContext {
  const ctx: Record<string, unknown> = {
    save: vi.fn(),
    restore: vi.fn(),
    translate: vi.fn(),
    scale: vi.fn(),
    clip: vi.fn(),
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    moveTo: () => {},
    lineTo: () => {},
    closePath: () => {},
    arc: vi.fn(),
    rect: vi.fn(),
    fill: vi.fn(),
    stroke: vi.fn(function (this: CanvasRenderingContext2D) {
      options?.onStroke?.(this);
    }),
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

function stubAtlasFetch(payload: unknown = JSON.parse(WORLD_50M_RAW)): void {
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

describe('worldAtlas 50m loader', () => {
  beforeEach(() => {
    resetWorldAtlasCacheForTests();
  });

  afterEach(() => {
    resetWorldAtlasCacheForTests();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('fetches /world-50m.json once, caches the promise, and enriches SGP/MUS/BHR via findSummaryById', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => JSON.parse(WORLD_50M_RAW),
    });
    vi.stubGlobal('fetch', fetchMock);

    const [first, second] = await Promise.all([loadWorldAtlas(), loadWorldAtlas()]);
    const third = await loadWorldAtlas();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('/world-50m.json');
    expect(first).toBe(second);
    expect(first).toBe(third);
    expect(first.features).toHaveLength(241);
    expect(first.countryFeatures.length).toBeGreaterThanOrEqual(102);
    expect(new Set(first.countryFeatures.map((f) => f.country.code)).size).toBe(102);
    expect(first.bordersMesh.type).toBe('MultiLineString');

    const sgp = first.countryFeatures.find((f) => f.cid === '702');
    const mus = first.countryFeatures.find((f) => f.cid === '480');
    const bhr = first.countryFeatures.find((f) => f.cid === '048');
    expect(sgp?.country.code).toBe('SGP');
    expect(mus?.country.code).toBe('MUS');
    expect(bhr?.country.code).toBe('BHR');
    expect(sgp && isCountryFeature(sgp)).toBe(true);
  });

  it('normalizes valid numeric ids and safely ignores malformed feature ids', async () => {
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
    expect(atlas.features).toHaveLength(5);
    expect(atlas.countryFeatures).toHaveLength(1);
    expect(atlas.countryFeatures[0].cid).toBe('008');
    expect(atlas.countryFeatures[0].country.code).toBe('ALB');
    expect(atlas.features[2].cid).toBe('');
    expect(atlas.features[3].cid).toBe('');
    expect(atlas.features[4].cid).toBe('');
    expect(isCountryFeature(atlas.features[1])).toBe(false);
  });

  it('clears cache on HTTP errors, network errors, and invalid TopoJSON so retries succeed', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: false, status: 500, json: async () => ({}) })
      .mockRejectedValueOnce(new Error('Offline'))
      .mockResolvedValueOnce({ ok: true, status: 200, json: async () => ({ type: 'Polygon' }) })
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => JSON.parse(WORLD_50M_RAW),
      });
    vi.stubGlobal('fetch', fetchMock);

    await expect(loadWorldAtlas()).rejects.toThrow('Failed to load world atlas: 500');
    await expect(loadWorldAtlas()).rejects.toThrow('Offline');
    await expect(loadWorldAtlas()).rejects.toThrow('Invalid world atlas TopoJSON payload');

    const recovered = await loadWorldAtlas();
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect(new Set(recovered.countryFeatures.map((f) => f.country.code)).size).toBe(102);
  });
});

describe('mapRenderer graticule guard, projection, regions, and 3-state canvas rendering', () => {
  afterEach(() => {
    resetGraticuleCacheForTests();
    vi.doUnmock('d3');
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it('never crashes module import if d3.geoGraticule10 throws and returns null safely', async () => {
    vi.resetModules();
    vi.doMock('d3', async (importOriginal) => {
      const actual = await importOriginal<typeof d3>();
      return {
        ...actual,
        geoGraticule10: () => {
          throw new Error('Graticule computation failed');
        },
      };
    });

    const freshRenderer = await import('../src/components/map/mapRenderer');
    expect(freshRenderer.getGraticuleData()).toBeNull();
  });

  it('provides valid Natural Earth projection and all 6 MAP_REGIONS targets', () => {
    const graticule = getGraticuleData();
    expect(graticule?.type).toBe('MultiLineString');

    const proj = createMapProjection(900, 560);
    const origin = proj([0, 0]);
    const sgp = proj([103.82, 1.35]);
    expect(origin).not.toBeNull();
    expect(sgp).not.toBeNull();
    expect(Number.isFinite(origin![0])).toBe(true);
    expect(Number.isFinite(sgp![1])).toBe(true);

    // Tiny bounds never produce NaN
    const tinyProj = createMapProjection(10, 10);
    const tinyPoint = tinyProj([138.25, 36.2]);
    expect(tinyPoint).not.toBeNull();
    expect(Number.isFinite(tinyPoint![0])).toBe(true);

    expect(MAP_REGIONS).toEqual([
      { id: 'all', label: '全球', center: expect.any(Array), k: 1 },
      { id: 'asia-pacific', label: '亚太', center: expect.any(Array), k: 2.3 },
      { id: 'europe', label: '欧洲', center: expect.any(Array), k: 3.0 },
      { id: 'north-america', label: '北美', center: expect.any(Array), k: 2.3 },
      { id: 'middle-east-africa', label: '中东非', center: expect.any(Array), k: 2.1 },
      { id: 'south-america', label: '南美', center: expect.any(Array), k: 2.3 },
    ]);
  });

  it('resolves three-state land colors across light/dark themes and renders with zoom transform', async () => {
    resetWorldAtlasCacheForTests();
    stubAtlasFetch();
    const atlas = await loadWorldAtlas();

    const aus = findSummaryByCode('AUS')!;
    const jpn = findSummaryByCode('JPN')!;
    const sgp = findSummaryByCode('SGP')!;
    const workMatches = filterCountrySummaries('work', '');
    const workSet = new Set(workMatches.map((c) => c.code));

    expect(workSet.has('AUS')).toBe(true);
    expect(workSet.has('JPN')).toBe(false);

    // State 1: matched DIY country & hovered variant
    expect(
      resolveCountryFillColor({
        country: aus,
        filteredCodeSet: workSet,
        activeCategory: 'work',
        hasSearch: false,
        hoveredCode: null,
        isDark: false,
      })
    ).toBe(MAP_PALETTES.light.tierTeal);

    expect(
      resolveCountryFillColor({
        country: sgp,
        filteredCodeSet: new Set(['SGP']),
        activeCategory: 'all',
        hasSearch: false,
        hoveredCode: 'SGP',
        isDark: false,
      })
    ).toBe(MAP_PALETTES.light.tierSageHover);

    // State 2: advisory-only (non-DIY for active category)
    expect(
      resolveCountryFillColor({
        country: jpn,
        filteredCodeSet: workSet,
        activeCategory: 'work',
        hasSearch: false,
        hoveredCode: null,
        isDark: false,
      })
    ).toBe(MAP_PALETTES.light.advisoryLand);

    // State 3: unindexed background territory (light & dark)
    expect(
      resolveCountryFillColor({
        country: undefined,
        filteredCodeSet: workSet,
        activeCategory: 'work',
        hasSearch: false,
        hoveredCode: null,
        isDark: false,
      })
    ).toBe('#E7E4DC');

    expect(
      resolveCountryFillColor({
        country: undefined,
        filteredCodeSet: workSet,
        activeCategory: 'work',
        hasSearch: false,
        hoveredCode: null,
        isDark: true,
      })
    ).toBe('#242B33');

    const ctx = createMockCanvasContext({ withRoundRect: false });
    const projection = createMapProjection(860, 560);
    renderFlatWorldMap({
      ctx,
      projection,
      atlas,
      width: 860,
      height: 560,
      dpr: 1.5,
      transform: d3.zoomIdentity.translate(-120, -60).scale(2),
      filteredCountries: [aus, sgp],
      activeCategory: 'work',
      hoveredCode: 'JPN',
      theme: 'dark',
    });

    expect(ctx.translate).toHaveBeenCalledWith(-120, -60);
    expect(ctx.scale).toHaveBeenCalledWith(1.5, 1.5);
    expect(ctx.scale).toHaveBeenCalledWith(2, 2);
    expect(ctx.clip).toHaveBeenCalled();
    expect(ctx.fill).toHaveBeenCalled();
    expect(ctx.rect).toHaveBeenCalled();
    expect(ctx.fillText).toHaveBeenCalled();
  });

  it('strokes all geometries for multi-feature hovered countries such as Australia (036)', async () => {
    resetWorldAtlasCacheForTests();
    stubAtlasFetch();
    const atlas = await loadWorldAtlas();
    const projection = createMapProjection(860, 560);
    const aus = findSummaryByCode('AUS')!;
    const ausFeatures = atlas.countryFeatures.filter((f) => f.cid === '036');
    expect(ausFeatures).toHaveLength(2);

    const polygonOutlineStrokes: string[] = [];
    const ctx = createMockCanvasContext({
      onStroke: (context) => {
        if (
          String(context.strokeStyle).toUpperCase() === MAP_PALETTES.light.accentRed &&
          (context as unknown as MockCanvasContext).arc.mock.calls.length === 0
        ) {
          polygonOutlineStrokes.push(String(context.strokeStyle).toUpperCase());
        }
      },
    });

    renderFlatWorldMap({
      ctx,
      projection,
      atlas,
      width: 860,
      height: 560,
      dpr: 1,
      transform: d3.zoomIdentity,
      filteredCountries: [aus],
      activeCategory: 'all',
      hoveredCode: 'AUS',
      theme: 'light',
    });

    // Both Australia mainland and Ashmore and Cartier Is. (both cid '036') are stroked before screen-space pins
    expect(polygonOutlineStrokes).toHaveLength(2);
  });
});

describe('mapHitTest pin priority and zoom-transformed 50m polygon containment', () => {
  afterEach(() => {
    resetWorldAtlasCacheForTests();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('hits Singapore, Tokyo, and Australia accurately at k = 1 and zoomed k = 3', async () => {
    resetWorldAtlasCacheForTests();
    stubAtlasFetch();
    const atlas = await loadWorldAtlas();

    const sgp = findSummaryByCode('SGP')!;
    const jpn = findSummaryByCode('JPN')!;
    const aus = findSummaryByCode('AUS')!;
    const projection = createMapProjection(900, 560);

    // k = 1 tests
    const sgpProj = projection(sgp.coords)!;
    const jpnProj = projection(jpn.coords)!;
    const ausWaProj = projection([120, -25])!;

    expect(
      findCountryAtPointer(
        sgpProj[0] + 6,
        sgpProj[1] - 6,
        projection,
        d3.zoomIdentity,
        atlas,
        COUNTRY_DIRECTORY
      )
    ).toBe(sgp);

    expect(
      findCountryAtPointer(
        jpnProj[0],
        jpnProj[1],
        projection,
        d3.zoomIdentity,
        atlas,
        COUNTRY_DIRECTORY
      )
    ).toBe(jpn);

    expect(
      findCountryAtPointer(
        ausWaProj[0],
        ausWaProj[1],
        projection,
        d3.zoomIdentity,
        atlas,
        COUNTRY_DIRECTORY
      )
    ).toBe(aus);

    // Outside Natural Earth oval must return null (no antimeridian wrap-around)
    expect(
      findCountryAtPointer(2, 280, projection, d3.zoomIdentity, atlas, COUNTRY_DIRECTORY)
    ).toBeNull();
    expect(
      findCountryAtPointer(2, 2, projection, d3.zoomIdentity, atlas, COUNTRY_DIRECTORY)
    ).toBeNull();

    // k = 3 zoomed transform tests
    const zoomedTransform = d3.zoomIdentity.translate(-900, -450).scale(3);
    const sgpScreenX = sgpProj[0] * 3 - 900;
    const sgpScreenY = sgpProj[1] * 3 - 450;
    const jpnScreenX = jpnProj[0] * 3 - 900;
    const jpnScreenY = jpnProj[1] * 3 - 450;
    const ausWaScreenX = ausWaProj[0] * 3 - 900;
    const ausWaScreenY = ausWaProj[1] * 3 - 450;

    expect(
      findCountryAtPointer(
        sgpScreenX + 5,
        sgpScreenY - 5,
        projection,
        zoomedTransform,
        atlas,
        COUNTRY_DIRECTORY
      )
    ).toBe(sgp);

    expect(
      findCountryAtPointer(
        jpnScreenX,
        jpnScreenY,
        projection,
        zoomedTransform,
        atlas,
        COUNTRY_DIRECTORY
      )
    ).toBe(jpn);

    expect(
      findCountryAtPointer(
        ausWaScreenX,
        ausWaScreenY,
        projection,
        zoomedTransform,
        atlas,
        COUNTRY_DIRECTORY
      )
    ).toBe(aus);

    // getPointerPosition respects bounding rect scaling
    const fakeCanvas = {
      getBoundingClientRect: () => ({ left: 10, top: 20, width: 450, height: 280 }) as DOMRect,
    } as HTMLCanvasElement;
    const pointer = getPointerPosition(
      fakeCanvas,
      { clientX: 235, clientY: 160 } as MouseEvent,
      900,
      560
    );
    expect(pointer.mx).toBe(450);
    expect(pointer.my).toBe(280);
  });
});

describe('MapOverlays & CountryDirectory UI', () => {
  it('renders telemetry counts, legend swatches, zoom bar, and 6-region focus pills', () => {
    const onZoomIn = vi.fn();
    const onZoomOut = vi.fn();
    const onResetView = vi.fn();
    const onFocusRegion = vi.fn();

    const { rerender } = render(
      <MapOverlays
        filteredCount={102}
        totalCount={102}
        activeCategory="all"
        zoomScale={1}
        activeRegionId="all"
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onResetView={onResetView}
        onFocusRegion={onFocusRegion}
      />
    );

    expect(screen.getByText(/102 \/ 102 国/)).toBeInTheDocument();
    expect(screen.getByText('1.0x')).toHaveAttribute('id', 'zoom-level-badge');
    expect(screen.getByText('网申 / 签证中心')).toBeInTheDocument();
    expect(screen.getByText('免签 / 电子签')).toBeInTheDocument();
    expect(screen.queryByText('非标准 DIY（不匹配当前直申筛选）')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '放大' }));
    fireEvent.click(screen.getByRole('button', { name: '缩小' }));
    fireEvent.click(screen.getByRole('button', { name: '重置视角' }));
    expect(onZoomIn).toHaveBeenCalledTimes(1);
    expect(onZoomOut).toHaveBeenCalledTimes(1);
    expect(onResetView).toHaveBeenCalledTimes(1);

    for (const region of MAP_REGIONS) {
      const btn = screen.getByRole('button', { name: region.label });
      expect(btn).toHaveClass('focus-btn', 'whitespace-nowrap', 'shrink-0');
      expect(btn).toHaveAttribute('aria-pressed', region.id === 'all' ? 'true' : 'false');
      fireEvent.click(btn);
      expect(onFocusRegion).toHaveBeenLastCalledWith(region.id);
    }

    rerender(
      <MapOverlays
        filteredCount={48}
        totalCount={102}
        activeCategory="work"
        zoomScale={2.34}
        activeRegionId="europe"
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onResetView={onResetView}
        onFocusRegion={onFocusRegion}
      />
    );

    expect(screen.getByText(/48 \/ 102 国/)).toBeInTheDocument();
    expect(screen.getByText('2.3x')).toBeInTheDocument();
    expect(screen.getByText('非标准 DIY（不匹配当前直申筛选）')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '欧洲' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('groups CountryDirectory into 4 regions, toggles sections, and emits onSelectCountry', () => {
    const onClose = vi.fn();
    const onSelectCountry = vi.fn();

    const { rerender } = render(
      <CountryDirectory
        countries={COUNTRY_DIRECTORY}
        activeCategory="all"
        isOpen={true}
        onClose={onClose}
        onSelectCountry={onSelectCountry}
      />
    );

    expect(screen.getByRole('complementary', { name: '国家目录' })).toBeInTheDocument();
    expect(screen.getByText('共 102 / 102 国')).toBeInTheDocument();

    const asiaRegion = screen.getByRole('region', { name: '亚太与大洋洲' });
    const europeRegion = screen.getByRole('region', { name: '欧洲' });
    const americasRegion = screen.getByRole('region', { name: '美洲' });
    const meaRegion = screen.getByRole('region', { name: '中东与非洲' });

    expect(within(asiaRegion).getByText('19')).toBeInTheDocument();
    expect(within(europeRegion).getByText('39')).toBeInTheDocument();
    expect(within(americasRegion).getByText('13')).toBeInTheDocument();
    expect(within(meaRegion).getByText('31')).toBeInTheDocument();

    // Selecting Singapore calls onSelectCountry with its CountrySummary
    const sgpBtn = within(asiaRegion).getByRole('button', { name: /新加坡/ });
    fireEvent.click(sgpBtn);
    expect(onSelectCountry).toHaveBeenCalledTimes(1);
    expect(onSelectCountry).toHaveBeenCalledWith(findSummaryByCode('SGP'));

    // Collapsing Europe section hides its cards
    const europeToggle = within(europeRegion).getByRole('button', { name: /^欧洲/ });
    expect(europeToggle).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(europeToggle);
    expect(europeToggle).toHaveAttribute('aria-expanded', 'false');
    expect(within(europeRegion).queryByRole('button', { name: /德国/ })).not.toBeInTheDocument();

    // Close button calls onClose
    fireEvent.click(screen.getByRole('button', { name: '收起国家目录' }));
    expect(onClose).toHaveBeenCalledTimes(1);

    // Collapses cleanly when isOpen is false
    rerender(
      <CountryDirectory
        countries={COUNTRY_DIRECTORY}
        activeCategory="all"
        isOpen={false}
        onClose={onClose}
        onSelectCountry={onSelectCountry}
      />
    );
    expect(screen.queryByRole('complementary', { name: '国家目录' })).not.toBeInTheDocument();
  });

  it('shows activeCategory pathway hints in CountryDirectory when filtered', () => {
    const workCountries = filterCountrySummaries('work', '');
    const aus = findSummaryByCode('AUS')!;
    render(
      <CountryDirectory
        countries={workCountries}
        activeCategory="work"
        isOpen={true}
        onClose={vi.fn()}
        onSelectCountry={vi.fn()}
      />
    );

    expect(screen.getByText('工作 · DIY直申')).toBeInTheDocument();
    expect(screen.getByText(`共 ${workCountries.length} / 102 国`)).toBeInTheDocument();
    expect(screen.getByText(aus.previewTitles.work)).toBeInTheDocument();
  });
});

describe('WorldMapView & MapCanvas full lifecycle', () => {
  beforeEach(() => {
    resetWorldAtlasCacheForTests();
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    resetWorldAtlasCacheForTests();
    document.documentElement.removeAttribute('data-theme');
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('shows atlas failure fallback mentioning 102 countries and lets fallback button open CountryDirectory', async () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);

    let rejectFetch!: (reason?: unknown) => void;
    vi.stubGlobal(
      'fetch',
      vi.fn().mockReturnValue(
        new Promise<Response>((_resolve, reject) => {
          rejectFetch = reject;
        })
      )
    );

    const onSelectCountry = vi.fn();
    const onToggleDirectory = vi.fn();
    render(
      <WorldMapView
        filteredCountries={COUNTRY_DIRECTORY}
        activeCategory="all"
        onSelectCountry={onSelectCountry}
        isDirectoryOpen={false}
        onToggleDirectory={onToggleDirectory}
      />
    );

    expect(screen.getByText('正在加载 50m 全球矢量地图数据...')).toBeInTheDocument();

    await act(async () => {
      rejectFetch(new Error('Atlas network error'));
    });

    await waitFor(() => {
      expect(
        screen.getByText(
          `全球矢量底图加载受限，请使用右侧国家目录或上方搜索框检索全部 ${COUNTRY_DIRECTORY.length} 国 DIY 签证指南。`
        )
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /展开国家目录/ }));
    expect(onToggleDirectory).toHaveBeenCalledTimes(1);
  });

  it('keeps CountryDirectory interactive when atlas load fails while directory is open', async () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Offline')));

    const onSelectCountry = vi.fn();
    render(
      <WorldMapView
        filteredCountries={COUNTRY_DIRECTORY}
        activeCategory="all"
        onSelectCountry={onSelectCountry}
        isDirectoryOpen={true}
        onToggleDirectory={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.getByText(/全球矢量底图加载受限/)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /日本/ }));
    expect(onSelectCountry).toHaveBeenCalledWith(findSummaryByCode('JPN'));
  });

  it('supports d3.zoom + / - / wheel controls, focusRegion, and resetView', async () => {
    const mockCtx = createMockCanvasContext();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(mockCtx);
    stubAtlasFetch();

    const { container, unmount } = render(
      <WorldMapView
        filteredCountries={COUNTRY_DIRECTORY}
        activeCategory="all"
        onSelectCountry={vi.fn()}
        isDirectoryOpen={false}
        onToggleDirectory={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.queryByText('正在加载 50m 全球矢量地图数据...')).not.toBeInTheDocument();
    });

    expect(container.querySelector('#map-stage')).toBeInTheDocument();
    const canvas = container.querySelector('canvas')!;

    fireEvent.click(screen.getByRole('button', { name: '放大' }));
    expect(screen.getByText('1.4x')).toBeInTheDocument();

    fireEvent.wheel(canvas, { deltaY: -100 });
    expect(screen.getByText('1.6x')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '缩小' }));
    expect(screen.getByText('1.1x')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '欧洲' }));
    await waitFor(
      () => {
        expect(screen.getByText('3.0x')).toBeInTheDocument();
      },
      { timeout: 1200 }
    );

    fireEvent.click(screen.getByRole('button', { name: '重置视角' }));
    await waitFor(
      () => {
        expect(screen.getByText('1.0x')).toBeInTheDocument();
      },
      { timeout: 1200 }
    );

    expect(() => unmount()).not.toThrow();
  });

  it('handles hover tooltip, click navigation, 2px jitter tolerance, and 50px drag suppression', async () => {
    const mockCtx = createMockCanvasContext();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(mockCtx);
    stubAtlasFetch();

    const onSelectCountry = vi.fn();
    const { container, unmount } = render(
      <WorldMapView
        filteredCountries={COUNTRY_DIRECTORY}
        activeCategory="all"
        onSelectCountry={onSelectCountry}
        isDirectoryOpen={false}
        onToggleDirectory={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.queryByText('正在加载 50m 全球矢量地图数据...')).not.toBeInTheDocument();
    });

    const canvas = container.querySelector('canvas')!;
    const sgp = findSummaryByCode('SGP')!;
    const proj = createMapProjection(860, 560);
    const [sgpX, sgpY] = proj(sgp.coords)!;

    // First mousemove is not dropped by throttle
    fireEvent.mouseMove(canvas, { clientX: sgpX, clientY: sgpY });
    const tooltip = container.querySelector('#map-tooltip') as HTMLElement;
    expect(tooltip.style.opacity).toBe('1');
    expect(within(tooltip).getByText('新加坡')).toBeInTheDocument();

    // Clean click triggers onSelectCountry
    fireEvent.click(canvas, { clientX: sgpX, clientY: sgpY });
    expect(onSelectCountry).toHaveBeenCalledTimes(1);
    expect(onSelectCountry).toHaveBeenCalledWith(sgp);

    // 2px pointer jitter stays under clickDistance(4) and still fires click
    dispatchMouseWithView(canvas, 'mousedown', { clientX: sgpX, clientY: sgpY, button: 0 });
    dispatchMouseWithView(window, 'mousemove', { clientX: sgpX + 2, clientY: sgpY + 1 });
    dispatchMouseWithView(window, 'mouseup', { clientX: sgpX + 2, clientY: sgpY + 1 });
    fireEvent.click(canvas, { clientX: sgpX + 2, clientY: sgpY + 1 });
    expect(onSelectCountry).toHaveBeenCalledTimes(2);

    // 50px drag pans map and suppresses trailing click
    dispatchMouseWithView(canvas, 'mousedown', { clientX: sgpX, clientY: sgpY, button: 0 });
    dispatchMouseWithView(window, 'mousemove', { clientX: sgpX + 50, clientY: sgpY + 30 });
    dispatchMouseWithView(window, 'mouseup', { clientX: sgpX + 50, clientY: sgpY + 30 });
    fireEvent.click(canvas, { clientX: sgpX + 50, clientY: sgpY + 30 });
    expect(onSelectCountry).toHaveBeenCalledTimes(2);

    fireEvent.mouseLeave(canvas);
    expect(tooltip.style.opacity).toBe('0');
    expect(() => unmount()).not.toThrow();
  });

  it('reacts to dark/light MutationObserver theme switches and cleans up wheel timers on unmount', async () => {
    const mockCtx = createMockCanvasContext();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(mockCtx);
    stubAtlasFetch();

    const { container, unmount } = render(
      <WorldMapView
        filteredCountries={COUNTRY_DIRECTORY}
        activeCategory="all"
        onSelectCountry={vi.fn()}
        isDirectoryOpen={false}
        onToggleDirectory={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.queryByText('正在加载 50m 全球矢量地图数据...')).not.toBeInTheDocument();
    });

    const clearCallsBeforeTheme = mockCtx.clearRect.mock.calls.length;
    await act(async () => {
      document.documentElement.setAttribute('data-theme', 'dark');
      await sleep(30);
    });
    expect(mockCtx.clearRect.mock.calls.length).toBeGreaterThan(clearCallsBeforeTheme);

    // Trigger wheel zoom (starts d3-zoom 150ms wheel end timer), then unmount before timer fires
    const canvas = container.querySelector('canvas')!;
    fireEvent.wheel(canvas, { deltaY: -100 });
    const drawsAtUnmount = mockCtx.clearRect.mock.calls.length;
    unmount();

    await act(async () => {
      await sleep(200);
    });
    expect(mockCtx.clearRect.mock.calls.length).toBe(drawsAtUnmount);
  });

  it('settles flyToCountry cleanly across completion, unmount, resetView, and consecutive calls', async () => {
    const mockCtx = createMockCanvasContext();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(mockCtx);
    stubAtlasFetch();

    const ref = createRef<WorldMapViewHandle>();
    const { unmount } = render(
      <WorldMapView
        ref={ref}
        filteredCountries={COUNTRY_DIRECTORY}
        activeCategory="all"
        onSelectCountry={vi.fn()}
        isDirectoryOpen={false}
        onToggleDirectory={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.queryByText('正在加载 50m 全球矢量地图数据...')).not.toBeInTheDocument();
    });

    const sgp = findSummaryByCode('SGP')!;
    const jpn = findSummaryByCode('JPN')!;

    // 1. Consecutive flyToCountry(A) -> flyToCountry(B) settles BOTH cleanly
    let firstFly!: Promise<void>;
    let secondFly!: Promise<void>;
    await act(async () => {
      firstFly = ref.current!.flyToCountry(sgp);
      secondFly = ref.current!.flyToCountry(jpn);
      await Promise.all([firstFly, secondFly]);
    });
    expect(screen.getByText('3.2x')).toBeInTheDocument();

    // 2. flyToCountry immediately interrupted by resetView settles immediately
    let resetInterruptedFly!: Promise<void>;
    act(() => {
      resetInterruptedFly = ref.current!.flyToCountry(sgp);
      ref.current!.resetView();
    });
    const resetResult = await Promise.race([
      resetInterruptedFly.then(() => 'SETTLED'),
      sleep(200).then(() => 'HUNG'),
    ]);
    expect(resetResult).toBe('SETTLED');

    // 3. flyToCountry immediately cancelled via unmount settles immediately
    let unmountInterruptedFly!: Promise<void>;
    act(() => {
      unmountInterruptedFly = ref.current!.flyToCountry(jpn);
      unmount();
    });
    const unmountResult = await Promise.race([
      unmountInterruptedFly.then(() => 'SETTLED'),
      sleep(200).then(() => 'HUNG'),
    ]);
    expect(unmountResult).toBe('SETTLED');
  });

  it('clamps zoomed transform on ResizeObserver shrink and shows advisory tooltip', async () => {
    const mockCtx = createMockCanvasContext();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(mockCtx);
    stubAtlasFetch();

    let resizeCallback: ResizeObserverCallback | null = null;
    class MockResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        resizeCallback = cb;
      }
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
    vi.stubGlobal('ResizeObserver', MockResizeObserver);

    const workCountries = filterCountrySummaries('work', '');
    const ref = createRef<WorldMapViewHandle>();
    const { container, unmount } = render(
      <WorldMapView
        ref={ref}
        filteredCountries={workCountries}
        activeCategory="work"
        onSelectCountry={vi.fn()}
        isDirectoryOpen={false}
        onToggleDirectory={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.queryByText('正在加载 50m 全球矢量地图数据...')).not.toBeInTheDocument();
    });

    // Zoom to Japan (eastern edge) at 3.2x so tx is near right boundary, then shrink container
    const jpn = findSummaryByCode('JPN')!;
    await act(async () => {
      await ref.current!.flyToCountry(jpn);
    });

    const canvas = container.querySelector('canvas')!;
    const canvasWrapper = canvas.parentElement!;
    Object.defineProperty(canvasWrapper, 'clientWidth', { configurable: true, value: 480 });
    Object.defineProperty(canvasWrapper, 'clientHeight', { configurable: true, value: 360 });

    act(() => {
      resizeCallback?.([], {} as ResizeObserver);
    });

    const clamped = d3.zoomTransform(canvas);
    expect(clamped.k).toBeCloseTo(3.2, 2);
    expect(clamped.x).toBeGreaterThanOrEqual(480 * (1 - clamped.k) - 0.01);
    expect(clamped.x).toBeLessThanOrEqual(0.01);
    expect(clamped.y).toBeGreaterThanOrEqual(360 * (1 - clamped.k) - 0.01);
    expect(clamped.y).toBeLessThanOrEqual(0.01);

    // Hovering Japan under "work" shows advisory tooltip at clamped screen coordinate
    const proj = createMapProjection(480, 360);
    const [jx, jy] = proj(jpn.coords)!;
    fireEvent.mouseMove(canvas, {
      clientX: jx * clamped.k + clamped.x,
      clientY: jy * clamped.k + clamped.y,
    });
    const tooltip = container.querySelector('#map-tooltip') as HTMLElement;
    expect(tooltip.style.opacity).toBe('1');
    expect(within(tooltip).getByText('非标准直申（需机构/雇主前置）· 点击查看说明 →')).toBeInTheDocument();

    expect(() => unmount()).not.toThrow();
  });

  it('renders CountryDirectory empty state cleanly when filtered countries list is empty', () => {
    render(
      <CountryDirectory
        countries={[]}
        activeCategory="work"
        isOpen={true}
        onClose={vi.fn()}
        onSelectCountry={vi.fn()}
      />
    );

    expect(screen.getByText('共 0 / 102 国')).toBeInTheDocument();
    expect(screen.getByText('当前筛选下暂无匹配国家')).toBeInTheDocument();
  });
});
