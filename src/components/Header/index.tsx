import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../../assets/colors';
import typography from '../../constants/typography';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={[typography.title]}>Add your info</Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={[typography.text, {textAlign: 'center'}]}>
          To complete your profile please fill in all necessary information
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 30,
  },
  title: {
    marginBottom: 10,
  },
  paragraph: {
    alignItems: 'center',
  },
});
