import useTextInput from 'hooks/useTextInput';
import { TextInputProps } from 'interfaces/props';
import React, { ReactElement } from 'react';
import { StyledTextInput, StyledTextArea } from './TextInput.style';

export const TextInput = ({ placeholder }: TextInputProps): ReactElement => {
  const { inputEvent } = useTextInput('');
  return (
    <StyledTextInput
      className="textinput"
      type="text"
      {...inputEvent}
      placeholder={placeholder}
    />
  );
};

export const TextArea = ({ placeholder }: TextInputProps): ReactElement => {
  const { inputEvent } = useTextInput('');
  return (
    <StyledTextArea
      className="textarea"
      {...inputEvent}
      placeholder={placeholder}
    ></StyledTextArea>
  );
};
