import { View,StyleSheet } from "react-native";
import React ,{useRef} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";

const Orders = () => {
  const refRBSheet = useRef()
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Shop"  onPress={()=>refRBSheet.current.open()} />
      </View>
      <BottomSheet bottomSheetRef={refRBSheet} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
});
export default Orders;
