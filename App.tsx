import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from './src/core/contexts/theme/theme.provider';
import {LightTheme} from './src/core/themes/light.theme';
import RootNavigator from './src/core/navigators/Root.navigator';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <ThemeProvider initialTheme={LightTheme}>
          <RootNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
