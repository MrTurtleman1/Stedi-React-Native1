import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [OTP, setOTP] = useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="801-555-1212"
        />
        <TextInput
          style={styles.input}
          onChangeText={setOTP}
          value={OTP}
          placeholder="1234"
          keyboardType="numeric"
          secureTextEntry={true}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
  export default Login;