import type { CategoryId, CountryData, PathwayCategoryId, SubVisaItem } from '../types/visa';
import { ASIA_PACIFIC_COUNTRIES } from './regions/asia-pacific';
import { EUROPE_COUNTRIES } from './regions/europe';
import { AMERICAS_COUNTRIES } from './regions/americas';
import { MIDDLE_EAST_AFRICA_COUNTRIES } from './regions/middle-east-africa';

export const COUNTRIES_DATA: CountryData[] = [
  ...ASIA_PACIFIC_COUNTRIES,
  ...EUROPE_COUNTRIES,
  ...AMERICAS_COUNTRIES,
  ...MIDDLE_EAST_AFRICA_COUNTRIES,
];

const BY_CODE = new Map<string, CountryData>(
  COUNTRIES_DATA.map((c) => [c.code.toUpperCase(), c])
);
const BY_ID = new Map<string, CountryData>(COUNTRIES_DATA.map((c) => [c.id, c]));

/** Find a country by its 3-letter ISO alpha-3 code (case-insensitive). */
export function findCountryByCode(code: string | undefined): CountryData | undefined {
  const normalized = code?.trim().toUpperCase();
  if (!normalized) return undefined;
  return BY_CODE.get(normalized);
}

/** Find a country by its 3-digit ISO numeric id (zero-padded to 3 digits). */
export function findCountryById(id: string | undefined): CountryData | undefined {
  const normalized = id?.trim();
  if (!normalized) return undefined;
  return BY_ID.get(normalized.padStart(3, '0'));
}

function matchesSubVisas(subVisas: SubVisaItem[], query: string): boolean {
  return subVisas.some(
    (sv) =>
      sv.title.toLowerCase().includes(query) ||
      sv.desc.toLowerCase().includes(query) ||
      sv.tips.toLowerCase().includes(query)
  );
}

/** Filter countries by active visa category and search query across metadata and pathway details. */
export function filterCountries(activeCategory: CategoryId, searchQuery: string): CountryData[] {
  const q = searchQuery.trim().toLowerCase();

  return COUNTRIES_DATA.filter((country) => {
    const pathwayList =
      activeCategory === 'all' ? null : country.pathways[activeCategory as PathwayCategoryId];

    if (pathwayList !== null && pathwayList.length === 0) {
      return false;
    }
    if (!q) {
      return true;
    }

    const baseMatch =
      country.nameZh.toLowerCase().includes(q) ||
      country.nameEn.toLowerCase().includes(q) ||
      country.code.toLowerCase().includes(q) ||
      country.badge.toLowerCase().includes(q) ||
      country.region.toLowerCase().includes(q);
    if (baseMatch) {
      return true;
    }

    if (pathwayList !== null) {
      return matchesSubVisas(pathwayList, q);
    }

    return Object.values(country.pathways).some((subVisas) => matchesSubVisas(subVisas, q));
  });
}
