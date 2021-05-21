import React, { ReactElement, useState } from 'react';
import { Modal } from '@components';
import { AuthModalProps } from 'interfaces/props';
import { LoginContent, SignupContent } from '..';

const AuthModal = ({ isOpen, handler }: AuthModalProps): ReactElement => {
  const [isLoginContent, setIsLoginContent] = useState<boolean>(true);
  const fakeLoginHandler = () => console.log(`fake login submit`);
  const fakeSignupHandler = () => console.log(`fake signup submit`);

  return (
    <Modal
      isOpen={isOpen}
      component={
        isLoginContent ? (
          <LoginContent
            handleChangeContent={() => setIsLoginContent(false)}
            submitHandler={fakeLoginHandler}
          />
        ) : (
          <SignupContent
            handleChangeContent={() => setIsLoginContent(true)}
            submitHandler={fakeSignupHandler}
          />
        )
      }
      handler={handler}
    />
  );
};

export default AuthModal;
