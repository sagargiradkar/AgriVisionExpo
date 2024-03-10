import React, { useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ToastAndroid } from "react-native";

import { COLORS } from "../constants";
import BottomSheet from "../components/BottomSheet";

const Profile = ({ navigation }) => {
  const refRBSheet = useRef();
  const [image, setImage] = useState(
    "https://res.cloudinary.com/disl8qg3k/image/upload/v1707374531/ACM/PHOTO1_prev_ui_mszyym.png" // Dummy image URL
  );
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [mobileNumber, setMobileNumber] = useState("+1234567890");
  const [address, setAddress] = useState("123 Street, City, Country");
  const [country, setCountry] = useState("India"); // Set dummy data
  const [location, setLocation] = useState("Location 1"); // Set dummy data
  const [language, setLanguage] = useState("English"); // Set dummy data
  const [cropPreferences, setCropPreferences] = useState([
    "Rice",
    "Wheat",
    "Soya",
  ]);

  const requiredFields = [name, email, mobileNumber, address, country, location, language];
  const totalFields = requiredFields.length;
  const filledFields = requiredFields.filter(field => field !== "").length;
  const percentageFilled = (filledFields / totalFields) * 100;

  const handleSave = () => {
    // Implement saving logic here
    console.log("Profile saved!");
    navigation.navigate("Main");

    // Display a toast message
    ToastAndroid.show("Profile Updated Succesfully ", ToastAndroid.SHORT);
  };

  const handleReset = () => {
    // Implement resetting logic here
    console.log("Profile reset!");
    ToastAndroid.show("Profile Reset Succesfully ", ToastAndroid.SHORT);
  };

  const selectImage = () => {
    // Your image picker logic here
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        {/* Profile Image */}
        <TouchableOpacity onPress={selectImage} style={styles.profileImageContainer}>
          <Image source={{ uri: image }} style={styles.profileImage} />
        </TouchableOpacity>
        {/* Other Profile Fields */}
        <View style={styles.profileField}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.value}
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Enter your name"
          />
        </View>
        <View style={styles.profileField}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.value}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter your email"
          />
        </View>
        <View style={styles.profileField}>
          <Text style={styles.label}>Mobile Number:</Text>
          <TextInput
            style={styles.value}
            value={mobileNumber}
            onChangeText={text => setMobileNumber(text)}
            placeholder="Enter your mobile number"
          />
        </View>
        <View style={styles.profileField}>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.value}
            value={address}
            onChangeText={text => setAddress(text)}
            placeholder="Enter your address"
          />
        </View>
        <View style={styles.profileField}>
          <Text style={styles.label}>Country:</Text>
          <TextInput
            style={styles.value}
            value={country}
            onChangeText={text => setCountry(text)}
            placeholder="Enter your country"
          />
        </View>
        <View style={styles.profileField}>
          <Text style={styles.label}>Location:</Text>
          <TextInput
            style={styles.value}
            value={location}
            onChangeText={text => setLocation(text)}
            placeholder="Enter your location"
          />
        </View>
        <View style={styles.profileField}>
          <Text style={styles.label}>Language:</Text>
          <TextInput
            style={styles.value}
            value={language}
            onChangeText={text => setLanguage(text)}
            placeholder="Enter your language"
          />
        </View>
        {/* Crop Preferences */}
        <View style={styles.profileField}>
          <Text style={styles.label}>Crop Preferences:</Text>
          {cropPreferences.map((crop, index) => (
            <Text key={index} style={styles.value}>
              {crop}
            </Text>
          ))}
        </View>
         {/* Percentage of Required Fields */}
         <Text style={styles.percentageText}>
          {`${percentageFilled.toFixed(2)}% of required fields filled`}
        </Text>
        {/* Reset and Save Buttons */}
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
       
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
    marginTop: 10,
    marginHorizontal: 10,
  },
  profileImageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: "cover",
  },
  profileField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.black,
  },
  value: {
    fontSize: 16,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 5,
    marginVertical: 4,
    marginHorizontal:140,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  percentageText: {
    textAlign: "center",
    marginTop: 10,
    color: COLORS.black,
  },
});

export default Profile;
