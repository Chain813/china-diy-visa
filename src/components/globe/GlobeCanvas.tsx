import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as d3 from 'd3';
import { COUNTRIES_DATA } from '../../data';
import type { CategoryId, CountryData, ThemeMode } from '../../types/visa';
import { loadWorldAtlas, type WorldAtlasData } from '../../utils/worldAtlas';
import { findCountryAtPointer, getPointerPosition } from './globeHitTest';
import {
  createShortestRotationInterpolator,
  drawGlobeScene,
  INITIAL_ROTATION,
  normalizeLongitude,
  type CanvasMetrics,
  type RotationTuple,
} from './globeRenderer';

export interface GlobeCanvasHandle {
  flyToCountry: (country: CountryData) => Promise<void>;
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
  focusRegion: (lon: number, lat: number) => void;
}

export interface GlobeCanvasProps {
  activeCategory: CategoryId;
  searchQuery: string;
  filteredCountries: CountryData[];
  theme: ThemeMode;
  isSpinning: boolean;
  isTransitioning: boolean;
  onCountryClick: (country: CountryData) => void;
  onZoomChange: (zoomLevel: number) => void;
}

type LoadStatus = 'loading' | 'ready' | 'error';

interface TooltipState {
  country: CountryData;
  left: number;
  top: number;
}

const MIN_ZOOM = 0.75;
const MAX_ZOOM = 6.0;
const MOUSEMOVE_THROTTLE_MS = 45;
const AUTO_SPIN_DEG_PER_TICK = 0.14;

function clampZoom(targetZoom: number): number {
  return Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, targetZoom));
}

function getTouchDistance(touches: TouchList): number {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy) || 1;
}

