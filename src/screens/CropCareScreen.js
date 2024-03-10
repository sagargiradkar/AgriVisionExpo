import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { COLORS} from "../constants/theme";

const categories = [
  {
    category: "Spices",
    crops: [
      {
        id: 1,
        name: "Black Pepper",
        image: require("../assets/images/allevo vera.png"),
        disease: "Pepper Leaf Spot",
        pesticide: "Mancozeb",
        description:
          "Black pepper, scientifically known as Piper nigrum, is a flowering vine cultivated for its fruit, which is usually dried and used as a spice and seasoning. The plant is native to South India but is now grown in other tropical regions as well. Black pepper plants require warm and humid climates to thrive and are typically cultivated in areas with temperatures ranging from 75°F to 95°F. One common disease that affects black pepper plants is pepper leaf spot. Pepper leaf spot is caused by fungal pathogens and manifests as small, dark lesions on the leaves of the plant. These lesions can reduce photosynthetic efficiency and lead to decreased yields if left untreated. To manage pepper leaf spot, farmers often use fungicides containing active ingredients like Mancozeb. Additionally, cultural practices such as proper irrigation and spacing can help reduce the spread of the disease.",
      },
      {
        id: 2,
        name: "Cinnamon",
        image: require("../assets/images/avatar.png"),
        disease: "Cinnamon Fungal Diseases",
        pesticide: "Copper Fungicides",
        description:
          "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. It is widely used in both sweet and savory dishes and is known for its distinct aroma and flavor. Cinnamon trees are native to South Asia and are cultivated in tropical regions worldwide. Cinnamon trees are susceptible to various fungal diseases, including cinnamon fungal diseases. These diseases can cause leaf spots, stem cankers, and rotting of roots, ultimately affecting the growth and productivity of the trees. To manage cinnamon fungal diseases, farmers often use copper fungicides, which help control fungal pathogens. Additionally, maintaining proper sanitation practices and ensuring adequate airflow around the trees can help prevent the spread of diseases.",
      },
      {
        id: 3,
        name: "Turmeric",
        image: require("../assets/images/cinnamon.png"),
        disease: "Turmeric Rhizome Rot",
        pesticide: "Trichoderma Viride",
        description:
          "Turmeric, scientifically known as Curcuma longa, is a flowering plant of the ginger family, Zingiberaceae. It is widely used as a spice and coloring agent in culinary dishes and traditional medicine. Turmeric plants are native to South Asia and are cultivated primarily for their rhizomes, which are ground into a yellow-orange powder. One common disease that affects turmeric plants is turmeric rhizome rot. This fungal disease is caused by pathogens like Pythium spp. and Rhizoctonia spp. and can lead to the decay of turmeric rhizomes. Symptoms of turmeric rhizome rot include softening and discoloration of the rhizomes, which can ultimately result in reduced yields and economic losses for farmers. To manage turmeric rhizome rot, farmers often use Trichoderma Viride-based biocontrol agents, which help suppress fungal pathogens in the soil. Additionally, practicing crop rotation and maintaining optimal soil moisture levels can help reduce the incidence of the disease.",
      },
      {
        id: 4,
        name: "Ginger",
        image: require("../assets/images/termeric.png"),
        disease: "Ginger Rhizome Rot",
        pesticide: "Metalaxyl",
        description:
          "Ginger, scientifically known as Zingiber officinale, is a flowering plant cultivated for its rhizomes, which are widely used as a spice and flavoring agent in culinary dishes and traditional medicine. Ginger plants are native to Southeast Asia and are now cultivated in tropical and subtropical regions worldwide. Ginger plants are susceptible to various fungal diseases, including ginger rhizome rot. This disease is caused by pathogens like Pythium spp. and Fusarium spp. and can lead to the decay of ginger rhizomes, reducing yields and quality. Symptoms of ginger rhizome rot include softening and browning of the rhizomes, which can eventually result in plant death. To manage ginger rhizome rot, farmers often use fungicides containing active ingredients like Metalaxyl, which help control fungal pathogens. Additionally, practicing proper sanitation and crop rotation can help prevent the spread of the disease.",
      },
      {
        id: 5,
        name: "Cloves",
        image: require("../assets/images/avatar.png"),
        disease: "Cloves Wilt",
        pesticide: "Propiconazole",
        description:
          "Cloves are the aromatic flower buds of the clove tree, Syzygium aromaticum, native to the Maluku Islands in Indonesia. They are harvested and dried before being used as a spice in various cuisines and traditional medicine. Clove trees require warm, humid climates to thrive and are cultivated in tropical regions worldwide. Clove trees are susceptible to various diseases, including clove wilt. Clove wilt is a fungal disease caused by pathogens like Fusarium spp. and Phytophthora spp. that affect the roots of the trees, leading to wilting and eventual death. Symptoms of clove wilt include yellowing and drooping of leaves, stunted growth, and root rot. To manage clove wilt, farmers often use fungicides containing active ingredients like Propiconazole, which help control fungal pathogens. Additionally, practicing proper irrigation and soil drainage can help reduce the incidence of the disease.",
      },
      {
        id: 6,
        name: "Turmeric",
        image: require("../assets/images/cinnamon.png"),
        disease: "Turmeric Rhizome Rot",
        pesticide: "Trichoderma Viride",
        description:
          "Turmeric, scientifically known as Curcuma longa, is a flowering plant of the ginger family, Zingiberaceae. It is widely used as a spice and coloring agent in culinary dishes and traditional medicine. Turmeric plants are native to South Asia and are cultivated primarily for their rhizomes, which are ground into a yellow-orange powder. One common disease that affects turmeric plants is turmeric rhizome rot. This fungal disease is caused by pathogens like Pythium spp. and Rhizoctonia spp. and can lead to the decay of turmeric rhizomes. Symptoms of turmeric rhizome rot include softening and discoloration of the rhizomes, which can ultimately result in reduced yields and economic losses for farmers. To manage turmeric rhizome rot, farmers often use Trichoderma Viride-based biocontrol agents, which help suppress fungal pathogens in the soil. Additionally, practicing crop rotation and maintaining optimal soil moisture levels can help reduce the incidence of the disease.",
      },
    ],
  },
  {
    category: "Fruits",
    crops: [
      {
        id: 6,
        name: "Apple",
        image: require("../assets/images/allevo vera.png"),
        disease: "Apple Scab",
        pesticide: "Fungicides",
        description: "Description of how to care for Apple crops.",
      },
      {
        id: 7,
        name: "Banana",
        image: require("../assets/images/avatar.png"),
        disease: "Panama Disease",
        pesticide: "Nematicides",
        description: "Description of how to care for Banana crops.",
      },
      {
        id: 8,
        name: "Mango",
        image: require("../assets/images/Ginger.png"),
        disease: "Anthracnose",
        pesticide: "Fungicides",
        description: "Description of how to care for Mango crops.",
      },
      {
        id: 9,
        name: "Orange",
        image: require("../assets/images/pesticyd.png"),
        disease: "Citrus Canker",
        pesticide: "Bactericides",
        description: "Description of how to care for Orange crops.",
      },
      {
        id: 10,
        name: "Grapes",
        image: require("../assets/images/pesticyd.png"),
        disease: "Powdery Mildew",
        pesticide: "Fungicides",
        description: "Description of how to care for Grapes crops.",
      },
    ],
  },
  {
    category: "Vegetables",
    crops: [
      {
        id: 11,
        name: "Tomato",
        image: require("../assets/images/Ginger.png"),
        disease: "Late Blight",
        pesticide: "Fungicides",
        description: "Description of how to care for Tomato crops.",
      },
      {
        id: 12,
        name: "Carrot",
        image: require("../assets/images/pesticyd.png"),
        disease: "Carrot Fly",
        pesticide: "Insecticides",
        description: "Description of how to care for Carrot crops.",
      },
      {
        id: 13,
        name: "Cabbage",
        image: require("../assets/images/Ginger.png"),
        disease: "Clubroot",
        pesticide: "Fungicides",
        description: "Description of how to care for Cabbage crops.",
      },
      {
        id: 14,
        name: "Broccoli",
        image: require("../assets/images/avatar.png"),
        disease: "Downy Mildew",
        pesticide: "Fungicides",
        description: "Description of how to care for Broccoli crops.",
      },
      {
        id: 15,
        name: "Spinach",
        image: require("../assets/images/Ginger.png"),
        disease: "Downy Mildew",
        pesticide: "Fungicides",
        description: "Description of how to care for Spinach crops.",
      },
    ],
  },
  {
    category: "Grains",
    crops: [
      {
        id: 1,
        name: "Rice",
        image: require("../assets/images/Ginger.png"),
        disease: "Blast Disease",
        pesticide: "Fungicides",
        description: "Description of how to care for Rice crops.",
      },
      {
        id: 2,
        name: "Wheat",
        image: require("../assets/images/termeric.png"),
        disease: "Rust Disease",
        pesticide: "Fungicides",
        description: "Description of how to care for Wheat crops.",
      },
      {
        id: 3,
        name: "Corn",
        image: require("../assets/images/Ginger.png"),
        disease: "Corn Smut",
        pesticide: "Fungicides",
        description: "Description of how to care for Corn crops.",
      },
      {
        id: 4,
        name: "Barley",
        image: require("../assets/images/pesticyd.png"),
        disease: "Powdery Mildew",
        pesticide: "Fungicides",
        description: "Description of how to care for Barley crops.",
      },
      {
        id: 5,
        name: "Oats",
        image: require("../assets/images/cinnamon.png"),
        disease: "Crown Rust",
        pesticide: "Fungicides",
        description: "Description of how to care for Oats crops.",
      },
      {
        id: 6,
        name: "Barley",
        image: require("../assets/images/pesticyd.png"),
        disease: "Powdery Mildew",
        pesticide: "Fungicides",
        description: "Description of how to care for Barley crops.",
      },
    ],
  },
  {
    category: "Legumes",
    crops: [
      {
        id: 1,
        name: "Soybean",
        image: require("../assets/images/Ginger.png"),
        disease: "Soybean Rust",
        pesticide: "Fungicides",
        description: "Description of how to care for Soybean crops.",
      },
      {
        id: 2,
        name: "Pea",
        image: require("../assets/images/pesticyd.png"),
        disease: "Powdery Mildew",
        pesticide: "Fungicides",
        description: "Description of how to care for Pea crops.",
      },
      {
        id: 3,
        name: "Lentil",
        image: require("../assets/images/pesticyd.png"),
        disease: "Ascochyta Blight",
        pesticide: "Fungicides",
        description: "Description of how to care for Lentil crops.",
      },
      {
        id: 4,
        name: "Chickpea",
        image: require("../assets/images/cinnamon.png"),
        disease: "Ascochyta Blight",
        pesticide: "Fungicides",
        description: "Description of how to care for Chickpea crops.",
      },
      {
        id: 5,
        name: "Peanut",
        image: require("../assets/images/Ginger.png"),
        disease: "Leaf Spot",
        pesticide: "Fungicides",
        description: "Description of how to care for Peanut crops.",
      },
      {
        id: 6,
        name: "Peanut",
        image: require("../assets/images/Ginger.png"),
        disease: "Leaf Spot",
        pesticide: "Fungicides",
        description: "Description of how to care for Peanut crops.",
      },
    ],
  },
];
const CropCareScreen = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCropPress = (crop) => {
    setSelectedCrop(crop);
    setShowModal(true);
  };

  const renderCropItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleCropPress(item)}
      style={styles.cropItem}
    >
      <View style={styles.cropCard}>
        <Image source={item.image} style={styles.cropImage} />
        <Text style={styles.cropName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }) => {
    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{item.category}</Text>
        <FlatList
          data={item.crops}
          renderItem={renderCropItem}
          keyExtractor={(crop) => crop.id.toString()}
          horizontal={false}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContent}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(category) => category.category}
        contentContainerStyle={styles.container}
      />
      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={selectedCrop?.image} style={styles.modalImage} />
            <Text style={styles.modalName}>{selectedCrop?.name}</Text>
            <Text style={styles.modalDescription}>
              {selectedCrop?.description}
            </Text>
            <Text style={styles.modalDisease}>
              Disease: {selectedCrop?.disease}
            </Text>
            <Text style={styles.modalPesticide}>
              Pesticide: {selectedCrop?.pesticide}
            </Text>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryContent: {
    paddingHorizontal: 5,
  },
  cropItem: {
    flex: 1,
    width: "50%",
  },
  cropCard: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
  },
  cropImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  cropName: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    maxWidth: "90%",
  },
  modalImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 10,
  },
  modalName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalDisease: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  modalPesticide: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal:75
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CropCareScreen;
