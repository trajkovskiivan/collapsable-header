import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import colors from '../../assets/colors/index';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Form from '../../components/Form';

const StartScreen = props => {
  console.log('Start screen Props', props);
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.wrapper}>
      <Text>This is the start Screen</Text>
      <Header />
      <Form navigation={navigation} />
    </ScrollView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
  },
});
