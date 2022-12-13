import React from "react";
import {StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar} from "react-native";

import Header from "../components/Header";
import {DATA} from "../lib/dummy-data";

const Item = ({location, blood, hospital}) => (
    <View style={styles.item}>

        <View style={{backgroundColor: '#d30303', paddingVertical: 10, borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginRight: 10, width: 50,}}>
            <Text style={styles.blood}>{blood}</Text>
        </View>

        <View>
            <Text style={styles.hospital}>{hospital}</Text>
            <Text style={styles.location}>{location}</Text>
        </View>

    </View>
);

const Status = () => (

    <SafeAreaView style={styles.container}>
        <Header title='Notifications'/>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Item location={item.location} blood={item.bloodType} hospital={item.hospital}/>}
            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
            )}
            stickySectionHeadersEnabled={true}
        />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },

    item: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#24242411',
        marginVertical: 4,
        borderRadius: 10,

    },

    header: {
        fontSize: 22,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        color: '#242424'

    },
    blood: {
        fontSize: 22,
        color: '#fff'
    },
    hospital: {
        fontSize: 18,
        color: '#242424',
        marginRight: 5
    },
    location: {
        fontSize: 16,
        color: '#24242477'
    }
});

export default Status;