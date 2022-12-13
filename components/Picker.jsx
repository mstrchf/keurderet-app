import { useState, useRef } from "react";
import { Picker } from '@react-native-picker/picker';
import { TextInput, View } from "react-native";

export default function LangPicker() {



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
         <View style={{borderBottomWidth: 1,marginLeft: '30%'}}>    
     <Picker
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Gambia" value="java" />
        <Picker.Item label="Senegal" value="js" />
    </Picker>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between',padding: 30,}}>
        <TextInput placeholder="+220" style={{borderBottomWidth: 1, padding: 5}}/>
        <TextInput placeholder="Phone number" style={{borderBottomWidth: 1, padding: 5}}/>
    </View>
    </>

    )


}