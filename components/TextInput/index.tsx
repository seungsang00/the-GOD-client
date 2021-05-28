import { TextInputProps } from 'interfaces/props';
import React, { ChangeEvent, KeyboardEvent, ReactElement } from 'react';
import { StyledTextInput, StyledTextArea } from './TextInput.style';
export const TextInput = ({
  type,
  value,
  onChange,
  onKeyDown,
  disabled,
  placeholder,
  ...rest
}: TextInputProps): ReactElement => {
  return (
    <StyledTextInput
      {...rest}
      className="textinput"
      type={type}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};
export interface TextAreaProps {
  value: string;
  onChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: ({
    key,
  }: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick?: () => void;
  disabled: boolean;
  placeholder?: string;
}
export const TextArea = ({
  value,
  onChange,
  onKeyDown,
  disabled,
  placeholder,
}: TextAreaProps): ReactElement => {
  return (
    <StyledTextArea
      className="textarea"
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onChange={onChange}
    ></StyledTextArea>
  );
};
