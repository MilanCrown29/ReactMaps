import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {location} from '../Data/Data';

export default function CustomMarker() {
  return (
    <View style={styles.roundMarker}>
      {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />

      <View style={styles.roundMarker}>
          <Image style={styles.roundImage} source={{uri:assests/download.png}}/>

      </View>
      {location.map(marker => (
        <Marker
          coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          title={marker.title}
        />
      ))}
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  roundMarker: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  roundImage: {
    height: 50,
    width: 50,
    borderRadius: 125,
  },
});
