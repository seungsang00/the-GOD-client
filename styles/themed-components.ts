import React from 'react';
import * as styledComponents from 'styled-components';
import { Theme } from './theme';
import { ThemeProvider } from './themeProvider';
export type DeviceSize = 'mobile' | 'tablet' | 'desktop';

type StyledFunction<_T> = styledComponents.ThemedStyledFunction<any, Theme>;

function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ServerStyleSheet,
  ThemeConsumer,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  withProps,
  ServerStyleSheet,
  ThemeProvider,
  ThemeConsumer,
};

export default styled;
