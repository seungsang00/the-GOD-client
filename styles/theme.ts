import { DefaultTheme } from 'styled-components';

export const calcRem = (px: number) => `${px / 16}rem`;

const colorsLight = {
  primary: {
    normal: '#aa5aff',
    hover: '#b26aff',
    pressed: '#a961f2',
    disabled: '#d8b6ff',
  },
  secondary: {
    normal: '#4ae0b0',
    hover: '#7ee0c7',
    pressed: '#4AC29A',
    disabled: '#a8e0da',
  },
  gray: {
    gray01: '#858c97',
    gray02: '#aaafb9',
    gray03: '#ced0da',
    gray04: '#ebecf0',
  },
  black: {
    black01: '#222525',
    black02: '#33304a',
    black03: '#373454',
    black04: '#3e3c60',
  },
  red: {
    normal: '#f42d16',
    hover: '#f65745',
    pressed: '#db2813',
    disabled: '#f1958a',
  },
  green: {
    normal: '#00cd3c',
    hover: '#34d762',
    pressed: '#00b835',
    disabled: '#a4e5b7',
  },
  line: {
    line01: '#d4d9e1',
    line02: '#dfe3e9',
    line03: '#ebecf0',
    line04: '#f5f5f5',
  },
  bg: {
    normal: '#f8f8f9',
    hover: '#f5f5f5',
    focused: '#fff',
    pressed: 'rgba(222, 222, 222, 0.35)',
    disabled: '#d4d9e1',
  },
  dark: {
    normal: '#373856',
    hover: '#414870',
    pressed: '#2e3152',
    disabled: '#2d2e47',
  },
};

const colorsDark = {
  primary: {
    normal: '#9b36fe',
    hover: '#9b5be8',
    pressed: '#862bdb',
    disabled: '#d8b6ff',
  },
  secondary: {
    normal: '#4ae0b0',
    hover: '#7ee0c7',
    pressed: '#4AC29A',
    disabled: '#a8e0da',
  },
  gray: {
    gray01: '#858c97',
    gray02: '#aaafb9',
    gray03: '#ced0da',
    gray04: '#ebecf0',
  },
  black: {
    black01: '#222525',
    black02: '#33304a',
    black03: '#373454',
    black04: '#3e3c60',
  },
  red: {
    normal: '#f42d16',
    hover: '#f65745',
    pressed: '#db2813',
    disabled: '#f1958a',
  },
  green: {
    normal: '#00cd3c',
    hover: '#34d762',
    pressed: '#00b835',
    disabled: '#a4e5b7',
  },
  line: {
    line01: '#414870',
    line02: '#373856',
    line03: '#2e3152',
    line04: '#2d2e47',
  },
  bg: {
    normal: '#2A283E',
    hover: '#322f4c',
    focused: 'rgba(55, 56, 86, 0.75)',
    pressed: 'rgba(55, 56, 86, 0.99)',
    disabled: '#2d2e47',
  },
  dark: {
    normal: '#373856',
    hover: '#414870',
    pressed: '#2e3152',
    disabled: '#2d2e47',
  },
};

const typography = {
  title: {
    fontFamily: 'GmarketSansB',
    fontSize: '4rem',
  },
  subtitle: {
    fontFamily: 'GmarketSansM',
    fontSize: '2rem',
    lineHeight: 1.1,
  },
  heading: {
    fontFamily: 'GmarketSansB',
    fontSize: '1.5rem',
  },
  subheading: {
    fontFamily: 'GmarketSansB',
    fontSize: '1.25rem',
  },
  label: {
    fontFamily: 'GmarketSansB',
  },
  description: {
    fontFamily: 'SpoqaHanSans',
    lineHeight: 1.5,
  },
  body: {
    fontFamily: 'SpoqaHanSans',
  },
  caption: {
    fontFamily: 'GmarketSansM',
    fontSize: '0.875rem',
  },
  button: {
    fontFamily: 'GmarketSansM',
    fontSize: '0.875rem',
  },
  textbutton: {
    fontFamily: 'GmarketSansM',
    fontSize: '1rem',
    border: 0,
  },
};

const boxShadow = `box-shadow: 0 7px 14px 0 rgba(31, 38, 135, 0.1);`;

const conceptLight = {
  glassmorphism: {
    normal: `
      background: rgba( 255, 255, 255, 0.40 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
      backdrop-filter: blur( 3.0px );
      -webkit-backdrop-filter: blur( 3.0px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    `,
    deep: `
      background: rgba( 255, 255, 255, 0.65 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
      backdrop-filter: blur( 3.0px );
      -webkit-backdrop-filter: blur( 3.0px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    `,
    light: `
      background: rgba( 255, 255, 255, 0.10 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
      backdrop-filter: blur( 3.0px );
      -webkit-backdrop-filter: blur( 3.0px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    `,
  },
};

const conceptDark = {
  glassmorphism: {
    normal: `
      background: rgba( 55, 56, 86, 0.80 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
      backdrop-filter: blur( 3.5px );
      -webkit-backdrop-filter: blur( 3.5px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    `,
    deep: `
      background: rgba( 55, 56, 86, 0.85 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
      backdrop-filter: blur( 1.0px );
      -webkit-backdrop-filter: blur( 1.0px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );  
    `,
    light: `
      background: rgba( 55, 56, 86, 0.70 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
      backdrop-filter: blur( 2.0px );
      -webkit-backdrop-filter: blur( 2.0px );
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    `,
  },
};

// 반응형
export const customMediaQuery = (maxWidth: number): string => {
  // 최대폭을 입력하면. 문자열을 반환
  return `@media (max-width: ${maxWidth}px)`;
};

// 각 디바이스에 따라 최대폭 값을 변수화
const media = {
  desktop: customMediaQuery(1920),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(450),
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

const borderRadius = calcRem(16);

const customScroll = `
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    /*  스크롤의 화살표가 포함된 영역   */
    display: none;
  }
`;

const light = {
  themeIcon: `/images/sun.svg`,
  colors: {
    textColor: '#2f2f37',
    ...colorsLight,
  },
  typography,
  concept: conceptLight,
  media,
  space,
  zIndex,
  borderRadius,
  customScroll,
  boxShadow,
};

const dark = {
  themeIcon: `/images/moon.svg`,
  colors: {
    textColor: '#fff',
    ...colorsDark,
  },
  typography,
  concept: conceptDark,
  media,
  space,
  zIndex,
  borderRadius,
  customScroll,
  boxShadow,
};

export const lightTheme: DefaultTheme = { ...light };
export const darkTheme: DefaultTheme = { ...dark };

export type Theme = typeof lightTheme;
