import { useContext } from 'react';
import { ThemeContext } from '@styles/themeProvider';
import { Wrapper, Checkbox, Label } from './ThemeToggleButton.style';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const swapTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Wrapper>
      <Checkbox type="checkbox" id="toggleTheme" />
      <Label htmlFor="toggleTheme" onClick={swapTheme}></Label>
    </Wrapper>
  );
};

export default ThemeToggleButton;
