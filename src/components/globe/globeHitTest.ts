import * as d3 from 'd3';
import { COUNTRIES_DATA } from '../../data';
import type { CountryData } from '../../types/visa';
import type { WorldAtlasData } from '../../utils/worldAtlas';
import type { RotationTuple } from './globeRenderer';

export const PIN_HIT_RADIUS_PX = 14;

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

/** Hit-test visible country pins first (within 14px), then DIY country polygons via inverse projection. */
export function findCountryAtPointer(
  mx: number,
  my: number,
  projection: d3.GeoProjection,
  atlas: WorldAtlasData,
  rotation: RotationTuple
): CountryData | null {
  const centerLonLat: [number, number] = [-rotation[0], -rotation[1]];

  for (const country of COUNTRIES_DATA) {
    if (d3.geoDistance(country.coords, centerLonLat) < Math.PI / 2 - 0.08) {
      const pos = projection(country.coords);
      if (pos && Math.hypot(mx - pos[0], my - pos[1]) <= PIN_HIT_RADIUS_PX) {
        return country;
      }
    }
  }

  const [tx, ty] = projection.translate();
  if (Math.hypot(mx - tx, my - ty) > projection.scale()) {
    return null;
  }

  const lonLat = projection.invert?.([mx, my]);
  if (!lonLat || Number.isNaN(lonLat[0]) || Number.isNaN(lonLat[1])) {
    return null;
  }

  for (const feature of atlas.diyFeatures) {
    if (d3.geoContains(feature, lonLat)) {
      return feature._countryData ?? null;
    }
  }

  return null;
}
