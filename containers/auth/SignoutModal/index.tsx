import React, { ReactElement, useState } from 'react';
import { Modal } from '@components';
import { CutomModalProps } from 'interfaces/props';
import {
  SignoutFirstStep,
  SignoutSecondStep,
  SignoutResult,
} from './SignoutContents';

const SignoutModal = ({ isOpen, handler }: CutomModalProps): ReactElement => {
  const [step, setStep] = useState<number>(1);
  const confirmPassword = () => {
    // TODO: 서버에 계정 비밀번호를 확인하는 요청을 보내야 합니다
    // 요청이 성공적으로 이루어지면 스텝3(성공 결과 표시)으로 이동합니다
    console.log(`비밀번호 일치`);
    setStep(3);
    // TODO: 비밀번호가 일치하지 않을 경우 핸들링하는 방식을 생각해야 합니다
  };

  return (
    <Modal
      isOpen={isOpen}
      component={
        step === 1 ? (
          <SignoutFirstStep handler={() => setStep(2)} />
        ) : step === 2 ? (
          <SignoutSecondStep handler={confirmPassword} />
        ) : (
          <SignoutResult />
        )
      }
      handler={handler}
    />
  );
};

export default SignoutModal;
