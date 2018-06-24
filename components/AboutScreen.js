import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export const AboutScreen = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>
     React Native boilerplate by Nhonx
    </Text>
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
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: '#056ecf',
    height: 128,
    width: 128,
  },
});
