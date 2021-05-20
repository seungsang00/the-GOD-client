import { verifyPassword } from '@utils/verify';
import useValidInput from 'hooks/useValidInput';
import React, {
  ChangeEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { PasswordInputField } from './PasswordInput.style';

const PasswordInput = (): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const [state, setState, error] = useValidInput('', verifyPassword);
  const inputElement = useRef<HTMLInputElement | null>(null);

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setState(target.value);
  };

  useEffect(() => {
    if (inputElement.current && state) {
      if (!error) {
        inputElement.current.classList.remove('invalid');
        inputElement.current.classList.add('valid');
      } else {
        inputElement.current.classList.remove('valid');
        inputElement.current.classList.add('invalid');
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
          ref={inputElement}
        />
        <div
          id="visibleController"
          className={visible ? 'active' : 'inactive'}
          onClick={() => setVisible(!visible)}
        >
          <FontAwesomeIcon icon={faEye} />
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </PasswordInputField>
  );
};

export default PasswordInput;
