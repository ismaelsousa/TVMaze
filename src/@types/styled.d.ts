import 'styled-components/native';
declare module 'styled-components/native' {
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
  }
}
