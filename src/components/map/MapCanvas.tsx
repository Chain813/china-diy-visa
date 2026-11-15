import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import * as d3 from 'd3';
import { COUNTRY_DIRECTORY } from '../../data';
import type { CategoryId, CountrySummary, ThemeMode } from '../../types/visa';
import { loadWorldAtlas, type WorldAtlasData } from '../../utils/worldAtlas';
import { findCountryAtPointer, getPointerPosition } from './mapHitTest';
import {
  createMapProjection,
  MAP_REGIONS,
  renderFlatWorldMap,
  type MapRegionFocusId,
} from './mapRenderer';

export interface MapCanvasHandle {
  flyToCountry: (country: CountrySummary) => Promise<void>;
  zoomIn: () => void;
  zoomOut: () => void;
  resetView: () => void;
  focusRegion: (regionId: MapRegionFocusId) => void;
}

export interface MapCanvasProps {
  filteredCountries: readonly CountrySummary[];
  activeCategory: CategoryId;
  searchQuery?: string;
  theme?: ThemeMode;
  isDirectoryOpen?: boolean;
  onCountryClick: (country: CountrySummary) => void;
  onZoomChange: (zoomScale: number) => void;
  onOpenDirectory?: () => void;
}

type LoadStatus = 'loading' | 'ready' | 'error';

interface TooltipState {
  country: CountrySummary;
  isAdvisory: boolean;
  left: number;
  top: number;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 8;
const ZOOM_STEP = 1.35;
const FLY_DURATION_MS = 550;
const REGION_DURATION_MS = 480;
const RESET_DURATION_MS = 360;
const MOUSEMOVE_THROTTLE_MS = 45;
const DRAG_THRESHOLD_PX = 4;

function readDocumentTheme(): ThemeMode {
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  return 'light';
}

function extractEventPoint(source: unknown): { type?: string; x?: number; y?: number } {
  if (!source || typeof source !== 'object') return {};
  const ev = source as {
    type?: string;
    clientX?: number;
    clientY?: number;
    touches?: ArrayLike<{ clientX: number; clientY: number }>;
  };
  if (typeof ev.clientX === 'number' && typeof ev.clientY === 'number') {
    return { type: ev.type, x: ev.clientX, y: ev.clientY };
  }
  if (ev.touches && ev.touches.length > 0) {
    return { type: ev.type, x: ev.touches[0].clientX, y: ev.touches[0].clientY };
  }
  return { type: ev.type };
}

/** Compute a D3 ZoomTransform centered at projected `[px, py]` clamped within `[0..width, 0..height]`. */
export function computeClampedTransform(
  px: number,
  py: number,
  targetK: number,
  width: number,
  height: number
): d3.ZoomTransform {
  const k = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, targetK));
  const rawTx = width / 2 - k * px;
  const rawTy = height / 2 - k * py;
  const minTx = width * (1 - k);
  const minTy = height * (1 - k);
  const tx = Math.min(0, Math.max(minTx, rawTx));
  const ty = Math.min(0, Math.max(minTy, rawTy));
  return d3.zoomIdentity.translate(tx, ty).scale(k);
}

