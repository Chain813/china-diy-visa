import * as topojson from 'topojson-client';
import type { Feature, GeoJsonProperties, Geometry, MultiLineString } from 'geojson';
import type { GeometryCollection, Topology } from 'topojson-specification';
import { findSummaryById } from '../data';
import type { CountrySummary } from '../types/visa';

export interface AtlasFeature extends Feature<Geometry, GeoJsonProperties> {
  id?: string | number;
  /** 3-digit zero-padded ISO 3166-1 numeric code, or empty string when invalid/missing. */
  cid: string;
  country: CountrySummary | undefined;
}

export interface CountryFeature extends AtlasFeature {
  country: CountrySummary;
}

export interface WorldAtlasData {
  features: AtlasFeature[];
  countryFeatures: CountryFeature[];
  bordersMesh: MultiLineString;
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

/** Type guard narrowing an enriched atlas feature to an indexed country feature. */
export function isCountryFeature(feature: AtlasFeature): feature is CountryFeature {
  return feature.country !== undefined;
}

/** Normalize a numeric or numeric-string TopoJSON feature id into a 3-digit zero-padded string. */
export function normalizeFeatureId(rawId: string | number | undefined | null): string {
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
  const res = await fetch('/world-50m.json');
  if (!res.ok) {
    throw new Error(`Failed to load world atlas: ${res.status}`);
  }

  const world: unknown = await res.json();
  if (!isWorldTopology(world)) {
    throw new Error('Invalid world atlas TopoJSON payload');
  }

  const featureCollection = topojson.feature(world, world.objects.countries);
  const bordersMesh = topojson.mesh(world, world.objects.countries);
  const countryFeatures: CountryFeature[] = [];

  const features: AtlasFeature[] = featureCollection.features.map((feature) => {
    const cid = normalizeFeatureId(feature.id);
    const country = cid ? findSummaryById(cid) : undefined;
    const enriched: AtlasFeature = {
      ...feature,
      cid,
      country,
    };
    if (isCountryFeature(enriched)) {
      countryFeatures.push(enriched);
    }
    return enriched;
  });

  return {
    features,
    countryFeatures,
    bordersMesh,
  };
}

/** Load and cache the local 50m world TopoJSON dataset; clears cache on failure for retries. */
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
