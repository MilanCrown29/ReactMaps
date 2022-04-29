import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { location } from "../Data/Data";

export default function DefaultMap() {
    return (
        <View style={styles.container}>
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
            {
                location.map(marker=>(
                    <Marker
                    coordinate={{latitude:marker.latitude,
                    longitude:marker.longitude}}
                    title={marker.title}/>
                ))
            }
        </View>
    );
}
//create our styling code:
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});