import type { CategoryMeta, PathwayCategoryId } from '../types/visa';

export const CATEGORIES: CategoryMeta[] = [
  { id: 'all', label: '全部国家', en: 'ALL', color: '#1F2328' },
  { id: 'study', label: '留学', en: 'STUDY', color: '#4A7B82', darkColor: '#5A9AA3' },
  { id: 'work', label: '工作', en: 'WORK', color: '#3B6E9C', darkColor: '#4D8AC2' },
  { id: 'immigration', label: '移民', en: 'IMMIGRATION', color: '#C2AD7E', darkColor: '#D4BE8C' },
  { id: 'tourism', label: '旅游', en: 'TOURISM', color: '#789882', darkColor: '#88AD92' },
  { id: 'other', label: '其他', en: 'OTHER', color: '#B97D63', darkColor: '#CC8F75' },
];

export const PATHWAY_CATEGORIES = CATEGORIES.filter(
  (c): c is CategoryMeta & { id: PathwayCategoryId } => c.id !== 'all'
);

export const PATHWAY_IDS: PathwayCategoryId[] = PATHWAY_CATEGORIES.map((c) => c.id);
