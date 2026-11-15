import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getFormDownloadLink } from '../src/utils/formLinks';
import { THEME_STORAGE_KEY, useTheme } from '../src/hooks/useTheme';
import {
  CHECKLIST_STORAGE_KEY,
  buildChecklistKey,
  formatChecklistText,
  useChecklist,
} from '../src/hooks/useChecklist';

describe('getFormDownloadLink', () => {
  const baseLinks = [
    {
      title: '官网签证中心',
      url: 'https://example.gov/visa-forms',
      desc: 'Official portal',
    },
  ];
  const makeCountry = (code: string, links = baseLinks) => ({ code, links });

  it('matches all specific official form rules only for their owning country and prioritizes them over generic keywords', () => {
    expect(getFormDownloadLink('DS-160 在线申请确认页', makeCountry('USA'))).toEqual({
      label: '官网填报/下载 ↗',
      url: 'https://ceac.state.gov/genniv/',
    });
    expect(getFormDownloadLink('ds-260 移民申请表', makeCountry('USA'))).toEqual({
      label: '官网填报/下载 ↗',
      url: 'https://ceac.state.gov/genniv/',
    });
    expect(getFormDownloadLink('INZ 1027 补充申请表', makeCountry('NZL'))).toEqual({
      label: '官网下载表格 ↗',
      url: 'https://www.immigration.govt.nz/visas/',
    });
    expect(getFormDownloadLink('inz 1025 表格', makeCountry('NZL'))).toEqual({
      label: '官网下载表格 ↗',
      url: 'https://www.immigration.govt.nz/visas/',
    });
    expect(getFormDownloadLink('德国 VIDEX 在线填表', makeCountry('DEU'))).toEqual({
      label: '官网在线填表 ↗',
      url: 'https://digital.diplo.de/',
    });
    expect(getFormDownloadLink('新加坡 SGAC 电子入境卡', makeCountry('SGP'))).toEqual({
      label: '官方免费填报 ↗',
      url: 'https://www.ica.gov.sg/information-and-e-services/entry-and-departure/entering-singapore/sg-arrival-card-with-electronic-health-declaration',
    });
    expect(getFormDownloadLink('填写 MDAC 入境卡', makeCountry('MYS'))).toEqual({
      label: '官方免费填报 ↗',
      url: 'https://imigresen-online.imi.gov.my/mdac/main',
    });
    expect(getFormDownloadLink('爱尔兰 AVATS 在线申请', makeCountry('IRL'))).toEqual({
      label: '官网在线填表 ↗',
      url: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/application-forms/',
    });
    expect(getFormDownloadLink('France-Visas 申请表与回执', makeCountry('FRA'))).toEqual({
      label: '官网填表下载 ↗',
      url: 'https://france-visas.gouv.fr/chine',
    });
    expect(getFormDownloadLink('GOV.UK 在线申请确认页', makeCountry('GBR'))).toEqual({
      label: '官网下载/填报 ↗',
      url: 'https://www.gov.uk/apply-to-come-to-the-uk',
    });
  });

  it('does not trigger country-specific links for unrelated countries', () => {
    expect(getFormDownloadLink('DS-160 确认页', makeCountry('JPN'))).toBeNull();
    expect(getFormDownloadLink('SGAC 电子回执', makeCountry('MYS'))).toBeNull();
    expect(getFormDownloadLink('VIDEX 填表指引', makeCountry('FRA'))).toBeNull();
  });

  it('falls back to the primary country link strictly for fillable generic form keywords', () => {
    const genericItems = [
      '签证申请表',
      '个人陈述申请书',
      '家庭成员补充表',
      '留学调查表与户口本复印件',
      '官方表格填写',
    ];

    for (const text of genericItems) {
      expect(getFormDownloadLink(text, makeCountry('JPN'))).toEqual({
        label: '前往官网下载 ↗',
        url: 'https://example.gov/visa-forms',
      });
    }
  });

  it('does not misclassify receipts, checklists, or approval permits as downloadable forms', () => {
    const nonFormItems = [
      '有效期6个月以上的护照原件',
      '近6个月银行流水',
      '当地官方签发的工作许可批准函 (Work Permit)',
      '标准入学许可书',
      '指定医院体检回执',
      '电子入境卡/健康声明回执',
      '5年出入境清单与雇主支持信',
      '材料清单',
    ];

    for (const text of nonFormItems) {
      expect(getFormDownloadLink(text, makeCountry('AUS'))).toBeNull();
    }

    expect(getFormDownloadLink('签证申请表', makeCountry('JPN', []))).toBeNull();
    expect(
      getFormDownloadLink(
        '签证申请表',
        makeCountry('JPN', [{ title: 'Empty', url: '', desc: '' }])
      )
    ).toBeNull();
  });
});

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('defaults to light theme and syncs <html data-theme> on mount', () => {
    expect(THEME_STORAGE_KEY).toBe('china_diy_visa_theme_v1');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('reads saved dark theme from localStorage on initial mount', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('falls back to light when stored value is invalid or localStorage throws', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'sepia');
    const first = renderHook(() => useTheme());
    expect(first.result.current.theme).toBe('light');
    first.unmount();

    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });
    const second = renderHook(() => useTheme());
    expect(second.result.current.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('toggles and sets theme, updating data-theme and persisting to localStorage', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');

    act(() => {
      result.current.setTheme('dark');
    });
    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  it('ignores localStorage write errors gracefully', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('quota exceeded');
    });

    const { result } = renderHook(() => useTheme());
    expect(() => {
      act(() => {
        result.current.toggleTheme();
      });
    }).not.toThrow();

    expect(result.current.theme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});

describe('useChecklist & checklist utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('builds checklist keys and formats shareable checklist text accurately', () => {
    expect(CHECKLIST_STORAGE_KEY).toBe('china_diy_visa_checklist_v1');
    expect(buildChecklistKey('392', 'study', 'student', 2)).toBe('392:study:student:2');

    const formatted = formatChecklistText('日本', '留学', {
      title: '留学签证 (Student)',
      fee: '约 200 元人民币',
      checklist: ['有效护照原件', '在留资格认定证明书', '两寸白底照片'],
    });

    expect(formatted).toBe(
      [
        '【日本 - 留学签证 DIY 材料清单】',
        '签证类型：留学签证 (Student)',
        '参考费用：约 200 元人民币',
        '',
        '所需材料：',
        '1. [ ] 有效护照原件',
        '2. [ ] 在留资格认定证明书',
        '3. [ ] 两寸白底照片',
      ].join('\n')
    );
  });

  it('reads saved JSON from localStorage and ignores corrupt or non-object values', () => {
    localStorage.setItem(
      CHECKLIST_STORAGE_KEY,
      JSON.stringify({
        '392:study:student:0': true,
        '392:study:student:1': false,
      })
    );
    const valid = renderHook(() => useChecklist());
    expect(valid.result.current.checkedItems).toEqual({
      '392:study:student:0': true,
      '392:study:student:1': false,
    });
    expect(valid.result.current.isItemChecked('392:study:student:0')).toBe(true);
    expect(valid.result.current.isItemChecked('392:study:student:1')).toBe(false);
    valid.unmount();

    for (const corrupt of ['{not-valid-json', 'null', '[]', '123', '"hello"']) {
      localStorage.setItem(CHECKLIST_STORAGE_KEY, corrupt);
      const rendered = renderHook(() => useChecklist());
      expect(rendered.result.current.checkedItems).toEqual({});
      rendered.unmount();
    }

    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('storage disabled');
    });
    const errored = renderHook(() => useChecklist());
    expect(errored.result.current.checkedItems).toEqual({});
  });

  it('toggles items, counts checked items within bounds, and persists to localStorage', () => {
    localStorage.setItem(
      CHECKLIST_STORAGE_KEY,
      JSON.stringify({
        '840:tourism:b1b2:5': true, // out of bounds if total is 3
        '840:work:h1b:0': true, // different tab
      })
    );

    const { result } = renderHook(() => useChecklist());

    const key0 = buildChecklistKey('840', 'tourism', 'b1b2', 0);
    const key2 = buildChecklistKey('840', 'tourism', 'b1b2', 2);

    expect(result.current.getCheckedCount('840', 'tourism', 'b1b2', 3)).toBe(0);

    act(() => {
      result.current.toggleItem(key0);
      result.current.toggleItem(key2);
    });

    expect(result.current.isItemChecked(key0)).toBe(true);
    expect(result.current.isItemChecked(key2)).toBe(true);
    expect(result.current.getCheckedCount('840', 'tourism', 'b1b2', 3)).toBe(2);
    expect(result.current.getCheckedCount('840', 'tourism', 'b1b2', 1)).toBe(1);
    expect(result.current.getCheckedCount('840', 'tourism', 'b1b2', 0)).toBe(0);

    const persisted = JSON.parse(localStorage.getItem(CHECKLIST_STORAGE_KEY) || '{}');
    expect(persisted[key0]).toBe(true);
    expect(persisted[key2]).toBe(true);

    act(() => {
      result.current.toggleItem(key0);
    });
    expect(result.current.isItemChecked(key0)).toBe(false);
    expect(result.current.getCheckedCount('840', 'tourism', 'b1b2', 3)).toBe(1);
  });

  it('resets only target sub-visa keys while preserving other keys and handles write errors', () => {
    localStorage.setItem(
      CHECKLIST_STORAGE_KEY,
      JSON.stringify({
        '554:work:whv:0': true,
        '554:work:whv:1': true,
        '554:work:whv2:0': true,
        '554:work:aewv:0': true,
        '554:study:student:0': true,
        '036:work:whv:0': true,
      })
    );

    const { result } = renderHook(() => useChecklist());

    act(() => {
      result.current.resetSubVisaChecklist('554', 'work', 'whv');
    });

    expect(result.current.checkedItems).toEqual({
      '554:work:whv2:0': true,
      '554:work:aewv:0': true,
      '554:study:student:0': true,
      '036:work:whv:0': true,
    });
    expect(JSON.parse(localStorage.getItem(CHECKLIST_STORAGE_KEY) || '{}')).toEqual({
      '554:work:whv2:0': true,
      '554:work:aewv:0': true,
      '554:study:student:0': true,
      '036:work:whv:0': true,
    });

    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('quota exceeded');
    });
    expect(() => {
      act(() => {
        result.current.toggleItem('554:work:whv:0');
      });
    }).not.toThrow();
    expect(result.current.isItemChecked('554:work:whv:0')).toBe(true);
  });
});
