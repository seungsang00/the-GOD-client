import React, { ReactElement } from 'react';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline /*GoogleLoginResponse, GoogleLoginResponseOffline*/,
} from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ButtonOAuth } from './OAuthButton.style';

interface GoogleLoginProps {
  clientId: string;
  // TODO: 구글 로그인 기능을 완성하는 단계에서 onSubmit interface를 수정해야 합니다.
  onSubmit: (res: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
}

const GoogleLoginButton = ({
  clientId,
  onSubmit,
}: GoogleLoginProps): ReactElement => (
  <>
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <ButtonOAuth
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <FontAwesomeIcon icon={faGoogle} />
          <span>Google</span>
        </ButtonOAuth>
      )}
      onSuccess={onSubmit}
      onFailure={onSubmit}
      cookiePolicy={'single_host_origin'}
    />
  </>
);

export default GoogleLoginButton;
