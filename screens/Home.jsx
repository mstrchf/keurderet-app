import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Octicons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';


// component imports
import Header from "../components/Header";
import BottonNav from "../components/BottonNav";


export default function Home() {
    return (
        <View style={styles.container}>
            <Header title='Keur Deret'/>
            <View style={styles.main}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 22}}>
                    <Text style={{fontSize: 34, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#242424dd'}}>
                        Emergencny Help Needed?
                    </Text>
                    <Text style={{fontSize: 20, textAlign: 'center', color: '#24242455'}}>
                        Hold down button to request
                    </Text>
                </View>


                <View style={styles.requestBtnContainer}>
                    <View style={styles.requestBtn}>
                        <MaterialCommunityIcons name="blood-bag" size={80} color="white" />
                    </View>
                </View>
            </View>
            <BottonNav/>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99999922',
    },

    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    requestBtn: {
        backgroundColor: '#d30303',
        width: 170,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 85,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3,

        elevation: 4,
    },

    requestBtnContainer: {
        backgroundColor: '#ddd',
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 110,

        borderWidth: 2,
        borderColor: '#e4e3e3',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.40,
        shadowRadius: 12,

        elevation: 8,
    }
});