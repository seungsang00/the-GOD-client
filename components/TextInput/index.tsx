import { TextInputProps } from 'interfaces/props';
import React, {
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useCallback,
  useRef,
} from 'react';
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
  const ref = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = '3rem';
    ref.current.style.height = ref.current.scrollHeight + 10 + 'px';
  }, []);

  return (
    <StyledTextArea
      className="textarea"
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onChange={onChange}
      ref={ref}
      onInput={handleResizeHeight}
    ></StyledTextArea>
  );
};
