import { Button, EmailInput, Horizon, PasswordInput } from '@components';
import { verifyEmail, verifyPassword } from '@utils/verifyFunctions';
import { emailStandard, passwordStandard } from '@utils/verifyStandard';
import useValidInput from 'hooks/useValidInput';
import { AuthContentProps } from 'interfaces/props';
import { RootState } from 'modules/reducer';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FormSection, LinkSection, OAuthSection } from '../authcontent.style';
import GoogleLoader from './GoogleLoader';
import KakaoLoader from './KakaoLoader';
import TwitterLoader from './TwitterLoader';

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
  const { error } = useSelector(({ auth }: RootState) => auth.login);

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
        <GoogleLoader />
        <KakaoLoader />
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
          handler={() => submitHandler(email, password)}
        />
        {error && <div>이메일과 아이디를 확인해주세요</div>}
      </FormSection>
      <LinkSection>
        <span>Already a member?</span>
        <span className="auth-link" onClick={handleChangeContent}>
          회원가입하러가기
        </span>
      </LinkSection>
    </article>
  );
};

export default LoginContent;
