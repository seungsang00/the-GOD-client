import { Button, InputWithLabel } from '@components';
import { verifyPassword, confirmPassword } from '@utils/verifyFunctions';
import { passwordStandard } from '@utils/verifyStandard';
import TextButton from 'components/TextButton';
import useDisabled from 'hooks/useDisabled';
import useValidInput from 'hooks/useValidInput';
import { updatePSThunk } from 'modules/auth';
import { getInfoThunk } from 'modules/user';
import { RootState } from 'modules/reducer';
import moment, { MomentInput } from 'moment';
import React, { MouseEvent, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditUserInfoWrapper } from './EditUserInfo.style';

interface EditUserInfoProps {
  field: string;
}
export const EditPassword = ({ field }: EditUserInfoProps): ReactElement => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.user.userProfile);
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
  const { data: pwUpdateResponse } = useSelector(
    (state: RootState) => state.auth.updateps
  );

  const handlePwUpdate = (e: MouseEvent) => {
    dispatch(updatePSThunk(password));
    setPassword('');
    setconfirmPw('');
    disabledController(e);
  };

  useEffect(() => {
    if (pwUpdateResponse) {
      dispatch(getInfoThunk());
    }
  }, [pwUpdateResponse]);

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
          {disabled ? (
            <div className="pwchange-recent-date">
              <span>최종 수정일 :</span>
              <span className="password-update-date">
                {data &&
                  data.passwordUpdate &&
                  moment(data.passwordUpdate).fromNow()}
                {!data && '최초 가입일'}
              </span>
            </div>
          ) : (
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
                  {password && confirmPw && passwordError
                    ? passwordError
                    : confirmPwError
                    ? confirmPwError
                    : ''}
                </p>
              </section>
              <div className="button-container">
                <Button
                  disabled={!passwordError && !confirmPwError ? false : true}
                  text="비밀번호 변경"
                  handler={handlePwUpdate}
                />
              </div>
            </>
          )}
        </section>
      </EditUserInfoWrapper>
    </>
  );
};
