import { verifyPassword } from '@utils/verify';
import useValidInput from 'hooks/useValidInput';
import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { PasswordInputField } from './PasswordInput.style';

const PasswordInput = (): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const [state, setState, error] = useValidInput('', verifyPassword);

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setState(target.value);
  };

  useEffect(() => {
    console.log(error);
    const target = document.querySelector('#pwInput');
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
    <PasswordInputField>
      <div>
        <input
          id="pwInput"
          type={visible ? 'text' : 'password'}
          value={state as string}
          onChange={onChange}
        />
        <FontAwesomeIcon
          id="visibleController"
          className={visible ? 'active' : 'inactive'}
          icon={faEye}
          onClick={() => setVisible(!visible)}
        />
      </div>
      <p className="error">{error}</p>
    </PasswordInputField>
  );
};

export default PasswordInput;
