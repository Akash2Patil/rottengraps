"use client";
import { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import { Style, Fill, Stroke, Circle as CircleStyle } from "ol/style";
import { Feature } from "ol";
import { Polygon, Point } from "ol/geom";
import { defaults as defaultControls } from "ol/control";

export default function MapComponent() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const baseLayerRef = useRef(null);

  const [baseMap, setBaseMap] = useState("satellite");
  const [selectedCountry, setSelectedCountry] = useState("Kenya");

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
      [33.9098, 4.678],
      [34.07, 3.05],
      [34.47, 1.89],
      [34.95, 0.05],
      [35.8, -0.5],
      [36.93, -1.32],
      [37.77, -3.0],
      [37.97, -3.43],
      [39.2, -4.67],
      [40.99, -3.98],
      [41.88, -1.58],
      [41.55, 0.0],
      [41.91, 2.9],
      [41.29, 3.97],
      [40.98, 4.25],
      [40.07, 4.17],
      [39.85, 3.85],
      [39.56, 3.42],
      [38.89, 3.5],
      [38.17, 3.61],
      [36.85, 4.45],
      [35.94, 4.62],
      [35.26, 5.49],
      [34.95, 5.43],
      [34.07, 4.25],
      [33.9098, 4.678],
    ];

    const boundaryFeature = new Feature({
      geometry: new Polygon([kenyaBoundary.map((coord) => fromLonLat(coord))]),
    });

    boundaryFeature.setStyle(
      new Style({
        stroke: new Stroke({ color: "#3b82f6", width: 2 }),
        fill: new Fill({ color: "rgba(59, 130, 246, 0.05)" }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({ features: [boundaryFeature] }),
    });

    // Base Layer
    baseLayerRef.current = new TileLayer({
      source: new XYZ({
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attributions: "© Esri, Maxar, Earthstar Geographics",
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
    if (baseMap === "osm") {
      source = new OSM();
    } else if (baseMap === "terrain") {
      source = new XYZ({
        url: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
        attributions: "© OpenTopoMap, SRTM",
      });
    } else {
      source = new XYZ({
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attributions: "© Esri, Maxar, Earthstar Geographics",
      });
    }
    baseLayerRef.current.setSource(source);
  }, [baseMap]);

  return (
    <div className="w-full relative">
      {/* Map */}
      <div ref={mapRef} className="w-full h-screen border border-gray-300 rounded-md"/>

      {/* Controls */}
      <div className="absolute top-4 right-5 flex gap-3 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow">
        {/* Country Selector */}
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="p-2 text-sm text-black rounded border border-gray-300 focus:outline-none bg-white"
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
          className="p-2 text-sm text-black rounded border border-gray-300 focus:outline-none bg-white"
        >
          <option value="satellite">Base Map</option>
          <option value="osm">Raster Map</option>
          <option value="terrain">Vector Data Layer</option>
        </select>
      </div>
    </div>
  );
}
