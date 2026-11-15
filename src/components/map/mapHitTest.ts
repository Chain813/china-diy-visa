import * as d3 from 'd3';
import type { CountrySummary } from '../../types/visa';
import type { WorldAtlasData } from '../../utils/worldAtlas';
import type { MapTransform } from './mapRenderer';

export const PIN_HIT_RADIUS_PX = 14;
const SPHERE_INVERT_TOLERANCE_PX = 1.5;

/** Convert mouse client coordinates into logical canvas coordinates. */
export function getPointerPosition(
  canvas: HTMLCanvasElement,
  event: MouseEvent,
  logicalWidth: number,
  logicalHeight: number
): { mx: number; my: number; rect: DOMRect } {
  const rect = canvas.getBoundingClientRect();
  const scaleX = rect.width > 0 ? logicalWidth / rect.width : 1;
  const scaleY = rect.height > 0 ? logicalHeight / rect.height : 1;
  return {
    mx: (event.clientX - rect.left) * scaleX,
    my: (event.clientY - rect.top) * scaleY,
    rect,
  };
}

/**
 * Hit-test filtered country pins first (within 14px in screen space),
 * then invert pointer coordinates through zoom transform and test 50m polygons.
 */
export function findCountryAtPointer(
  mx: number,
  my: number,
  projection: d3.GeoProjection,
  transform: MapTransform,
  atlas: WorldAtlasData,
  filteredCountries: readonly CountrySummary[]
): CountrySummary | null {
  const k = transform.k || 1;

  // Step 1: Closest filtered country pin within 14px screen radius (critical for micro-states)
  let bestCountry: CountrySummary | null = null;
  let bestDist = PIN_HIT_RADIUS_PX;

  for (const country of filteredCountries) {
    const projected = projection(country.coords);
    if (!projected) continue;
    const dotScreenX = projected[0] * k + transform.x;
    const dotScreenY = projected[1] * k + transform.y;
    const dist = Math.hypot(mx - dotScreenX, my - dotScreenY);
    if (dist <= bestDist) {
      bestDist = dist;
      bestCountry = country;
    }
  }

  if (bestCountry) {
    return bestCountry;
  }

  // Step 2: Convert screen coords -> projected coords -> [lon, lat] -> d3.geoContains
  const px = (mx - transform.x) / k;
  const py = (my - transform.y) / k;
  const lonLat = projection.invert?.([px, py]);
  if (
    !lonLat ||
    !Number.isFinite(lonLat[0]) ||
    !Number.isFinite(lonLat[1]) ||
    lonLat[0] < -180 ||
    lonLat[0] > 180 ||
    lonLat[1] < -90 ||
    lonLat[1] > 90
  ) {
    return null;
  }

  // Guard against Natural Earth inverse wrap-around outside the curved Sphere boundary
  const reprojected = projection(lonLat);
  if (
    !reprojected ||
    Math.hypot(reprojected[0] - px, reprojected[1] - py) > SPHERE_INVERT_TOLERANCE_PX
  ) {
    return null;
  }

  for (const feature of atlas.features) {
    if (feature.country && d3.geoContains(feature, lonLat)) {
      return feature.country;
    }
  }

  return null;
}
