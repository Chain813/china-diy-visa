/** Normalizes Vite BASE_URL into a React Router basename (returns undefined for root '/'). */
export function resolveRouterBasename(baseUrl?: string): string | undefined {
  const trimmed = (baseUrl ?? '/').trim();
  if (!trimmed || trimmed === '/') {
    return undefined;
  }
  const withoutTrailing = trimmed.replace(/\/+$/, '');
  if (!withoutTrailing) {
    return undefined;
  }
  return withoutTrailing.startsWith('/') ? withoutTrailing : `/${withoutTrailing}`;
}

/** Resolves a public static asset path relative to Vite BASE_URL cleanly. */
export function resolvePublicAssetUrl(assetPath: string, baseUrl?: string): string {
  const cleanAsset = assetPath.replace(/^\/+/, '');
  const trimmedBase = (baseUrl ?? '/').trim() || '/';
  const withLeading = trimmedBase.startsWith('/') ? trimmedBase : `/${trimmedBase}`;
  const normalizedBase = withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
  return `${normalizedBase}${cleanAsset}`;
}
