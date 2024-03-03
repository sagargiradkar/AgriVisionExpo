import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const Dashboard = () => {
  const data = [
    { id: 1, title: "Profile", icon: "👤" },
    { id: 2, title: "Crop Practice", icon: "🌱" },
    { id: 3, title: "Weather", icon: "☁️" },
    { id: 4, title: "Crop Care", icon: "🌾" },
    { id: 5, title: "Progress", icon: "📈" },
    { id: 6, title: "Videos", icon: "🎥" },
    { id: 7, title: "Marketplace", icon: "🛒" },
    { id: 8, title: "News", icon: "📰" },
    { id: 9, title: "Crop Advisory", icon: "🌱" },
  ];

  const renderCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
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
    height:110
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
