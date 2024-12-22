import { Image, Text, View, SafeAreaView,TouchableWithoutFeedback, Keyboard } from "react-native";
import FormComponent from "../components/Form";

export default function Register() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{ paddingTop: 30, flex: 1 }}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 150}}>
        <Image
          source={require("../assets/wallet.png")}
          style={{ width: 250, height: 60 }}
        />
        <FormComponent state='register'></FormComponent>
        </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
