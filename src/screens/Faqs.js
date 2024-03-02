import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Faqs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.faqsText}>Faqs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faqsText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Faqs;
