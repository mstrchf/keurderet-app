import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useState} from "react";

export default function BottonNav({navigation}) {

    const [isSelected, setIsSelected] = useState('home')
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={isSelected === 'home' ? styles.selected : styles.notSelected} onPress={()=>{setIsSelected('home')}} >
                <Ionicons name="ios-home-outline" size={24} color="#d30303"/>
                {isSelected === 'home' ? <Text style={{fontSize: 18, color: '#242424'}}>Home</Text> : ""}

            </TouchableOpacity>

            <TouchableOpacity style={isSelected === 'status' ? styles.selected : styles.notSelected} onPress={()=> {navigation.navigate('Status')}}>
                <Ionicons name="list-sharp" size={28} color="#d30303"/>
                {isSelected === 'status' ? <Text style={{color: '#242424', fontSize: 18}}>Status</Text> : ""}
            </TouchableOpacity>

            <TouchableOpacity style={isSelected === 'settings' ? styles.selected : styles.notSelected} onPress={()=>{navigation.navigate('Settings')}}>
                <Ionicons name="ios-settings-outline" size={24} color="#d30303"/>
                {isSelected === 'settings' ? <Text style={{color: '#242424', fontSize: 18}}>Settings</Text> : ""}

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 7,
        margin: 5,
        backgroundColor: '#242424',
        borderRadius: 10,
//        borderTopLeftRadius: 20,
//        borderTopRightRadius: 20,

    },

    selected: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 6,
        flex: 2
    },

    notSelected: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flex: 1
    }
});