import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { COLORS } from "../constants";

const Dashboard = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get access to the navigation object

  const data = [
    { id: 1, title: "Crop Care", icon: "🌾" },
    { id: 2, title: "Weather", icon: "☁️" },
    { id: 3, title: "Marketplace", icon: "🛒" },
    { id: 4, title: "Progress", icon: "📈" },
    { id: 5, title: "Videos", icon: "🎥" },
    { id: 6, title: "Crop Advisory", icon: "🌱" },
  ];

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName); // Navigate to the desired screen
  };

  const renderCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigateToScreen(item.title)} // Pass the screen name as a parameter
      >
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.mint,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 110,
  },
  icon: {
    fontSize: 30,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Dashboard;
