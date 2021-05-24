import React, { ReactElement } from 'react';
import TextButtonStyle from './TextButton.style';
import { ButtonProps } from '@interfaces';

const TextButton = ({
  disabled,
  handler,
  text,
}: ButtonProps): ReactElement | null => {
  return (
    <TextButtonStyle disabled={disabled} onClick={handler}>
      {text}
    </TextButtonStyle>
  );
};
export default TextButton;
