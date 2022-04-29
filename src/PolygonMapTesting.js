import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MapView, { Polygon} from 'react-native-maps';
import {location} from '../Data/Data';

export default function PolygonMapTesting() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.8307320,
          longitude: 67.10113298,
          latitudeDelta: 0.0992,
          longitudeDelta: 0.0421,
        }}
      />
      {location.map(marker => {
        <Polygon
          center={{latitude: marker.latitude, longitude: marker.longitude}}
          radius={550}
          fillcolor={'#A3BE80'}
        />;
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
