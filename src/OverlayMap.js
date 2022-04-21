
import { Text, TouchableOpacity, View } from 'react-native';
import MapView, { OverlayComponent } from 'react-native-maps';


export default function OverlayMap() {
    render()
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}

            />
            <TouchableOpacity style={styles.overlay}>
                <Text style={styles.text}>Touchable Opacity</Text>
            </TouchableOpacity>
            <OverlayComponent
                style={{ position: 'absolute', bottom: 50 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
});