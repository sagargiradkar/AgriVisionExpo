import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";

const { width } = Dimensions.get("window");

const Orders = () => {
  const refRBSheet = useRef();

  // Dummy product data (replace with your actual product data)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bacillus thuringiensis (Bt)",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Bt is a microbial pesticide derived from bacteria. It produces toxins that specifically target certain insects, particularly caterpillars and larvae of moths and butterflies.",
      price: "Rs 1000",
    },
    {
      id: 2,
      name: "Spinosad",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Spinosad is a biochemical pesticide derived from the fermentation of soil bacteria. It affects the nervous system of insects, leading to paralysis and death.",
      price: "Rs 1200",
    },
    {
      id: 3,
      name: "Neem Oil",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Neem oil is a botanical pesticide extracted from the seeds of the neem tree. It acts as an insect growth regulator, disrupting the molting process and feeding behavior of insects.",
      price: "Rs 800",
    },
    {
      id: 4,
      name: "Pyrethrum",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Pyrethrum is a botanical pesticide extracted from chrysanthemum flowers. It affects the nervous system of insects, leading to paralysis and death.",
      price: "Rs 1500",
    },
    {
      id: 5,
      name: "Azadirachtin",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Azadirachtin is a biochemical pesticide extracted from neem tree seeds. It acts as an insect growth regulator, disrupting the molting process and feeding behavior of insects.",
      price: "Rs 900",
    },
    {
      id: 6,
      name: "Bacillus subtilis",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Bacillus subtilis is a microbial pesticide derived from bacteria naturally found in soil. It suppresses pathogenic fungi and bacteria.",
      price: "Rs 1100",
    },
    {
      id: 7,
      name: "Rotenone",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Rotenone is a botanical pesticide extracted from the roots of certain tropical plants. It interferes with the cellular respiration of insects and fish, leading to paralysis and death.",
      price: "Rs 1300",
    },
    {
      id: 8,
      name: "Beauveria bassiana",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Beauveria bassiana is a microbial pesticide derived from a naturally occurring fungus. It infects insects by attaching to their cuticles and penetrating their bodies.",
      price: "Rs 1400",
    },
    {
      id: 9,
      name: "Chlorpyrifos",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Chlorpyrifos is a synthetic organophosphate insecticide that inhibits the activity of acetylcholinesterase in insects, causing paralysis and death.",
      price: "Rs 1600",
    },
    {
      id: 10,
      name: "Diatomaceous Earth",
      image: require("../assets/images/pesticyd.png"),
      description:
        "Diatomaceous earth is a mechanical pesticide composed of the fossilized remains of diatoms. It dehydrates insects by absorbing their waxy outer layer.",
      price: "Rs 700",
    },
  ]);

  const handleBuyNow = (productId) => {
    // Logic to handle buying the product
  };

  const handleAddToCart = (productId) => {
    // Logic to handle adding the product to the cart
  };

  const handleShare = (product) => {
    // Logic to handle sharing the product
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productContent}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity onPress={() => handleBuyNow(item.id)}>
          <Text style={styles.buyButton}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAddToCart(item.id)}>
          <Text style={styles.cartButton}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleShare(item)}>
          <Text style={styles.shareButton}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Shop" onPress={() => refRBSheet.current.open()} />
      </View>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
      />
      <BottomSheet bottomSheetRef={refRBSheet} />
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
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    overflow: "hidden",
  },
  productImage: {
    marginTop:"20%",
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius:10,
  },
  productContent: {
    flex: 1,
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productDescription: {
    marginBottom: 5,
  },
  productPrice: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginBottom: 7,
    textAlign: "center",
  },
  cartButton: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginBottom: 7,
    textAlign: "center",
  },
  shareButton: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    textAlign: "center",
  },
});

export default Orders;
