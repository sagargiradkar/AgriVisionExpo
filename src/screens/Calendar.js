import React, { useRef, useState } from "react";
import { View, SafeAreaView, StyleSheet, Button, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";

const CalendarScreen = () => {
  const refRBSheet = useRef();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  // Function to handle selection of a date on the calendar
  const handleDateSelect = (date) => {
    if (!selectedStartDate) {
      setSelectedStartDate(date.dateString);
    } else if (!selectedEndDate) {
      setSelectedEndDate(date.dateString);
    } else {
      // Clear previous selections if both start and end dates are already selected
      setSelectedStartDate(date.dateString);
      setSelectedEndDate(null);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Calendar" onPress={() => refRBSheet.current.open()} />
      </View>
      <Calendar
        onDayPress={(day) => handleDateSelect(day)}
        markedDates={{
          [selectedStartDate]: { selected: true, startingDay: true },
          [selectedEndDate]: { selected: true, endingDay: true },
        }}
      />
      <View style={styles.datesContainer}>
        <Text style={styles.dateText}>
          Start Date: {selectedStartDate ? selectedStartDate : "Not Selected"}
        </Text>
        <Text style={styles.dateText}>
          End Date: {selectedEndDate ? selectedEndDate : "Not Selected"}
        </Text>
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
  datesContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  dateText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default CalendarScreen;
