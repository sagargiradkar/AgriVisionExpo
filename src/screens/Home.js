import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";
import Dashboard from "./Dashboard";
import Background from "../components/Background";
const { width } = Dimensions.get("window");

const Home = () => {
  const refRBSheet = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  // Data for your banners
  const banners = [
    { id: "1", image: require("../assets/banners/banner1.jpg") },
    { id: "2", image: require("../assets/banners/banner2.jpg") },
  ];

  // Render item for FlatList
  const renderBannerItem = ({ item }) => (
    <Image source={item.image} style={[styles.bannerImage]} />
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage === banners.length - 1 ? 0 : prevPage + 1
      );
      // Automatically scroll to the next page
      scrollToNextPage();
    }, 3000); // Change the interval as needed
    return () => clearInterval(interval);
  }, [currentPage]);

  // Function to scroll to the next page
  const scrollToNextPage = () => {
    const nextPage = currentPage + 1 >= banners.length ? 0 : currentPage + 1;
    // Calculate the offset for the next page
    const offset = nextPage * width;
    flatListRef.current.scrollToOffset({ animated: true, offset });
  };

  const flatListRef = useRef();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Home" onPress={() => refRBSheet.current.open()} />
        {/* FlatList for displaying banners */}
        <View style={styles.container}>
          <FlatList
            ref={flatListRef}
            data={banners}
            renderItem={renderBannerItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onMomentumScrollEnd={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / width
              );
              setCurrentPage(index);
            }}
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />
          <View style={styles.pagination}>
            {banners.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, index === currentPage && styles.activeDot]}
              />
            ))}
          </View>
        </View>
      </View>

      <Dashboard />
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
    marginTop: 8,
    marginHorizontal: 10,
  },
  bannerImage: {
    width: width - 33,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10,
    gap: 10,
    resizeMode: "cover",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: -1,
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: COLORS.gray,
    margin: 5,
    marginTop: 10,
  },
  activeDot: {
    backgroundColor: COLORS.darkgray,
  },
});

export default Home;
