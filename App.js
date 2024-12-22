import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Form from "./components/Form";
import Home from "./pages/Home";
import Topup from "./pages/Topup";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Transfer from "./pages/Transfer";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider, useAuth } from "./context/AuthContext"; // Import AuthProvider

const Stack = createStackNavigator();

function Route() {
  const { user, getToken } = useAuth();
  useEffect(() => {
    getToken();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopUp"
          component={Topup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Route />
    </AuthProvider>
  );
}
