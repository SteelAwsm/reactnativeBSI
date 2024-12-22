import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { register, loginUser } from "../api/restApi";
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FormComponent({ state }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

  // Function for login logic
  const handleLogin = async () => {
    setErrors({});
    if (!email || !password) {
      setErrors({ general: "Email and password are required!" });
      return;
    }
    try {
      // Simulate API call for login (replace with real API call)
      const result = await loginUser(email, password); // Save token using AuthContext
      console.log('result.token', result.token)
      if (result.token) {
        console.log(result.token)
        await AsyncStorage.setItem('userToken',result.token)
        navigation.navigate("Home"); // Navigate to Home
      }
    } catch (error) {
      setErrors({ general: "Invalid email or password!" });
    }
  };

  // Function for registration logic
  const handleRegister = async () => {
    setErrors({});
    if (!name || !email || !password) {
      setErrors({ general: "All fields are required!" });
      return;
    }
    try {
      const result = await register(email, password, name, phoneNo);
      navigation.navigate("Login");
      return result;
    } catch (error) {
      setErrors({ general: `Registration failed! ${error.message}` });
    }
  };

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}>
      {state === "login" ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
          />
          {errors.general && (
            <Text style={styles.errorText}>{errors.general}</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
            <Text>Don't have an account?</Text>
            <Text
              style={styles.hereText}
              onPress={() => navigation.navigate("Register")}
            >
              Register here
            </Text>
          </View>
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Fullname"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone No"
            value={phoneNo}
            onChangeText={(text) => setPhoneNo(text)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          {errors.general && (
            <Text style={styles.errorText}>{errors.general}</Text>
          )}
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setSelection(!isSelected)}
          >
            <View
              style={[styles.checkbox, isSelected && styles.checkedCheckbox]}
            />
            <Text style={styles.label}>
              By signing up you agree to our Terms and condition
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
            <Text>Have an account?</Text>
            <Text style={styles.hereText} onPress={() => navigation.goBack()}>
              Login here
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 320,
    backgroundColor: "#FAFBFD",
  },
  button: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 320,
    backgroundColor: "#19918f",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  hereText: {
    marginLeft: 6,
    color: "#19918f",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 16,
    width: 16,
    marginLeft: 10,
    marginRight: 8,
    backgroundColor: "white",
    borderRadius: 5,
  },
  checkedCheckbox: {
    backgroundColor: "#4CAF50",
  },
  label: {
    margin: 10,
    marginTop: 15,
    width: 280,
  },
});
