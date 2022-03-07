import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/colors';

import typography from '../../constants/typography';

interface ButtonProps {
  onPress: Function;
  style?: any;
  textStyle?: any;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}>
      <Text style={[typography.text, props.textStyle]}>Submit</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whine,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
