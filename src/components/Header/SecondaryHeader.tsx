import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../../assets/colors';
import typography from '../../constants/typography';

const Header = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={[typography.title, styles.title, props.style]}>
          {props.title}
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
    color: colors.font_primary,
  },
});
