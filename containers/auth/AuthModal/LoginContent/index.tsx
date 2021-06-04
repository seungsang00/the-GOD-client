import { Button, EmailInput, Horizon, PasswordInput } from '@components';
import { verifyEmail, verifyPassword } from '@utils/verifyFunctions';
import { emailStandard, passwordStandard } from '@utils/verifyStandard';
import useValidInput from 'hooks/useValidInput';
import { AuthContentProps } from 'interfaces/props';
import React, { useEffect, useState } from 'react';
import { FormSection, LinkSection, OAuthSection } from '../authcontent.style';
import GoogleLoader from './GoogleLoader';
import KakaoLoader from './KakaoLoader';
import TwitterLoader from './TwitterLoader';

// FIXME: 진짜 로직에 필요한 값으로 대체되어야 합니다
const LoginContent = ({
  handleChangeContent,
  submitHandler,
}: AuthContentProps) => {
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

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    // check validation
    if (email && password) {
      if (!emailError && !passwordError) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [emailError, passwordError]);

  return (
    <article>
      <OAuthSection>
        <TwitterLoader />
        <div className="second-row">
          <GoogleLoader />
          <KakaoLoader />
        </div>
      </OAuthSection>
      <Horizon text="or" />
      <FormSection>
        <EmailInput value={email} setValue={setEmail} error={emailError} />
        <PasswordInput
          value={password}
          setValue={setPassword}
          error={passwordError}
        />
        <Button
          disabled={disabled}
          text="signin"
          type="point"
          handler={() => submitHandler(email, password)}
        />
      </FormSection>
      <LinkSection>
        <span className="auth-desc">FansSum이 처음이신가요?</span>
        <span className="auth-link" onClick={handleChangeContent}>
          회원가입하러가기
        </span>
      </LinkSection>
    </article>
  );
};

export default LoginContent;
