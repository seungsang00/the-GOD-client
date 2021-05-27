import { DefaultTheme } from 'styled-components';

// 색상
const colors = {
  main: 'cyan',
  secondary: 'magenta',
  green: '#2ecc71',
  red: '#e74c3c',
  yellow: '#f1c40f',
  grey: 'rgb(239, 239, 239)',
  grayScale500: '#969aa2',
  // 버튼이나 링크의 스타일을 위한 색상 지정
  normal: '#4834d4',
  hover: '#686de0',
  action: '#4834d9',
};

// 컨셉
const concept = {
  glassmorphism: `
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
    backdrop-filter: blur( 3.0px );
    -webkit-backdrop-filter: blur( 3.0px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  `,
};

// 반응형
const customMediaQuery = (maxWidth: number): string => {
  // 최대폭을 입력하면. 문자열을 반환
  return `@media (max-width: ${maxWidth}px)`;
};

// 각 디바이스에 따라 최대폭 값을 변수화
const media = {
  desktop: customMediaQuery(1920),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(425),
};

// 간격 시스템
const space = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '36px',
  xl: '48px',
  xxl: '60px',
};

const zIndex = {
  depth01: `z-index: 9`,
  depth02: `z-index: 99`,
  depth03: `z-index: 999`,
  depth04: `z-index: 9999`,
  depth05: `z-index: 99999`,
};

export const theme: DefaultTheme = {
  borderRadius: '10px',
  colors,
  concept,
  media,
  space,
  zIndex,
};

export default theme;
