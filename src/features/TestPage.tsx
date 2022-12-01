import React from 'react';
import {
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../core/themes/theme.interface';
import useThemeAwareObject from '../core/hooks/theme/ThemeAwareObject.hook';
import {useCustomTheme} from '../core/contexts/theme/theme.provider';
import {DarkTheme} from '../core/themes/dark.theme';
import {LightTheme} from '../core/themes/light.theme';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    sav: {
      backgroundColor: theme.palette.background,
      flex: 1,
    },
    main: {
      backgroundColor: theme.palette.background,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    text: {
      color: theme.palette.primaryText,
    },
  });
};

const createStatusBarStyle = (
  theme: Theme,
): {statusBarBG: string; statusBarStyle: StatusBarStyle} => {
  return {
    statusBarBG: theme.palette.primary,
    statusBarStyle: theme.isDark ? 'light-content' : 'dark-content',
  };
};

const TestPage = () => {
  const style = useThemeAwareObject(createStyles);
  const StatusBarStyles = useThemeAwareObject(createStatusBarStyle);

  const {setTheme, theme} = useCustomTheme();

  const toggle = () => {
    setTheme(theme.id === DarkTheme.id ? LightTheme : DarkTheme);
  };

  return (
    <>
      <StatusBar
        backgroundColor={StatusBarStyles.statusBarBG}
        barStyle={StatusBarStyles.statusBarStyle}
      />
      <SafeAreaView style={style.sav}>
        <View style={style.main}>
          <Text style={style.text}>{theme.id}</Text>
          <Switch value={theme.id === DarkTheme.id} onChange={toggle} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default TestPage;
