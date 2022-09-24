import {DefaultTheme} from 'styled-components/native';
import {colors} from '../colors';

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    onSecondary: colors.onSecondary,
    caption: colors.caption,
  },
  borders: {
    radius: {
      small: 4,
      xxxlarge: 1000,
    },
  },
};
