import React from 'react';
import MapView, {Geojson} from 'react-native-maps';

const myPlace = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [64.165329, 48.844287],
      }
    }
  ]
};

const GeosonMap = props => (
  <MapView>
    <Geojson 
      geojson={myPlace} 
      strokeColor="red"
      fillColor="green"
      strokeWidth={2}
    />
  </MapView>
);
export default GeosonMap