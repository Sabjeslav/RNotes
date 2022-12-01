import {ColorPalette, Theme} from './theme.interface';

const DarkPalette: ColorPalette = {
  background: '#121718',
  primary: '#1C1E20',
  primaryText: '#FFFFFF',
  secondaryText: '#6B7071',
  action: '#CC4F4F',
};

export const DARK_THEME_ID = 'DARK_THEME';

export const DarkTheme: Theme = {
  id: DARK_THEME_ID,
  isDark: true,
  palette: DarkPalette,
};
