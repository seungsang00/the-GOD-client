import { DefaultTheme } from 'styled-components';

const colors = {
  main: 'cyan',
  secondary: 'magenta',
};

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
  media,
  space,
};

export default theme;
