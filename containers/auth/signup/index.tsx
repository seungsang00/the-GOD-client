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
import React, { ReactElement, useEffect, useState } from 'react';

const fakeHandler = () => console.log('signup!');

const SignupContent = (): ReactElement => {
  const [username, setUsername, usernameError] = useValidInput(
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
    if (!usernameError && !emailError && !passwordError && !confirmPwError) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [usernameError, emailError, passwordError, confirmPwError]);

  return (
    <article>
      <section>
        <UsernameInput
          value={username}
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
        <Button disabled={disabled} text="sign up" handler={fakeHandler} />
      </section>
    </article>
  );
};

export default SignupContent;
