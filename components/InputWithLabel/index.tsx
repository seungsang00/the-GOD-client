import { InputWithLabelProps } from '@interfaces';
import { TextInput } from '@components';
import { Wrapper } from './InputWithLabel.style';
import React, { ChangeEvent } from 'react';

const InputWithLabel = ({
  label,
  value,
  setValue,
  disabled,
}: InputWithLabelProps) => {
  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  return (
    <Wrapper>
      <div>{label}</div>
      <TextInput
        type="password"
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
