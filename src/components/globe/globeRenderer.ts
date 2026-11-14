import * as d3 from 'd3';
import { CATEGORIES } from '../../data/categories';
import { COUNTRIES_DATA } from '../../data';
import type { CategoryId, CountryData, ThemeMode } from '../../types/visa';
import type { WorldAtlasData } from '../../utils/worldAtlas';

export interface CanvasMetrics {
  width: number;
  height: number;
  dpr: number;
  baseScale: number;
}

export type RotationTuple = [number, number, number];

export const INITIAL_ROTATION: RotationTuple = [-105, -25, 0];
export const SHOW_ALL_LABELS_ZOOM = 1.55;

const SPHERE_DATA: d3.GeoSphere = { type: 'Sphere' };
const GRATICULE_DATA = d3.geoGraticule10();
const CATEGORY_MAP = new Map(CATEGORIES.map((c) => [c.id, c]));

interface GlobePalette {
  oceanFill: string;
  oceanStroke: string;
  graticuleStroke: string;
  nonDiyLand: string;
  borderStroke: string;
  highlight: string;
  filteredOut: string;
  tierTeal: string;
  tierSage: string;
  pinPriority: string;
  pinDefault: string;
  pinStroke: string;
  labelBg: string;
  labelBorder: string;
  labelText: string;
}

const LIGHT_PALETTE: GlobePalette = {
  oceanFill: '#E3ECEE',
  oceanStroke: '#C9C3B8',
  graticuleStroke: 'rgba(180, 196, 200, 0.35)',
  nonDiyLand: '#DCD8CF',
  borderStroke: 'rgba(246, 244, 239, 0.5)',
  highlight: '#C82D32',
  filteredOut: '#CFCBC2',
  tierTeal: '#4A7B82',
  tierSage: '#789882',
  pinPriority: '#C82D32',
  pinDefault: '#1F2328',
  pinStroke: '#FFFFFF',
  labelBg: 'rgba(255, 255, 255, 0.92)',
  labelBorder: '#DDD9D0',
  labelText: '#1F2328',
};

const DARK_PALETTE: GlobePalette = {
  oceanFill: '#0D1B24',
  oceanStroke: '#263845',
  graticuleStroke: 'rgba(120, 150, 165, 0.22)',
  nonDiyLand: '#273038',
  borderStroke: 'rgba(13, 27, 36, 0.65)',
  highlight: '#E0484D',
  filteredOut: '#222A31',
  tierTeal: '#4E8790',
  tierSage: '#6D9B7B',
  pinPriority: '#E0484D',
  pinDefault: '#ECEFF4',
  pinStroke: '#121518',
  labelBg: 'rgba(26, 31, 36, 0.92)',
  labelBorder: '#3A444F',
  labelText: '#ECEFF4',
};

/** Normalize any longitude degree value into [-180, 180). */
export function normalizeLongitude(lon: number): number {
  return ((((lon + 180) % 360) + 360) % 360) - 180;
}

/** Compute the target longitude from `fromLon` along the shortest angular arc. */
export function shortestLongitudeTarget(fromLon: number, toLon: number): number {
  const normalizedStart = normalizeLongitude(fromLon);
  const normalizedTarget = normalizeLongitude(toLon);
  const delta = normalizeLongitude(normalizedTarget - normalizedStart);
  return normalizedStart + delta;
}

/** Create a shortest-arc rotation interpolator returning normalized longitude in [-180, 180). */
export function createShortestRotationInterpolator(
  from: RotationTuple,
  to: RotationTuple
): (t: number) => RotationTuple {
  const startLon = normalizeLongitude(from[0]);
  const endLon = shortestLongitudeTarget(startLon, to[0]);
  const lonInterp = d3.interpolateNumber(startLon, endLon);
  const latInterp = d3.interpolateNumber(from[1], to[1]);
  const rollInterp = d3.interpolateNumber(from[2], to[2]);

  return (t: number): RotationTuple => [
    normalizeLongitude(lonInterp(t)),
    latInterp(t),
    rollInterp(t),
  ];
}

export function resolveCountryFillColor(params: {
  cid: string;
  countryData: CountryData | undefined;
  hoveredId: string | null;
  filteredIds: Set<string>;
  hasSearch: boolean;
  activeCategory: CategoryId;
  isDark: boolean;
}): string {
  const { cid, countryData, hoveredId, filteredIds, hasSearch, activeCategory, isDark } = params;
  const palette = isDark ? DARK_PALETTE : LIGHT_PALETTE;

  if (hoveredId === cid) {
    return palette.highlight;
  }
  if (hasSearch && filteredIds.has(cid)) {
    return palette.highlight;
  }
  if (!filteredIds.has(cid)) {
    return palette.filteredOut;
  }
  if (activeCategory !== 'all') {
    const catMeta = CATEGORY_MAP.get(activeCategory);
    if (catMeta) {
      return isDark ? (catMeta.darkColor ?? catMeta.color) : catMeta.color;
    }
  }
  return countryData?.tierColor === '#789882' ? palette.tierSage : palette.tierTeal;
}

