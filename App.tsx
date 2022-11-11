import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from './src/core/contexts/theme/theme.provider';
import {LightTheme} from './src/core/themes/light.theme';
import TestPage from './src/features/TestPage';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <ThemeProvider initialTheme={LightTheme}>
          <TestPage />
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
