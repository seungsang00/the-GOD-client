import React, { ReactElement, useState } from 'react';
import { Modal } from '@components';
import { CutomModalProps } from 'interfaces/props';
import { LoginContent, SignupContent } from '..';
import { useDispatch } from 'react-redux';
import { loginThunk, singupThunk } from 'modules/auth/actions';

const AuthModal = ({ isOpen, handler }: CutomModalProps): ReactElement => {
  const [isLoginContent, setIsLoginContent] = useState<boolean>(true);
  //TODO: handler 만들기
  const dispatch = useDispatch();
  const handleLogin = (email: string, password: string) => {
    dispatch(loginThunk({ email, password }));
  };
  const handleSignup = (email: string, password: string, userName?: string) => {
    userName && dispatch(singupThunk({ userName, email, password }));
  };

  return (
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
  );
};

export default AuthModal;
