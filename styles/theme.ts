import { DefaultTheme } from 'styled-components';

const calcRem = (px: number) => `${px / 16}rem`;

const colors = {
  primary: '#f45d48',
  secondary: '#0a8080',
  black: '#222525',
  white: '#fff',
  lightgrey: 'rgb(239, 239, 239)',
  grey: '#bfbfbf',
  deepgrey: '#969aa2',
  button: {
    default: {
      // TODO: primary에 맞게 수정하기
      normal: '#c2cad4', // normal
      hover: '#ced0da', // hover
      pressed: '#9a9fa8', // pressed
      disabled: '#d4d9e1', // disabled
    },
    red: {
      normal: '#f42d16', // normal
      hover: '#f65745', // hover
      pressed: '#db2813', // pressed
      disabled: '#f1958a', // disabled
    },
    green: {
      normal: '#00cd3c', // normal
      hover: '#34d762', // hover
      pressed: '#00b835', // pressed
      disabled: '#a4e5b7', // disabled
    },
    line: {
      normal: '#c2cad4', // normal
      hover: '#ced0da', // hover
      pressed: '#9a9fa8', // pressed
      disabled: '#d4d9e1', // disabled
    },
  },
};

const typography = {
  title: {
    fontFamily: '"Gelasio", serif',
    fontSize: '4rem',
    fontWeight: 600,
  },
  subtitle: {
    fontFamily: '"Gelasio", serif',
    fontSize: '2.5rem',
    fontWeight: 600,
    lineHeight: 1.1,
  },
  heading: {
    fontFamily: '"Gelasio", serif',
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  subheading: {
    fontFamily: '"Lato", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  label: {
    fontFamily: '"Lato", sans-serif',
    fontWeight: 700,
  },
  description: {
    fontFamily: '"Lato", sans-serif',
    lineHeight: 1.5,
  },
  body: {
    fontFamily: '"Lato", sans-serif',
  },
  caption: {
    fontFamily: '"Lato", sans-serif',
    fontSize: '0.875rem',
  },
  button: {
    fontFamily: '"Lato", sans-serif',
    fontSize: '0.875rem',
  },
  textbutton: {
    fontFamily: '"Lato", sans-serif',
    fontWeight: 700,
    fontSize: '1rem',
    border: 0,
  },
};

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
  xxs: calcRem(4),
  xs: calcRem(8),
  sm: calcRem(16),
  md: calcRem(24),
  lg: calcRem(36),
  xl: calcRem(48),
  xxl: calcRem(60),
};

const zIndex = {
  depth01: `z-index: 9`,
  depth02: `z-index: 99`,
  depth03: `z-index: 999`,
  depth04: `z-index: 9999`,
};

const borderRadius = calcRem(6);

const light = {
  colors: {
    bgColor: '#f8f8f9',
    textColor: '#2f2f37',
    ...colors,
  },
  typography,
  concept,
  media,
  space,
  zIndex,
  borderRadius,
};

const dark = {
  colors: {
    bgColor: '#2f2f37',
    textColor: '#fff',
    ...colors,
  },
  typography,
  concept,
  media,
  space,
  zIndex,
  borderRadius,
};

export const lightTheme: DefaultTheme = { ...light };
export const darkTheme: DefaultTheme = { ...dark };

export type Theme = typeof lightTheme;
