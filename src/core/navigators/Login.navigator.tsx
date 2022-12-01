import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreens} from '../constants/screens';
import TestPage from '../../features/TestPage';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={LoginScreens.LOGIN_SCREEN} component={TestPage} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
