import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// screens
import Home from './screens/Home'
import Status from './screens/Status'
import Settings from "./screens/Settings";
import Registration from './screens/Registration';
import SignIn from './screens/SignIn';

// stack navigation object
const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: true}} >
                <Stack.Screen name='SignIn' component={SignIn}/>
                <Stack.Screen name='Registration' component={Registration}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Status' component={Status}/>
                <Stack.Screen name='Settings' component={Settings}/>
            </Stack.Navigator>

            <StatusBar style="auto"/>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
