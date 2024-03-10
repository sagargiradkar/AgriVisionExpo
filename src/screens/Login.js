import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Btn from "../components/Btn";
import { COLORS } from "../constants/theme";
import Field from "../components/Field";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveCredentials = async () => {
    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
    } catch (error) {
      console.error("Error saving credentials:", error);
    }
  };

  const handleLogin = () => {
    // Validate email and password here if needed
    // Save credentials to AsyncStorage
    saveCredentials();
    // Navigate to main screen
    props.navigation.navigate("Main");

    // Display a toast message
    ToastAndroid.show("Login Successful", ToastAndroid.SHORT);
  };
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 20,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: COLORS.mint,
            height: 700,
            width: 450,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: COLORS.darkGreen,
              fontWeight: "bold",
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
            onChangeText={(text) => setEmail(text)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <View
            style={{
              alignItems: "center",
              width: "50%",
              paddingRight: "1%",
              marginBottom: 200,
            }}
          >
            <Btn
              textColor="white"
              bgColor={COLORS.darkGreen}
              btnLabel="Login"
              Press={handleLogin}
            />
            <Text
              style={{
                color: COLORS.darkGreen,
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: "35%",
              }}
            >
              Forgot Password ?
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{
                  color: COLORS.darkGreen,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
