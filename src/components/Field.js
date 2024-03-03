import React from "react";
import { TextInput } from "react-native";
import { darkGreen } from "../constants/theme";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 90,
        color: darkGreen,
        paddingHorizontal: 20,
        height:"5%",
        width: "50%",
        backgroundColor: "rgb(220,220, 220)",
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default Field;
