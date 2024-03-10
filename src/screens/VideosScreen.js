import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import ShimmeringList from "./ShimmeringList";
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";
import { useIsFocused } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");

const VideosScreen = (props) => {
  const refRBSheet = useRef();

  const isFocused = useIsFocused();
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]); // Replace this line with constant data
  const [isConnected, setIsConnected] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(-1);
  const [isMuted, setIsMuted] = useState(true);
  const [pausedVideos, setPausedVideos] = useState(
    Array.from({ length: 0 }, () => true)
  );

  const constantData = [
    {
      category: "Spices",
      videos: [
        { videoId: "ynyB_10II_U", type: "video", loading: false },
        { videoId: "60Myw4fYyBM", type: "video", loading: false },
        { videoId: "FXXWHa4CpC8", type: "video", loading: false },
        { videoId: "YP8l8OU3lyU", type: "video", loading: false },
        { videoId: "uv_mOK3hzo0", type: "video", loading: false },
        { videoId: "koJ6hSH0q3w", type: "video", loading: false },
        { videoId: "j6aMovUitjM", type: "video", loading: false },
        { videoId: "1PNAxOyM_D4", type: "video", loading: false },
        { videoId: "mta9vIjnroY", type: "video", loading: false },
        { videoId: "YP8l8OU3lyU&t", type: "video", loading: false },
        { videoId: "chFeGMXoM5U", type: "video", loading: false },
      ],
    },
    {
      category: "Fruits",
      videos: [
        { videoId: "ZW4b6WuxFU8", type: "video", loading: false },
        { videoId: "3iAaSJM0CLw", type: "video", loading: false },
        { videoId: "t9s06OPZsw8", type: "video", loading: false },
        { videoId: "j_i2pdhKGWw", type: "video", loading: false },
        { videoId: "WcYJm9ZjV5Q", type: "video", loading: false },
        { videoId: "hd7LzBNjdkk", type: "video", loading: false },
      ],
    },
    {
      category: "Vegetables",
      videos: [
        { videoId: "JI8WiS9DiJM", type: "video", loading: false },
        { videoId: "r_YGlKihHtk", type: "video", loading: false },
        { videoId: "FyOzeO6fQwI", type: "video", loading: false },
        { videoId: "0B3ZWo2wGKU", type: "video", loading: false },
        { videoId: "hAHvwtAGxBU", type: "video", loading: false },
        { videoId: "-ApWxtzXsxw", type: "video", loading: false },
      ],
    },
    {
      category: "Grains",
      videos: [
        { videoId: "CVB2GUVtFtE", type: "video", loading: false },
        { videoId: "xFqecEtdGZ0", type: "video", loading: false },
        { videoId: "q9qUQKTnZzw", type: "video", loading: false },
        { videoId: "Xc9GHSRDQxo", type: "video", loading: false },
        { videoId: "fkO3EhG7v3c", type: "video", loading: false },
        { videoId: "xcJEx6ykpf0", type: "video", loading: false },
      ],
    },
    {
      category: "Legumes",
      videos: [
        { videoId: "0WR4BeFcLks", type: "video", loading: false },
        { videoId: "WTHkrFv6RUQ", type: "video", loading: false },
        { videoId: "Z2s_SbHpEM0", type: "video", loading: false },
        { videoId: "MrgJ7RenE2M", type: "video", loading: false },
        { videoId: "dwyhVThxYlo", type: "video", loading: false },
        { videoId: "Lal-5qqvc2s", type: "video", loading: false },
      ],
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    setVideos(constantData);
    setIsLoading(false);
  }, []);

  const handleScrollEnd = (event) => {
    pauseAllVideos();
    const contentOffset = event.nativeEvent.contentOffset.x;
    const newCurrentIndex = Math.round(contentOffset / width);
    setCurrentIndex(newCurrentIndex);

    // Stop the currently playing video and start the new one
    if (currentPlayingIndex !== -1) {
      if (
        playerRefs.current[currentPlayingIndex] &&
        playerRefs.current[currentPlayingIndex].stop
      ) {
        playerRefs.current[currentPlayingIndex].stop();
      }
    }

    // Start the new video if available
    if (
      playerRefs.current[newCurrentIndex] &&
      playerRefs.current[newCurrentIndex].seekTo &&
      playerRefs.current[newCurrentIndex].play
    ) {
      playerRefs.current[newCurrentIndex].seekTo(0);
      playerRefs.current[newCurrentIndex].play();
      setCurrentPlayingIndex(newCurrentIndex);
    }
  };

  const handleStateChange = (state) => {
    // Pause other videos when the current video starts playing
    if (state === "playing") {
      playerRefs.current.forEach((ref, index) => {
        if (index !== currentPlayingIndex && ref && ref.pause) {
          ref.pause();
        }
      });
    }
  };

  const handleScroll = (event) => {
    // Pause all videos when scrolling
    pauseAllVideos();
  };

  const handleVideoPlay = (videoIndex) => {
    // Toggle play/pause state for the selected video
    const updatedPausedVideos = [...pausedVideos];
    updatedPausedVideos[videoIndex] = !updatedPausedVideos[videoIndex];
    setPausedVideos(updatedPausedVideos);

    // Pause all other videos
    pauseAllVideos(videoIndex);

    // Unmute and play the selected video
    setIsMuted(false);
    if (
      playerRefs.current[videoIndex] &&
      playerRefs.current[videoIndex].seekTo
    ) {
      playerRefs.current[videoIndex].seekTo(0);
      playerRefs.current[videoIndex].play();
      setCurrentPlayingIndex(videoIndex);
    }
  };

  const pauseAllVideos = (excludeIndex) => {
    playerRefs.current.forEach((ref, index) => {
      if (ref && ref.pause && index !== excludeIndex) {
        ref.pause();
      }
    });
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);

    try {
      const newData = await fetchVideos();
      setVideos(newData);
    } catch (error) {
      // Display Android Toast on error
      showToast(
        "Sorry, something went wrong. Please try again later. Thank you for your patience."
      );
    } finally {
      setIsRefreshing(false);
    }
  };

  // Function to display toast message
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Video" onPress={() => refRBSheet.current.open()} />
      <View style={styles.mainContainer}>
        {!isConnected ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.ErrorText}>
              No internet connection. Please check your network settings and try
              again.
            </Text>
          </View>
        ) : isLoading ? (
          <View style={styles.loadingContainer}>
            <ShimmeringList screenWidth={width} />
          </View>
        ) : (
          <FlatList
            style={{ flex: 1, width: width }}
            data={videos}
            onScroll={handleScroll}
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            keyExtractor={(item) => item.category}
            renderItem={({ item, index: itemIndex }) => (
              <View key={itemIndex}>
                <Text style={styles.lastTxt2}>{item.category}</Text>
                <View style={styles.sliderContainer}>
                  <FlatList
                    style={{ flex: 1, width: width }}
                    horizontal
                    onScroll={handleScroll}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={item.videos}
                    keyExtractor={(video) => video.videoId}
                    renderItem={({ item: video, index }) => (
                      <View key={index} style={styles.slide}>
                        {video.type === "video" && (
                          <View style={styles.videoContainer}>
                            {video.loading ? (
                              <View>
                                <ActivityIndicator
                                  size="small"
                                  color={COLORS.black}
                                />
                                {setTimeout(() => {
                                  const updatedVideos = [...videos];
                                  updatedVideos[itemIndex].videos[
                                    index
                                  ].loading = false;
                                  setVideos(updatedVideos);
                                }, 2000)}
                              </View>
                            ) : (
                              <YoutubePlayer
                                height={height * 0.28}
                                play={!pausedVideos[index]}
                                volume={isMuted ? 0 : 100}
                                videoId={video.videoId}
                                ref={(ref) => (playerRefs.current[index] = ref)}
                                onStateChange={handleStateChange}
                              />
                            )}
                          </View>
                        )}
                      </View>
                    )}
                    onMomentumScrollEnd={handleScrollEnd}
                    refreshControl={<RefreshControl tintColor="#130B4D" />}
                  />
                </View>
                <View style={styles.scroll}>
                  {item.videos.map((video, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.item,
                        {
                          backgroundColor:
                            currentIndex === index && isFocused
                              ? COLORS.black
                              : "#695F9B",
                        },
                      ]}
                      onPress={() => handleVideoPlay(index)}
                    />
                  ))}
                </View>
              </View>
            )}
            onMomentumScrollEnd={handleScrollEnd}
          />
        )}
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
  loadingContainer: {
    flex: 1,
    marginTop: "15%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "21%",
  },
  videoContainer: {},
  lastTxt2: {
    color: COLORS.black,
    marginTop: "3%",
    marginLeft: "5%",
    fontSize: Dimensions.get("window").width * 0.07,
    fontWeight: "bold",
  },
  ErrorText: {
    color: COLORS.black,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  sliderContainer: {
    height: height * 0.28,
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: COLORS.black,
  },
  slide: {
    width: width,
    height: height * 0.28,
  },
  scroll: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  item: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 2,
  },
});

export default VideosScreen;
