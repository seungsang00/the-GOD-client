import useTextInput from 'hooks/useTextInput';
import { TextInputProps } from 'interfaces/props';
import React, { ReactElement } from 'react';
import { StyledTextInput, StyledTextArea } from './TextInput.style';

export const TextInput = ({
  type,
  placeholder,
  value,
  onChange,
  disabled,
}: TextInputProps): ReactElement => {
  const { inputEvent } = useTextInput(value ? value : '');
  return (
    <StyledTextInput
      className="textinput"
      type={type}
      {...inputEvent}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
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
