/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Ribbon from './src/component/Ribbon'
import SemiRibbon from './src/component/SemiRibbon'
import DescriptionView from './src/component/DescriptionView'
import IntroScreen from './src/component/IntroScreen'
import HomeScreen from './src/component/HomeScreen'

const App = () => {
  return (
    <View>
      <HomeScreen /> 
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
  }
});

export default App;
