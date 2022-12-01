import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreens} from '../constants/screens';
import LoginScreen from '../../features/login/presentation/screens/LoginScreen';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LoginScreens.LOGIN_SCREEN}
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
