import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView , Switch} from "react-native";
import { useState } from "react";

const Registration = () => {
    const [enable , setEnable] = useState(true);
    const [text, setText] = useState()

    const Toggle = () =>{
        if(enable){
            setEnable(inActive)
        }else{
            setText(Active);
        }
        // setEnable(previouseState => !previouseState)
    }

    //
    const HangleInput = (text) =>{
        console.log(text)

    }
    return(
        <ScrollView>
            <View style={style.header}>
                <Text style={style.moreInfo}>More Informations</Text>
                <Text style={{marginBottom: 20}}>Enter the code sent to the phone number you provided.</Text>
            </View>
            {/* Name */}
            <View style={{marginLeft: 20,}}>
            <View>
                <Text style={{marginBottom: 5}}>Full Name</Text>
                <TextInput placeholder="Enter first and Last Name" style={style.input}/>
            </View>
            {/*BloodGroup  */}
            <View>
                <Text style={{marginBottom: 5}}>Blood Group</Text>
                <TextInput placeholder="Enter Blood Type" style={style.input}/>
            </View>
            {/* Address */}
            <View>
                <Text style={{marginBottom: 5}}>Address</Text>
                <TextInput placeholder="Enter Address" style={style.input}/>
            </View>
            {/* DOB */}
            <View>
                <Text style={{marginBottom: 5}}>Birth Year</Text>
                <TextInput placeholder="Enter your birth year" style={style.input} onChangeText={HangleInput}/>
            </View>

            {/* available to donate switch */}
            <View>
                <Text style={{fontWeight: '600'}}>Available to Donate</Text>
                <Switch onValueChange={Toggle} value={enable} trackColor={{ false: 'grey', true: 'red'}} style={{alignSelf: 'flex-start'}}/>
            </View>
            </View>

            {/* button */}
            <TouchableOpacity style={style.button}>
                <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 7}}>Complete</Text>
            </TouchableOpacity>
        </ScrollView>
        
    )
}

const style = StyleSheet.create({
    header:{
        // margin: 20
        marginLeft: 20,
        marginTop: 40
    },
    input:{
        borderWidth: 0.2,
        padding: 12,
        borderRadius: 5,
        marginBottom: 20,
        width: '95%'
    }, 
    button:{
        backgroundColor: '#F63634',
        padding: 17,
        alignSelf: 'center',
        borderRadius: 7,
        marginTop: 40,
        marginBottom: 20
    },
    moreInfo:{
        fontWeight: 'bold', 
        fontSize: 20,
         marginBottom: 20

    }
})

export default Registration;