import { describe, expect, it } from 'vitest';
import { CATEGORIES, PATHWAY_CATEGORIES, PATHWAY_IDS } from '../src/data/categories';
import {
  COUNTRIES_DATA,
  findCountryByCode,
  findCountryById,
  filterCountries,
} from '../src/data';
import { ASIA_PACIFIC_COUNTRIES } from '../src/data/regions/asia-pacific';
import { EUROPE_COUNTRIES } from '../src/data/regions/europe';
import { AMERICAS_COUNTRIES } from '../src/data/regions/americas';
import { MIDDLE_EAST_AFRICA_COUNTRIES } from '../src/data/regions/middle-east-africa';

describe('Visa categories & 102-country standardized dataset', () => {
  it('defines all 6 navigation categories and 5 pathway categories', () => {
    expect(CATEGORIES.map((c) => c.id)).toEqual([
      'all',
      'study',
      'work',
      'immigration',
      'tourism',
      'other',
    ]);
    expect(PATHWAY_CATEGORIES.map((c) => c.id)).toEqual([
      'study',
      'work',
      'immigration',
      'tourism',
      'other',
    ]);
    expect(PATHWAY_IDS).toEqual(['study', 'work', 'immigration', 'tourism', 'other']);
  });

  it('contains all 102 unique countries split cleanly across 4 region modules', () => {
    expect(ASIA_PACIFIC_COUNTRIES).toHaveLength(19);
    expect(EUROPE_COUNTRIES).toHaveLength(39);
    expect(AMERICAS_COUNTRIES).toHaveLength(13);
    expect(MIDDLE_EAST_AFRICA_COUNTRIES).toHaveLength(31);

    const regionSum =
      ASIA_PACIFIC_COUNTRIES.length +
      EUROPE_COUNTRIES.length +
      AMERICAS_COUNTRIES.length +
      MIDDLE_EAST_AFRICA_COUNTRIES.length;
    expect(regionSum).toBe(102);
    expect(COUNTRIES_DATA).toHaveLength(102);

    const ids = new Set(COUNTRIES_DATA.map((c) => c.id));
    const codes = new Set(COUNTRIES_DATA.map((c) => c.code));
    expect(ids.size).toBe(102);
    expect(codes.size).toBe(102);
  });

  it('has complete unified fields and non-empty 5 pathways for every country', () => {
    const tabs = ['study', 'work', 'immigration', 'tourism', 'other'] as const;
    for (const country of COUNTRIES_DATA) {
      expect(country.id).toMatch(/^\d{3}$/);
      expect(country.code).toMatch(/^[A-Z]{3}$/);
      expect(country.nameZh.length).toBeGreaterThan(0);
      expect(country.nameEn.length).toBeGreaterThan(0);
      expect(country.coords).toHaveLength(2);
      expect(['#4A7B82', '#789882']).toContain(country.tierColor);
      expect(country.pitfalls.length).toBeGreaterThanOrEqual(3);
      expect(country.links.length).toBeGreaterThanOrEqual(1);
      expect(country.jobLinks.length).toBeGreaterThanOrEqual(2);

      for (const tab of tabs) {
        const subVisas = country.pathways[tab];
        expect(subVisas.length).toBeGreaterThanOrEqual(1);
        for (const sv of subVisas) {
          expect(sv.id.length).toBeGreaterThan(0);
          expect(sv.title.length).toBeGreaterThan(0);
          expect(sv.fee.length).toBeGreaterThan(0);
          expect(sv.desc.length).toBeGreaterThan(0);
          expect(sv.tips.length).toBeGreaterThan(0);
          expect(sv.steps.length).toBeGreaterThanOrEqual(1);
          expect(sv.checklist.length).toBeGreaterThanOrEqual(1);
        }
      }
    }
  });

  it('preserves dedicated multi-visa pathways and avoids accidental slash splitting', () => {
    const nzl = findCountryByCode('NZL')!;
    expect(nzl.pathways.work.map((s) => s.id)).toEqual(['aewv', 'whv']);

    const deu = findCountryByCode('DEU')!;
    expect(deu.pathways.work.map((s) => s.id)).toEqual([
      'bluecard',
      'chancenkarte',
      'ausbildung',
    ]);

    const usa = findCountryByCode('USA')!;
    expect(usa.pathways.work).toHaveLength(3);
    expect(usa.pathways.tourism).toHaveLength(1); // B1/B2 should remain one unified visa

    const aus = findCountryByCode('AUS')!;
    expect(aus.pathways.immigration).toHaveLength(1); // Subclass 189 / 190 / 491 stays unified
    expect(aus.pathways.other).toHaveLength(2); // 商务/探亲 600 + 毕业生工签 485

    const tha = findCountryByCode('THA')!;
    expect(tha.pathways.study).toHaveLength(1); // Non-ED 教育/留学签证 stays unified
    expect(tha.pathways.other).toHaveLength(1); // DTV 5年数字游民/文化体验签 stays unified

    const mys = findCountryByCode('MYS')!;
    expect(mys.pathways.tourism).toHaveLength(1);
    expect(mys.pathways.work).toHaveLength(1);
  });

  it('supports lookup by code/id and keyword filtering across pathways', () => {
    expect(findCountryByCode('jpn')?.nameZh).toBe('日本');
    expect(findCountryById('392')?.code).toBe('JPN');
    expect(findCountryById('8')?.code).toBe('ALB');
    expect(findCountryByCode('XXX')).toBeUndefined();
    expect(findCountryById(undefined)).toBeUndefined();

    const blueCardMatches = filterCountries('work', '蓝卡');
    expect(blueCardMatches.some((c) => c.code === 'DEU')).toBe(true);

    const whvMatches = filterCountries('all', 'WHV');
    expect(whvMatches.some((c) => c.code === 'NZL')).toBe(true);
    expect(whvMatches.some((c) => c.code === 'AUS')).toBe(true);
  });
});
