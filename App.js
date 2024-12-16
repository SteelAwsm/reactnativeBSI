import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Form from "./components/Form";
import Home from "./Home";
import Flex from "./components/Topup";
//import Flex from "./components/Transfer";

export default function App() {
  return (
    <SafeAreaView>
      <Flex></Flex>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});