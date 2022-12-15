import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { PickerIOS } from "@react-native-picker/picker";

// component imports
import BottomNav from "../components/BottomNav";
import { useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function Home({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const bottomSheetRef = useRef();
  return (
    <View style={styles.container}>
      {/* <Header title='Keur Deret'/> */}
      <View style={styles.main}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 22,
          }}
        >
          <Text
            style={{
              fontSize: 34,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 20,
              color: "#242424dd",
            }}
          >
            Emergencny Help Needed?
          </Text>
          <Text
            style={{ fontSize: 20, textAlign: "center", color: "#24242455" }}
          >
            Hold down button to request
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.requestBtnContainer}
          onLongPress={() => {
            bottomSheetRef.current.snapToIndex(1);
          }}
        >
          <View style={styles.requestBtn}>
            <MaterialCommunityIcons name="blood-bag" size={80} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <BottomNav navigation={navigation} />
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={["25%", "50%", "75%"]}
        enablePanDownToClose={true}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#24242433",
            borderRadius: 15,
            marginHorizontal: 5,
            padding: 10,
          }}
        >
          <Text>Select Blood Type:</Text>
          <TouchableOpacity
            onPress={() => {
              bottomSheetRef.current.close();
            }}
            activeOpacity={0.5}
            style={{
              padding: 10,
              fontSize: 24,
              backgroundColor: "#69995D",
              borderRadius: 5,
              marginVertical: 10,
            }}
          >
            <Text>Send Request</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  requestBtn: {
    backgroundColor: "#d30303",
    width: 170,
    height: 170,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#ddd",
    width: 190,
    height: 190,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 110,

    borderWidth: 2,
    borderColor: "#eee",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,

    elevation: 8,
  },
});
