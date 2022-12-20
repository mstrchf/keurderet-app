import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { BlurView } from "expo-blur";

// component imports
import BottomNav from "../components/BottomNav";
export default function Home({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetRef = useRef();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isOpen ? "#24242433" : "#fff" },
      ]}
    >
      {/* <Header title='Keur Deret'/> */}
      <View style={styles.main}>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#242424dd",
            }}
          >
            Welcome back, User
          </Text>
          <Text style={{ fontSize: 16, color: "#24242455" }}>
            Another day to save a life with the most minimum effort
          </Text>
        </View>

        <View
          opacity={isOpen ? 0.3 : 1}
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            marginHorizontal: 25,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.requestBtnContainer}
            onLongPress={() => {
              if (Platform.OS === "ios") {
                bottomSheetRef.current.snapToIndex(2);
              } else {
                bottomSheetRef.current.snapToIndex(0);
              }

              setIsOpen(true);
            }}
          >
            <View style={styles.requestBtn}>
              <MaterialCommunityIcons
                name="blood-bag"
                size={80}
                color="white"
              />
            </View>
          </TouchableOpacity>

          <Text
            style={{ color: "#24242499", fontSize: 16, textAlign: "center" }}
          >
            Long press this button to request for blood donation
          </Text>
        </View>
      </View>

      <BottomNav navigation={navigation} />
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={["30%", "50%", "70%"]}
        enablePanDownToClose={true}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <BottomSheetView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent:
              Platform.OS === "ios" ? "space-between" : "flex-start",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Select Blood Type:</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
            style={{
              width: 300,
              marginVertical: 5,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderTopColor: "#24242411",
              borderBottomColor: "#24242411",
            }}
            itemStyle={{ fontSize: 18 }}
          >
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="jscript" />
            <Picker.Item label="Rust" value="rust" />
            <Picker.Item label="Golang" value="golang" />
            <Picker.Item label="Kotlin" value="kotlin" />
          </Picker>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 300}}>
          <TouchableOpacity
            onPress={() => {
              bottomSheetRef.current.close();
              setIsOpen(false);
              Alert.alert(
                "Request",
                `Request for blood group ${selectedLanguage} sent successfully `
              );
            }}
            activeOpacity={0.5}
            style={{
              padding: 15,
              backgroundColor: "#d30303aa",
              borderRadius: 25,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Send Request</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
              padding: 15,
              backgroundColor: "#242424",
              borderRadius: 25,
              alignItems: "center",
            }}
            onPress={()=> {bottomSheetRef.current.close()}}>
            <Text style={{ fontSize: 20, color: "white" }}>Close</Text>
          </TouchableOpacity>
          </View>
        </BottomSheetView>
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
    marginTop: 20,
  },

  requestBtn: {
    backgroundColor: "#c81d25",
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
    marginBottom: 15,
  },
});
