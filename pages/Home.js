import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import { currUser } from "../api/restApi"; // Import your curruser function
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Home()  {
  const [posts, setPosts] = useState([]);
  const [fullname, setFullname] = useState(''); // Default to an empty string
  const [balance, setBalance] = useState('');

  const token = AsyncStorage.getItem('userToken'); // Retrieve the token
      
  const fetchUser = async () => {
    try {
      const userData = await currUser(token); // Call the currUser API function
      console.log('userdata', userData)
      setFullname(userData.fullname ?? 'user'); // Update the fullname state
      setBalance(userData.balance);   
    } catch (error) {
      console.log("Error fetching user data:", error.message);
      Alert.alert("Error", "Failed to fetch user data");
    }
  };

  console.log(token)
  useEffect(() => {
    
  
    fetchUser();
  }, []);
  


  
  const handleSubmit = async () => {
    if (!title||!body) {
        Alert.alert('Validation Error', 'Title and Body cannot be empty');
        return;
    }

    try {
        const newPost = await createPost({title, body});
        Alert.alert('Success', `Post created with ID: ${newpost.id}`);
        setName('');
        setJob('');
    } catch (error) {
        Alert.alert('Error', error.message);
    }
  }
    const [transactions, setTransactions] = useState([
    { id: '1', title: 'Adityo Gizwanda', amount: '-50,000.00', date: '08-December-2024' },
    { id: '2', title: 'Adityo Gizwanda', amount: '+200,000.00', date: '07-December-2024' },
    { id: '3', title: 'Adityo Gizwanda', amount: '-150,000.00', date: '06-December-2024' },
    { id: '4', title: 'Adityo Gizwanda', amount: '+75,000.00', date: '05-December-2024' },
    { id: '5', title: 'Adityo Gizwanda', amount: '-30,000.00', date: '04-December-2024' },
  ]);

  const renderTransaction = ({ item }) => {
    // Determine text color based on amount sign
    const isPositive = item.amount.startsWith("+");
    const amountStyle = isPositive ? styles.positive : styles.negative;
  
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '' }}>
        <View style={{ backgroundColor: '' }}>
          <Text style={styles.transactionText}>{item.title}</Text>
          <Text style={styles.transactionText}>{item.date}</Text>
        </View>
        <View>
          {/* Apply dynamic color to the amount */}
          <Text style={[styles.transactionText, amountStyle]}>{item.amount}</Text>
        </View>
      </View>
    );
  };

  const navigation = useNavigation()

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
          source={require("../assets/icon.png")}
          style={{ width: 46, height: 46, borderRadius: 100 }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "bold" }}>{fullname || "Loading..."}</Text>
          <Text>Personal Account</Text>
        </View>
        <View style={{ flex: 1 }}></View>
          <Image
            source={require("../assets/icon.png")}
            style={{ width: 42, height: 42 }}
          />

        </View>
        

      <View style={[styles.container, { flexDirection: 'column', flex: 2, backgroundColor: 'gray', alignItems: 'center' }]}>
        <View style={[styles.container, { flexDirection: 'row' , width: "100%", paddingBottom: 1}]}>
          <View style={{ flex: 3, backgroundColor: 'white' }}>
            <Text style={{ fontWeight: "bold" }}>{fullname || "Loading..."}</Text>
            <Text style={{ marginTop: 5, fontSize: 16  }}>Check your incoming and outgoing transaction here</Text>
          </View>
          <View style={{ backgroundColor: 'gray' }}>
          <Image
              source={require("../assets/icon.png")}
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
                  {balance}
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
                onPress={() => {
                    console.log("Topup");
                    navigation.navigate("Topup");}}
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
                onPress={() => {
                    console.log("Transfer");
                    navigation.navigate("Transfer");}}
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
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item})=> (
            <View style={styles.postContainer}>
                <Text style={styles.title}>{item.first_name}</Text>
                <image source= {{uri: item.avatar}} style={{width: 50, height: 50, borderRadius:25}}/>
            </View>
          )}
          style={{ flex: 1 }} // Make the FlatList take full available space
          contentContainerStyle={styles.listContent}
        />
      </View>
      <View>
      <Navbar navigation={navigation} />
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
    color: "darkgray",
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },

  
  
});

const boxAccount = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
  },
});


