import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import LottieView from "lottie-react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState({
    main: {
      temp: 20, // Dummy temperature value
    },
    weather: [
      {
        description: "Clear", // Dummy weather description
      },
    ],
  });
  const refRBSheet = useRef();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Weather" onPress={() => refRBSheet.current.open()} />
        {weatherData && weatherData.main && (
          <View style={styles.weatherInfoContainer}>
            <LottieView
              source={require("../assets/whether.json")}
              autoPlay
              loop
              style={styles.weatherAnimation}
            />
            <Text style={styles.weatherText}>
              Temperature: {weatherData.main.temp}°C
            </Text>
            <Text style={styles.weatherText}>
              Description: {weatherData.weather[0].description}
            </Text>
          </View>
        )}
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
  weatherInfoContainer: {
    padding: 20,
    alignItems: "center",
  },
  weatherAnimation: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default WeatherScreen;
