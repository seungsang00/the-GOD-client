import React, { ChangeEvent, ReactElement, useEffect } from 'react';
import { InputField } from 'components/UsernameInput/UsernameInput.style';
import { VerifiedInputProps } from 'interfaces/props';

const EmailInput = ({
  value,
  setValue,
  error,
}: VerifiedInputProps): ReactElement => {
  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  useEffect(() => {
    const target = document.querySelector('#emailInput');
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
        id="emailInput"
        type="text"
        placeholder="Email"
        value={value as string}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </InputField>
  );
};

export default EmailInput;
