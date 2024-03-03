import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Community = () => {
  const refRBSheet = useRef();

  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Welcome to the Agri Vision app",
      image: require("../assets/images/allevo vera.png"),
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      content: "Check out this beautiful farm view!",
      image: require("../assets/images/avatar.png"),
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      content: "Harvest season is here! 🌾",
      image: require("../assets/images/cinnamon.png"),
      likes: 0,
      comments: [],
    },
    {
      id: 4,
      content: "Morning vibes on the farm 🌄",
      image: require("../assets/images/Ginger.png"),
      likes: 0,
      comments: [],
    },
    {
      id: 5,
      content: "Happy cows, happy life 🐄",
      image: require("../assets/images/termeric.png"),
      likes: 0,
      comments: [],
    },
    {
      id: 6,
      content: "Sowing seeds for a bright future 🌱",
      image: require("../assets/images/allevo vera.png"),
      likes: 0,
      comments: [],
    },
    {
      id: 7,
      content: "Tractor ready for action! 🚜",
      image: require("../assets/images/cinnamon.png"),
      likes: 0,
      comments: [],
    },
    {
      id: 8,
      content: "Golden fields as far as the eye can see 🌾",
      image: require("../assets/images/termeric.png"),
      likes: 0,
      comments: [],
    },
    {
      id: 9,
      content: "Freshly picked fruits from the orchard 🍎",
      image: require("../assets/images/avatar.png"),
      likes: 0,
      comments: [],
    },
    {
      id: 10,
      content: "Beehives buzzing with activity 🐝",
      image: require("../assets/images/termeric.png"),
      likes: 0,
      comments: [],
    },
  ]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId) => {
    // Logic to handle comment functionality
  };

  const handleShare = (post) => {
    // Logic to handle share functionality
  };

  const renderPostItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postContentContainer}>
        <Text style={styles.postContent}>{item.content}</Text>
        {item.image && <Image source={item.image} style={styles.postImage} />}
      </View>
      <View style={styles.postActionsContainer}>
        <TouchableOpacity onPress={() => handleLike(item.id)}>
          <Ionicons
            name={item.likes > 0 ? "heart" : "heart-outline"}
            size={24}
            color={item.likes > 0 ? COLORS.red : COLORS.red}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleComment(item.id)}>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color={COLORS.black}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleShare(item)}>
          <Ionicons
            name="share-social-outline"
            size={24}
            color={COLORS.black}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Community" onPress={() => refRBSheet.current.open()} />
        <FlatList
          data={posts}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id.toString()}
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
    marginBottom: "19%",
  },
  postContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: "2%",
    marginBottom: "8%",
    marginHorizontal: 10,
    alignItems: "center",
  },
  postContentContainer: {
    flex: 1,
  },
  postContent: {
    fontSize: 16,
    marginBottom: 5,
    borderRadius:5
  },
  postImage: {
    width: width - 90,
    height: 200,
    borderRadius: 10,
    borderColor:COLORS.black,
    resizeMode: "contain",
  },
  postActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly", // This will space the items evenly
    alignItems: "center", // You may want to adjust this based on your layout requirements
  },
  actionIcon: {
    marginTop:10,
    marginHorizontal: 60,
  },
});

export default Community;
