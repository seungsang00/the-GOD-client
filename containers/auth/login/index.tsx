import {
  EmailInput,
  GoogleLoginButton,
  KakaoLoginButton,
  PasswordInput,
  TwitterLoginButton,
} from '@components';
import { OAuthSection, HorizonSection } from './login.style';

const fakeLoginHandler = () => console.log('fake login');
const fakeGoogleClientId =
  '588359564391-l3hs73u3j53jtos0rmfhqldb5ijgmsfc.apps.googleusercontent.com';

export const LoginContent = () => {
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
        <EmailInput />
        <PasswordInput />
      </section>
    </article>
  );
};

interface HorizonProps {
  text?: string;
}
const Horizon = ({ text }: HorizonProps) => {
  return (
    <HorizonSection>
      <div className="hr-sect">{text}</div>
    </HorizonSection>
  );
};
