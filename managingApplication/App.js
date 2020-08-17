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


const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello world!</Text> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
  }
});

export default App;
