import React, { useRef, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TextInput,
} from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";

// Sample data for crops with categories
const cropsData = [
  {
    category: "Spices",
    crops: [
      {
        id: 1,
        name: "Black Pepper",
        image: require("../assets/images/avatar.png"),
      },
      {
        id: 2,
        name: "Cinnamon",
        image: require("../assets/images/cinnamon.png"),
      },
      {
        id: 3,
        name: "Turmeric",
        image: require("../assets/images/termeric.png"),
      },
      { id: 4, name: "Ginger", image: require("../assets/images/Ginger.png") },
      {
        id: 5,
        name: "Cloves",
        image: require("../assets/images/allevo vera.png"),
      },
      {
        id: 6,
        name: "Black Pepper",
        image: require("../assets/images/avatar.png"),
      },
    ],
  },
  {
    category: "Medicinal",
    crops: [
      {
        id: 1,
        name: "Aloe Vera",
        image: require("../assets/images/avatar.png"),
      },
      {
        id: 2,
        name: "Stevia",
        image: require("../assets/images/cinnamon.png"),
      },
      {
        id: 3,
        name: "Ginseng",
        image: require("../assets/images/termeric.png"),
      },
      {
        id: 4,
        name: "Echinacea",
        image: require("../assets/images/Ginger.png"),
      },
      {
        id: 5,
        name: "Lavender",
        image: require("../assets/images/allevo vera.png"),
      },
    ],
  },
  {
    category: "Aromatic",
    crops: [
      { id: 1, name: "Rose", image: require("../assets/images/avatar.png") },
      {
        id: 2,
        name: "Jasmine",
        image: require("../assets/images/cinnamon.png"),
      },
      {
        id: 3,
        name: "Patchouli",
        image: require("../assets/images/termeric.png"),
      },
      {
        id: 4,
        name: "Sandalwood",
        image: require("../assets/images/Ginger.png"),
      },
      {
        id: 5,
        name: "Lemon Balm",
        image: require("../assets/images/allevo vera.png"),
      },
    ],
  },
  {
    category: "Pulses",
    crops: [
      {
        id: 1,
        name: "Chickpeas",
        image: require("../assets/images/avatar.png"),
      },
      {
        id: 2,
        name: "Lentils",
        image: require("../assets/images/cinnamon.png"),
      },
      {
        id: 3,
        name: "Black Beans",
        image: require("../assets/images/termeric.png"),
      },
      {
        id: 4,
        name: "Green Peas",
        image: require("../assets/images/Ginger.png"),
      },
      {
        id: 5,
        name: "Kidney Beans",
        image: require("../assets/images/allevo vera.png"),
      },
    ],
  },
  {
    category: "Cereals",
    crops: [
      { id: 1, name: "Rice", image: require("../assets/images/avatar.png") },
      { id: 2, name: "Wheat", image: require("../assets/images/cinnamon.png") },
      { id: 3, name: "Maize", image: require("../assets/images/termeric.png") },
      { id: 4, name: "Barley", image: require("../assets/images/Ginger.png") },
      {
        id: 5,
        name: "Oats",
        image: require("../assets/images/allevo vera.png"),
      },
    ],
  },
  {
    category: "Oils",
    crops: [
      { id: 1, name: "Olive", image: require("../assets/images/avatar.png") },
      {
        id: 2,
        name: "Coconut",
        image: require("../assets/images/cinnamon.png"),
      },
      { id: 3, name: "Palm", image: require("../assets/images/termeric.png") },
      { id: 4, name: "Soybean", image: require("../assets/images/Ginger.png") },
      {
        id: 5,
        name: "Sunflower",
        image: require("../assets/images/allevo vera.png"),
      },
    ],
  },
  {
    category: "Plantation",
    crops: [
      { id: 1, name: "Tea", image: require("../assets/images/avatar.png") },
      {
        id: 2,
        name: "Coffee",
        image: require("../assets/images/cinnamon.png"),
      },
      { id: 3, name: "Cocoa", image: require("../assets/images/termeric.png") },
      { id: 4, name: "Rubber", image: require("../assets/images/Ginger.png") },
      {
        id: 5,
        name: "Coconut",
        image: require("../assets/images/allevo vera.png"),
      },
    ],
  },
  {
    category: "Cash Crop",
    crops: [
      { id: 1, name: "Cotton", image: require("../assets/images/avatar.png") },
      {
        id: 2,
        name: "Sugarcane",
        image: require("../assets/images/cinnamon.png"),
      },
      {
        id: 3,
        name: "Tobacco",
        image: require("../assets/images/termeric.png"),
      },
      { id: 4, name: "Coffee", image: require("../assets/images/Ginger.png") },
      {
        id: 5,
        name: "Cocoa",
        image: require("../assets/images/allevo vera.png"),
      },
    ],
  },
];
const CropPractice = () => {
  const refRBSheet = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Handler for search input change
  // Handler for search input change
  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
    if (query.trim() !== "") {
      const results = cropsData
        .flatMap(({ crops }) => crops)
        .filter((crop) =>
          crop.name.toLowerCase().includes(query.trim().toLowerCase())
        );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Render item for FlatList
  // Render item for FlatList
  const renderItem = ({ item }) => {
    let crops = item.crops;

    // Insert dummy item if the number of crops is odd
    if (crops.length % 2 !== 0) {
      crops = [...crops, null];
    }

    // Check if search query is not empty and crop is not in search results
    if (
      searchQuery.trim() !== "" &&
      !searchResults.some((crop) => crop.id === item.id)
    ) {
      return null; // Hide the category if the crop is not in search results
    }

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.categoryTitle}>{item.category}</Text>
        <FlatList
          data={crops}
          renderItem={renderCropItem}
          keyExtractor={(crop) => (crop ? crop.id.toString() : "dummy")}
          numColumns={2}
          contentContainerStyle={styles.cropContainer}
        />
      </View>
    );
  };

  // Render item for crops within a category
  const renderCropItem = ({ item }) => {
    if (!item) {
      return <View style={styles.cropItem} />; // Render empty view for dummy item
    }

    return (
      <View style={styles.cropItem}>
        <Image source={item.image} style={styles.cropImage} />
        <Text style={styles.cropName}>{item.name}</Text>
      </View>
    );
  };
  // Render item for crops within a category
  // Render item for crops within a category
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header
          title="Crop Practice"
          onPress={() => refRBSheet.current.open()}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search crop..."
          value={searchQuery}
          onChangeText={handleSearchInputChange}
        />
      </View>

      {/* FlatList for displaying categories and crops */}
      <FlatList
        data={cropsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.category}
        contentContainerStyle={styles.container}
        ListHeaderComponent={<View />} // Empty view to prevent category headers from scrolling
        ListFooterComponent={<BottomSheet bottomSheetRef={refRBSheet} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.mint,
    marginBottom:"10%"
  },
  container: {
    marginHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cropContainer: {
    justifyContent: "space-between",
  },
  cropItem: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cropImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  cropName: {
    fontSize: 16,
  },
  searchInput: {
    height: 40,
    margin: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000000",
  },
});

export default CropPractice;
