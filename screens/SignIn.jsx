import { View , Text} from "react-native";
import LangPicker from "../components/Picker";

function SignIn() {
    return(
        <View>
            <View style= {{marginTop: 50, marginLeft: 15}}>
                <Text style= {{fontWeight: "bold",fontSize:23,marginBottom:20}}>Enter your phone number</Text>
                <Text>KeurDeret will need to verify your Phone number  before  you can proceed</Text>
            </View>
            <View>
                <LangPicker />
            </View>
        </View>
    
    )
}
export default SignIn;
