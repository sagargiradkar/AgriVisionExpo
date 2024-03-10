import React, { useRef, useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, Button ,FlatList, ToastAndroid} from "react-native";
import COLORS from "../constants/theme";
import BottomSheet from "../components/BottomSheet";
import Header from "../components/Header";

const CropAdvisoryScreen = () => {
  const refRBSheet = useRef();
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    try {
      const response = await fetch('https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/123456:detectIntent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY',
        },
        body: JSON.stringify({
          queryInput: {
            text: {
              text: message,
              languageCode: 'en-US',
            },
          },
        }),
      });

      const data = await response.json();
      const botMessage = data.queryResult.fulfillmentText;
      setChatHistory([...chatHistory, { message, isUser: true }, { message: botMessage, isUser: false }]);
      setMessage("");
      showToast(botMessage); // Display toast message with bot response
    } catch (error) {
      console.error("Error sending message to Dialogflow:", error);
    }
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Header title="Crop Advisory" onPress={() => refRBSheet.current.open()} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={chatHistory}
          renderItem={({ item }) => (
            <Text style={item.isUser ? styles.userMessage : styles.botMessage}>{item.message}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your question here"
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
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
    flex: 1,
    marginTop: 8,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: COLORS.lightgray,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.lightblue,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default CropAdvisoryScreen;
