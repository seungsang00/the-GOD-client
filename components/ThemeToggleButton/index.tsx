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
      <Label
        id="themeToggleBtnWrapper"
        htmlFor="toggleTheme"
        onClick={swapTheme}
      >
        <div id="themeToggleBtn"></div>
      </Label>
    </Wrapper>
  );
};

export default ThemeToggleButton;
