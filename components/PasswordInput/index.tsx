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
import { VerifiedInputProps } from 'interfaces/props';

const PasswordInput = ({
  value,
  setValue,
  error,
  disabled,
}: VerifiedInputProps): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const inputElement = useRef<HTMLInputElement | null>(null);

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  useEffect(() => {
    if (inputElement.current && value) {
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
          placeholder="Password"
          value={value as string}
          onChange={onChange}
          ref={inputElement}
          disabled={disabled}
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
