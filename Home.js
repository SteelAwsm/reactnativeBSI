import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const Flex = () => {
  const [transactions, setTransactions] = useState([
    { id: '1', title: 'Groceries', amount: '50,000.00', date: '2024-12-15' },
    { id: '2', title: 'Electric Bill', amount: '200,000.00', date: '2024-12-14' },
    { id: '3', title: 'Online Shopping', amount: '150,000.00', date: '2024-12-13' },
    { id: '4', title: 'Dinner', amount: '75,000.00', date: '2024-12-12' },
    { id: '5', title: 'Transport', amount: '30,000.00', date: '2024-12-11' },
  ]);

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionText}>{item.title}</Text>
      <Text style={styles.transactionText}>{item.date}</Text>
    </View>
  );

  return (
    <>
    <StatusBar style="auto" />
    <View style={[styles.container, {backgroundColor:'white'}]}>
      <View
        style={{
          flexDirection: "row",
          elevation: 3, // For Android
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          paddingHorizontal: 20,
          display: "flex",
          alignItems: "center",
          height: 80,
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={require("./assets/icon.png")}
          style={{ width: 46, height: 46, borderRadius: 100 }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Hemakesha R.</Text>
          <Text>Personal Account</Text>
        </View>
        <View style={{ flex: 1 }}></View>
          <Image
            source={require("./assets/icon.png")}
            style={{ width: 42, height: 42 }}
          />

        </View>
        

      <View style={[styles.container, { flexDirection: 'column', flex: 2, backgroundColor: 'gray', alignItems: 'center' }]}>
        <View style={[styles.container, { flexDirection: 'row' , width: "100%", paddingBottom: 1}]}>
          <View style={{ flex: 3, backgroundColor: 'white' }}>
            <Text style={{  fontWeight: "bold", fontSize: 24 }}>Good morning Chelsea</Text>
            <Text style={{ marginTop: 5, fontSize: 16  }}>Check your incoming and outgoing transaction here</Text>
          </View>
          <View style={{ backgroundColor: 'gray' }}>
          <Image
              source={require("./assets/icon.png")}
              style={{ width: 58, height: 58 }}
            />
          </View>
        </View>
        <View
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              paddingVertical: 12,
              flexDirection: "row",
              backgroundColor: "#19918f",
              alignItems: "center", // Ensures vertical alignment
              width: "100%", // Ensures it uses the full width of its paren
              justifyContent: "space-between",
              borderRadius: 10,
            }}
          >
            <Text style={boxAccount.text}>Account No.</Text>
            <Text style={boxAccount.text}>100899</Text>
          </View>
          </View>


      <View
            style={{
              backgroundColor: "white",
              
              flexDirection: "row",
              justifyContent: "space-between",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <View >
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 10,
                }}
              >
                Balance
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: "500",
                  }}
                >
                  Rp10.000.000
                </Text>
                <Icon
                  style={{ padding: 10 }}
                  name="eye-outline"
                  size={20}
                  color="gray"
                />
              </View>
             </View>
            <View>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "#19918f",
                  borderRadius: 5,
                }}
                onPress={console.log("You press plus")}
              >
                <Icon name="add" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  padding: 10,
                  backgroundColor: "#19918f",
                  borderRadius: 5,
                }}
                onPress={console.log("You press send")}
              >
                <Icon name="paper-plane-outline" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
            </View>
          




      <View style={[styles.container, { flexDirection: 'column', flex: 5, backgroundColor: 'gray', marginTop:10 }]}>
      <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 10,
                paddingBottom: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
            >
              Transaction History
            </Text>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderTransaction}
          style={{ flex: 1 }} // Make the FlatList take full available space
          contentContainerStyle={styles.listContent}
        />
      </View>

      </View>
    </>
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
    fontSize: 16,
  },
});

export default Flex;
