import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { CATEGORIES } from '../../data/categories';
import { COUNTRIES_DATA } from '../../data';
import type { CategoryId, CountryData, ThemeMode } from '../../types/visa';
import { GlobeCanvas, type GlobeCanvasHandle } from './GlobeCanvas';
import { GlobeOverlays } from './GlobeOverlays';

export interface GlobeViewHandle {
  flyToCountry: (country: CountryData) => Promise<void>;
}

export interface GlobeViewProps {
  activeCategory: CategoryId;
  searchQuery: string;
  filteredCountries: CountryData[];
  theme: ThemeMode;
  isSpinning: boolean;
  isTransitioning: boolean;
  onCountryClick: (country: CountryData) => void;
}

/** Build the status pill copy shown at the bottom-left of the globe stage. */
export function getGlobeStatusText(
  activeCategory: CategoryId,
  searchQuery: string,
  filteredCount: number,
  totalCount: number
): string {
  if (searchQuery.trim()) {
    return `匹配 ${filteredCount} 国 · 点击地球或下拉项进入`;
  }
  if (activeCategory !== 'all') {
    const catLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label ?? activeCategory;
    return `【${catLabel}】通道 · ${filteredCount} 国可DIY`;
  }
  return `${totalCount} 国已点亮 · 拖拽旋转 / 滚轮缩放 / 点击国家进入`;
}

/** Full-viewport 3D interactive globe home view with floating overlays and fly-to navigation. */
export const GlobeView = forwardRef<GlobeViewHandle, GlobeViewProps>(function GlobeView(
  {
    activeCategory,
    searchQuery,
    filteredCountries,
    theme,
    isSpinning,
    isTransitioning,
    onCountryClick,
  },
  ref
) {
  const canvasRef = useRef<GlobeCanvasHandle | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useImperativeHandle(
    ref,
    () => ({
      flyToCountry: (country: CountryData) =>
        canvasRef.current?.flyToCountry(country) ?? Promise.resolve(),
    }),
    []
  );

  const statusText = getGlobeStatusText(
    activeCategory,
    searchQuery,
    filteredCountries.length,
    COUNTRIES_DATA.length
  );

  return (
    <section id="home-view" className="animate-view-enter flex-1 flex flex-col justify-center">
      <div className="relative w-full">
        <div id="globe-stage" className="flex items-center justify-center relative">
          <GlobeCanvas
            ref={canvasRef}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            filteredCountries={filteredCountries}
            theme={theme}
            isSpinning={isSpinning}
            isTransitioning={isTransitioning}
            onCountryClick={onCountryClick}
            onZoomChange={setZoomLevel}
          />
          <GlobeOverlays
            zoomLevel={zoomLevel}
            statusText={statusText}
            onZoomIn={() => canvasRef.current?.zoomIn()}
            onZoomOut={() => canvasRef.current?.zoomOut()}
            onReset={() => canvasRef.current?.reset()}
            onFocusRegion={(lon, lat) => canvasRef.current?.focusRegion(lon, lat)}
          />
        </div>
      </div>
    </section>
  );
});
