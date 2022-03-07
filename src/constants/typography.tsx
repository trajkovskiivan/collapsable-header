import {StyleSheet} from 'react-native';
import colors from '../assets/colors/index';

const fontSize = 14;

const typography = StyleSheet.create({
  title: {
    color: colors.font_primary,
    fontWeight: 'bold',
    fontSize: fontSize * 2,
  },
  text: {
    color: colors.font_secondary,
    fontSize: fontSize * 1.1,
    fontWeight: 'bold',
  },
});

export default typography;
