import {ColorPalette, Theme} from './theme.interface';

const DarkPalette: ColorPalette = {
  primary: '#000',
  primaryText: '#fff',
  secondaryText: '#ccc',
  background: '#0c0c0c',
};

export const DARK_THEME_ID = 'DARK_THEME';

export const DarkTheme: Theme = {
  id: DARK_THEME_ID,
  isDark: true,
  palette: DarkPalette,
};
