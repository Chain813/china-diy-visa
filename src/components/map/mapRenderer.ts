import * as d3 from 'd3';
import type { MultiLineString } from 'geojson';
import type { CategoryId, CountrySummary, ThemeMode } from '../../types/visa';
import type { AtlasFeature, WorldAtlasData } from '../../utils/worldAtlas';

export type MapRegionFocusId =
  | 'all'
  | 'asia-pacific'
  | 'europe'
  | 'north-america'
  | 'middle-east-africa'
  | 'south-america';

export interface MapRegionTarget {
  id: MapRegionFocusId;
  label: string;
  /** Target center as [longitude, latitude]. */
  center: [number, number];
  /** Target zoom scale factor k. */
  k: number;
}

export interface MapTransform {
  x: number;
  y: number;
  k: number;
}

export interface MapPalette {
  oceanFill: string;
  oceanStroke: string;
  graticuleStroke: string;
  neutralLand: string;
  advisoryLand: string;
  borderStroke: string;
  tierTeal: string;
  tierTealHover: string;
  tierSage: string;
  tierSageHover: string;
  accentRed: string;
  pinStroke: string;
  labelBg: string;
  labelBorder: string;
  labelText: string;
}

export interface RenderFlatWorldMapParams {
  ctx: CanvasRenderingContext2D;
  projection: d3.GeoProjection;
  path?: d3.GeoPath;
  atlas: WorldAtlasData;
  width: number;
  height: number;
  dpr: number;
  transform: MapTransform;
  filteredCountries: readonly CountrySummary[];
  activeCategory: CategoryId;
  searchQuery?: string;
  hoveredCode?: string | null;
  theme: ThemeMode;
}

export const SPHERE_DATA: d3.GeoSphere = { type: 'Sphere' };
export const MAP_PROJECTION_PADDING = 18;
export const SHOW_ALL_LABELS_ZOOM = 1.5;

export const MAP_REGIONS: readonly MapRegionTarget[] = [
  { id: 'all', label: '全球', center: [12, 15], k: 1 },
  { id: 'asia-pacific', label: '亚太', center: [120, 0], k: 2.3 },
  { id: 'europe', label: '欧洲', center: [14, 51], k: 3.0 },
  { id: 'north-america', label: '北美', center: [-98, 42], k: 2.3 },
  { id: 'middle-east-africa', label: '中东非', center: [24, 6], k: 2.1 },
  { id: 'south-america', label: '南美', center: [-60, -18], k: 2.3 },
] as const;

export const MAP_PALETTES: Record<ThemeMode, MapPalette> = {
  light: {
    oceanFill: '#E3ECEE',
    oceanStroke: '#C9C3B8',
    graticuleStroke: 'rgba(160, 178, 184, 0.36)',
    neutralLand: '#E7E4DC',
    advisoryLand: '#C5BFB2',
    borderStroke: 'rgba(246, 244, 239, 0.72)',
    tierTeal: '#4A7B82',
    tierTealHover: '#335D63',
    tierSage: '#789882',
    tierSageHover: '#567861',
    accentRed: '#C82D32',
    pinStroke: '#FFFFFF',
    labelBg: 'rgba(255, 255, 255, 0.94)',
    labelBorder: '#DDD9D0',
    labelText: '#1F2328',
  },
  dark: {
    oceanFill: '#0D1B24',
    oceanStroke: '#263845',
    graticuleStroke: 'rgba(120, 150, 165, 0.22)',
    neutralLand: '#242B33',
    advisoryLand: '#3A414B',
    borderStroke: 'rgba(13, 27, 36, 0.72)',
    tierTeal: '#5A9AA3',
    tierTealHover: '#70B0B9',
    tierSage: '#88AD92',
    tierSageHover: '#9EC0A7',
    accentRed: '#E0484D',
    pinStroke: '#121518',
    labelBg: 'rgba(26, 31, 36, 0.94)',
    labelBorder: '#3A444F',
    labelText: '#ECEFF4',
  },
};

let cachedGraticule: MultiLineString | null = null;

