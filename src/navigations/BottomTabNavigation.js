import React from "react";
import { Image, Platform } from "react-native"; // Add this import statement
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Community, Orders, Calendar } from "../screens";
import { COLORS, icons } from "../constants";
import CropPractice from "../screens/CropPractice";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: Platform.OS === "ios" ? 90 : 50,
    backgroundColor: COLORS.white,
    width: '100%',
    alignSelf: 'center', 
  },
  tabBarLabelStyle: {
    paddingBottom: 5, 
  },
  tabBarIndicatorStyle: {
    backgroundColor: COLORS.primary, // Set the color of the indicator
    height: 2, // Set the height of the indicator
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.home : icons.homeOutline}
              resizeMode="contain"
              style={{ height: 24, width: 24, tintColor: focused ? COLORS.primary : COLORS.black }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.shoppingBag : icons.shoppingBagOutline}
              resizeMode="contain"
              style={{ height: 24, width: 24, tintColor: focused ? COLORS.primary : COLORS.black }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Crop Practice"
        component={CropPractice}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.croppractice : icons.croppracticeOutline}
              resizeMode="contain"
              style={{ height: 25, width: 25, tintColor: focused ? COLORS.primary : COLORS.black }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.calendar : icons.calendarOutline}
              resizeMode="contain"
              style={{ height: 24, width: 24, tintColor: focused ? COLORS.primary : COLORS.black }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.chat : icons.chatOutline}
              resizeMode="contain"
              style={{ height: 24, width: 24, tintColor: focused ? COLORS.primary : COLORS.black }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