/** HiDPI Natural Earth flat world map Canvas with d3.zoom pan/pinch/wheel, transitions, and hit-testing. */
export const MapCanvas = forwardRef<MapCanvasHandle, MapCanvasProps>(function MapCanvas(
  {
    filteredCountries,
    activeCategory,
    searchQuery = '',
    theme,
    isDirectoryOpen = false,
    onCountryClick,
    onZoomChange,
    onOpenDirectory,
  },
  ref
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const projectionRef = useRef<d3.GeoProjection | null>(null);
  const pathRef = useRef<d3.GeoPath | null>(null);
  const atlasRef = useRef<WorldAtlasData | null>(null);
  const zoomBehaviorRef = useRef<d3.ZoomBehavior<HTMLCanvasElement, unknown> | null>(null);

  const sizeRef = useRef<{ width: number; height: number; dpr: number }>({
    width: 860,
    height: 560,
    dpr: 1,
  });
  const transformRef = useRef<d3.ZoomTransform>(d3.zoomIdentity);
  const hoveredCodeRef = useRef<string | null>(null);
  const lastReportedZoomRef = useRef<number>(1);
  const isUnmountedRef = useRef<boolean>(false);

  const [loadStatus, setLoadStatus] = useState<LoadStatus>('loading');
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [cursor, setCursor] = useState<'grab' | 'pointer'>('grab');
  const [domTheme, setDomTheme] = useState<ThemeMode>(readDocumentTheme);

  const resolvedTheme: ThemeMode = theme ?? domTheme;

  const latestPropsRef = useRef({
    filteredCountries,
    activeCategory,
    searchQuery,
    resolvedTheme,
    onCountryClick,
    onZoomChange,
  });

  useLayoutEffect(() => {
    latestPropsRef.current = {
      filteredCountries,
      activeCategory,
      searchQuery,
      resolvedTheme,
      onCountryClick,
      onZoomChange,
    };
  });

  const redrawMap = useCallback(() => {
    if (isUnmountedRef.current) return;
    const ctx = ctxRef.current;
    const projection = projectionRef.current;
    const atlas = atlasRef.current;
    if (!ctx || !projection || !atlas) return;

    const props = latestPropsRef.current;
    const { width, height, dpr } = sizeRef.current;
    renderFlatWorldMap({
      ctx,
      projection,
      path: pathRef.current ?? undefined,
      atlas,
      width,
      height,
      dpr,
      transform: transformRef.current,
      filteredCountries: props.filteredCountries,
      activeCategory: props.activeCategory,
      searchQuery: props.searchQuery,
      hoveredCode: hoveredCodeRef.current,
      theme: props.resolvedTheme,
    });
  }, []);

  const reportZoomScale = useCallback((nextScale: number, force = false) => {
    if (isUnmountedRef.current) return;
    if (
      force ||
      Math.abs(nextScale - lastReportedZoomRef.current) >= 0.02 ||
      nextScale === MIN_ZOOM ||
      nextScale === MAX_ZOOM
    ) {
      lastReportedZoomRef.current = nextScale;
      latestPropsRef.current.onZoomChange(nextScale);
    }
  }, []);

  const runZoomTransition = useCallback(
    (
      targetTransform: d3.ZoomTransform,
      durationMs: number,
      onSettled?: () => void
    ) => {
      const canvasNode = canvasRef.current;
      const zoomBehavior = zoomBehaviorRef.current;
      if (!canvasNode || !zoomBehavior) {
        onSettled?.();
        return;
      }

      let settled = false;
      let safetyTimer: number | null = null;
      const finish = () => {
        if (settled) return;
        settled = true;
        if (safetyTimer !== null) {
          window.clearTimeout(safetyTimer);
          safetyTimer = null;
        }
        if (!isUnmountedRef.current) {
          reportZoomScale(transformRef.current.k, true);
        }
        onSettled?.();
      };

      safetyTimer = window.setTimeout(finish, durationMs + 150);

      try {
        d3.select(canvasNode)
          .transition()
          .duration(durationMs)
          .ease(d3.easeCubicInOut)
          .call(zoomBehavior.transform, targetTransform)
          .on('end.fly', finish)
          .on('interrupt.fly', finish)
          .on('cancel.fly', finish);
      } catch {
        finish();
      }
    },
    [reportZoomScale]
  );

  const zoomByFactor = useCallback((factor: number) => {
    const canvasNode = canvasRef.current;
    const zoomBehavior = zoomBehaviorRef.current;
    if (!canvasNode || !zoomBehavior) return;
    const selection = d3.select(canvasNode);
    selection.interrupt();
    selection.call(zoomBehavior.scaleBy, factor);
  }, []);

  const resetView = useCallback(() => {
    setTooltip(null);
    const canvasNode = canvasRef.current;
    const zoomBehavior = zoomBehaviorRef.current;
    if (!canvasNode || !zoomBehavior) return;

    d3.select(canvasNode).interrupt();

    const current = transformRef.current;
    if (current.k === 1 && current.x === 0 && current.y === 0) {
      reportZoomScale(1, true);
      return;
    }

    runZoomTransition(d3.zoomIdentity, RESET_DURATION_MS);
  }, [reportZoomScale, runZoomTransition]);

  const focusRegion = useCallback(
    (regionId: MapRegionFocusId) => {
      setTooltip(null);
      if (regionId === 'all') {
        resetView();
        return;
      }

      const region = MAP_REGIONS.find((r) => r.id === regionId);
      const projection = projectionRef.current;
      if (!region || !projection) return;

      const projected = projection(region.center);
      if (!projected) return;

      const { width, height } = sizeRef.current;
      const target = computeClampedTransform(projected[0], projected[1], region.k, width, height);
      runZoomTransition(target, REGION_DURATION_MS);
    },
    [resetView, runZoomTransition]
  );

  const flyToCountry = useCallback(
    (country: CountrySummary): Promise<void> => {
      setTooltip(null);

      const atlas = atlasRef.current;
      const projection = projectionRef.current;
      const canvasNode = canvasRef.current;
      const zoomBehavior = zoomBehaviorRef.current;
      if (!atlas || !projection || !canvasNode || !zoomBehavior) {
        return Promise.resolve();
      }

      const projected = projection(country.coords);
      if (!projected) {
        return Promise.resolve();
      }

      const { width, height } = sizeRef.current;
      const targetK = Math.min(MAX_ZOOM, Math.max(3.2, transformRef.current.k));
      const target = computeClampedTransform(projected[0], projected[1], targetK, width, height);

      return new Promise<void>((resolve) => {
        runZoomTransition(target, FLY_DURATION_MS, resolve);
      });
    },
    [runZoomTransition]
  );

  useImperativeHandle(
    ref,
    () => ({
      flyToCountry,
      zoomIn: () => zoomByFactor(ZOOM_STEP),
      zoomOut: () => zoomByFactor(1 / ZOOM_STEP),
      resetView,
      focusRegion,
    }),
    [flyToCountry, focusRegion, resetView, zoomByFactor]
  );

  // Observe `<html data-theme>` when theme prop is omitted
  useEffect(() => {
    if (theme !== undefined || typeof MutationObserver === 'undefined') return;
    setDomTheme(readDocumentTheme());
    const observer = new MutationObserver(() => {
      setDomTheme(readDocumentTheme());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, [theme]);

  // Initialize projection, d3.zoom(), ResizeObserver, mouse hover/click handlers, and 50m atlas fetch
  useEffect(() => {
    isUnmountedRef.current = false;
    const container = containerRef.current;
    const canvasNode = canvasRef.current;
    if (!container || !canvasNode) return;

    const ctx = canvasNode.getContext('2d');
    ctxRef.current = ctx;

    const zoomBehavior = d3
      .zoom<HTMLCanvasElement, unknown>()
      .scaleExtent([MIN_ZOOM, MAX_ZOOM])
      .clickDistance(DRAG_THRESHOLD_PX);
    zoomBehaviorRef.current = zoomBehavior;

    const syncViewportMetrics = () => {
      const width = container.clientWidth || 860;
      const height = container.clientHeight || 560;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizeRef.current = { width, height, dpr };

      canvasNode.width = Math.round(width * dpr);
      canvasNode.height = Math.round(height * dpr);

      const nextProjection = createMapProjection(width, height);
      projectionRef.current = nextProjection;
      pathRef.current = ctx ? d3.geoPath(nextProjection, ctx) : null;

      zoomBehavior
        .extent([
          [0, 0],
          [width, height],
        ])
        .translateExtent([
          [0, 0],
          [width, height],
        ]);
    };

    syncViewportMetrics();

    let dragged = false;
    let pointerDownPos: { x: number; y: number } | null = null;
    let dragResetTimer: number | null = null;
    let lastMoveTs = -MOUSEMOVE_THROTTLE_MS;

    const clearDragResetTimer = () => {
      if (dragResetTimer !== null) {
        window.clearTimeout(dragResetTimer);
        dragResetTimer = null;
      }
    };

    const canvasSelection = d3.select(canvasNode);

    zoomBehavior
      .on('start', (event: d3.D3ZoomEvent<HTMLCanvasElement, unknown>) => {
        if (isUnmountedRef.current) return;
        clearDragResetTimer();
        const pt = extractEventPoint(event.sourceEvent);
        if (pt.type && pt.type !== 'wheel') {
          setTooltip(null);
          dragged = false;
          if (typeof pt.x === 'number' && typeof pt.y === 'number') {
            pointerDownPos = { x: pt.x, y: pt.y };
          }
        }
      })
      .on('zoom', (event: d3.D3ZoomEvent<HTMLCanvasElement, unknown>) => {
        if (isUnmountedRef.current) return;
        const pt = extractEventPoint(event.sourceEvent);
        if (
          pt.type &&
          pt.type !== 'wheel' &&
          pointerDownPos &&
          typeof pt.x === 'number' &&
          typeof pt.y === 'number'
        ) {
          if (
            Math.hypot(pt.x - pointerDownPos.x, pt.y - pointerDownPos.y) > DRAG_THRESHOLD_PX
          ) {
            dragged = true;
          }
        }
        transformRef.current = event.transform;
        redrawMap();
        reportZoomScale(event.transform.k);
      })
      .on('end', () => {
        if (isUnmountedRef.current) return;
        pointerDownPos = null;
        reportZoomScale(transformRef.current.k, true);
        if (dragged) {
          clearDragResetTimer();
          dragResetTimer = window.setTimeout(() => {
            dragResetTimer = null;
            dragged = false;
          }, 0);
        }
      });

    canvasSelection.call(zoomBehavior);

    const handleMouseMove = (e: MouseEvent) => {
      if (isUnmountedRef.current || pointerDownPos) return;
      const now = performance.now();
      const atlas = atlasRef.current;
      const projection = projectionRef.current;
      if (now - lastMoveTs < MOUSEMOVE_THROTTLE_MS || !atlas || !projection) return;
      lastMoveTs = now;

      const { width, height } = sizeRef.current;
      const { mx, my, rect } = getPointerPosition(canvasNode, e, width, height);
      const match = findCountryAtPointer(
        mx,
        my,
        projection,
        transformRef.current,
        atlas,
        latestPropsRef.current.filteredCountries
      );

      if (match) {
        setCursor('pointer');
        if (hoveredCodeRef.current !== match.code) {
          hoveredCodeRef.current = match.code;
          redrawMap();
        }
        const activeCat = latestPropsRef.current.activeCategory;
        const isAdvisory = activeCat !== 'all' && !match.diyCategories.includes(activeCat);
        const rectW = rect.width || width;
        const rectH = rect.height || height;
        const localX = rect.width > 0 ? e.clientX - rect.left : mx;
        const localY = rect.height > 0 ? e.clientY - rect.top : my;
        setTooltip({
          country: match,
          isAdvisory,
          left: Math.max(10, Math.min(localX + 14, Math.max(10, rectW - 220))),
          top: Math.max(10, Math.min(localY - 28, Math.max(10, rectH - 72))),
        });
      } else {
        setCursor('grab');
        if (hoveredCodeRef.current !== null) {
          hoveredCodeRef.current = null;
          redrawMap();
        }
        setTooltip(null);
      }
    };

    const handleMouseLeave = () => {
      if (isUnmountedRef.current) return;
      setCursor('grab');
      setTooltip(null);
      if (hoveredCodeRef.current !== null) {
        hoveredCodeRef.current = null;
        redrawMap();
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (isUnmountedRef.current) return;
      if (dragged) {
        dragged = false;
        return;
      }
      const atlas = atlasRef.current;
      const projection = projectionRef.current;
      if (!atlas || !projection) return;

      const { width, height } = sizeRef.current;
      const { mx, my } = getPointerPosition(canvasNode, e, width, height);
      const match = findCountryAtPointer(
        mx,
        my,
        projection,
        transformRef.current,
        atlas,
        latestPropsRef.current.filteredCountries
      );
      if (match) {
        setTooltip(null);
        latestPropsRef.current.onCountryClick(match);
      }
    };

    const handleResize = () => {
      if (isUnmountedRef.current) return;
      syncViewportMetrics();
      const { width, height } = sizeRef.current;
      const cur = transformRef.current;
      if (cur.k > 1) {
        const clampedTx = Math.min(0, Math.max(width * (1 - cur.k), cur.x));
        const clampedTy = Math.min(0, Math.max(height * (1 - cur.k), cur.y));
        if (clampedTx !== cur.x || clampedTy !== cur.y) {
          const next = d3.zoomIdentity.translate(clampedTx, clampedTy).scale(cur.k);
          transformRef.current = next;
          canvasSelection.call(zoomBehavior.transform, next);
          return;
        }
      }
      redrawMap();
    };

    canvasNode.addEventListener('mousemove', handleMouseMove);
    canvasNode.addEventListener('mouseleave', handleMouseLeave);
    canvasNode.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(container);
    }

    let cancelled = false;
    loadWorldAtlas()
      .then((atlas) => {
        if (cancelled) return;
        atlasRef.current = atlas;
        setLoadStatus('ready');
        redrawMap();
      })
      .catch(() => {
        if (cancelled) return;
        setLoadStatus('error');
      });

    return () => {
      cancelled = true;
      isUnmountedRef.current = true;
      clearDragResetTimer();
      zoomBehavior.on('start', null).on('zoom', null).on('end', null);
      canvasSelection.interrupt();
      canvasSelection.on('.zoom', null);

      resizeObserver?.disconnect();
      canvasNode.removeEventListener('mousemove', handleMouseMove);
      canvasNode.removeEventListener('mouseleave', handleMouseLeave);
      canvasNode.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [redrawMap, reportZoomScale]);

  // Redraw whenever filters, search, or theme changes
  useEffect(() => {
    redrawMap();
  }, [filteredCountries, activeCategory, searchQuery, resolvedTheme, redrawMap]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="block w-full h-full relative z-10"
        style={{ cursor, touchAction: 'none' }}
      />

      {loadStatus === 'loading' && (
        <div
          id="map-loading"
          role="status"
          className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 text-center z-20"
        >
          <span className="px-3.5 py-2 rounded-xl bg-[var(--bg-glass)] backdrop-blur-md border border-[var(--border)] text-xs text-[var(--text-sub)] shadow-sm">
            正在加载 50m 全球矢量地图数据...
          </span>
        </div>
      )}

      {loadStatus === 'error' && (
        <div
          id="map-error-fallback"
          role="status"
          className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 z-20"
        >
          <div className="pointer-events-auto max-w-md rounded-2xl bg-[var(--bg-glass)] backdrop-blur-md border border-[var(--border)] p-4 text-center shadow-md">
            <p className="text-xs font-semibold text-[var(--text-main)]">
              {`全球矢量底图加载受限，请使用右侧国家目录或上方搜索框检索全部 ${COUNTRY_DIRECTORY.length} 国 DIY 签证指南。`}
            </p>
            {!isDirectoryOpen && onOpenDirectory && (
              <button
                type="button"
                onClick={onOpenDirectory}
                className="mt-3 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--text-main)] text-[var(--bg-paper)] hover:opacity-90 transition-opacity"
              >
                展开国家目录（{COUNTRY_DIRECTORY.length} 国）
              </button>
            )}
          </div>
        </div>
      )}

      <div
        id="map-tooltip"
        className="absolute pointer-events-none rounded-lg bg-[var(--bg-tooltip)] border border-[var(--border)] border-l-[3px] border-l-[var(--accent-red)] text-[var(--text-main)] px-3 py-2 text-xs shadow-lg z-30 max-w-[240px] transition-opacity duration-150"
        style={
          tooltip
            ? { left: `${tooltip.left}px`, top: `${tooltip.top}px`, opacity: 1 }
            : { opacity: 0 }
        }
      >
        {tooltip && (
          <>
            <div className="font-bold text-[var(--text-main)]">
              {tooltip.country.nameZh}{' '}
              <span className="font-normal text-[var(--text-sub)]">{tooltip.country.nameEn}</span>
            </div>
            <div className="text-[11px] text-[var(--teal)] mt-0.5">{tooltip.country.badge}</div>
            <div className="text-[10px] text-[var(--accent-red)] mt-1 font-semibold">
              {tooltip.isAdvisory
                ? '非标准直申（需机构/雇主前置）· 点击查看说明 →'
                : '点击进入 DIY 全流程 →'}
            </div>
          </>
        )}
      </div>
    </div>
  );
});
