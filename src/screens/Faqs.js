import React, { useRef, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from @expo/vector-icons
import { COLORS } from "../constants";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";

const Faqs = () => {
  const refRBSheet = useRef();

  // Define your list of questions and answers
  const faqs = [
    {
      question: "How can I download Agri Vision?",
      answer: "You can download Agri Vision from the Google Play Store for Android devices and the Apple App Store for iOS devices.",
    },
    {
      question: "Is Agri Vision free to use?",
      answer: "Yes, Agri Vision is free to download and use. There are no subscription fees or hidden charges.",
    },
    {
      question: "What type of information does Agri Vision provide?",
      answer: "Agri Vision provides information on crop cultivation techniques, pest and disease management, weather forecasts, market prices, and government schemes for farmers.",
    },
    {
      question: "Can I access Agri Vision offline?",
      answer: "Some features of Agri Vision may be accessible offline, such as saved articles and documents. However, real-time data updates and certain features require an internet connection.",
    },
    {
      question: "How frequently is Agri Vision updated?",
      answer: "Agri Vision is regularly updated with new features, bug fixes, and improvements. Updates are typically released every few weeks to ensure the app remains efficient and up-to-date.",
    },
    {
      question: "Is Agri Vision available in multiple languages?",
      answer: "Currently, Agri Vision is available in English only. However, plans for multilingual support are under consideration for future updates.",
    },
    {
      question: "How can I provide feedback or report an issue with Agri Vision?",
      answer: "You can provide feedback or report any issues with Agri Vision by contacting our support team through the app or sending an email to support@agrivision.com.",
    },
    {
      question: "Does Agri Vision collect my personal data?",
      answer: "Agri Vision may collect certain personal data for analytics and app improvement purposes. However, we prioritize user privacy and adhere to strict data protection guidelines. Your personal information is never shared with third parties without your consent.",
    },
    {
      question: "Can I share articles and information from Agri Vision with others?",
      answer: "Yes, you can easily share articles and information from Agri Vision with friends, family, or colleagues through social media platforms, messaging apps, or email.",
    },
    {
      question: "Is there a community forum or discussion platform within Agri Vision?",
      answer: "Yes, Agri Vision includes a community forum where users can ask questions, share experiences, and engage in discussions with other members of the farming community.",
    },
    {
      question: "How can I stay updated on new features and developments in Agri Vision?",
      answer: "You can stay updated on new features and developments in Agri Vision by enabling app notifications. Additionally, you can check the 'News & Updates' section within the app for announcements.",
    },
    {
      question: "Can I customize my experience on Agri Vision?",
      answer: "Yes, Agri Vision offers customization options such as setting preferences for crops, regions, and topics of interest. You can tailor the app to suit your specific needs and preferences.",
    },
    {
      question: "Does Agri Vision provide support for organic farming practices?",
      answer: "Yes, Agri Vision provides comprehensive support and guidance for organic farming practices, including organic pest control methods, soil health management, and organic certification processes.",
    },
    {
      question: "Are there any in-app purchases or premium features in Agri Vision?",
      answer: "No, Agri Vision does not offer in-app purchases or premium features. All features and content are available to users free of charge.",
    },
    {
      question: "How can I contribute to Agri Vision's community forum?",
      answer: "You can contribute to Agri Vision's community forum by posting questions, sharing insights, and participating in discussions on various farming-related topics.",
    },
    {
      question: "Can I access historical weather data on Agri Vision?",
      answer: "Yes, Agri Vision provides access to historical weather data, allowing farmers to analyze past weather patterns and trends for better crop planning and management.",
    },
    {
      question: "Is there a feature to track market prices for agricultural commodities?",
      answer: "Yes, Agri Vision offers a market prices tracker that provides real-time updates on agricultural commodity prices in local and regional markets.",
    },
    {
      question: "Does Agri Vision offer tutorials or guides for beginners?",
      answer: "Yes, Agri Vision includes tutorials, guides, and instructional videos to help beginners learn essential farming techniques, practices, and technologies.",
    },
    {
      question: "Is Agri Vision compatible with all types of farming practices?",
      answer: "Yes, Agri Vision caters to a wide range of farming practices, including conventional farming, organic farming, sustainable agriculture, and more.",
    },
    {
      question: "Can I access Agri Vision's features on multiple devices?",
      answer: "Yes, you can access Agri Vision's features on multiple devices by logging in with the same account credentials. Your data and preferences will be synchronized across all devices.",
    },
  ];
  
  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header component */}
      <Header title="Frequently Asked Questions" onPress={() => refRBSheet.current.open()} />
      {/* ScrollView for FAQ items */}
      <ScrollView style={styles.container}>
        {faqs.map((faq, index) => (
          <TouchableOpacity key={index} onPress={() => toggleAnswer(index)} style={styles.faqItem}>
            <View style={styles.questionContainer}>
              {/* Ionicons icon for FAQ */}
              <Ionicons name="filter-circle" size={24} color={COLORS.black} />
              <Text style={styles.questionText}>{faq.question}</Text>
            </View>
            {/* Display answer if expanded */}
            {expandedIndex === index && <Text style={styles.answerText}>{faq.answer}</Text>}
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* BottomSheet component */}
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
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  faqItem: {
    marginBottom: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  answerText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Faqs;
