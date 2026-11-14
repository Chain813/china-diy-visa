import * as topojson from 'topojson-client';
import type { Feature, GeoJsonProperties, Geometry, MultiLineString } from 'geojson';
import type { GeometryCollection, Topology } from 'topojson-specification';
import { findCountryById } from '../data';
import type { CountryData } from '../types/visa';

export interface WorldCountryFeature extends Feature<Geometry, GeoJsonProperties> {
  id?: string | number;
  _cid: string;
  _countryData?: CountryData;
}

export interface WorldAtlasData {
  worldFeatures: WorldCountryFeature[];
  diyFeatures: WorldCountryFeature[];
  countryBordersMesh: MultiLineString;
}

type WorldTopology = Topology<{
  countries: GeometryCollection;
}>;

let cachedAtlasPromise: Promise<WorldAtlasData> | null = null;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isWorldTopology(value: unknown): value is WorldTopology {
  if (!isRecord(value)) return false;
  if (value.type !== 'Topology') return false;
  if (!Array.isArray(value.arcs)) return false;
  if (!isRecord(value.objects)) return false;

  const countries = value.objects.countries;
  if (!isRecord(countries)) return false;
  if (countries.type !== 'GeometryCollection') return false;
  if (!Array.isArray(countries.geometries)) return false;

  return true;
}

function normalizeFeatureId(rawId: string | number | undefined | null): string {
  if (typeof rawId === 'number') {
    if (!Number.isInteger(rawId) || rawId < 0) return '';
    return String(rawId).padStart(3, '0');
  }
  if (typeof rawId === 'string') {
    const trimmed = rawId.trim();
    if (!/^\d+$/.test(trimmed)) return '';
    return trimmed.padStart(3, '0');
  }
  return '';
}

async function fetchWorldAtlas(): Promise<WorldAtlasData> {
  const res = await fetch('/world-110m.json');
  if (!res.ok) {
    throw new Error(`Failed to load world atlas: ${res.status}`);
  }

  const world: unknown = await res.json();
  if (!isWorldTopology(world)) {
    throw new Error('Invalid world atlas TopoJSON payload');
  }

  const featureCollection = topojson.feature(world, world.objects.countries);
  const countryBordersMesh = topojson.mesh(world, world.objects.countries);
  const diyFeatures: WorldCountryFeature[] = [];

  const worldFeatures: WorldCountryFeature[] = featureCollection.features.map((f) => {
    const cid = normalizeFeatureId(f.id);
    const match = cid ? findCountryById(cid) : undefined;
    const enriched: WorldCountryFeature = {
      ...f,
      _cid: cid,
      _countryData: match,
    };
    if (match) {
      diyFeatures.push(enriched);
    }
    return enriched;
  });

  return {
    worldFeatures,
    diyFeatures,
    countryBordersMesh,
  };
}

/** Load and cache the local 110m world TopoJSON dataset; clears cache on failure for retries. */
export function loadWorldAtlas(): Promise<WorldAtlasData> {
  if (!cachedAtlasPromise) {
    const promise = fetchWorldAtlas().catch((err) => {
      if (cachedAtlasPromise === promise) {
        cachedAtlasPromise = null;
      }
      throw err;
    });
    cachedAtlasPromise = promise;
  }
  return cachedAtlasPromise;
}

/** Reset the cached world atlas promise (intended for unit tests). */
export function resetWorldAtlasCacheForTests(): void {
  cachedAtlasPromise = null;
}
