import 'styled-components/native';
declare module 'styled-components/native' {
  export type ColorPalette =
    | 'primary'
    | 'secondary'
    | 'onSecondary'
    | 'caption';
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      onSecondary: string;
      caption: string;
    };
    borders: {
      radius: {
        small: number;
        xxxlarge: number;
      };
    };
    spacing: {
      sm: number;
      md: number;
      lg: number;
    };
  }
}
