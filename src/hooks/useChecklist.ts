import { useCallback, useEffect, useRef, useState } from 'react';
import type { PathwayCategoryId, SubVisaItem } from '../types/visa';

export const CHECKLIST_STORAGE_KEY = 'china_diy_visa_checklist_v1';

/**
 * Builds the deterministic storage key for a single checklist item.
 */
export function buildChecklistKey(
  countryId: string,
  tab: PathwayCategoryId,
  subVisaId: string,
  idx: number
): string {
  return `${countryId}:${tab}:${subVisaId}:${idx}`;
}

/**
 * Formats a sub-visa's checklist into a plain-text summary suitable for clipboard sharing.
 */
export function formatChecklistText(
  countryNameZh: string,
  categoryLabel: string,
  subVisa: Pick<SubVisaItem, 'title' | 'fee' | 'checklist'>
): string {
  return (
    `【${countryNameZh} - ${categoryLabel}签证 DIY 材料清单】\n` +
    `签证类型：${subVisa.title}\n` +
    `参考费用：${subVisa.fee}\n\n` +
    `所需材料：\n` +
    subVisa.checklist.map((item, i) => `${i + 1}. [ ] ${item}`).join('\n')
  );
}

function readStoredChecklist(): Record<string, boolean> {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return {};
    }
    const raw = window.localStorage.getItem(CHECKLIST_STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      return {};
    }

    const sanitized: Record<string, boolean> = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === 'boolean') {
        sanitized[key] = value;
      }
    }
    return sanitized;
  } catch {
    return {};
  }
}

function writeStoredChecklist(checkedItems: Record<string, boolean>): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(checkedItems));
    }
  } catch {
    // Ignore storage write errors (e.g., quota exceeded or private mode).
  }
}

export interface UseChecklistResult {
  checkedItems: Record<string, boolean>;
  isItemChecked: (key: string) => boolean;
  toggleItem: (key: string) => void;
  resetSubVisaChecklist: (countryId: string, tab: PathwayCategoryId, subVisaId: string) => void;
  getCheckedCount: (
    countryId: string,
    tab: PathwayCategoryId,
    subVisaId: string,
    total: number
  ) => number;
}

/**
 * Manages persisted DIY visa checklist item states across countries and visa pathways.
 */
export function useChecklist(): UseChecklistResult {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(readStoredChecklist);
  const lastSyncedItemsRef = useRef<Record<string, boolean>>(checkedItems);

  useEffect(() => {
    if (lastSyncedItemsRef.current !== checkedItems) {
      lastSyncedItemsRef.current = checkedItems;
      writeStoredChecklist(checkedItems);
    }
  }, [checkedItems]);

  const isItemChecked = useCallback(
    (key: string): boolean => Boolean(checkedItems[key]),
    [checkedItems]
  );

  const toggleItem = useCallback((key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const resetSubVisaChecklist = useCallback(
    (countryId: string, tab: PathwayCategoryId, subVisaId: string) => {
      const prefix = `${countryId}:${tab}:${subVisaId}:`;
      setCheckedItems((prev) => {
        const hasTargetKeys = Object.keys(prev).some((key) => key.startsWith(prefix));
        if (!hasTargetKeys) {
          return prev;
        }
        const next: Record<string, boolean> = {};
        for (const [key, value] of Object.entries(prev)) {
          if (!key.startsWith(prefix)) {
            next[key] = value;
          }
        }
        return next;
      });
    },
    []
  );

  const getCheckedCount = useCallback(
    (countryId: string, tab: PathwayCategoryId, subVisaId: string, total: number): number => {
      const limit = Number.isFinite(total) && total > 0 ? Math.floor(total) : 0;
      let count = 0;
      for (let i = 0; i < limit; i += 1) {
        if (checkedItems[buildChecklistKey(countryId, tab, subVisaId, i)]) {
          count += 1;
        }
      }
      return count;
    },
    [checkedItems]
  );

  return {
    checkedItems,
    isItemChecked,
    toggleItem,
    resetSubVisaChecklist,
    getCheckedCount,
  };
}
