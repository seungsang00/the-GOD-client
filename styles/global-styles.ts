import reset from 'styled-reset';
import { createGlobalStyle } from './themed-components';

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
  h1 {
    font-size: 2rem;
    margin: 0.65rem 0;
  }
  h2 {
    font-size: 1.7rem;
    margin: 0.6rem 0;
  }
  h3 {
    font-size: 1.4rem;
    margin: 0.55rem 0;
  }
  h4 {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
  textarea {
    resize: none;
  }
  ul {
    width: 100%;
  }
`;

export default GlobalStyle;
