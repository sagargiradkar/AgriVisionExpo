import React, { useRef } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";

const { width } = Dimensions.get("window");

const Notification = () => {
  const refRBSheet = useRef();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header
          title="Notification"
          onPress={() => refRBSheet.current.open()}
        />
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
    bottom: 0,
    alignSelf: "center",
  },
  dot: {
    width: 20,
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

export default Notification;
