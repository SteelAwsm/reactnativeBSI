import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const Flex = () => {

    const [amount, setAmount] = useState("100.000");
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState("Account 1"); // State to hold selected account
    const accounts = ["Account 1", "Account 2", "Account 3"]; // List of accounts
    const [notes, setNotes] = useState("");

  return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{ backgroundColor:"white" }}>
    <StatusBar style="auto" />
    <View style={{backgroundColor:''}}>
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
        <View style={{ marginLeft: 0}}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Top Up</Text>
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
            style={{ marginLeft: 0, backgroundColor: "", width: "100%" }}
          >
            <Text style={{ color: "gray", paddingVertical: 10 }}>Amount</Text>
            <View style={{ backgroundColor: "", flexDirection: "row" }}>
              <Text style={{ color: "gray" }}>IDR</Text>
              <TextInput
                style={{
                    paddingStart: 6,
                    color: "gray",
                    fontSize: 40,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: "93%",
                }}
                keyboardType="numeric" // Only allow numeric input
                value={amount} // Bind input to the state
                onChangeText={(text) => setAmount(text)} // Update the state when input changes
                />
            </View>
            <View
              style={{
                backgroundColor: "",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingStart: 20,
              }}
            >

            </View>                                                 
          </View>
          </View>
    
          <View
        style={{
          flexDirection: "row",
          elevation: 3,
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          paddingHorizontal: 20,
          paddingBottom: 20,
          paddingTop: 20,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          marginTop: 10,
        }}
      >
        {/* Dropdown button */}
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setDropdownVisible(!isDropdownVisible)} // Toggle dropdown
        >
          <Text style={{ fontSize: 20, color: "black" }}>{selectedAccount}</Text>
          <Icon
            name={isDropdownVisible ? "chevron-up" : "chevron-down"}
            size={20}
            color="black"
            style={{ marginLeft: 104}}
          />
        </TouchableOpacity>
      </View>

      {/* Dropdown menu */}
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          {accounts.map((account, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => handleAccountSelection(account)}
            >
              <Text style={styles.dropdownText}>{account}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

    <View
        style={{
          flexDirection: "row",
          elevation: 3, // For Android
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          paddingHorizontal: 20,
          paddingBottom: 20,
          paddingTop:20,
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginTop: 10,
          justifyContent:'space-between',
          backgroundColor: "white",
        }}
      >
            <View style={{ backgroundColor: "", flexDirection: "column" }}>
                <Text style={{ color: "gray", marginBottom: 10 }}>Notes</Text>
                <TextInput
                style={{
                    paddingStart: 6,
                    color: "black",
                    fontSize: 16,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: 320,
                }}
                placeholder="Add notes here"
                placeholderTextColor="gray"
                value={notes}
                onChangeText={(text) => setNotes(text)}
                multiline
                />
            </View>
    </View>

    <View style={{
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
        }}>
          <TouchableOpacity
            style={styles.transferButton}
            onPress={() => console.log("Transfer button pressed")}
          >
            <Text style={styles.buttonText}>Transfer</Text>
          </TouchableOpacity>
        </View>

      </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  transactionItem: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 10,
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
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

  listContent: {
    padding: 10,
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
  dropdown: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownText: {
    fontSize: 18,
    color: "black",
  },
  
  
});

const boxAccount = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default Flex;
