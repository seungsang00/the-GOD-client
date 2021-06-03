import React, { ReactElement, useEffect, useState } from 'react';
import { Modal } from '@components';
import { CutomModalProps } from 'interfaces/props';
import {
  SignoutFirstStep,
  SignoutSecondStep,
  SignoutResult,
  SignoutThirdStep,
} from './SignoutContents';
import { useDispatch, useSelector } from 'react-redux';
import { checkPSThunk, singoutThunk } from 'modules/auth';
import { RootState } from 'modules/reducer';
import { ModalStyle } from './SignoutModal.style';
import { useRouter } from 'next/router';
import useValidInput from 'hooks/useValidInput';
import { verifyPassword } from '@utils/verifyFunctions';
import { passwordStandard } from '@utils/verifyStandard';

const SignoutModal = ({
  isOpen,
  handler,
  setIsOpen,
}: CutomModalProps): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { error: _checkpsError, data: checkpwResponse } = useSelector(
    (state: RootState) => state.auth.checkps
  );
  const { error: _signoutError, data: signoutResponse } = useSelector(
    (state: RootState) => state.auth.signout
  );
  const [step, setStep] = useState<number>(1);
  const [password, setPassword, passwordError] = useValidInput(
    '',
    verifyPassword,
    passwordStandard
  );

  const confirmPassword = () => {
    dispatch(checkPSThunk(password));
    // TODO: 비밀번호가 일치하지 않을 경우 핸들링하는 방식을 생각해야 합니다
  };

  const handleSignout = () => {
    dispatch(singoutThunk(password));
  };

  const moveToMain = () => {
    router.push('/');
  };

  const handleReset = () => {
    setStep(1);
    setIsOpen(false);
  };

  useEffect(() => {
    // 요청이 성공적으로 이루어지면 스텝3(성공 결과 표시)으로 이동합니다
    if (checkpwResponse) setStep(3);
  }, [checkpwResponse]);

  useEffect(() => {
    if (signoutResponse) {
      window.localStorage.removeItem('accessToken'); // 로컬스토리지 토큰 삭제
      setStep(4);
    }
  }, [signoutResponse]);

  return (
    <ModalStyle className="style">
      <Modal
        isOpen={isOpen}
        component={
          step === 1 ? (
            <SignoutFirstStep handler={() => setStep(2)} />
          ) : step === 2 ? (
            <SignoutSecondStep
              handler={confirmPassword}
              password={password}
              setPassword={setPassword}
              passwordError={passwordError}
            />
          ) : step === 3 ? (
            <SignoutThirdStep
              handler={handleSignout}
              resetHandler={handleReset}
            />
          ) : (
            <SignoutResult handler={moveToMain} />
          )
        }
        handler={handler}
      />
    </ModalStyle>
  );
};

export default SignoutModal;
