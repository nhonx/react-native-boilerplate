import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import AppStyles from '../AppStyles.js';
import AppConfig from '../AppConfig.js';

export const Avatar = ({ src }) => (
  <View>
    <Image style={AppStyles.avatarImage} source={src} />
  </View>
);
export const Header = ({avatar1,style }) => (
  <View style={style}>
    <View style={AppStyles.avatar}>
      <Avatar src={{ uri: avatar1 }} />
    </View>
  </View>
);
export const MainContent = ({ children, style }) => (
  <View style={style}>{children}</View>
);
export const SubContent = ({ children, style }) => (
  <View style={style}>{children}</View>
);
export const MainScreen = () => (
  <View style={AppStyles.container}>
    <Header
      avatar1={AppConfig.MyImage}
      style={AppStyles.headerPnl}
    />
    <SubContent style={AppStyles.subContentPnl}>
      <Text style={AppStyles.paragraph}>
        This is subcontent
      </Text>
    </SubContent>
    <MainContent style={AppStyles.mainContentPnl}>
      <Text style={AppStyles.paragraph}>
        This is Maincontent
      </Text>
    </MainContent>
  </View>
);
