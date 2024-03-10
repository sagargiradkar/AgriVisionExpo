import React, { useRef } from "react";
import { View, SafeAreaView,Text, StyleSheet, Dimensions } from "react-native";
import BottomSheet from "../components/BottomSheet";
import { COLORS } from "../constants";
import { BarChart } from 'react-native-chart-kit';
import Header  from "../components/BottomSheet";
const { width } = Dimensions.get("window");

const ProgressScreen = () => {
  const refRBSheet = useRef();

  // Dummy data for plant growth progress
  const plantGrowthData = {
    labels: ["Daily", "Monthly", "3 Months"],
    datasets: [
      {
        data: [80, 60, 90] // Dummy data for plant growth progress
      }
    ]
  };

  // Dummy data for expenses
  const expenseData = {
    labels: ["Daily", "Weekly", "Monthly", "3 Months", "6 Months", "Yearly"],
    datasets: [
      {
        data: [200, 1500, 5000, 15000, 30000, 60000] // Dummy data for expenses
      }
    ]
  };

  // Custom colors for bars
  const barColors = [COLORS.primary, COLORS.secondary, COLORS.tertiary];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Progress" onPress={() => refRBSheet.current.open()} />
      </View>
      <View style={styles.container}>
        <Text style={styles.graphTitle}>Plant Growth Progress</Text>
        <BarChart
          data={plantGrowthData}
          width={width - 20}
          height={220}
          yAxisSuffix="%"
          chartConfig={{
            backgroundColor: COLORS.mint,
            backgroundGradientFrom: COLORS.mint,
            backgroundGradientTo: COLORS.mint,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: COLORS.darkgray,
            },
            barColors: barColors, // Apply custom colors to bars
          }}
          verticalLabelRotation={30}
        />
        <Text style={styles.graphTitle}>Farming Expenses</Text>
        <BarChart
          data={expenseData}
          width={width - 20}
          height={220}
          yAxisSuffix="₹"
          chartConfig={{
            backgroundColor: COLORS.mint,
            backgroundGradientFrom: COLORS.mint,
            backgroundGradientTo: COLORS.mint,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: COLORS.darkgray,
            },
            barColors: barColors, // Apply custom colors to bars
          }}
          verticalLabelRotation={30}
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
    marginTop: 20,
    marginHorizontal: 10,
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ProgressScreen;