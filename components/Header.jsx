import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({title}) {
    return (
        <View style={styles.container}>
            <View>
                <Ionicons name="ios-person-circle-sharp" size={28} color="#d3030399"/>
            </View>

            <Text style={{fontSize: 20}}>{title}</Text>
            <View>
                <Ionicons name="menu-sharp" size={28} color="#d3030399"/>
            </View>

            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff'
    },
});