import { useCallback, useEffect, useRef, useState } from 'react';
import type { ThemeMode } from '../types/visa';

export const THEME_STORAGE_KEY = 'china_diy_visa_theme_v1';

function readStoredTheme(): ThemeMode {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
    }
  } catch {
    // Ignore storage read errors in restricted environments.
  }
  return 'light';
}

function writeStoredTheme(theme: ThemeMode): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  } catch {
    // Ignore storage write errors (e.g., quota exceeded or private mode).
  }
}

/**
 * Manages the active light/dark theme, syncing `<html data-theme>` and persisting changes.
 */
export function useTheme(): {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
} {
  const [theme, setThemeState] = useState<ThemeMode>(readStoredTheme);
  const lastSyncedThemeRef = useRef<ThemeMode>(theme);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
    if (lastSyncedThemeRef.current !== theme) {
      lastSyncedThemeRef.current = theme;
      writeStoredTheme(theme);
    }
  }, [theme]);

  const setTheme = useCallback((nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme, setTheme };
}
