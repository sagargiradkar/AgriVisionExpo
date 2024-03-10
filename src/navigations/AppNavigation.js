import React ,{useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DrawerNavigation from "./DrawerNavigation";
import { Address } from "../screens";
import Background from "../components/Background";
import { View,Text, } from "react-native";
import { StackActions } from '@react-navigation/native';
import Advertisement from "../screens/Advertisement";
import CropPractice from "../screens/CropPractice";
import WeatherScreen from "../screens/WeatherScreen";
import CropCareScreen from "../screens/CropCareScreen";
import ProgressScreen from "../screens/ProgressScreen";
import VideosScreen from "../screens/VideosScreen";
import CropAdvisoryScreen from "../screens/CropAdvisoryScreen";
import MarketplaceScreen from "../screens/MarketplaceScreen";
const Stack = createNativeStackNavigator();

function SplashScreen({ navigation }) {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Retrieve email and password from AsyncStorage
        const email = await AsyncStorage.getItem("email");
        const password = await AsyncStorage.getItem("password");

        // Check if email and password are available
        if (email && password) {
          navigation.dispatch(StackActions.replace("Main"));
        } else {
          navigation.dispatch(StackActions.replace("Login"));
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, [navigation]);

  return (
    <Background>
      <View style={{ marginHorizontal: 30, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 50 }}>
          Embark on your agricultural journey with
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          Agri Vision
        </Text>
      </View>
    </Background>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Main" component={DrawerNavigation} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Advertisement" component={Advertisement} />
        <Stack.Screen name="Crop Practice" component={CropPractice} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
      <Stack.Screen name="Crop Care" component={CropCareScreen} />
      <Stack.Screen name="Progress" component={ProgressScreen} />
      <Stack.Screen name="Videos" component={VideosScreen} />
      <Stack.Screen name="Crop Advisory" component={CropAdvisoryScreen} />
      <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
