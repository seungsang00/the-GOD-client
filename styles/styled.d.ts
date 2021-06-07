import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;
    colors: {
      [prop: string]: any;
    };
    concept: {
      [prop: string]: any;
    };
    customScroll: string;
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
