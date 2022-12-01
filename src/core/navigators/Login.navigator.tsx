import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreens} from '../constants/screens';
import StartScreen from '../../features/login/presentation/screens/StartScreen';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LoginScreens.START_SCREEN}
        options={{
          headerShown: false,
        }}
        component={StartScreen}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
