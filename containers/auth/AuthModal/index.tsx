import React, { ReactElement, useEffect, useState } from 'react';
import { Modal } from '@components';
import { CutomModalProps } from 'interfaces/props';
import { LoginContent, SignupContent } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk, singupThunk } from 'modules/auth/actions';
import { AuthModalStyle } from './authcontent.style';
import { RootState } from 'modules/reducer';

const AuthModal = ({ isOpen, handler }: CutomModalProps): ReactElement => {
  const dispatch = useDispatch();
  const [isLoginContent, setIsLoginContent] = useState<boolean>(true);
  const { data: signupResponse } = useSelector(
    (state: RootState) => state.auth.signup
  );
  const { data: loginResponse } = useSelector(
    (state: RootState) => state.auth.login
  );

  const handleLogin = (email: string, password: string) => {
    dispatch(loginThunk({ email, password }));
  };
  const handleSignup = (email: string, password: string, name?: string) => {
    name && dispatch(singupThunk({ name, email, password }));
  };

  useEffect(() => {
    if (signupResponse) setIsLoginContent(true);
  }, [signupResponse]);

  useEffect(() => {
    if (loginResponse) {
      document.location.href = '/';
    }
  }, [loginResponse]);

  return (
    <AuthModalStyle>
      <Modal
        isOpen={isOpen}
        component={
          isLoginContent ? (
            <LoginContent
              handleChangeContent={() => setIsLoginContent(false)}
              submitHandler={handleLogin}
            />
          ) : (
            <SignupContent
              handleChangeContent={() => setIsLoginContent(true)}
              submitHandler={handleSignup}
            />
          )
        }
        handler={handler}
      />
    </AuthModalStyle>
  );
};

export default AuthModal;
