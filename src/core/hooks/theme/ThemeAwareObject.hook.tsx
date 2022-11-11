import React from 'react';
import {Theme} from '../../themes/theme.interface';
import {useCustomTheme} from '../../contexts/theme/theme.provider';

type Generator<T extends Object> = (theme: Theme) => T;

const useThemeAwareObject = <T extends Object>(func: Generator<T>) => {
  const {theme} = useCustomTheme();

  return React.useMemo(() => func(theme), [func, theme]);
};

export default useThemeAwareObject;
