import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  body{
    height:100%;
    width:100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button, textarea {
    font-size: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
    font-weight: 600;
  }
  textarea {
    resize: none;
  }
  ul, li {
    width: 100%;
  }
`;

export default GlobalStyle;