/** D3 orthographic HiDPI canvas orchestrating projection, gestures, hit-testing, and transitions. */
export const GlobeCanvas = forwardRef<GlobeCanvasHandle, GlobeCanvasProps>(function GlobeCanvas(
  {
    activeCategory,
    searchQuery,
    filteredCountries,
    theme,
    isSpinning,
    isTransitioning,
    onCountryClick,
    onZoomChange,
  },
  ref
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const projectionRef = useRef<d3.GeoProjection | null>(null);
  const pathRef = useRef<d3.GeoPath | null>(null);
  const atlasRef = useRef<WorldAtlasData | null>(null);

  const metricsRef = useRef<CanvasMetrics>({
    width: 860,
    height: 560,
    dpr: 1,
    baseScale: 240,
  });
  const rotationRef = useRef<RotationTuple>([...INITIAL_ROTATION]);
  const zoomRef = useRef<number>(1);
  const hoveredIdRef = useRef<string | null>(null);
  const rotationTimerRef = useRef<d3.Timer | null>(null);
  const isInteractingRef = useRef<boolean>(false);
  const isUnmountedRef = useRef<boolean>(false);

  const [loadStatus, setLoadStatus] = useState<LoadStatus>('loading');
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [cursor, setCursor] = useState<'grab' | 'pointer'>('grab');

  const filteredIds = useMemo(
    () => new Set(filteredCountries.map((c) => c.id)),
    [filteredCountries]
  );

  const latestPropsRef = useRef({
    activeCategory,
    searchQuery,
    filteredIds,
    theme,
    isSpinning,
    isTransitioning,
    onCountryClick,
    onZoomChange,
  });

  useLayoutEffect(() => {
    latestPropsRef.current = {
      activeCategory,
      searchQuery,
      filteredIds,
      theme,
      isSpinning,
      isTransitioning,
      onCountryClick,
      onZoomChange,
    };
  });

  const redrawGlobe = useCallback(() => {
    const ctx = ctxRef.current;
    const projection = projectionRef.current;
    const path = pathRef.current;
    const atlas = atlasRef.current;
    if (!ctx || !projection || !path || !atlas) return;

    const props = latestPropsRef.current;
    drawGlobeScene({
      ctx,
      projection,
      path,
      atlas,
      metrics: metricsRef.current,
      rotation: rotationRef.current,
      zoomLevel: zoomRef.current,
      hoveredId: hoveredIdRef.current,
      activeCategory: props.activeCategory,
      searchQuery: props.searchQuery,
      filteredIds: props.filteredIds,
      theme: props.theme,
    });
  }, []);

  const stopAutoSpin = useCallback(() => {
    if (rotationTimerRef.current) {
      rotationTimerRef.current.stop();
      rotationTimerRef.current = null;
    }
  }, []);

  const syncAutoSpin = useCallback(() => {
    const { isSpinning: spinning, isTransitioning: transitioning } = latestPropsRef.current;
    if (
      isUnmountedRef.current ||
      !spinning ||
      transitioning ||
      !atlasRef.current ||
      isInteractingRef.current
    ) {
      stopAutoSpin();
      return;
    }
    if (rotationTimerRef.current) return;

    rotationTimerRef.current = d3.timer(() => {
      const current = latestPropsRef.current;
      const projection = projectionRef.current;
      if (
        isUnmountedRef.current ||
        !current.isSpinning ||
        current.isTransitioning ||
        !projection ||
        isInteractingRef.current
      ) {
        return;
      }
      rotationRef.current = [
        normalizeLongitude(rotationRef.current[0] + AUTO_SPIN_DEG_PER_TICK),
        rotationRef.current[1],
        rotationRef.current[2],
      ];
      projection.rotate(rotationRef.current);
      redrawGlobe();
    });
  }, [redrawGlobe, stopAutoSpin]);

  const applyZoom = useCallback(
    (targetZoom: number) => {
      const nextZoom = clampZoom(targetZoom);
      zoomRef.current = nextZoom;
      latestPropsRef.current.onZoomChange(nextZoom);

      const projection = projectionRef.current;
      if (projection) {
        projection.scale(metricsRef.current.baseScale * nextZoom);
        redrawGlobe();
      }
    },
    [redrawGlobe]
  );

  const resetView = useCallback(() => {
    const canvasNode = canvasRef.current;
    if (canvasNode && !latestPropsRef.current.isTransitioning) {
      d3.select(canvasNode).interrupt('globe-motion');
    }
    zoomRef.current = 1;
    rotationRef.current = [...INITIAL_ROTATION];
    latestPropsRef.current.onZoomChange(1);

    const projection = projectionRef.current;
    if (projection) {
      projection.scale(metricsRef.current.baseScale).rotate(rotationRef.current);
      redrawGlobe();
    }
    syncAutoSpin();
  }, [redrawGlobe, syncAutoSpin]);

  const focusRegion = useCallback(
    (lon: number, lat: number) => {
      const projection = projectionRef.current;
      const canvasNode = canvasRef.current;
      if (
        !projection ||
        !canvasNode ||
        !atlasRef.current ||
        latestPropsRef.current.isTransitioning
      ) {
        return;
      }

      stopAutoSpin();
      const interpRotation = createShortestRotationInterpolator(rotationRef.current, [lon, lat, 0]);

      const handleComplete = () => {
        if (!isUnmountedRef.current && !latestPropsRef.current.isTransitioning) {
          syncAutoSpin();
        }
      };

      d3.select(canvasNode)
        .transition('globe-motion')
        .duration(520)
        .ease(d3.easeCubicInOut)
        .tween('focusRegion', () => (t) => {
          rotationRef.current = interpRotation(t);
          projection.rotate(rotationRef.current);
          redrawGlobe();
        })
        .on('end', handleComplete)
        .on('interrupt', handleComplete)
        .on('cancel', handleComplete);
    },
    [redrawGlobe, stopAutoSpin, syncAutoSpin]
  );

  const flyToCountry = useCallback(
    (country: CountryData): Promise<void> => {
      stopAutoSpin();
      setTooltip(null);

      const atlas = atlasRef.current;
      const projection = projectionRef.current;
      const canvasNode = canvasRef.current;
      if (!atlas || !projection || !canvasNode) {
        return Promise.resolve();
      }

      const startZoom = zoomRef.current;
      const targetZoom = Math.max(1.35, startZoom);
      const interpRotation = createShortestRotationInterpolator(rotationRef.current, [
        -country.coords[0],
        -country.coords[1],
        0,
      ]);
      const sInterp = d3.interpolateNumber(startZoom, targetZoom);
      let lastReportedTenth = Number(startZoom.toFixed(1));

      return new Promise<void>((resolve) => {
        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          if (!isUnmountedRef.current) {
            latestPropsRef.current.onZoomChange(zoomRef.current);
          }
          resolve();
        };

        d3.select(canvasNode)
          .transition('globe-motion')
          .duration(460)
          .ease(d3.easeCubicInOut)
          .tween('flyToCountry', () => (t) => {
            const nextZoom = sInterp(t);
            rotationRef.current = interpRotation(t);
            zoomRef.current = nextZoom;

            projection
              .rotate(rotationRef.current)
              .scale(metricsRef.current.baseScale * nextZoom);
            redrawGlobe();

            const roundedTenth = Number(nextZoom.toFixed(1));
            if (roundedTenth !== lastReportedTenth) {
              lastReportedTenth = roundedTenth;
              latestPropsRef.current.onZoomChange(nextZoom);
            }
          })
          .on('end', finish)
          .on('interrupt', finish)
          .on('cancel', finish);
      });
    },
    [redrawGlobe, stopAutoSpin]
  );

  useImperativeHandle(
    ref,
    () => ({
      flyToCountry,
      zoomIn: () => applyZoom(zoomRef.current * 1.25),
      zoomOut: () => applyZoom(zoomRef.current / 1.25),
      reset: resetView,
      focusRegion,
    }),
    [applyZoom, flyToCountry, focusRegion, resetView]
  );

  // Initialize D3 projection, canvas interactions, resize observation, and load local world atlas
  useEffect(() => {
    isUnmountedRef.current = false;
    const container = containerRef.current;
    const canvasNode = canvasRef.current;
    if (!container || !canvasNode) return;

    const updateCanvasMetrics = () => {
      const width = container.clientWidth || 860;
      const height = container.clientHeight || 560;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const baseScale = Math.min(width, height) * 0.44;
      metricsRef.current = { width, height, dpr, baseScale };

      canvasNode.width = width * dpr;
      canvasNode.height = height * dpr;

      if (projectionRef.current) {
        projectionRef.current
          .translate([width / 2, height / 2])
          .scale(baseScale * zoomRef.current);
      }
    };

    updateCanvasMetrics();

    const ctx = canvasNode.getContext('2d');
    ctxRef.current = ctx;

    const projection = d3
      .geoOrthographic()
      .scale(metricsRef.current.baseScale * zoomRef.current)
      .translate([metricsRef.current.width / 2, metricsRef.current.height / 2])
      .rotate(rotationRef.current)
      .clipAngle(90);
    projectionRef.current = projection;
    pathRef.current = ctx ? d3.geoPath(projection, ctx) : null;

    let dragged = false;
    let isPinching = false;
    let pinchStartDist = 0;
    let pinchStartZoom = 1;
    let lastMoveTs = -MOUSEMOVE_THROTTLE_MS;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        isPinching = true;
        isInteractingRef.current = true;
        dragged = true;
        setTooltip(null);
        if (!latestPropsRef.current.isTransitioning) {
          d3.select(canvasNode).interrupt('globe-motion');
        }
        stopAutoSpin();
        pinchStartDist = getTouchDistance(e.touches);
        pinchStartZoom = zoomRef.current;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && isPinching) {
        e.preventDefault();
        const currDist = getTouchDistance(e.touches);
        applyZoom(pinchStartZoom * (currDist / pinchStartDist));
      }
    };

    const handleTouchFinish = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        isPinching = false;
      }
      if (e.touches.length === 0) {
        isInteractingRef.current = false;
        syncAutoSpin();
      } else {
        isInteractingRef.current = true;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.12 : 0.89;
      applyZoom(zoomRef.current * factor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isInteractingRef.current) return;
      const now = performance.now();
      const atlas = atlasRef.current;
      if (now - lastMoveTs < MOUSEMOVE_THROTTLE_MS || !atlas) return;
      lastMoveTs = now;

      const { mx, my, rect } = getPointerPosition(
        canvasNode,
        e,
        metricsRef.current.width,
        metricsRef.current.height
      );
      const match = findCountryAtPointer(mx, my, projection, atlas, rotationRef.current);

      if (match) {
        setCursor('pointer');
        if (hoveredIdRef.current !== match.id) {
          hoveredIdRef.current = match.id;
          redrawGlobe();
        }
        setTooltip({
          country: match,
          left: Math.max(10, Math.min(e.clientX - rect.left + 14, rect.width - 210)),
          top: Math.max(e.clientY - rect.top - 14, 10),
        });
      } else {
        setCursor('grab');
        if (hoveredIdRef.current !== null) {
          hoveredIdRef.current = null;
          redrawGlobe();
        }
        setTooltip(null);
      }
    };

    const handleMouseLeave = () => {
      setCursor('grab');
      setTooltip(null);
      if (hoveredIdRef.current !== null) {
        hoveredIdRef.current = null;
        redrawGlobe();
      }
    };

    const handleClick = (e: MouseEvent) => {
      const atlas = atlasRef.current;
      if (dragged || !atlas) return;

      const { mx, my } = getPointerPosition(
        canvasNode,
        e,
        metricsRef.current.width,
        metricsRef.current.height
      );
      const match = findCountryAtPointer(mx, my, projection, atlas, rotationRef.current);
      if (match) {
        setTooltip(null);
        latestPropsRef.current.onCountryClick(match);
      }
    };

    const handleResize = () => {
      updateCanvasMetrics();
      redrawGlobe();
    };

    const dragBehavior = d3
      .drag<HTMLCanvasElement, unknown>()
      .filter((event: { touches?: TouchList }) => !event.touches || event.touches.length < 2)
      .on('start', () => {
        if (isPinching) return;
        dragged = false;
        isInteractingRef.current = true;
        setTooltip(null);
        if (!latestPropsRef.current.isTransitioning) {
          d3.select(canvasNode).interrupt('globe-motion');
        }
        stopAutoSpin();
      })
      .on('drag', (event: d3.D3DragEvent<HTMLCanvasElement, unknown, unknown>) => {
        if (isPinching) return;
        if (Math.abs(event.dx) > 0.5 || Math.abs(event.dy) > 0.5) {
          dragged = true;
        }
        const sens = 0.25 / zoomRef.current;
        const [lon, lat, roll] = rotationRef.current;
        rotationRef.current = [
          normalizeLongitude(lon + event.dx * sens),
          Math.max(-75, Math.min(75, lat - event.dy * sens)),
          roll,
        ];
        projection.rotate(rotationRef.current);
        redrawGlobe();
      })
      .on('end', (event: d3.D3DragEvent<HTMLCanvasElement, unknown, unknown>) => {
        const sourceTouches = (event.sourceEvent as { touches?: TouchList } | undefined)?.touches;
        if (!isPinching && (!sourceTouches || sourceTouches.length === 0)) {
          isInteractingRef.current = false;
          syncAutoSpin();
        }
      });

    const canvasSelection = d3.select(canvasNode);
    canvasSelection.call(dragBehavior);

    canvasNode.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvasNode.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvasNode.addEventListener('touchend', handleTouchFinish);
    canvasNode.addEventListener('touchcancel', handleTouchFinish);
    canvasNode.addEventListener('wheel', handleWheel, { passive: false });
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
        redrawGlobe();
        syncAutoSpin();
      })
      .catch(() => {
        if (cancelled) return;
        setLoadStatus('error');
      });

    return () => {
      cancelled = true;
      isUnmountedRef.current = true;
      stopAutoSpin();
      canvasSelection.interrupt('globe-motion');
      canvasSelection.on('.drag', null);

      resizeObserver?.disconnect();
      canvasNode.removeEventListener('touchstart', handleTouchStart);
      canvasNode.removeEventListener('touchmove', handleTouchMove);
      canvasNode.removeEventListener('touchend', handleTouchFinish);
      canvasNode.removeEventListener('touchcancel', handleTouchFinish);
      canvasNode.removeEventListener('wheel', handleWheel);
      canvasNode.removeEventListener('mousemove', handleMouseMove);
      canvasNode.removeEventListener('mouseleave', handleMouseLeave);
      canvasNode.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [applyZoom, redrawGlobe, stopAutoSpin, syncAutoSpin]);

  // Redraw whenever visual filter/theme props change
  useEffect(() => {
    redrawGlobe();
  }, [activeCategory, searchQuery, filteredIds, theme, redrawGlobe]);

  // Start/stop auto-spin when spinning or transitioning props change
  useEffect(() => {
    syncAutoSpin();
  }, [isSpinning, isTransitioning, loadStatus, syncAutoSpin]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="block w-full h-full relative z-10"
        style={{ cursor }}
      />

      {loadStatus === 'loading' && (
        <div
          id="globe-loading"
          role="status"
          className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 text-center z-20 text-xs text-[var(--text-sub)]"
        >
          正在加载全球矢量地图数据...
        </div>
      )}

      {loadStatus === 'error' && (
        <div
          id="globe-loading"
          role="status"
          className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 text-center z-20 text-xs text-[var(--text-sub)]"
        >
          {`全球矢量底图加载受限，请使用上方搜索框检索全部 ${COUNTRIES_DATA.length} 国DIY签证指南。`}
        </div>
      )}

      <div
        id="globe-tooltip"
        className="globe-tooltip rounded"
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
              点击进入DIY全流程 →
            </div>
          </>
        )}
      </div>
    </div>
  );
});
