import {ColorPalette, Theme} from './theme.interface';

const LightPalette: ColorPalette = {
  primary: '#fff',
  primaryText: '#000',
  secondaryText: '#0c0c0c',
  background: '#ccc',
};

export const LIGHT_THEME_ID = 'LIGHT_THEME';

export const LightTheme: Theme = {
  id: LIGHT_THEME_ID,
  palette: LightPalette,
};
