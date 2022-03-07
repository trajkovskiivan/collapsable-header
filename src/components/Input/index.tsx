import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import colors from '../../assets/colors';

interface TextInputProps {
  name: string;
  placeholder?: string;
  value: string;
  handleChange(e: string, key: string): void;
  onDone: any;
  autoCap?: boolean;
  ref: any;
  keyboardType?: string;
}

const Input = React.forwardRef((props: TextInputProps, ref: any) => {
  const [active, setActive] = useState(false);
  return (
    <View style={[styles.wrapper, active && styles.active]}>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={(e: string) => props.handleChange(e, props.name)}
        autoCapitalize={props.autoCap ? 'words' : 'none'}
        ref={ref}
        onSubmitEditing={props.onDone}
        style={styles.input}
        placeholderTextColor={
          active ? colors.font_primary : colors.font_secondary
        }
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
      />
    </View>
  );
});
export default Input;

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    width: '100%',
    // backgroundColor: colors.inputBackground,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
  },
  input: {
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 10,
    color: colors.font_primary,
  },
  active: {
    borderWidth: 1.5,
    borderColor: colors.border_active,
  },
});
