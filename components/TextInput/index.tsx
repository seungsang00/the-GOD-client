import useTextInput from 'hooks/useTextInput';
import { TextInputProps } from 'interfaces/props';
import React, { ChangeEvent, KeyboardEvent, ReactElement } from 'react';
import { StyledTextInput, StyledTextArea } from './TextInput.style';

export const TextInput = ({
  type,
  placeholder,
  initValue,
  onChange,
  disabled,
}: TextInputProps): ReactElement => {
  const { inputEvent } = useTextInput(initValue ? initValue : '');
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
// export const TextArea = ({
//   initValue,
//   disabled,
//   placeholder,
//   handler
// }: TextInputProps): ReactElement => {
//   const { inputEvent } = useTextInput(initValue ? initValue : '');
//   return (
//     <StyledTextArea
//       className="textarea"
//       {...inputEvent}
//       disabled={disabled}
//       placeholder={placeholder}
//     ></StyledTextArea>
//   );
// };
