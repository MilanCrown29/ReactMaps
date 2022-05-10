import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';
import {location} from '../Data/Data';

export default function CircleMapTesting() {
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
        <Circle
          center={{latitude: 26.453304314451437, longitude: 80.32602046007791}}
          radius={500}
          fillcolor={'red'}
        />
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
