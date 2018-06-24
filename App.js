import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  NavigationActions,
  SwitchNavigator,
} from 'react-navigation';
import AppConfig from './AppConfig.js';
import { MainScreen } from './components/MainScreen.js';
import { LoadScreen } from './components/LoadScreen.js';
import { AboutScreen } from './components/AboutScreen.js';

//===========Our main module===================================
class LoadScreenModule extends Component {
  render() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000);
    return (
      <LoadScreen/>
    );
  }
}
class MainScreenModule extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return <MainScreen />;
  }
}
class AboutScreenModule extends Component {
  static navigationOptions = {
    drawerLabel: 'About',
  };
  render() {
    return (
      <AboutScreen/>
    );
  }
}
//=====================Navigator Handling======================
//Drawer wrap over side menu
export const Drawer = DrawerNavigator(
  {
    Home: {
      screen: MainScreenModule,
    },
    About: {
      screen: AboutScreenModule,
    },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
  }
);
//RootStack control over Loadscreen and Home. Using SwitchNavigator because this is one-way flow.
export const RootStack = SwitchNavigator(
  {
    LoadScreen: {
      screen: LoadScreenModule,
    },
    Home: {
      screen: Drawer,
    },
  },
  {
    initialRouteName: 'LoadScreen',
    headerMode: 'none', //remove whitespace for header.
  }
);
//==============================================================
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
