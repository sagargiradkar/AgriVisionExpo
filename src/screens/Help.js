import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Modal,
  Linking,
} from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";
import * as Location from "expo-location"; // Import Location module from Expo
import MapView, { Marker } from "react-native-maps";

const { width } = Dimensions.get("window");

const Help = () => {
  const refRBSheet = useRef();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (errorMsg) {
      showToast(errorMsg);
    }
  }, [errorMsg]);

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const callNumber = () => {
    const phoneNumber = "8788179375";
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Help" onPress={() => refRBSheet.current.open()} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Agri Vision Pune {"\n"}{"\n"}Pune Vidyarthi Grih College of Engineering and Technology , {"\n"}{"\n"}Parvati, Pune, 411009</Text>

        <Text style={styles.text}>
          Technical Support: support@agrivisionpune.com
        </Text>
        <Text style={styles.text}>
          Customer Care: customercare@agrivisionpune.com
        </Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 18.50418,
            longitude: 73.8457,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: 18.50418, longitude: 73.8457 }}
            title="Agri Vision Pune"
            description="Pune Vidyarthi Grih College of Engineering and Technology, Parvati, Pune, 411009"
          />
        </MapView>
      </View>
      <View style={styles.contactButtonContainer}>
        <TouchableOpacity style={styles.contactButton} onPress={openModal}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet bottomSheetRef={refRBSheet} />

      {/* Modal for Contact Us */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contact Us</Text>
            <Text style={styles.modalText}>
              For any queries or support, please contact us at:
            </Text>
            <Text style={styles.modalText}>
              Email: support@agrivisionpune.com
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.callButton} onPress={callNumber}>
                <Text style={styles.callButtonText}>Call Us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    marginHorizontal: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  mapContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden",
    borderBlockColor:COLORS.black
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contactButtonContainer: {
    alignItems: "center",
  },
  contactButton: {
    backgroundColor: COLORS.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom:50,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 16,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: COLORS.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  closeButtonText: {
    color: COLORS.white,
    fontSize: 16,
  },
  callButton: {
    backgroundColor: COLORS.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  callButtonText: {
    color: COLORS.white,
    fontSize: 16,
  },
});

export default Help;