/** Lazily compute and cache 10-degree graticule lines inside a try/catch guard. */
export function getGraticuleData(): MultiLineString | null {
  if (cachedGraticule !== null) {
    return cachedGraticule;
  }
  try {
    cachedGraticule = d3.geoGraticule10();
    return cachedGraticule;
  } catch {
    return null;
  }
}

/** Reset cached graticule geometry (intended for unit tests). */
export function resetGraticuleCacheForTests(): void {
  cachedGraticule = null;
}

/** Create a Natural Earth projection fitted comfortably within the given logical viewport. */
export function createMapProjection(width: number, height: number): d3.GeoProjection {
  const padding = MAP_PROJECTION_PADDING;
  return d3.geoNaturalEarth1().fitExtent(
    [
      [padding, padding],
      [Math.max(padding + 1, width - padding), Math.max(padding + 1, height - padding)],
    ],
    SPHERE_DATA
  );
}

/** Resolve three-state polygon fill color for DIY-matched, advisory-only, and neutral territories. */
export function resolveCountryFillColor(params: {
  country: CountrySummary | undefined;
  filteredCodeSet: ReadonlySet<string>;
  activeCategory: CategoryId;
  hasSearch: boolean;
  hoveredCode: string | null;
  isDark: boolean;
}): string {
  const { country, filteredCodeSet, activeCategory, hasSearch, hoveredCode, isDark } = params;
  const palette = isDark ? MAP_PALETTES.dark : MAP_PALETTES.light;

  if (!country) {
    return palette.neutralLand;
  }

  if (filteredCodeSet.has(country.code)) {
    const isHovered = hoveredCode === country.code;
    if (country.tierColor === '#789882') {
      return isHovered ? palette.tierSageHover : palette.tierSage;
    }
    return isHovered ? palette.tierTealHover : palette.tierTeal;
  }

  if (activeCategory !== 'all' && (!hasSearch || !country.diyCategories.includes(activeCategory))) {
    return palette.advisoryLand;
  }

  return palette.neutralLand;
}

interface LabelBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

function boxesOverlap(a: LabelBox, b: LabelBox, gap: number): boolean {
  return (
    a.x < b.x + b.w + gap &&
    a.x + a.w + gap > b.x &&
    a.y < b.y + b.h + gap &&
    a.y + a.h + gap > b.y
  );
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
): void {
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.rect(x, y, w, h);
  }
}

function drawGroupedFeatures(
  ctx: CanvasRenderingContext2D,
  geoPath: d3.GeoPath,
  grouped: Map<string, AtlasFeature[]>,
  fillOrder: readonly string[]
): void {
  for (const color of fillOrder) {
    const features = grouped.get(color);
    if (!features || features.length === 0) continue;
    ctx.beginPath();
    for (const feature of features) {
      geoPath(feature);
    }
    ctx.fillStyle = color;
    ctx.fill();
  }
}

function placeLabelBox(
  sx: number,
  sy: number,
  bw: number,
  bh: number,
  width: number,
  height: number,
  placedBoxes: LabelBox[],
  forcePlace: boolean
): LabelBox | null {
  const candidates: Array<{ x: number; y: number }> = [
    { x: sx + 7, y: sy - bh / 2 },
    { x: sx - 7 - bw, y: sy - bh / 2 },
  ];

  for (const pos of candidates) {
    const box: LabelBox = { x: pos.x, y: pos.y, w: bw, h: bh };
    const withinViewport =
      box.x >= 4 && box.y >= 4 && box.x + box.w <= width - 4 && box.y + box.h <= height - 4;
    if (!withinViewport && !forcePlace) continue;

    if (forcePlace) {
      return {
        x: Math.max(4, Math.min(width - bw - 4, box.x)),
        y: Math.max(4, Math.min(height - bh - 4, box.y)),
        w: bw,
        h: bh,
      };
    }

    const collides = placedBoxes.some((existing) => boxesOverlap(box, existing, 4));
    if (!collides) {
      return box;
    }
  }

  return null;
}

