import reset from 'styled-reset';
import { createGlobalStyle, css, DefaultTheme } from 'styled-components';

interface GlobalStyleProps {
  theme: DefaultTheme;
}

export const GlobalStyle = createGlobalStyle(
  (props: GlobalStyleProps) => css`
    ${reset}
    :root {
      --color-red-01: '#f42d16';
      --color-red-02: '#f65745';
      --color-red-03: '#db2813';
      --color-red-04: '#f1958a';
      --color-green-01: '#00cd3c';
      --color-green-02: '#34d762';
      --color-green-03: '#00b835';
      --color-green-04: '#a4e5b7';
    }
    * {
      box-sizing: border-box;
    }
    body {
      background-color: ${props.theme.colors.bgColor};
      color: ${props.theme.colors.textColor};
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    input,
    button,
    textarea {
      color: inherit;
      font-size: 1rem;
      background-color: transparent;
      border: none;
      outline: none;
    }
    button {
      cursor: pointer;
    }
    textarea {
      resize: none;
    }
  `
);
