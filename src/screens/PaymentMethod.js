import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentMethod = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PaymentMethod</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default PaymentMethod;