function drawPin(
  ctx: CanvasRenderingContext2D,
  sx: number,
  sy: number,
  country: CountrySummary,
  isHovered: boolean,
  palette: MapPalette
): void {
  const radius = isHovered ? 4.3 : country.labelPriority ? 3.5 : 2.5;
  const tierFill = country.tierColor === '#789882' ? palette.tierSage : palette.tierTeal;

  ctx.beginPath();
  ctx.arc(sx, sy, radius, 0, Math.PI * 2);
  ctx.fillStyle = isHovered || country.labelPriority ? palette.accentRed : tierFill;
  ctx.fill();
  ctx.lineWidth = 1.3;
  ctx.strokeStyle = palette.pinStroke;
  ctx.stroke();

  if (isHovered) {
    ctx.beginPath();
    ctx.arc(sx, sy, radius + 3.5, 0, Math.PI * 2);
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = palette.accentRed;
    ctx.stroke();
  }
}

function drawScreenSpaceMarkersAndLabels(params: {
  ctx: CanvasRenderingContext2D;
  projection: d3.GeoProjection;
  transform: MapTransform;
  width: number;
  height: number;
  filteredCountries: readonly CountrySummary[];
  hoveredCountry: CountrySummary | null;
  hoveredCode: string | null;
  palette: MapPalette;
}): void {
  const {
    ctx,
    projection,
    transform,
    width,
    height,
    filteredCountries,
    hoveredCountry,
    hoveredCode,
    palette,
  } = params;

  interface ScreenPin {
    country: CountrySummary;
    sx: number;
    sy: number;
    isHovered: boolean;
  }

  const pins: ScreenPin[] = [];
  for (const country of filteredCountries) {
    const projected = projection(country.coords);
    if (!projected) continue;
    const sx = projected[0] * transform.k + transform.x;
    const sy = projected[1] * transform.k + transform.y;
    if (sx < -32 || sx > width + 32 || sy < -24 || sy > height + 24) continue;
    pins.push({
      country,
      sx,
      sy,
      isHovered: hoveredCode === country.code,
    });
  }

  // Draw pins for filtered countries
  for (const pin of pins) {
    drawPin(ctx, pin.sx, pin.sy, pin.country, pin.isHovered, palette);
  }

  // If hovered country is advisory-only (not in filteredCountries), still draw its highlight ring
  if (hoveredCountry && !pins.some((p) => p.country.code === hoveredCountry.code)) {
    const projected = projection(hoveredCountry.coords);
    if (projected) {
      const sx = projected[0] * transform.k + transform.x;
      const sy = projected[1] * transform.k + transform.y;
      drawPin(ctx, sx, sy, hoveredCountry, true, palette);
      pins.push({ country: hoveredCountry, sx, sy, isHovered: true });
    }
  }

  // Smart priority collision-avoided labels in crisp screen space
  const showAllLabels =
    transform.k >= SHOW_ALL_LABELS_ZOOM || filteredCountries.length <= 18;
  const labelCandidates = pins
    .filter((pin) => pin.isHovered || pin.country.labelPriority || showAllLabels)
    .sort((a, b) => {
      if (a.isHovered !== b.isHovered) return a.isHovered ? -1 : 1;
      if (a.country.labelPriority !== b.country.labelPriority) {
        return a.country.labelPriority ? -1 : 1;
      }
      return a.country.code.localeCompare(b.country.code);
    });

  ctx.font = '700 10.5px "Noto Sans SC", "Inter", sans-serif';
  const placedBoxes: LabelBox[] = [];
  const bh = 17;

  for (const pin of labelCandidates) {
    const textWidth = ctx.measureText(pin.country.nameZh).width;
    const bw = textWidth + 10;
    const placed = placeLabelBox(
      pin.sx,
      pin.sy,
      bw,
      bh,
      width,
      height,
      placedBoxes,
      pin.isHovered
    );
    if (!placed) continue;

    placedBoxes.push(placed);

    ctx.fillStyle = palette.labelBg;
    ctx.strokeStyle = pin.isHovered ? palette.accentRed : palette.labelBorder;
    ctx.lineWidth = pin.isHovered ? 1.1 : 0.8;
    ctx.beginPath();
    drawRoundedRect(ctx, placed.x, placed.y, placed.w, placed.h, 3);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = palette.labelText;
    ctx.textBaseline = 'middle';
    ctx.fillText(pin.country.nameZh, placed.x + 5, placed.y + bh / 2 + 0.5);
  }
}

