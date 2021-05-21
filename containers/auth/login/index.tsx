import {
  EmailInput,
  GoogleLoginButton,
  Horizon,
  KakaoLoginButton,
  PasswordInput,
  TwitterLoginButton,
} from '@components';
import { verifyEmail, verifyPassword } from '@utils/verifyFunctions';
import { emailStandard, passwordStandard } from '@utils/verifyStandard';
import useValidInput from 'hooks/useValidInput';
import { OAuthSection } from './login.style';

// FIXME: 진짜 로직에 필요한 값으로 대체되어야 합니다
const fakeLoginHandler = () => console.log('fake login');
const fakeGoogleClientId =
  '588359564391-l3hs73u3j53jtos0rmfhqldb5ijgmsfc.apps.googleusercontent.com';

const LoginContent = () => {
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

  return (
    <article>
      <OAuthSection>
        <div className="row-first">
          <TwitterLoginButton onClick={fakeLoginHandler} />
        </div>
        <div className="row-second">
          <GoogleLoginButton
            clientId={fakeGoogleClientId}
            onSubmit={fakeLoginHandler}
          />
          <KakaoLoginButton onClick={fakeLoginHandler} />
        </div>
      </OAuthSection>
      <Horizon text="or" />
      <section>
        <EmailInput value={email} setValue={setEmail} error={emailError} />
        <PasswordInput
          value={password}
          setValue={setPassword}
          error={passwordError}
        />
      </section>
      <section>
        <span>Already a member?</span>
        <span>Sign In</span>
      </section>
    </article>
  );
};

export default LoginContent;
