import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartScreen from '../screens/StartScreen';
import Success from '../screens/Success';
import Fail from '../screens/Fail';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={StartScreen}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Fail" component={Fail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
