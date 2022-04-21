import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";

export default function MarkerMap() {
    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={tokyoRegion} //your region data goes here.

            >
                {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
                <Marker coordinate={{
                    latitude: 35.67714827145542,
                    longitude: 139.6551462687416,
                }}
                    image={require('../assests/download.png')}
                    title="Test title"
                    description="this is for test only"
                     />
            </MapView>
        </View>
    );
}
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
})