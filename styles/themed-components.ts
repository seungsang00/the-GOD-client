import React from 'react';
import * as styledComponents from 'styled-components';
export type DeviceSize = 'mobile' | 'tablet' | 'desktop';

type StyledFunction<_T> = styledComponents.ThemedStyledFunction<any, styledComponents.DefaultTheme>;

function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  ThemeConsumer,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<styledComponents.DefaultTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, withProps, ServerStyleSheet, ThemeConsumer };

export default styled;
