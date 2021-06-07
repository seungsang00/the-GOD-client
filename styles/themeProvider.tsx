import React, { createContext, ReactNode, useState } from 'react';
import { GlobalStyle } from './global-styles';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider as StyledProvider } from 'styled-components';

const useLocalStorage = (
  key: string,
  initialValue: string
): [string, Function] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (valueToStore: string): void => {
    try {
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

interface ContextProps {
  theme: string;
  setTheme: Function;
}

export const ThemeContext = createContext<ContextProps>({
  theme: '',
  setTheme: () => null,
});

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};
