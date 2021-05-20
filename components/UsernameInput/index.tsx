import React, { ChangeEvent, ReactElement, useEffect } from 'react';
import { verifyUsername } from '@utils/verify';
import useValidInput from 'hooks/useValidInput';
import { InputField } from './UsernameInput.style';

const UsernameInput = (): ReactElement => {
  const [state, setState, error] = useValidInput('', verifyUsername);

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setState(target.value);
  };

  useEffect(() => {
    const target = document.querySelector('#usernameInput');
    if (target && state) {
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
        value={state as string}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </InputField>
  );
};

export default UsernameInput;
