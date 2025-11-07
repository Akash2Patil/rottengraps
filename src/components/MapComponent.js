'use client';
import { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import { Style, Fill, Stroke, Circle as CircleStyle } from 'ol/style';
import { Feature } from 'ol';
import { Polygon, Point } from 'ol/geom';
import { defaults as defaultControls } from 'ol/control';

export default function MapComponent() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const baseLayerRef = useRef(null);

  const [baseMap, setBaseMap] = useState('satellite');
  const [selectedCountry, setSelectedCountry] = useState('Kenya');

  // Country coordinates for centering map
  const countryCenters = {
    Kenya: [37.9062, 0.0236],
    India: [78.9629, 20.5937],
    Brazil: [-51.9253, -14.235],
    USA: [-95.7129, 37.0902],
    China: [104.1954, 35.8617],
    Australia: [133.7751, -25.2744],
  };

  useEffect(() => {
    if (!mapRef.current) return;

    // Kenya boundary for visual example
    const kenyaBoundary = [
      [33.9098, 4.6780], [34.0700, 3.0500], [34.4700, 1.8900],
      [34.9500, 0.0500], [35.8000, -0.5000], [36.9300, -1.3200],
      [37.7700, -3.0000], [37.9700, -3.4300], [39.2000, -4.6700],
      [40.9900, -3.9800], [41.8800, -1.5800], [41.5500, 0.0000],
      [41.9100, 2.9000], [41.2900, 3.9700], [40.9800, 4.2500],
      [40.0700, 4.1700], [39.8500, 3.8500], [39.5600, 3.4200],
      [38.8900, 3.5000], [38.1700, 3.6100], [36.8500, 4.4500],
      [35.9400, 4.6200], [35.2600, 5.4900], [34.9500, 5.4300],
      [34.0700, 4.2500], [33.9098, 4.6780]
    ];

    const boundaryFeature = new Feature({
      geometry: new Polygon([kenyaBoundary.map(coord => fromLonLat(coord))]),
    });

    boundaryFeature.setStyle(
      new Style({
        stroke: new Stroke({ color: '#3b82f6', width: 2 }),
        fill: new Fill({ color: 'rgba(59, 130, 246, 0.05)' }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({ features: [boundaryFeature] }),
    });

    // Base Layer
    baseLayerRef.current = new TileLayer({
      source: new XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attributions: '© Esri, Maxar, Earthstar Geographics',
      }),
    });

    // Map Initialization
    const map = new Map({
      target: mapRef.current,
      layers: [baseLayerRef.current, vectorLayer],
      view: new View({
        center: fromLonLat(countryCenters[selectedCountry]),
        zoom: 5,
      }),
      controls: defaultControls({ zoom: true, attribution: false }),
    });

    mapInstanceRef.current = map;

    return () => map.setTarget(null);
  }, []);

  // Animate when country changes
  useEffect(() => {
    if (mapInstanceRef.current) {
      const view = mapInstanceRef.current.getView();
      const coords = fromLonLat(countryCenters[selectedCountry]);
      view.animate({ center: coords, zoom: 5, duration: 1000 });
    }
  }, [selectedCountry]);

  // Change base map
  useEffect(() => {
    if (!baseLayerRef.current) return;
    let source;
    if (baseMap === 'osm') {
      source = new OSM();
    } else if (baseMap === 'terrain') {
      source = new XYZ({
        url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png',
        attributions: '© OpenTopoMap, SRTM',
      });
    } else {
      source = new XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attributions: '© Esri, Maxar, Earthstar Geographics',
      });
    }
    baseLayerRef.current.setSource(source);
  }, [baseMap]);

  return (
    <div className="w-full h-full relative">
      {/* Map */}
      <div
        ref={mapRef}
        className="w-full h-screen border border-gray-300 rounded-md"
      />

      {/* Controls */}
      <div className="absolute top-4 left-4 flex gap-3 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow">
        {/* Country Selector */}
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="p-2 text-sm rounded border border-gray-300 focus:outline-none bg-white"
        >
          {Object.keys(countryCenters).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        {/* Base Map Selector */}
        <select
          value={baseMap}
          onChange={(e) => setBaseMap(e.target.value)}
          className="p-2 text-sm rounded border border-gray-300 focus:outline-none bg-white"
        >
          <option value="satellite">Satellite</option>
          <option value="osm">OSM</option>
          <option value="terrain">Terrain</option>
        </select>
      </div>
    </div>
  );
}
