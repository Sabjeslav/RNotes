import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootScreens} from '../constants/screens';
import LoginNavigator from './Login.navigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={RootScreens.LOGIN_NAVIGATOR}
        component={LoginNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
