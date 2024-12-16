import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Flex = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <View style={{ backgroundColor: "" }}>
        <View
          style={{
            flexDirection: "row",
            elevation: 3, // For Android
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            paddingHorizontal: 20,
            display: "flex9",
            alignItems: "center",
            height: 80,
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <View style={{ marginLeft: 0 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Transfer</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            elevation: 3, // For Android
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: 5,
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: 10,

            backgroundColor: "white",
          }}
        >
          <View
            style={{ marginLeft: 0, backgroundColor: "pink", width: "100%" }}
          >
            <Text style={{ color: "gray", paddingVertical: 10 }}>Amount</Text>
            <View style={{ backgroundColor: "", flexDirection: "row" }}>
              <Text style={{ color: "gray" }}>IDR</Text>
              <Text
                style={{
                  paddingStart: 6,
                  color: "gray",
                  fontSize: 40,
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  width: "93%",
                }}
              >
                100.000
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingStart: 20,
              }}
            >
              <Text style={{ color: "gray" }}>IDR</Text>
              <Text
                style={{
                  paddingStart: 6,
                  color: "green",
                  borderBottomColor: "black",
                }}
              >
                IDR. 10.000.000
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            elevation: 3, // For Android
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: 20,
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: 10,
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <Text style={{ width: 150, color: "black", fontSize: 20 }}>
            BYOND Pay
          </Text>
          <Icon name="chevron-down" color="black" size={20} />
        </View>

        <View
          style={{
            flexDirection: "row",
            elevation: 3, // For Android
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: 20,
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: 10,
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <View style={{ backgroundColor: "", flexDirection: "column" }}>
            <Text style={{ color: "gray" }}>Notes</Text>
            <Text
              style={{
                paddingStart: 6,
                color: "gray",
                fontSize: 40,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: 320,
              }}
            ></Text>
          </View>
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={styles.transferButton}
            onPress={() => console.log("Transfer button pressed")}
          >
            <Text style={styles.buttonText}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  transactionItem: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    borderRadius: 10,
  },
  transferButton: {
    bottom: 20,
    backgroundColor: "#4CAF50", // Green color for the button
    borderRadius: 10,
    elevation: 3, // For Android shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  transactionText: {
    fontSize: 16,
    color: "#333",
  },
  listContent: {
    padding: 10,
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});

const boxAccount = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default Flex;
