import React, { ReactElement, useEffect, useState } from 'react';
import { Modal } from '@components';
import { CutomModalProps } from 'interfaces/props';
import { LoginContent, SignupContent } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk, singupThunk } from 'modules/auth/actions';
import { RootState } from 'modules/reducer';
import { useRouter } from 'next/router';

const AuthModal = ({ isOpen, handler }: CutomModalProps): ReactElement => {
  const router = useRouter();
  const [isLoginContent, setIsLoginContent] = useState<boolean>(true);
  const { login, signup } = useSelector(({ auth }: RootState) => auth);
  //TODO: handler 만들기
  const dispatch = useDispatch();
  const handleLogin = (email: string, password: string) => {
    dispatch(loginThunk({ email, password }));
  };
  const handleSignup = (email: string, password: string, name: string) => {
    dispatch(singupThunk({ name, email, password }));
  };

  useEffect(() => {
    if (login.data) {
      router.reload();
    }
  }, [login.data]);

  useEffect(() => {
    if (signup.data) setIsLoginContent(true);
  }, [signup.data]);

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
