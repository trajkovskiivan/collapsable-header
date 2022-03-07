import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/colors';
import Button from '../../components/Button';

import SecondaryHeader from '../../components/Header/SecondaryHeader';

const Success = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Text>Hi</Text>
      <SecondaryHeader title="Success" />
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel magna non nulla dictum interdum. Duis interdum nisi lobortis,
        pellentesque mi vitae, porttitor neque. Donec rutrum velit tincidunt
        congue mollis. Nullam quis tellus id odio commodo bibendum. In eget
        euismod felis, id pellentesque massa. Nunc in mauris consectetur sem
        placerat suscipit. Donec augue massa, tristique a nibh eget, euismod
        porttitor est. Donec bibendum, tortor sit amet porta accumsan, velit
        sapien bibendum nisl, vel finibus metus felis ac quam.
      </Text>
      <Button
        onPress={() => navigation.goBack()}
        style={{backgroundColor: colors.buttonDark, marginTop: 30}}
        textStyle={{color: colors.font_primary}}
      />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 12,
  },
  content: {
    color: colors.font_secondary,
    textAlign: 'center',
  },
});
