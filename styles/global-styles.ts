import reset from 'styled-reset';
import { createGlobalStyle, css, DefaultTheme } from 'styled-components';

interface GlobalStyleProps {
  theme: DefaultTheme;
}

export const GlobalStyle = createGlobalStyle(
  (props: GlobalStyleProps) => css`
    ${reset}
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
      font-size: 1rem;
      cursor: pointer;
      border-radius: ${props.theme.borderRadius};
      padding: 0 16px;
    }
    textarea {
      resize: none;
    }
  `
);
