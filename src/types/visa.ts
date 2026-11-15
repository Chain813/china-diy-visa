export type ThemeMode = 'light' | 'dark';

export type CategoryId = 'all' | 'study' | 'work' | 'immigration' | 'tourism' | 'other';
export type PathwayCategoryId = Exclude<CategoryId, 'all'>;
export type DiySupportLevel = 'diy' | 'advisory';
export type RegionId = 'asia-pacific' | 'europe' | 'americas' | 'middle-east-africa';

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
  processing: string;
  submission: string;
  diySupport: DiySupportLevel;
  advisoryNote?: string;
  desc: string;
  tips: string;
  steps: VisaStep[];
  checklist: string[];
}

export interface CountrySummary {
  /** 3-digit ISO 3166-1 numeric string (matches TopoJSON feature.id). */
  id: string;
  /** 3-letter ISO 3166-1 alpha-3 code. */
  code: string;
  regionId: RegionId;
  nameZh: string;
  nameEn: string;
  region: string;
  /** Center coordinates as [longitude, latitude]. */
  coords: [number, number];
  badge: string;
  tierColor: '#4A7B82' | '#789882';
  labelPriority: boolean;
  diyCategories: PathwayCategoryId[];
  previewTitles: Record<PathwayCategoryId, string>;
  searchText: string;
}

export interface CountryData {
  /** 3-digit ISO 3166-1 numeric string (matches TopoJSON feature.id). */
  id: string;
  /** 3-letter ISO 3166-1 alpha-3 code. */
  code: string;
  nameZh: string;
  nameEn: string;
  region: string;
  /** Center coordinates as [longitude, latitude]. */
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
