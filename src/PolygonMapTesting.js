import React from 'react';
import {StyleSheet, View, } from 'react-native';
import MapView, {Polygon} from 'react-native-maps';


export default function PolygonMapTesting() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 26.453304314451437,
          longitude: 80.32602046007791,
          latitudeDelta: 0.0992,
          longitudeDelta: 0.0421,
        }}
        onRegion={{
          latitude: 26.453304314451437,
          longitude: 80.32602046007791,
          latitudeDelta: 0.0992,
          longitudeDelta: 0.0421,
        }}>
        <Polygon
          center={{latitude: 26.453304314451437, longitude: 80.32602046007791}}
          title="I am Polygon"
          strokeWidth={3}
        />
        ;
      </MapView>
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
