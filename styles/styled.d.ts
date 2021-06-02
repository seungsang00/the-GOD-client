import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      [prop: string]: any;
    };
    concept: {
      [prop: string]: any;
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
