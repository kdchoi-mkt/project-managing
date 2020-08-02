/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Ribbon from './src/component/Ribbon'
import DescriptionView from './src/component/DescriptionView'
import IntroScreen from './src/component/IntroScreen'

const App = () => {
  return (
    <View>
      <IntroScreen /> 
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
  }
});

export default App;
