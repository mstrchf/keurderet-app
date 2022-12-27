import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function BottonNav({ navigation }) {
  const [isSelected, setIsSelected] = useState("home");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={isSelected === "home" ? styles.selected : styles.notSelected}
        onPress={() => {
          setIsSelected("home");
        }}
      >
        <Ionicons
          name="home-outline"
          size={24}
          color={isSelected === "home" ? "#d30303aa" : "#242424"}
        />
        {isSelected === "home" ? (
          <Text style={{ fontSize: 18, color: "white" }}>Home</Text>
        ) : (
          ""
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[isSelected === "status" ? styles.selected : styles.notSelected]}
        onPress={() => {
          navigation.navigate("Status");
          setIsSelected("status");
        }}
      >
        <Ionicons
          name="list-sharp"
          size={26}
          color={isSelected === "status" ? "#d30303aa" : "#242424"}
        />
        {isSelected === "status" ? (
          <Text style={{ color: "white", fontSize: 18 }}>Status</Text>
        ) : (
          ""
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={isSelected === "settings" ? styles.selected : styles.notSelected}
        onPress={() => {
          navigation.navigate("Settings");
          setIsSelected("settings");
        }}
      >
        <Ionicons
          name="settings-outline"
          size={24}
          color={isSelected === "settings" ? "#d30303aa" : "#242424"}
        />
        {isSelected === "settings" ? (
          <Text style={{ color: "white", fontSize: 18 }}>Settings</Text>
        ) : (
          ""
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#c81d25",
  },

  selected: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 12,
    flex: 2,
    backgroundColor: "#242424",
  },

  notSelected: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flex: 1,
  },
});
