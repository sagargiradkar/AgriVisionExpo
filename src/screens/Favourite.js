import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourite</Text>
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

export default Favourite;
