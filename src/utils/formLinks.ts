import type { CountryData } from '../types/visa';

export interface FormDownloadLink {
  label: string;
  url: string;
}

interface SpecificFormRule {
  countryCodes: readonly string[];
  keywords: readonly string[];
  link: FormDownloadLink;
}

const SPECIFIC_FORM_RULES: readonly SpecificFormRule[] = [
  {
    countryCodes: ['USA'],
    keywords: ['ds-160', 'ds-260'],
    link: { label: '官网填报/下载 ↗', url: 'https://ceac.state.gov/genniv/' },
  },
  {
    countryCodes: ['NZL'],
    keywords: ['inz 1027', 'inz 1025'],
    link: { label: '官网下载表格 ↗', url: 'https://www.immigration.govt.nz/visas/' },
  },
  {
    countryCodes: ['DEU'],
    keywords: ['videx'],
    link: { label: '官网在线填表 ↗', url: 'https://digital.diplo.de/' },
  },
  {
    countryCodes: ['SGP'],
    keywords: ['sgac'],
    link: {
      label: '官方免费填报 ↗',
      url: 'https://www.ica.gov.sg/information-and-e-services/entry-and-departure/entering-singapore/sg-arrival-card-with-electronic-health-declaration',
    },
  },
  {
    countryCodes: ['MYS'],
    keywords: ['mdac'],
    link: { label: '官方免费填报 ↗', url: 'https://imigresen-online.imi.gov.my/mdac/main' },
  },
  {
    countryCodes: ['IRL'],
    keywords: ['avats'],
    link: {
      label: '官网在线填表 ↗',
      url: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/application-forms/',
    },
  },
  {
    countryCodes: ['FRA'],
    keywords: ['france-visas'],
    link: { label: '官网填表下载 ↗', url: 'https://france-visas.gouv.fr/chine' },
  },
  {
    countryCodes: ['GBR'],
    keywords: ['gov.uk'],
    link: { label: '官网下载/填报 ↗', url: 'https://www.gov.uk/apply-to-come-to-the-uk' },
  },
];

const GENERIC_FORM_KEYWORDS: readonly string[] = [
  '申请表',
  '申请书',
  '补充表',
  '调查表',
  '表格',
];

/**
 * Resolves an official fillable form or online portal link for a checklist item,
 * scoping country-specific rules by ISO code and avoiding false positives on receipts/permits.
 */
export function getFormDownloadLink(
  itemText: string,
  country: Pick<CountryData, 'code' | 'links'>
): FormDownloadLink | null {
  const lower = itemText.toLowerCase();
  const countryCode = country.code.trim().toUpperCase();

  for (const rule of SPECIFIC_FORM_RULES) {
    if (
      rule.countryCodes.includes(countryCode) &&
      rule.keywords.some((kw) => lower.includes(kw))
    ) {
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
