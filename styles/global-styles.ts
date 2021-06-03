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
      background-color: ${props.theme.colors.bg.normal};
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
    }
    textarea {
      resize: none;
    }
    
    .location_overlay_box{
      div {
        overflow:hidden;
      }

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
  `
);
