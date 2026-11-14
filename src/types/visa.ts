export type ThemeMode = 'light' | 'dark';

export type CategoryId = 'all' | 'study' | 'work' | 'immigration' | 'tourism' | 'other';
export type PathwayCategoryId = Exclude<CategoryId, 'all'>;

export interface CategoryMeta {
  id: CategoryId;
  label: string;
  en: string;
  color: string;
  darkColor?: string;
}

export interface VisaStep {
  title: string;
  detail: string;
}

export interface ExternalLink {
  title: string;
  url: string;
  desc: string;
}

export interface SubVisaItem {
  id: string;
  title: string;
  fee: string;
  desc: string;
  tips: string;
  steps: VisaStep[];
  checklist: string[];
}

export interface CountryData {
  id: string;
  code: string;
  nameZh: string;
  nameEn: string;
  region: string;
  coords: [number, number];
  badge: string;
  tierColor: '#4A7B82' | '#789882';
  labelPriority: boolean;
  processing: string;
  submission: string;
  summary: string;
  pitfalls: string[];
  links: ExternalLink[];
  jobLinks: ExternalLink[];
  pathways: Record<PathwayCategoryId, SubVisaItem[]>;
}
