import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      [prop: string]: string;
    };
    concept: {
      [prop: string]: string;
    };
    media: {
      [prop: string]: string;
    };
    typography: {
      [prop: string]: any;
    };
    space: {
      [prop: string]: string;
    };
    zIndex: {
      [prop: string]: string;
    };
  }
}
