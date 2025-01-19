import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHNxOWF2NmowMGRqMmpxdDV5Y2JqZWNhIn0.Abnr_Bty2UIMOHxuVVJvtQ';
    
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [18.5516, -33.9076], // Coordinates for Goodwood, Cape Town
      zoom: 15,
      preserveDrawingBuffer: true
    });

    mapInstance.current = map;

    // Add marker after map loads
    map.on('load', () => {
      if (marker.current) return;
      
      marker.current = new mapboxgl.Marker()
        .setLngLat([18.5516, -33.9076])
        .addTo(map);
    });

    // Cleanup
    return () => {
      if (marker.current) {
        marker.current.remove();
        marker.current = null;
      }
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="h-48 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default LocationMap;