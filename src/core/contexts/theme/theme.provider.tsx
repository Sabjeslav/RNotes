import React, {useEffect} from 'react';
import {Appearance} from 'react-native';
import {Theme} from '../../themes/theme.interface';
import {LightTheme} from '../../themes/light.theme';
import {DarkTheme} from '../../themes/dark.theme';

interface ProvidedTheme {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

const ThemeContext = React.createContext<ProvidedTheme>({
  theme: LightTheme,
  setTheme: () => {
    console.log('changed theme');
  },
});

interface ThemeProviderProps {
  initialTheme: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<ThemeProviderProps>(props => {
  const [theme, setTheme] = React.useState<Theme>(props.initialTheme);

  const setThemeCallback = React.useCallback((newTheme: Theme) => {
    setTheme((currentTheme: Theme) => {
      if (currentTheme.id === newTheme.id) {
        return currentTheme;
      }

      return newTheme;
    });
  }, []);

  useEffect(() => {
    const initialTheme = Appearance.getColorScheme();
    initialTheme === 'dark'
      ? setThemeCallback(DarkTheme)
      : setThemeCallback(LightTheme);
    Appearance.addChangeListener(preferences => {
      preferences.colorScheme === 'dark'
        ? setThemeCallback(DarkTheme)
        : setThemeCallback(LightTheme);
    });
  }, [setThemeCallback]);

  const MemoizedTheme = React.useMemo(() => {
    const value: ProvidedTheme = {
      theme,
      setTheme: setThemeCallback,
    };

    return value;
  }, [theme, setThemeCallback]);

  return (
    <ThemeContext.Provider value={MemoizedTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
});

export const useCustomTheme = () => React.useContext(ThemeContext);