function drawRoundedBadge(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void {
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, width, height, radius);
  } else {
    ctx.rect(x, y, width, height);
  }
}

function drawPinsAndLabels(
  ctx: CanvasRenderingContext2D,
  projection: d3.GeoProjection,
  rotation: RotationTuple,
  zoomLevel: number,
  palette: GlobePalette
): void {
  const centerLonLat: [number, number] = [-rotation[0], -rotation[1]];
  const showAllLabels = zoomLevel >= SHOW_ALL_LABELS_ZOOM;

  for (const country of COUNTRIES_DATA) {
    if (d3.geoDistance(country.coords, centerLonLat) >= Math.PI / 2 - 0.08) continue;
    const pos = projection(country.coords);
    if (!pos) continue;
    const [px, py] = pos;

    ctx.beginPath();
    ctx.arc(px, py, country.labelPriority ? 4 : 2.8, 0, Math.PI * 2);
    ctx.fillStyle = country.labelPriority ? palette.pinPriority : palette.pinDefault;
    ctx.fill();
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = palette.pinStroke;
    ctx.stroke();

    if (country.labelPriority || showAllLabels) {
      ctx.font = '700 10.5px "Noto Sans SC", "Inter", sans-serif';
      const tw = ctx.measureText(country.nameZh).width;
      const bw = tw + 10;
      const bh = 17;
      const bx = px + 6;
      const by = py - 8.5;

      ctx.fillStyle = palette.labelBg;
      ctx.strokeStyle = palette.labelBorder;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      drawRoundedBadge(ctx, bx, by, bw, bh, 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = palette.labelText;
      ctx.textBaseline = 'middle';
      ctx.fillText(country.nameZh, bx + 5, py + 0.5);
    }
  }
}

/** Render the 3D orthographic globe scene onto the HiDPI 2D canvas. */
export function drawGlobeScene(params: {
  ctx: CanvasRenderingContext2D;
  projection: d3.GeoProjection;
  path: d3.GeoPath;
  atlas: WorldAtlasData;
  metrics: CanvasMetrics;
  rotation: RotationTuple;
  zoomLevel: number;
  hoveredId: string | null;
  activeCategory: CategoryId;
  searchQuery: string;
  filteredIds: Set<string>;
  theme: ThemeMode;
}): void {
  const {
    ctx,
    projection,
    path,
    atlas,
    metrics,
    rotation,
    zoomLevel,
    hoveredId,
    activeCategory,
    searchQuery,
    filteredIds,
    theme,
  } = params;

  const isDark = theme === 'dark';
  const palette = isDark ? DARK_PALETTE : LIGHT_PALETTE;
  const hasSearch = Boolean(searchQuery.trim());

  ctx.save();
  ctx.scale(metrics.dpr, metrics.dpr);
  ctx.clearRect(0, 0, metrics.width, metrics.height);

  // 1. Ocean sphere
  ctx.beginPath();
  path(SPHERE_DATA);
  ctx.fillStyle = palette.oceanFill;
  ctx.fill();
  ctx.lineWidth = 1.1;
  ctx.strokeStyle = palette.oceanStroke;
  ctx.stroke();

  // 2. Soft graticule
  ctx.beginPath();
  path(GRATICULE_DATA);
  ctx.lineWidth = 0.4;
  ctx.strokeStyle = palette.graticuleStroke;
  ctx.stroke();

  // 3. Non-DIY background land (single batched path)
  ctx.beginPath();
  for (const f of atlas.worldFeatures) {
    if (!f._countryData) {
      path(f);
    }
  }
  ctx.fillStyle = palette.nonDiyLand;
  ctx.fill();

  // 4. DIY countries synced with active category, search & theme
  for (const f of atlas.diyFeatures) {
    ctx.beginPath();
    path(f);
    ctx.fillStyle = resolveCountryFillColor({
      cid: f._cid,
      countryData: f._countryData,
      hoveredId,
      filteredIds,
      hasSearch,
      activeCategory,
      isDark,
    });
    ctx.fill();
  }

  // 5. Batched country borders
  ctx.beginPath();
  path(atlas.countryBordersMesh);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 0.4;
  ctx.strokeStyle = palette.borderStroke;
  ctx.stroke();

  // 6. Pins & labels on visible hemisphere
  drawPinsAndLabels(ctx, projection, rotation, zoomLevel, palette);

  ctx.restore();
}
