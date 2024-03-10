import React from "react";
import { View, Text, Image, TouchableOpacity,} from "react-native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { COLORS, images } from "../constants";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import BottomTabNavigation from "./BottomTabNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Address,
  Faqs,
  Favourite,
  Help,
  Notifications,
  Orders,
  PaymentMethod,
  Profile,
  Search,
} from "../screens";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <TouchableOpacity onPress={() => { props.navigation.navigate("Profile");}}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  backgroundColor: COLORS.mint,
                }}
              >
                {/* First Column */}
                <View style={{ marginRight: 20 }}>
                  <Image
                    source={images.profile}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 50,
                      marginBottom: 12,
                    }}
                  />
                </View>

                {/* Second Column */}
                <View style={{ flex: 1 }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: COLORS.black,
                        marginBottom: 0,
                      }}
                    >
                      Sagar Giradkar
                    </Text>
                    <Text style={{ fontSize: 14, color: COLORS.black }}>
                      +91 9168801192
                    </Text>
                  </View>

                  {/* Button */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.darkgray,
                      width: 50,
                      borderRadius: 5,
                      height: 20,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: COLORS.black }}>Basic</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            {/* Drawer items */}
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.mint,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.mint,
        },
        headerShown: false,
        headerTintColor: COLORS.black,
        drawerLabelStyle: {
          color: COLORS.black,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: "Orders",
          title: "Orders",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="gift-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Orders}
      />
      <Drawer.Screen
        name="Search"
        options={{
          drawerLabel: "Search",
          title: "Search",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Search}
      />
      <Drawer.Screen
        name="Wishlist"
        options={{
          drawerLabel: "Wishlist",
          title: "Wishlist",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="heart-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Favourite}
      />
      <Drawer.Screen
        name="Delivery Address"
        options={{
          drawerLabel: "Delivery Address",
          title: "Delivery Address",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="location-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Address}
      />
      <Drawer.Screen
        name="Payment Methods"
        options={{
          drawerLabel: "Payment Methods",
          title: "Payment Methods",
          headerShadowVisible: false,
          drawerIcon: () => (
            <AntDesign name="creditcard" size={24} color={COLORS.black} />
          ),
        }}
        component={PaymentMethod}
      />
      {/* <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: "Notifications",
          title: "Notifications",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={Notifications}
      /> */}
      <Drawer.Screen
        name="FAQ"
        options={{
          drawerLabel: "FAQ",
          title: "FAQ",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="filter-circle"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={Faqs}
      />
      <Drawer.Screen
        name="Help"
        options={{
          drawerLabel: "Help",
          title: "Help",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Feather name="help-circle" size={24} color={COLORS.black} />
          ),
        }}
        component={Help}
      />
      {/* <Drawer.Screen
        name="Logout"
        options={{
          drawerLabel: "Logout",
          title: "Logout",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Feather name="log-out" size={24} color={COLORS.black} />
          ),
        }}
        component={Login}
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
            // Execute the logout function
            handleLogout();
          },
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
