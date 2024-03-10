import React, { useRef } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const PaymentMethod = () => {
  const refRBSheet = useRef();

  // Define your dummy payment methods with respective Expo icons
  const paymentMethods = [
    { name: "PhonePe", icon: "phone", family: "AntDesign" },
    { name: "Amazon Pay", icon: "amazon", family: "AntDesign" },
    { name: "Credit Card", icon: "creditcard", family: "AntDesign" },
    { name: "Debit Card", icon: "creditcard", family: "AntDesign" }, // Change the icon as needed
  ];

  // Function to render individual payment method component with colored card
  const renderPaymentMethod = (method, index) => {
    const IconComponent = method.family === "AntDesign" ? AntDesign : MaterialCommunityIcons;
    return (
      <TouchableOpacity key={index} style={styles.cardContainer}>
        <View style={[styles.paymentMethodContainer, { backgroundColor: COLORS.lightblue }]}>
          <IconComponent name={method.icon} size={30} color={COLORS.blue} />
          <Text style={styles.paymentMethodName}>{method.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Payment Method" onPress={() => refRBSheet.current.open()} />
      </View>
      <View style={styles.container}>
        {paymentMethods.map(renderPaymentMethod)}
      </View>
      <BottomSheet bottomSheetRef={refRBSheet} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.mint,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardContainer: {
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    overflow: "hidden",
  },
  paymentMethodContainer: {
    alignItems: "center",
    padding: 15,
  },
  paymentMethodName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    color: COLORS.blue,
  },
});

export default PaymentMethod;
