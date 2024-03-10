import React, { useRef, useState } from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet, Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";
import { COLORS } from "../constants";

const { width } = Dimensions.get("window");

const mockMarketData = [
  { crop: 'Potato', price: 20 },
  { crop: 'Tomato', price: 30 },
  { crop: 'Onion', price: 25 },
  { crop: 'Cabbage', price: 15 },
  { crop: 'Carrot', price: 35 },
  { crop: 'Spinach', price: 18 },
  { crop: 'Cauliflower', price: 28 },
  { crop: 'Brinjal', price: 22 },
  { crop: 'Capsicum', price: 40 },
  { crop: 'Radish', price: 12 },
];

const MarketplaceScreen = () => {
  const refRBSheet = useRef();
  const [marketData, setMarketData] = useState(mockMarketData);

  const renderItem = ({ item }) => (
    <View style={styles.cropItem}>
      <Text style={styles.cropName}>{item.crop}</Text>
      <Text style={styles.cropPrice}>Rs. {item.price}/kg</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Marketplace" onPress={() => refRBSheet.current.open()} />
      </View>
      <FlatList
        data={marketData}
        renderItem={renderItem}
        keyExtractor={(item) => item.crop}
        style={styles.container}
      />
      <LineChart
        data={{
          labels: marketData.map((item) => item.crop),
          datasets: [{ data: marketData.map((item) => item.price) }],
        }}
        width={width - 20} // from react-native
        height={220}
        yAxisLabel="₹"
        chartConfig={{
          backgroundColor: COLORS.mint,
          backgroundGradientFrom: COLORS.mint,
          backgroundGradientTo: COLORS.mint,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: COLORS.darkgray,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
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
  cropItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightgray,
  },
  cropName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  cropPrice: {
    fontSize: 14,
    color: COLORS.gray,
  },
});

export default MarketplaceScreen;
