import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from './src/core/contexts/theme/theme.provider';
import {LightTheme} from './src/core/themes/light.theme';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <ThemeProvider initialTheme={LightTheme}>
          <SafeAreaView style={{flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                backgroundColor: 'red',
              }}>
              <Text>TEXT</Text>
            </View>
          </SafeAreaView>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
