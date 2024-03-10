import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, icons } from "../constants";
import { Ionicons } from "@expo/vector-icons";
const Header = ({ title, onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.iconContainer}
        >
          <Image resizeMode="contain" style={styles.icon} source={icons.menu} />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 12,
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </View>
      <View  style={styles.Container1}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="notifications-outline" size={24} color={COLORS.black} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
        <Image resizeMode="contain" style={styles.icon} source={icons.more} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    padding: 2,
  },
  Container1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 2,
    gap:10
  },
  iconContainer: {
    height: 35, // Decreased height for the header
    width: 35,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black,
  },
});

export default Header;
