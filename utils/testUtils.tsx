import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@styles/themeProvider';

export function mountWithTheme(child: any) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider>{children}</ThemeProvider>
    ),
  });
}
