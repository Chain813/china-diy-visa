import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { COUNTRY_DIRECTORY } from '../../data';
import type { CategoryId, CountrySummary, ThemeMode } from '../../types/visa';
import { CountryDirectory } from './CountryDirectory';
import { MapCanvas, type MapCanvasHandle } from './MapCanvas';
import { MapOverlays } from './MapOverlays';
import type { MapRegionFocusId } from './mapRenderer';

export interface WorldMapViewHandle {
  flyToCountry: (country: CountrySummary) => Promise<void>;
  resetView: () => void;
}

export interface WorldMapViewProps {
  filteredCountries: CountrySummary[];
  activeCategory: CategoryId;
  onSelectCountry: (summary: CountrySummary) => void;
  isDirectoryOpen: boolean;
  onToggleDirectory: () => void;
  searchQuery?: string;
  theme?: ThemeMode;
}

/** Interactive Natural Earth flat world map workbench with floating overlays and collapsible directory. */
export const WorldMapView = forwardRef<WorldMapViewHandle, WorldMapViewProps>(
  function WorldMapView(
    {
      filteredCountries,
      activeCategory,
      onSelectCountry,
      isDirectoryOpen,
      onToggleDirectory,
      searchQuery = '',
      theme,
    },
    ref
  ) {
    const canvasRef = useRef<MapCanvasHandle | null>(null);
    const [zoomScale, setZoomScale] = useState(1);
    const [activeRegionId, setActiveRegionId] = useState<MapRegionFocusId>('all');

    const handleResetView = useCallback(() => {
      setActiveRegionId('all');
      canvasRef.current?.resetView();
    }, []);

    const handleFocusRegion = useCallback((regionId: MapRegionFocusId) => {
      setActiveRegionId(regionId);
      canvasRef.current?.focusRegion(regionId);
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        flyToCountry: (country: CountrySummary) =>
          canvasRef.current?.flyToCountry(country) ?? Promise.resolve(),
        resetView: handleResetView,
      }),
      [handleResetView]
    );

    return (
      <section
        id="map-stage"
        aria-label="世界签证交互地图"
        className="animate-view-enter relative flex-1 flex w-full overflow-hidden"
      >
        {/* Main Interactive Map Pane */}
        <div className="atlas-dot-grid relative flex-1 min-w-0 h-full overflow-hidden">
          <MapCanvas
            ref={canvasRef}
            filteredCountries={filteredCountries}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            theme={theme}
            isDirectoryOpen={isDirectoryOpen}
            onCountryClick={onSelectCountry}
            onZoomChange={setZoomScale}
            onOpenDirectory={!isDirectoryOpen ? onToggleDirectory : undefined}
          />
          <MapOverlays
            filteredCount={filteredCountries.length}
            totalCount={COUNTRY_DIRECTORY.length}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            zoomScale={zoomScale}
            activeRegionId={activeRegionId}
            onZoomIn={() => canvasRef.current?.zoomIn()}
            onZoomOut={() => canvasRef.current?.zoomOut()}
            onResetView={handleResetView}
            onFocusRegion={handleFocusRegion}
          />
        </div>

        {/* Collapsible Bento Country Directory */}
        <CountryDirectory
          countries={filteredCountries}
          activeCategory={activeCategory}
          isOpen={isDirectoryOpen}
          onClose={onToggleDirectory}
          onSelectCountry={onSelectCountry}
        />
      </section>
    );
  }
);
