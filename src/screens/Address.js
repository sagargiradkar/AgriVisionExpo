import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Address = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.addressText}>Address</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Address;
