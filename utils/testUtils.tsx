import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@styles/themed-components';
import theme from '@styles/theme';

export function mountWithTheme(child: any) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });
}
