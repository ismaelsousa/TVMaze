import {DefaultTheme} from 'styled-components/native';
import {colors} from '../colors';

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    onSecondary: colors.onSecondary,
    caption: colors.caption,
    surface: colors.surface,
    brand: colors.brand,
    alert: colors.alert,
  },
  borders: {
    radius: {
      small: 4,
      xxxlarge: 1000,
    },
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
  },
};
