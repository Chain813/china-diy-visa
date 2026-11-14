import type { CountryData } from '../types/visa';

export interface FormDownloadLink {
  label: string;
  url: string;
}

const SPECIFIC_FORM_RULES: ReadonlyArray<{
  keywords: readonly string[];
  link: FormDownloadLink;
}> = [
  {
    keywords: ['ds-160', 'ds-260'],
    link: { label: '官网填报/下载 ↗', url: 'https://ceac.state.gov/genniv/' },
  },
  {
    keywords: ['inz 1027', 'inz 1025'],
    link: { label: '官网下载表格 ↗', url: 'https://www.immigration.govt.nz/visas/' },
  },
  {
    keywords: ['videx'],
    link: { label: '官网在线填表 ↗', url: 'https://digital.diplo.de/' },
  },
  {
    keywords: ['sgac'],
    link: {
      label: '官方免费填报 ↗',
      url: 'https://www.ica.gov.sg/information-and-e-services/entry-and-departure/entering-singapore/sg-arrival-card-with-electronic-health-declaration',
    },
  },
  {
    keywords: ['mdac'],
    link: { label: '官方免费填报 ↗', url: 'https://imigresen-online.imi.gov.my/mdac/main' },
  },
  {
    keywords: ['avats'],
    link: {
      label: '官网在线填表 ↗',
      url: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/application-forms/',
    },
  },
  {
    keywords: ['france-visas'],
    link: { label: '官网填表下载 ↗', url: 'https://france-visas.gouv.fr/chine' },
  },
  {
    keywords: ['gov.uk'],
    link: { label: '官网下载/填报 ↗', url: 'https://www.gov.uk/apply-to-come-to-the-uk' },
  },
];

const GENERIC_FORM_KEYWORDS: readonly string[] = [
  '申请表',
  '申请书',
  '补充表',
  '调查表',
  '清单',
  '确认页',
  '摘要表',
  '表格',
  'checklist',
  '回执',
  '许可',
];

/**
 * Resolves an official form download or online portal link for a checklist item.
 */
export function getFormDownloadLink(
  itemText: string,
  country: Pick<CountryData, 'links'>
): FormDownloadLink | null {
  const lower = itemText.toLowerCase();

  for (const rule of SPECIFIC_FORM_RULES) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.link;
    }
  }

  if (GENERIC_FORM_KEYWORDS.some((kw) => lower.includes(kw))) {
    const primaryUrl = country.links?.[0]?.url;
    if (primaryUrl) {
      return { label: '前往官网下载 ↗', url: primaryUrl };
    }
  }

  return null;
}
