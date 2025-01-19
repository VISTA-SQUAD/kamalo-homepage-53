import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHNxOWF2NmowMGRqMmpxdDV5Y2JqZWNhIn0.Abnr_Bty2UIMOHxuVVJvtQ';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [18.5516, -33.9076], // Coordinates for Goodwood, Cape Town
      zoom: 15
    });

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([18.5516, -33.9076])
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="h-48 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default LocationMap;