/** Render the Natural Earth flat world map onto a HiDPI 2D canvas with zoom/pan transform. */
export function renderFlatWorldMap(params: RenderFlatWorldMapParams): void {
  const {
    ctx,
    projection,
    path,
    atlas,
    width,
    height,
    dpr,
    transform,
    filteredCountries,
    activeCategory,
    searchQuery = '',
    hoveredCode = null,
    theme,
  } = params;

  const isDark = theme === 'dark';
  const palette = isDark ? MAP_PALETTES.dark : MAP_PALETTES.light;
  const geoPath = path ?? d3.geoPath(projection, ctx);
  geoPath.context(ctx);

  const filteredCodeSet = new Set(filteredCountries.map((c) => c.code));
  const hasSearch = searchQuery.trim().length > 0;
  const invK = 1 / Math.max(transform.k, 0.001);

  ctx.save();
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  // Transform-aware geographic layers
  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.scale(transform.k, transform.k);

  // 1. Ocean Sphere background
  ctx.beginPath();
  geoPath(SPHERE_DATA);
  ctx.fillStyle = palette.oceanFill;
  ctx.fill();

  // Clip graticule, land polygons, and borders cleanly inside Sphere silhouette
  ctx.save();
  if (typeof ctx.clip === 'function') {
    ctx.clip();
  }

  // 2. Lazy protected graticule lines
  const graticule = getGraticuleData();
  if (graticule) {
    ctx.beginPath();
    geoPath(graticule);
    ctx.lineWidth = 0.45 * invK;
    ctx.strokeStyle = palette.graticuleStroke;
    ctx.stroke();
  }

  // 3. Three-state country polygons grouped by fill color
  const grouped = new Map<string, AtlasFeature[]>();
  const hoveredFeatures: AtlasFeature[] = [];
  let hoveredCountry: CountrySummary | null = null;

  for (const feature of atlas.features) {
    if (hoveredCode && feature.country?.code === hoveredCode) {
      hoveredFeatures.push(feature);
      hoveredCountry = feature.country;
    }
    const fill = resolveCountryFillColor({
      country: feature.country,
      filteredCodeSet,
      activeCategory,
      hasSearch,
      hoveredCode,
      isDark,
    });
    const bucket = grouped.get(fill);
    if (bucket) {
      bucket.push(feature);
    } else {
      grouped.set(fill, [feature]);
    }
  }

  const fillOrder = [
    palette.neutralLand,
    palette.advisoryLand,
    palette.tierTeal,
    palette.tierSage,
    palette.tierTealHover,
    palette.tierSageHover,
  ];
  drawGroupedFeatures(ctx, geoPath, grouped, fillOrder);

  // 4. Batched country borders with zoom-compensated hairline width
  ctx.beginPath();
  geoPath(atlas.bordersMesh);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 0.55 * invK;
  ctx.strokeStyle = palette.borderStroke;
  ctx.stroke();

  // 5. Hovered polygon highlight outlines (handles multi-feature countries such as 036)
  for (const feature of hoveredFeatures) {
    ctx.beginPath();
    geoPath(feature);
    ctx.lineWidth = 1.6 * invK;
    ctx.strokeStyle = palette.accentRed;
    ctx.stroke();
  }

  ctx.restore(); // End Sphere clip

  // Outer Sphere border
  ctx.beginPath();
  geoPath(SPHERE_DATA);
  ctx.lineWidth = 1.15 * invK;
  ctx.strokeStyle = palette.oceanStroke;
  ctx.stroke();

  ctx.restore(); // End pan/zoom transform

  // 6. Screen-space pins & collision-avoided labels (razor-sharp at all zoom scales)
  drawScreenSpaceMarkersAndLabels({
    ctx,
    projection,
    transform,
    width,
    height,
    filteredCountries,
    hoveredCountry,
    hoveredCode,
    palette,
  });

  ctx.restore();
}
