import { useState, useRef } from "react";
import { Picker } from '@react-native-picker/picker';
import { TextInput, View, StyleSheet, Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LangPicker() {

    // navigation
    const navigation = useNavigation();



    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    // 
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <>   
     <Picker
        style={{marginHorizontal: 30, marginTop: 10}}
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Gambia" value="java" />
        <Picker.Item label="Senegal" value="js" />
    </Picker>
    {/* border */}
    <View style={styles.border}></View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, marginTop: 30}}>
        <TextInput placeholder="+220" style={{borderBottomWidth: 1, padding: 5}}/>
        <TextInput placeholder="Phone number" style={{borderBottomWidth: 1, padding: 5}}/>
    </View>
    {/* button */}
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration') }>
        <Text style={{color: 'white', fontWeight: '900', paddingLeft: 7}}>Next</Text>
    </TouchableOpacity>
    </>

    )


}
const styles =  StyleSheet.create({
    border:{
        borderWidth: 0.5,
        marginHorizontal: 30

    },
    button:{
        backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: '50%',
        padding: 15,
        borderRadius: 5,
        width: '22%'
    }

})
