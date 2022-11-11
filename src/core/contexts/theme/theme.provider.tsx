import React from 'react';
import {Theme} from '../../themes/theme.interface';
import {LightTheme} from '../../themes/light.theme';

interface ProvidedTheme {
  theme: Theme;
  changeTheme: (value: Theme) => void;
}

const ThemeContext = React.createContext<ProvidedTheme>({
  theme: LightTheme,
  changeTheme: () => {
    console.log('changed theme');
  },
});

interface ThemeProviderProps {
  initialTheme: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<ThemeProviderProps>(props => {
  const [theme, setTheme] = React.useState<Theme>(props.initialTheme);

  const changeThemeCallback = React.useCallback((value: Theme) => {
    setTheme(value);
  }, []);

  const MemoizedTheme = React.useMemo(() => {
    const value: ProvidedTheme = {
      theme,
      changeTheme: changeThemeCallback,
    };

    return value;
  }, [theme, changeThemeCallback]);

  return (
    <ThemeContext.Provider value={MemoizedTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
});

export const useTheme = () => React.useContext(ThemeContext);
