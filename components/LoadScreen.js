import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export const LoadScreen = () => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../assets/logo.png')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: '#056ecf',
    height: 128,
    width: 128,
  },
});
