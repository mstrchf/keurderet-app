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
    return(
        <ScrollView>
            <View style={style.header}>
                <Text style={style.moreInfo}>More Informations</Text>
                <Text style={{marginBottom: 20}}>Enter the code sent to the phone number you provided.</Text>
            </View>
            {/* inputs */}
            <View style={{marginLeft: 20,}}>
            <View>
                <Text style={{marginBottom: 5}}>Full Name</Text>
                <TextInput placeholder="Enter first and Last Name" style={style.input}/>
            </View>
            {/*  */}
            <View>
                <Text style={{marginBottom: 5}}>Blood Group</Text>
                <TextInput placeholder="Enter first and Last Name" style={style.input}/>
            </View>
            {/*  */}
            <View>
                <Text style={{marginBottom: 5}}>Address</Text>
                <TextInput placeholder="Enter first and Last Name" style={style.input}/>
            </View>
            {/*  */}
            <View>
                <Text style={{marginBottom: 5}}>Birth Year</Text>
                <TextInput placeholder="Enter first and Last Name" style={style.input}/>
            </View>

            {/* available to donate */}
            <View>
                <Text>Available to Donate</Text>
                <Switch onValueChange={Toggle} value={enable} trackColor={{ false: 'grey', true: 'red'}} style={{alignSelf: 'flex-start'}}/>
            </View>
            </View>

            {/* button */}
            <TouchableOpacity style={style.button}>
                <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 15}}>Complete</Text>
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
        padding: 20,
        width: '40%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 40
    },
    moreInfo:{
        fontWeight: 'bold', 
        fontSize: 20,
         marginBottom: 20

    }
})

export default Registration;