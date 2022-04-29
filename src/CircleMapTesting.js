import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';
import {location} from '../Data/Data';

export default function CircleMapTesting() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4924,
          latitudeDelta: 0.0992,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker coordinate={{latitude: 37.78825, longitude: -122.4924}} /> */}
        {location.map(marker => {
        <MapView.Circle
          center={{latitude:37.78825,  longitude: -122.4924}}
          radius={500}
          fillcolor={'#A3BE80'}
        />;
    })}
      </MapView>

      {/* {location.map(marker => {
        // <Circle
        //   center={{latitude: marker.latitude, longitude: marker.longitude}}
        //   radius={550}
        //   fillcolor={'#A3BE80'}
        // />;
        // <Marker
        // coordinate={{latitude:37.78825,
        // longitude:-122.4924}}
        // />
      })} */}
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
