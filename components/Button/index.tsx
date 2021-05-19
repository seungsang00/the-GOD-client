import React, { ReactElement } from 'react';
import ButtonStyle from './Button.style';
import { ButtonProps } from '@interfaces';

const Button = ({
  disabled,
  handler,
  text,
}: ButtonProps): ReactElement | null => {
  return (
    <ButtonStyle disabled={disabled} onClick={handler}>
      {text}
    </ButtonStyle>
  );
};
export default Button;
