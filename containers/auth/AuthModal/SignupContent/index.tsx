import { Button, EmailInput, PasswordInput, UsernameInput } from '@components';
import {
  confirmPassword,
  verifyEmail,
  verifyPassword,
  verifyUsername,
} from '@utils/verifyFunctions';
import {
  emailStandard,
  passwordStandard,
  usernameStandard,
} from '@utils/verifyStandard';
import useValidInput from 'hooks/useValidInput';
import { AuthContentProps } from 'interfaces/props';
import React, { ReactElement, useEffect, useState } from 'react';
import { FormSection, LinkSection } from '../authcontent.style';

const SignupContent = ({
  handleChangeContent,
  submitHandler,
}: AuthContentProps): ReactElement => {
  const [userName, setUsername, usernameError] = useValidInput(
    '',
    verifyUsername,
    usernameStandard
  );

  const [email, setEmail, emailError] = useValidInput(
    '',
    verifyEmail,
    emailStandard
  );

  const [password, setPassword, passwordError] = useValidInput(
    '',
    verifyPassword,
    passwordStandard
  );

  const [pwRegExp, setPwRegExp] = useState<RegExp | null>(null);

  useEffect(() => {
    if (password) {
      setPwRegExp(new RegExp(password));
    }
  }, [password]);

  const [confirmPw, setConfirmPw, confirmPwError] = useValidInput(
    '',
    confirmPassword,
    pwRegExp as RegExp
  );

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (userName && email && password && confirmPw) {
      if (!usernameError && !emailError && !passwordError && !confirmPwError) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [usernameError, emailError, passwordError, confirmPwError]);

  return (
    <article>
      <FormSection>
        <UsernameInput
          value={userName}
          setValue={setUsername}
          error={usernameError}
        />
        <EmailInput value={email} setValue={setEmail} error={emailError} />
        <PasswordInput
          value={password}
          setValue={setPassword}
          error={passwordError}
        />
        <PasswordInput
          value={confirmPw}
          setValue={setConfirmPw}
          error={confirmPwError}
        />
        <Button
          disabled={disabled}
          text="sign up"
          handler={() => submitHandler(email, password, userName)}
        />
      </FormSection>
      <LinkSection>
        <span>Not a member?</span>
        <span className="auth-link" onClick={handleChangeContent}>
          Sign up now
        </span>
      </LinkSection>
    </article>
  );
};

export default SignupContent;
