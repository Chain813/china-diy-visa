import type { FC } from 'react';

export interface GlobeOverlaysProps {
  zoomLevel: number;
  statusText: string;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onFocusRegion: (lon: number, lat: number) => void;
}

const LEGEND_ITEMS: Array<{ label: string; dotClass: string }> = [
  { label: '网申/中心', dotClass: 'bg-[var(--teal)]' },
  { label: '互免/电子签', dotClass: 'bg-[var(--sage)]' },
  { label: '悬停/匹配', dotClass: 'bg-[var(--accent-red)]' },
];

const REGION_FOCUS_PRESETS: Array<{ label: string; lon: number; lat: number }> = [
  { label: '亚太', lon: -105, lat: -30 },
  { label: '欧洲', lon: -12, lat: -48 },
  { label: '北美', lon: 98, lat: -38 },
  { label: '拉美', lon: 62, lat: 15 },
  { label: '中东/非', lon: -25, lat: -5 },
  { label: '澳新', lon: -145, lat: 25 },
];

/** Floating zoom controls, status legend, and region quick-focus pills over the 3D globe. */
export const GlobeOverlays: FC<GlobeOverlaysProps> = ({
  zoomLevel,
  statusText,
  onZoomIn,
  onZoomOut,
  onReset,
  onFocusRegion,
}) => {
  return (
    <>
      {/* Vertical Stacked Zoom Controls (top-right of globe) */}
      <div className="absolute top-4 right-4 sm:right-10 flex flex-col items-center gap-1.5 z-20">
        <button
          id="zoom-in-btn"
          type="button"
          onClick={onZoomIn}
          className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-glass)] hover:bg-[var(--bg-muted)] text-[var(--text-main)] font-mono-num text-sm font-bold shadow-sm flex items-center justify-center transition-colors"
          title="放大"
          aria-label="放大"
        >
          +
        </button>
        <button
          id="zoom-out-btn"
          type="button"
          onClick={onZoomOut}
          className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-glass)] hover:bg-[var(--bg-muted)] text-[var(--text-main)] font-mono-num text-sm font-bold shadow-sm flex items-center justify-center transition-colors"
          title="缩小"
          aria-label="缩小"
        >
          −
        </button>
        <button
          id="reset-globe-btn"
          type="button"
          onClick={onReset}
          className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-glass)] hover:bg-[var(--bg-muted)] text-[var(--text-sub)] text-xs font-bold shadow-sm flex items-center justify-center transition-colors"
          title="重置视角"
          aria-label="重置视角"
        >
          ↻
        </button>
        <span
          id="zoom-level-badge"
          className="mt-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono-num text-[var(--text-sub)] bg-[var(--bg-glass)] border border-[var(--border)]"
        >
          {zoomLevel.toFixed(1)}x
        </span>
      </div>

      {/* Floating Status & Legend Bottom-Left */}
      <div className="pointer-events-none absolute bottom-2 left-2 hidden md:flex flex-col gap-1.5 z-20">
        <span
          id="globe-filter-status"
          className="self-start font-mono-num text-[11px] px-2.5 py-1 rounded-full bg-[var(--bg-glass)] border border-[var(--border)] text-[var(--teal)] font-semibold"
        >
          {statusText}
        </span>
        <div className="bg-[var(--bg-glass)] backdrop-blur-sm border border-[var(--border)] rounded-full px-3 py-1.5 flex items-center gap-3 text-[11px]">
          {LEGEND_ITEMS.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${item.dotClass}`} />
              <span className="text-[var(--text-main)]">{item.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Floating Continent Quick-Focus Bottom-Right */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-2 flex items-center gap-0.5 sm:gap-1 bg-[var(--bg-glass)] backdrop-blur-sm border border-[var(--border)] rounded-full p-1 z-20 max-w-[96vw] overflow-x-auto">
        {REGION_FOCUS_PRESETS.map((region) => (
          <button
            key={region.label}
            type="button"
            data-focus={`${region.lon},${region.lat}`}
            onClick={() => onFocusRegion(region.lon, region.lat)}
            className="focus-btn whitespace-nowrap shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium text-[var(--text-main)] hover:bg-[var(--bg-muted)] transition-colors"
          >
            {region.label}
          </button>
        ))}
      </div>
    </>
  );
};
