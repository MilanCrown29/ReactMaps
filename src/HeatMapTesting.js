
import React  from "react";
import { StyleSheet, Text, View } from "react-native";
import HeatMap from "react-native-heatmap-chart";
import MapView ,{ PROVIDER_GOOGLE }from "react-native-maps";


export default function  HeatMapTesting() {
    
        let points = [{latitude: 6.83646681, longitude: 79.77121907, weight: 1},
            {latitude: 6.82776681, longitude: 79.871319, weight: 1},
            {latitude: 6.82176681, longitude: 79.871319, weight: 1},
            {latitude: 6.83776681, longitude: 79.871319, weight: 1},
            {latitude: 6.83176681, longitude: 79.871319, weight: 1},
        ]
        return(
        <View style={styles.container}>
            {/*Render our MapView*/}
            <MapView
               provider={PROVIDER_GOOGLE}
               style={styles.map}
               region={{
                 latitude: 6.82646681,
                 longitude: 79.87121907,
                 latitudeDelta: 0.09,
                 longitudeDelta: 0.0121
               }}
                >
                <HeatMap points={points}
                 opacity={1}
                 radius={20}
                 maxIntensity={100}
                 gradientSmoothing={10}
                 heatmapMode={"POINTS_DENSITY"}/>
           </MapView>
        </View>
        )
    }
 
//create our styling code:
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
})