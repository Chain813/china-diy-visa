import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';
import { CATEGORIES, PATHWAY_CATEGORIES, PATHWAY_IDS } from '../src/data/categories';
import {
  COUNTRY_DIRECTORY,
  filterCountrySummaries,
  findSummaryByCode,
  findSummaryById,
  isPathwayCategoryId,
  loadAllCountries,
  loadCountryByCode,
} from '../src/data';
import { ASIA_PACIFIC_COUNTRIES } from '../src/data/regions/asia-pacific';
import { EUROPE_COUNTRIES } from '../src/data/regions/europe';
import { AMERICAS_COUNTRIES } from '../src/data/regions/americas';
import { MIDDLE_EAST_AFRICA_COUNTRIES } from '../src/data/regions/middle-east-africa';

describe('Visa categories, 102-country audit & lazy directory dataset', () => {
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
    expect(isPathwayCategoryId('work')).toBe(true);
    expect(isPathwayCategoryId('all')).toBe(false);
  });

  it('keeps src/data/index.ts and src/data/directory.ts free of static imports of regions/*', () => {
    const indexPath = path.resolve(process.cwd(), 'src/data/index.ts');
    const source = fs.readFileSync(indexPath, 'utf8');
    expect(source).not.toMatch(/^\s*import\s+[^;]*from\s+['"][^'"]*regions\//m);
    expect(source).toMatch(/import\(['"]\.\/regions\/asia-pacific['"]\)/);
    expect(source).toMatch(/import\(['"]\.\/regions\/europe['"]\)/);
    expect(source).toMatch(/import\(['"]\.\/regions\/americas['"]\)/);
    expect(source).toMatch(/import\(['"]\.\/regions\/middle-east-africa['"]\)/);

    const directoryPath = path.resolve(process.cwd(), 'src/data/directory.ts');
    const directorySource = fs.readFileSync(directoryPath, 'utf8');
    expect(directorySource).not.toMatch(/^\s*import\s+[^;]*from\s+['"][^'"]*regions\//m);
  });

  it('has 102 unique countries in COUNTRY_DIRECTORY matching loadAllCountries() and 4 region splits', async () => {
    expect(ASIA_PACIFIC_COUNTRIES).toHaveLength(19);
    expect(EUROPE_COUNTRIES).toHaveLength(39);
    expect(AMERICAS_COUNTRIES).toHaveLength(13);
    expect(MIDDLE_EAST_AFRICA_COUNTRIES).toHaveLength(31);

    const allCountries = await loadAllCountries();
    expect(allCountries).toHaveLength(102);
    expect(COUNTRY_DIRECTORY).toHaveLength(102);

    const dirIds = new Set(COUNTRY_DIRECTORY.map((c) => c.id));
    const dirCodes = new Set(COUNTRY_DIRECTORY.map((c) => c.code));
    expect(dirIds.size).toBe(102);
    expect(dirCodes.size).toBe(102);

    const allCodes = new Set(allCountries.map((c) => c.code));
    expect(allCodes).toEqual(dirCodes);

    for (const summary of COUNTRY_DIRECTORY) {
      expect(summary.id).toMatch(/^\d{3}$/);
      expect(summary.code).toMatch(/^[A-Z]{3}$/);
      expect(summary.nameZh.length).toBeGreaterThan(0);
      expect(summary.nameEn.length).toBeGreaterThan(0);
      expect(summary.coords).toHaveLength(2);
      expect(['#4A7B82', '#789882']).toContain(summary.tierColor);
      expect(summary.searchText.length).toBeGreaterThan(0);

      // Lightweight directory entries must omit heavy country details
      expect(summary).not.toHaveProperty('pathways');
      expect(summary).not.toHaveProperty('pitfalls');
      expect(summary).not.toHaveProperty('links');
      expect(summary).not.toHaveProperty('jobLinks');
      expect(summary).not.toHaveProperty('summary');
    }
  });

  it('requires processing, submission, and strict diySupport/advisoryNote on every SubVisaItem', async () => {
    const allCountries = await loadAllCountries();
    const byCode = new Map(allCountries.map((c) => [c.code, c]));

    for (const summary of COUNTRY_DIRECTORY) {
      const country = byCode.get(summary.code)!;
      expect(country).toBeDefined();
      expect(summary.id).toBe(country.id);
      expect(summary.nameZh).toBe(country.nameZh);
      expect(summary.nameEn).toBe(country.nameEn);
      expect(summary.region).toBe(country.region);
      expect(summary.coords).toEqual(country.coords);
      expect(summary.badge).toBe(country.badge);
      expect(summary.tierColor).toBe(country.tierColor);
      expect(summary.labelPriority).toBe(country.labelPriority);
      expect(country.pitfalls.length).toBeGreaterThanOrEqual(3);
      expect(country.links.length).toBeGreaterThanOrEqual(1);
      expect(country.jobLinks.length).toBeGreaterThanOrEqual(2);

      const expectedDiyCategories = [];
      for (const tab of PATHWAY_IDS) {
        const subVisas = country.pathways[tab];
        expect(subVisas.length).toBeGreaterThanOrEqual(1);
        expect(new Set(subVisas.map((sv) => sv.id)).size).toBe(subVisas.length);
        expect(summary.previewTitles[tab]).toBe(subVisas.map((sv) => sv.title).join(' / '));

        if (subVisas.some((sv) => sv.diySupport === 'diy')) {
          expectedDiyCategories.push(tab);
        }

        for (const sv of subVisas) {
          expect(sv.id.length).toBeGreaterThan(0);
          expect(sv.title.length).toBeGreaterThan(0);
          expect(sv.fee.length).toBeGreaterThan(0);
          expect(sv.processing.trim().length).toBeGreaterThan(0);
          expect(sv.submission.trim().length).toBeGreaterThan(0);
          expect(['diy', 'advisory']).toContain(sv.diySupport);
          if (sv.diySupport === 'advisory') {
            expect(sv.advisoryNote?.trim().length).toBeGreaterThan(0);
          }
          expect(sv.desc.length).toBeGreaterThan(0);
          expect(sv.tips.length).toBeGreaterThan(0);
          expect(sv.steps.length).toBeGreaterThanOrEqual(1);
          expect(sv.checklist.length).toBeGreaterThanOrEqual(1);
        }
      }

      expect(summary.diyCategories).toEqual(expectedDiyCategories);
    }
  });

  it('has zero cloned pseudo-split multi-sub-visas and keeps only the 7 genuine multi-card channels', async () => {
    const allCountries = await loadAllCountries();
    const multiPairs: string[] = [];

    for (const country of allCountries) {
      for (const tab of PATHWAY_IDS) {
        const subVisas = country.pathways[tab];
        if (subVisas.length > 1) {
          multiPairs.push(`${country.code}:${tab}`);
          const signatures = new Set(
            subVisas.map((sv) => JSON.stringify({ steps: sv.steps, checklist: sv.checklist }))
          );
          expect(signatures.size).toBe(subVisas.length);
        }
      }
    }

    expect(multiPairs.sort()).toEqual(
      [
        'AUS:work',
        'CAN:work',
        'DEU:work',
        'IRL:work',
        'JPN:work',
        'KOR:tourism',
        'NZL:work',
      ].sort()
    );

    const nzl = (await loadCountryByCode('NZL'))!;
    expect(nzl.pathways.work.map((s) => s.id)).toEqual(['aewv', 'whv']);
    expect(nzl.pathways.work[0].diySupport).toBe('advisory');
    expect(nzl.pathways.work[0].advisoryNote?.trim().length).toBeGreaterThan(0);
    expect(nzl.pathways.work[1].diySupport).toBe('diy');

    const deu = (await loadCountryByCode('DEU'))!;
    expect(deu.pathways.work.map((s) => s.id)).toEqual([
      'bluecard',
      'chancenkarte',
      'ausbildung',
    ]);
    expect(deu.pathways.work[0].diySupport).toBe('advisory');
    expect(deu.pathways.work[0].advisoryNote?.trim().length).toBeGreaterThan(0);
    expect(deu.pathways.work[1].diySupport).toBe('diy');
    expect(deu.pathways.work[2].diySupport).toBe('advisory');
    expect(deu.pathways.work[2].advisoryNote?.trim().length).toBeGreaterThan(0);

    const jpn = (await loadCountryByCode('JPN'))!;
    expect(jpn.pathways.work.map((s) => s.id)).toEqual(['gijinkoku', 'ssw']);
    for (const workCard of jpn.pathways.work) {
      expect(workCard.diySupport).toBe('advisory');
      expect(workCard.advisoryNote?.trim().length).toBeGreaterThan(0);
    }
    expect(findSummaryByCode('JPN')?.diyCategories).not.toContain('work');

    const aus = (await loadCountryByCode('AUS'))!;
    expect(aus.pathways.work.map((s) => s.id)).toEqual(['482', '462']);
    expect(aus.pathways.other).toHaveLength(1);
    expect(aus.pathways.other[0].fee).toBe('Subclass 600: 250 AUD / Subclass 485: 5,750 AUD');

    const usa = (await loadCountryByCode('USA'))!;
    expect(usa.pathways.work).toHaveLength(1);
    expect(usa.pathways.tourism).toHaveLength(1);
  });

  it('supports strict DIY category filtering and keyword search on COUNTRY_DIRECTORY', () => {
    expect(findSummaryByCode('jpn')?.nameZh).toBe('日本');
    expect(findSummaryById('392')?.code).toBe('JPN');
    expect(findSummaryById('8')?.code).toBe('ALB');
    expect(findSummaryByCode('XXX')).toBeUndefined();
    expect(findSummaryById(undefined)).toBeUndefined();

    expect(filterCountrySummaries('all', '')).toHaveLength(102);

    const studyDiy = filterCountrySummaries('study', '');
    const workDiy = filterCountrySummaries('work', '');
    const immDiy = filterCountrySummaries('immigration', '');
    const tourismDiy = filterCountrySummaries('tourism', '');
    const otherDiy = filterCountrySummaries('other', '');

    expect(studyDiy.length).toBeGreaterThan(0);
    expect(studyDiy.length).toBeLessThan(102);
    expect(workDiy.length).toBeGreaterThan(0);
    expect(workDiy.length).toBeLessThan(102);
    expect(immDiy.length).toBeGreaterThan(0);
    expect(immDiy.length).toBeLessThan(102);
    expect(tourismDiy.length).toBeGreaterThan(0);
    expect(tourismDiy.length).toBeLessThan(102);
    expect(otherDiy.length).toBeGreaterThan(0);
    expect(otherDiy.length).toBeLessThan(102);

    expect(filterCountrySummaries('all', '申根').length).toBeGreaterThan(10);
    expect(filterCountrySummaries('all', 'TUR').map((c) => c.code)).toContain('TUR');
    expect(filterCountrySummaries('tourism', '90天').map((c) => c.code)).toContain('TUR');

    const blueCardMatches = filterCountrySummaries('work', '蓝卡');
    expect(blueCardMatches.some((c) => c.code === 'DEU')).toBe(true);

    const whvMatches = filterCountrySummaries('all', 'WHV');
    expect(whvMatches.some((c) => c.code === 'NZL')).toBe(true);
    expect(whvMatches.some((c) => c.code === 'AUS')).toBe(true);
  });

  it('applies 2026 policy/fee updates and replaces all dead official URLs', async () => {
    const allCountries = await loadAllCountries();
    const deadUrls = [
      'moi.gov.cy',
      'vistoperitalia.esteri.it/home/en',
      'sem.admin.ch/sem/en/home.html',
      'migraciones.gob.ar/ave/index.htm',
      'evisamada-mg.com',
    ];
    for (const country of allCountries) {
      const serialized = JSON.stringify(country);
      for (const dead of deadUrls) {
        expect(serialized).not.toContain(dead);
      }
    }

    const tur = (await loadCountryByCode('TUR'))!;
    expect(tur.badge).toContain('90天免签');
    expect(tur.pathways.tourism[0].diySupport).toBe('diy');
    expect(tur.pathways.tourism[0].title).toContain('免签');
    expect(tur.pathways.tourism[0].title).toContain('90');
    expect(tur.pathways.tourism[0].fee).toBe('免费（免签入境）');

    const rus = (await loadCountryByCode('RUS'))!;
    expect(rus.pathways.tourism[0].title).toContain('免签');
    expect(rus.pathways.tourism[0].title).toContain('30');
    expect(rus.pathways.tourism[0].fee).toContain('52 USD');
    expect(JSON.stringify(rus)).toContain('evisa.kdmid.ru');

    const aus = (await loadCountryByCode('AUS'))!;
    const ausStr = JSON.stringify(aus);
    for (const expected of [
      '250 AUD',
      '2,500 AUD',
      '5,750 AUD',
      '4,015 AUD',
      '840 AUD',
      '6,135 AUD',
      '6,140 AUD',
      'visa-pricing-estimator',
    ]) {
      expect(ausStr).toContain(expected);
    }

    const jpn = (await loadCountryByCode('JPN'))!;
    expect(jpn.pathways.immigration[0].fee).toContain('200,000 JPY');
    expect(jpn.pathways.immigration[0].fee).toContain('10,000');
    expect(jpn.pathways.work[0].processing).not.toBe(jpn.pathways.tourism[0].processing);
    expect(jpn.pathways.study[0].processing).not.toBe(jpn.pathways.tourism[0].processing);

    const cyp = (await loadCountryByCode('CYP'))!;
    expect(cyp.links.map((l) => l.url)).toContain('https://www.mip.gov.cy/');
    expect(cyp.links.map((l) => l.url)).toContain('https://www.gov.cy/');

    const mdg = (await loadCountryByCode('MDG'))!;
    expect(mdg.links.map((l) => l.url)).toContain('https://evisamada.gov.mg/');

    const ita = (await loadCountryByCode('ITA'))!;
    expect(ita.links.map((l) => l.url)).toContain('https://vistoperitalia.esteri.it/');

    const che = (await loadCountryByCode('CHE'))!;
    expect(che.links.map((l) => l.url)).toContain('https://www.sem.admin.ch/');

    const aut = (await loadCountryByCode('AUT'))!;
    expect(aut.links.map((l) => l.url)).toContain('https://www.migration.gv.at/');
    expect(aut.links.map((l) => l.url)).toContain('https://www.bmeia.gv.at/');

    const arg = (await loadCountryByCode('ARG'))!;
    expect(arg.links.map((l) => l.url)).toContain(
      'https://www.argentina.gob.ar/interior/migraciones/ave'
    );
  });

  it('lazily loads full CountryData via loadCountryByCode and handles invalid codes', async () => {
    const jpn = await loadCountryByCode('jpn');
    expect(jpn?.code).toBe('JPN');
    expect(jpn?.nameEn).toBe('Japan');
    expect(jpn?.pathways.work.length).toBe(2);

    expect(await loadCountryByCode('INVALID')).toBeUndefined();
    expect(await loadCountryByCode(undefined)).toBeUndefined();
  });

  it('contains zero "自游行" typos or nested Chinese parentheses in src/data files', () => {
    const dataFiles = [
      'src/data/directory.ts',
      'src/data/index.ts',
      'src/data/categories.ts',
      'src/data/regions/asia-pacific.ts',
      'src/data/regions/europe.ts',
      'src/data/regions/americas.ts',
      'src/data/regions/middle-east-africa.ts',
    ];

    for (const relPath of dataFiles) {
      const content = fs.readFileSync(path.resolve(process.cwd(), relPath), 'utf8');
      expect(content).not.toContain('自游行');
      expect(content).not.toMatch(/（[^）]*（/);
    }
  });

  it('deduplicates concurrent region loads and evicts failed loads for retry recovery', async () => {
    const { ASIA_PACIFIC_COUNTRIES: actualAsiaPacific } = await import(
      '../src/data/regions/asia-pacific'
    );
    let accessCount = 0;
    let shouldFail = true;

    vi.resetModules();
    vi.doMock('../src/data/regions/asia-pacific', () => ({
      get ASIA_PACIFIC_COUNTRIES() {
        accessCount += 1;
        if (shouldFail) {
          throw new Error('simulated chunk load failure');
        }
        return actualAsiaPacific;
      },
    }));

    try {
      const { loadCountryByCode: freshLoadCountryByCode } = await import('../src/data');

      await expect(freshLoadCountryByCode('JPN')).rejects.toThrow('simulated chunk load failure');
      expect(accessCount).toBe(1);

      shouldFail = false;
      const [jpn, aus] = await Promise.all([
        freshLoadCountryByCode('JPN'),
        freshLoadCountryByCode('AUS'),
      ]);
      expect(accessCount).toBe(2);
      expect(jpn?.code).toBe('JPN');
      expect(aus?.code).toBe('AUS');

      const kor = await freshLoadCountryByCode('KOR');
      expect(kor?.code).toBe('KOR');
      expect(accessCount).toBe(2);
    } finally {
      vi.doUnmock('../src/data/regions/asia-pacific');
      vi.resetModules();
    }
  });
});
