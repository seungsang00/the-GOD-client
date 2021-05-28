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
  }
  h2 {
    font-size: 1.7rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.1rem;
  }
  textarea {
    resize: none;
  }
  ul {
    width: 100%;
  }

  .location_overlay_box{
    div {overflow:hidden;}
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 288px;
    height: 132px;
    margin-left: -144px;
    text-align: left;
    overflow: hidden;
    font-size: 18px;
    font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
    line-height: 1.5;
    & > div {
      padding:15px;
      width: 286px;
      border-radius: 5px;
      height: 120px;
      border-bottom: 2px solid #ccc;
      border-right: 1px solid #ccc;
      overflow: hidden;
      background: #fff;
      &:after {
        content: '';
        position: absolute;
        margin-left: -12px;
        left: 50%;
        bottom: 0;
        width: 22px;
        height: 14px;
        background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png);
      }
    }
    .location_overlay_storename{

    }
    .location_overlay_address{

    }
    .location_overlay_mobile{

    }
  }
`;

export default GlobalStyle;
