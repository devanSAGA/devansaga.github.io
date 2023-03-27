import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const StyledMapContainer = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  border-radius: 16px;

  & .mapboxgl-ctrl-bottom-left,
  & .mapboxgl-ctrl-bottom-right {
    display: none;
  }
`;

export default function LastActivityMap(props) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const { coordinates } = props;
    if (!mapContainer.current || !coordinates || !coordinates.length) return;

    const geoJSON = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': coordinates
          }
        }
      ]
    };
  
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [77.62765, 12.93032],
      zoom: 12
    });
  
    map.on('load', (e) => {
      map.addSource('route', { type: 'geojson', data: geoJSON });
      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        paint: {
          'line-color': '#E05320',
          'line-opacity': 1,
          'line-width': 5
        }
      });

    });

    const newCoordinates = geoJSON.features[0].geometry.coordinates;
 
    // Refer this example: https://docs.mapbox.com/mapbox-gl-js/example/zoomto-linestring/
    const bounds = new mapboxgl.LngLatBounds(newCoordinates[0],newCoordinates[0]);
  
    for (const coord of newCoordinates) {
      bounds.extend(coord);
    }
    
    map.fitBounds(bounds, {
      padding: 60
    });
  
    return () => map.remove();
  }, []);

  return <StyledMapContainer ref={mapContainer} />;
}