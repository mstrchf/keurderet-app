import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottonNav() {
    return (
        <View style={styles.container}>
            <Ionicons name="ios-home" size={28} color="#d3030399" />
            <Ionicons name="information-circle-sharp" size={32} color="#d3030399" />
            <Ionicons name="settings-sharp" size={28} color="#d3030399" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
});