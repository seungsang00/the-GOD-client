import React, { ChangeEvent, ReactElement, useEffect } from 'react';
import { InputField } from './UsernameInput.style';
import { VerifiedInputProps } from 'interfaces/props';

const UsernameInput = ({
  value,
  setValue,
  error,
}: VerifiedInputProps): ReactElement => {
  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  useEffect(() => {
    const target = document.querySelector('#usernameInput');
    if (target && value) {
      if (!error) {
        target.classList.remove('invalid');
        target.classList.add('valid');
      } else {
        target.classList.remove('valid');
        target.classList.add('invalid');
      }
    }
  }, [error]);

  return (
    <InputField error={error}>
      <input
        id="usernameInput"
        type="text"
        placeholder="Username (한글, 영문 대소문자 2~15자)"
        value={value as string}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </InputField>
  );
};

export default UsernameInput;
