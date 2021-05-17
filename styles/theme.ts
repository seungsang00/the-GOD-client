import { DefaultTheme } from 'styled-components';

// 색상
const colors = {
  main: 'cyan',
  secondary: 'magenta',
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

export const theme: DefaultTheme = {
  borderRadius: '5px',
  colors,
  concept,
  media,
  space,
};

export default theme;
