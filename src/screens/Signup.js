import React from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import Background from "../components/Background";
import Btn from "../components/Btn";
import { COLORS, darkGreen } from "../constants/theme";
import Field from "../components/Field";

const Signup = (props) => {
  const showToast = () => {
    ToastAndroid.show("User account created successfully", ToastAndroid.SHORT);
  };

  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: COLORS.mint,
            height: 750,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "85%",
              paddingRight: 15,
            }}
          >
            <Text style={{ color: "grey", fontSize: 15 }}>
              By signing in, you agree to our {`\n`}
            </Text>
            <Text
              style={{
                color: COLORS.darkGreen,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "78%",
              paddingRight: 16,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "grey", fontSize: 15 }}>and </Text>
            <Text
              style={{ color: COLORS.darkGreen, fontWeight: "bold", fontSize: 15 }}
            >
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor={COLORS.white}
            bgColor={COLORS.darkGreen}
            btnLabel="Signup"
            Press={() => {
              showToast();
              props.navigation.navigate("Main");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: COLORS.darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
