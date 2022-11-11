export interface ColorPalette {
  primary: string;
  primaryText: string;
  secondaryText: string;
  background: string;
}

export interface Theme {
  id: string;
  isDark: boolean;
  palette: ColorPalette;
}
