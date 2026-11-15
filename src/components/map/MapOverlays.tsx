import type { FC } from 'react';
import { CATEGORIES } from '../../data/categories';
import type { CategoryId } from '../../types/visa';
import { MAP_REGIONS, type MapRegionFocusId } from './mapRenderer';

export interface MapOverlaysProps {
  filteredCount: number;
  totalCount: number;
  activeCategory: CategoryId;
  searchQuery?: string;
  zoomScale: number;
  activeRegionId: MapRegionFocusId;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
  onFocusRegion: (regionId: MapRegionFocusId) => void;
}

/** Build the compact telemetry string shown in the top-left glass status pill. */
export function getMapStatusText(
  activeCategory: CategoryId,
  searchQuery: string,
  filteredCount: number,
  totalCount: number
): string {
  if (searchQuery.trim()) {
    return `匹配 ${filteredCount} / ${totalCount} 国 · 点击地图或目录进入`;
  }
  if (activeCategory !== 'all') {
    const catLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label ?? activeCategory;
    return `【${catLabel}】直申通道 · ${filteredCount} / ${totalCount} 国`;
  }
  return `全球直申地图 · ${filteredCount} / ${totalCount} 国`;
}

/** Floating Atlas Bento telemetry legend, zoom bar, and 6-region quick-focus pills. */
export const MapOverlays: FC<MapOverlaysProps> = ({
  filteredCount,
  totalCount,
  activeCategory,
  searchQuery = '',
  zoomScale,
  activeRegionId,
  onZoomIn,
  onZoomOut,
  onResetView,
  onFocusRegion,
}) => {
  const activeMeta = CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];
  const statusText = getMapStatusText(activeCategory, searchQuery, filteredCount, totalCount);
  const showAdvisorySwatch = activeCategory !== 'all';

  return (
    <>
      {/* Top-Left Compact Glass Telemetry & Legend */}
      <div className="pointer-events-none absolute top-3 left-3 z-20 flex flex-col items-start gap-1.5 max-w-[calc(100%-4.5rem)]">
        <div
          id="map-filter-status"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-glass)] backdrop-blur-md border border-[var(--border)] shadow-sm text-[11px] font-mono-num font-semibold text-[var(--text-main)]"
        >
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: activeMeta.color }}
            aria-hidden="true"
          />
          <span className="truncate">{statusText}</span>
        </div>

        <div
          aria-label="地图图例"
          className="hidden sm:flex flex-wrap items-center gap-x-3 gap-y-1 px-3 py-1.5 rounded-xl bg-[var(--bg-glass)] backdrop-blur-md border border-[var(--border)] shadow-sm text-[11px] text-[var(--text-main)]"
        >
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: 'var(--teal)' }}
              aria-hidden="true"
            />
            <span>网申 / 签证中心</span>
          </span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: 'var(--sage)' }}
              aria-hidden="true"
            />
            <span>免签 / 电子签</span>
          </span>
          {showAdvisorySwatch && (
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[var(--text-sub)]">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 border border-[var(--border)]"
                style={{ backgroundColor: 'var(--slate)', opacity: 0.55 }}
                aria-hidden="true"
              />
              <span>非标准 DIY（不匹配当前直申筛选）</span>
            </span>
          )}
        </div>
      </div>

      {/* Top-Right Bento Zoom Bar */}
      <div className="absolute top-3 right-3 z-20 flex flex-col items-center gap-1 p-1 rounded-xl border border-[var(--border)] bg-[var(--bg-glass)] backdrop-blur-md shadow-sm">
        <button
          id="zoom-in-btn"
          type="button"
          onClick={onZoomIn}
          className="w-7 h-7 rounded-lg hover:bg-[var(--bg-muted)] text-[var(--text-main)] font-mono-num text-sm font-bold flex items-center justify-center transition-colors"
          title="放大"
          aria-label="放大"
        >
          +
        </button>
        <button
          id="zoom-out-btn"
          type="button"
          onClick={onZoomOut}
          className="w-7 h-7 rounded-lg hover:bg-[var(--bg-muted)] text-[var(--text-main)] font-mono-num text-sm font-bold flex items-center justify-center transition-colors"
          title="缩小"
          aria-label="缩小"
        >
          −
        </button>
        <button
          id="reset-map-btn"
          type="button"
          onClick={onResetView}
          className="w-7 h-7 rounded-lg hover:bg-[var(--bg-muted)] text-[var(--text-sub)] text-xs font-bold flex items-center justify-center transition-colors"
          title="重置视角"
          aria-label="重置视角"
        >
          ↻
        </button>
        <div className="w-full h-px bg-[var(--border-soft)] my-0.5" aria-hidden="true" />
        <span
          id="zoom-level-badge"
          className="px-1 py-0.5 text-[10px] font-mono-num font-semibold text-[var(--text-sub)]"
        >
          {zoomScale.toFixed(1)}x
        </span>
      </div>

      {/* Bottom 6-Region Focus Bar */}
      <div
        role="group"
        aria-label="大洲快捷定位"
        style={{ touchAction: 'pan-x' }}
        className="no-scrollbar absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 p-1 rounded-full border border-[var(--border)] bg-[var(--bg-glass)] backdrop-blur-md shadow-sm max-w-[calc(100%-1.5rem)] overflow-x-auto"
      >
        {MAP_REGIONS.map((region) => {
          const isActive = activeRegionId === region.id;
          return (
            <button
              key={region.id}
              type="button"
              data-region={region.id}
              aria-pressed={isActive}
              onClick={() => onFocusRegion(region.id)}
              className={`focus-btn whitespace-nowrap shrink-0 px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
                isActive
                  ? 'bg-[var(--text-main)] text-[var(--bg-paper)] shadow-sm'
                  : 'text-[var(--text-main)] hover:bg-[var(--bg-muted)]'
              }`}
            >
              {region.label}
            </button>
          );
        })}
      </div>
    </>
  );
};
