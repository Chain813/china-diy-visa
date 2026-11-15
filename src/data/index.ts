import type {
  CategoryId,
  CountryData,
  CountrySummary,
  PathwayCategoryId,
  RegionId,
} from '../types/visa';
import { PATHWAY_IDS } from './categories';
import { COUNTRY_DIRECTORY } from './directory';

export { COUNTRY_DIRECTORY } from './directory';

const REGION_LOADERS: Record<RegionId, () => Promise<CountryData[]>> = {
  'asia-pacific': () =>
    import('./regions/asia-pacific').then((mod) => mod.ASIA_PACIFIC_COUNTRIES),
  europe: () => import('./regions/europe').then((mod) => mod.EUROPE_COUNTRIES),
  americas: () => import('./regions/americas').then((mod) => mod.AMERICAS_COUNTRIES),
  'middle-east-africa': () =>
    import('./regions/middle-east-africa').then((mod) => mod.MIDDLE_EAST_AFRICA_COUNTRIES),
};

const REGION_IDS: readonly RegionId[] = [
  'asia-pacific',
  'europe',
  'americas',
  'middle-east-africa',
];

const SUMMARY_BY_CODE = new Map<string, CountrySummary>(
  COUNTRY_DIRECTORY.map((country) => [country.code.toUpperCase(), country])
);

const SUMMARY_BY_ID = new Map<string, CountrySummary>(
  COUNTRY_DIRECTORY.map((country) => [country.id, country])
);

interface RegionChunkCache {
  list: CountryData[];
  byCode: Map<string, CountryData>;
}

const regionCache = new Map<RegionId, Promise<RegionChunkCache>>();

/** Type guard checking whether a string is one of the 5 visa pathway category IDs. */
export function isPathwayCategoryId(value: string): value is PathwayCategoryId {
  return (PATHWAY_IDS as readonly string[]).includes(value);
}

/** Find a lightweight country summary by its 3-letter ISO alpha-3 code (case-insensitive). */
export function findSummaryByCode(code: string | undefined): CountrySummary | undefined {
  const normalized = code?.trim().toUpperCase();
  if (!normalized) return undefined;
  return SUMMARY_BY_CODE.get(normalized);
}

/** Find a lightweight country summary by its 3-digit ISO numeric id (zero-padded to 3 digits). */
export function findSummaryById(id: string | undefined): CountrySummary | undefined {
  const normalized = id?.trim();
  if (!normalized) return undefined;
  return SUMMARY_BY_ID.get(normalized.padStart(3, '0'));
}

/** Filter lightweight country summaries by strict DIY category support and search query. */
export function filterCountrySummaries(
  activeCategory: CategoryId,
  searchQuery: string
): CountrySummary[] {
  if (activeCategory !== 'all' && !isPathwayCategoryId(activeCategory)) {
    return [];
  }

  const q = searchQuery.trim().toLowerCase();
  const specificCategory = activeCategory === 'all' ? null : activeCategory;

  return COUNTRY_DIRECTORY.filter((summary) => {
    if (specificCategory && !summary.diyCategories.includes(specificCategory)) {
      return false;
    }
    return !q || summary.searchText.includes(q);
  });
}

function loadRegion(regionId: RegionId): Promise<RegionChunkCache> {
  const existing = regionCache.get(regionId);
  if (existing) return existing;

  const pending = REGION_LOADERS[regionId]()
    .then((list) => ({
      list,
      byCode: new Map(list.map((country) => [country.code.toUpperCase(), country])),
    }))
    .catch((err) => {
      if (regionCache.get(regionId) === pending) {
        regionCache.delete(regionId);
      }
      throw err;
    });

  regionCache.set(regionId, pending);
  return pending;
}

/** Lazily load full country details for a 3-letter ISO code by importing only its region module. */
export async function loadCountryByCode(
  code: string | undefined
): Promise<CountryData | undefined> {
  const summary = findSummaryByCode(code);
  if (!summary) return undefined;

  const chunk = await loadRegion(summary.regionId);
  return chunk.byCode.get(summary.code.toUpperCase());
}

/** Lazily load all 102 countries by dynamically importing all 4 region modules in parallel. */
export async function loadAllCountries(): Promise<CountryData[]> {
  const chunks = await Promise.all(REGION_IDS.map((regionId) => loadRegion(regionId)));
  return chunks.flatMap((chunk) => chunk.list);
}
