import React, { ReactElement } from 'react';
import ButtonStyle from './Button.style';
import { ButtonProps } from '@interfaces';

const Button = ({
  disabled,
  handler,
  text,
  type,
}: ButtonProps): ReactElement | null => {
  return (
    <ButtonStyle type={type || 'default'} disabled={disabled} onClick={handler}>
      {text}
    </ButtonStyle>
  );
};
export default Button;
