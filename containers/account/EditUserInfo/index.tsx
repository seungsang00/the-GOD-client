import { Button, InputWithLabel } from '@components';
import { verifyPassword, confirmPassword } from '@utils/verifyFunctions';
import { passwordStandard } from '@utils/verifyStandard';
import TextButton from 'components/TextButton';
import useDisabled from 'hooks/useDisabled';
import useValidInput from 'hooks/useValidInput';
import React, { ReactElement } from 'react';
import { EditUserInfoWrapper } from './EditUserInfo.style';

interface EditUserInfoProps {
  field: string;
}
export const EditPassword = ({ field }: EditUserInfoProps): ReactElement => {
  const [password, setPassword, passwordError] = useValidInput(
    '',
    verifyPassword,
    passwordStandard
  );
  const [confirmPw, setconfirmPw, confirmPwError] = useValidInput(
    '',
    confirmPassword,
    new RegExp(password)
  );
  const { disabled, disabledController } = useDisabled(true);

  const 비밀번호변경핸들러함수 = () =>
    console.log('비밀번호변경핸들러함수 실행');

  return (
    <>
      <EditUserInfoWrapper>
        <div>
          <h3>{field}</h3>
          <TextButton
            disabled={false}
            text={disabled ? `변경하기` : `취소`}
            handler={disabledController}
          />
        </div>
        <section>
          {!disabled && (
            <>
              <section className="input-area">
                <InputWithLabel
                  label="새 비밀번호"
                  value={password}
                  setValue={setPassword}
                  disabled={disabled}
                />
                <InputWithLabel
                  label="비밀번호 확인"
                  value={confirmPw}
                  setValue={setconfirmPw}
                  disabled={disabled}
                />
                <p className="error">
                  {passwordError
                    ? passwordError
                    : confirmPwError
                    ? confirmPwError
                    : ''}
                </p>
              </section>
              <Button
                disabled={true}
                text="비밀번호 변경"
                handler={비밀번호변경핸들러함수}
              />
            </>
          )}
        </section>
      </EditUserInfoWrapper>
    </>
  );
};
