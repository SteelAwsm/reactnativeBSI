import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Navbar({ }) {
    const navigation = useNavigation()
  const handleSignOut = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Sign Out", onPress: () => navigation.navigate("Login") },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.navbar}>
      {/* Home */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}>
        <MaterialIcons name="home" size={24} color="#FFFFFF" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* Transfer */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Transfer")}>
        <MaterialIcons name="send" size={24} color="#FFFFFF" style={{ transform: [{ rotate: "-30deg" }] }}/>
        <Text style={styles.navText}>Transfer</Text>
      </TouchableOpacity>

      {/* Top-Up */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("TopUp")}>
        <MaterialIcons name="add" size={24} color="#FFFFFF" />
        <Text style={styles.navText}>Top Up</Text>
      </TouchableOpacity>

      {/* Sign Out */}
      <TouchableOpacity style={styles.navItem} onPress={handleSignOut}>
        <MaterialIcons name="logout" size={24} color="#FFFFFF" />
        <Text style={styles.navText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#19918F",
    paddingTop: 10,
    paddingBottom: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 4,
  },
});