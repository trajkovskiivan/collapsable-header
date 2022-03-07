import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import useForm from '../../hooks/useForm';
import randomIntFromInterval from '../../helpers/randomNumber';

import Input from '../Input/index';
import Button from '../Button';

import {FORM, validateInfo} from './helpers';

interface FormProps {
  //   placeholder?: string;
  //   value: string;
  //   handleChange(val: string): void;
  //   onDone: any;
  //   active: boolean;
}

const Form = ({navigation}) => {
  const [activeInput, setActiveInput] = useState(0);
  const {values, handleChange, handleSubmit, errors} = useForm(
    FORM,
    validateInfo,
    submitForm,
  );
  const firstName = useRef(null);
  const lastName = useRef(null);
  const phoneNumber = useRef(null);
  const email = useRef(null);
  const age = useRef(null);

  useEffect(() => {
    firstName.current.focus();
  }, []);

  function submitForm() {
    console.log('Submit');
    const decider = randomIntFromInterval(1, 2);
    const screen = decider == 1 ? 'Success' : 'Fail';
    navigation.navigate(screen);
  }

  const goToLastName = () => {
    lastName.current.focus();
  };
  const goToPhoneNumber = () => {
    phoneNumber.current.focus();
  };
  const goToEmail = () => {
    email.current.focus();
  };
  const goToAge = () => {
    age.current.focus();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      style={styles.wrapper}>
      <View style={styles.container}>
        <Input
          name="firstName"
          placeholder="First Name"
          value={values.firstName}
          autoCap={true}
          ref={firstName}
          onDone={goToLastName}
          handleChange={handleChange}
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
          autoCap={true}
          ref={lastName}
          onDone={goToPhoneNumber}
          handleChange={handleChange}
        />
        <Input
          name="phoneNumber"
          placeholder="Phone Number"
          value={values.phoneNumber}
          ref={phoneNumber}
          onDone={goToEmail}
          handleChange={handleChange}
          keyboardType="phone-pad"
        />
        <Input
          name="email"
          placeholder="Email"
          value={values.email}
          ref={email}
          onDone={goToAge}
          handleChange={handleChange}
          keyboardType="email-address"
        />
        <Input
          name="age"
          placeholder="Age"
          value={values.age}
          ref={age}
          onDone={submitForm}
          handleChange={handleChange}
          keyboardType="numeric"
        />
      </View>

      <Button onPress={handleSubmit} />
    </KeyboardAvoidingView>
  );
};

export default Form;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
  },
  container: {
    marginBottom: 50,
  },
});
