import React, { ChangeEvent, ReactElement, useEffect } from 'react';
import { verifyEmail } from '@utils/verify';
import useValidInput from 'hooks/useValidInput';
import { InputField } from 'components/UsernameInput/UsernameInput.style';

const EmailInput = (): ReactElement => {
  const [state, setState, error] = useValidInput('', verifyEmail);

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setState(target.value);
  };

  useEffect(() => {
    console.log(error);
    const target = document.querySelector('#emailInput');
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
    <InputField>
      <input
        id="emailInput"
        type="text"
        value={state as string}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </InputField>
  );
};

export default EmailInput;
