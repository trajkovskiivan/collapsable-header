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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import StartScreen from './src/screens/StartScreen';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <Navigation />
      {/* <StartScreen /> */}
    </SafeAreaView>
  );
};

export default App;
