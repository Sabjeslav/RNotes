import {ColorPalette, Theme} from './theme.interface';

const LightPalette: ColorPalette = {
  background: '#eff2f1',
  primary: '#d6dede',
  primaryText: '#0d1112',
  secondaryText: '#a3a6a5',
  action: '#CC4F4F',
};

export const LIGHT_THEME_ID = 'LIGHT_THEME';

export const LightTheme: Theme = {
  id: LIGHT_THEME_ID,
  isDark: false,
  palette: LightPalette,
};
