import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView ,{Polyline}from 'react-native-maps';

class CircleMap extends Component {

    state = {
        mapRegion: null,
        currentLatitude: null,
        currentLongitude: null,
        LATLNG: {
            latitude: -35,
            longitude: 120
        },
    }
    
    render() {
        return (
                 
            <MapContainer>
            <MapView.Circle
                center = {{ latitude: this.state.currentLatitude || 30, longitude: this.state.currentLongitude || 120 }}
                radius = { 1000 }
                strokeColor = "#4F6D7A"
                strokeWidth = { 2 }
            />
            <MapView 
                style = { styles.map }
                region = { this.state.mapRegion }
                showsUserLocation = { true }
                followUserLocation = { true }
                onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }>
            </MapView>
            <MessageBar />           
        </MapContainer>
        )
    }
}
export default CircleMap