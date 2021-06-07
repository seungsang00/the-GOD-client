import { Button, PasswordInput } from '@components';
import React, {
  MouseEventHandler,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import {
  Wrapper,
  ImageSection,
  TitleSection,
  FormSection,
  InfoSection,
  ButtonSection,
} from './signoutcontent.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';

type FirstStepProps = {
  handler: MouseEventHandler<HTMLButtonElement>;
};

export const SignoutFirstStep = ({ handler }: FirstStepProps): ReactElement => {
  const { data } = useSelector((state: RootState) => state.user.userProfile);
  return (
    <Wrapper>
      <ImageSection className="image-area">
        <img src="/images/crying.svg" alt="crying emogi" />
      </ImageSection>
      <TitleSection>
        <h1>정말 떠나시는건가요?</h1>
        <p className="user-email">{data && data.email}</p>
      </TitleSection>
      <InfoSection>
        <ul>
          <li className="info">
            <span>
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
            <p>이 계정과 관련한 프로필과 이벤트 정보가 삭제됩니다.</p>
          </li>
          <li className="info">
            <span>
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
            <p>향후 계정 정보나 마이루트 정보를 확인할 수 없습니다.</p>
          </li>
        </ul>
      </InfoSection>
      <ButtonSection className="button-area">
        <Button
          disabled={false}
          text="역시 탈퇴할래요"
          handler={handler as MouseEventHandler<HTMLButtonElement>}
        />
      </ButtonSection>
    </Wrapper>
  );
};

type SecondStepProps = {
  handler: MouseEventHandler<HTMLButtonElement>;
  password: string;
  setPassword: (value: string) => void;
  passwordError: string | null;
};

export const SignoutSecondStep = ({
  handler,
  password,
  setPassword,
  passwordError,
}: SecondStepProps): ReactElement => {
  const [disabled, setDisabled] = useState(true);
  const { data } = useSelector((state: RootState) => state.user.userProfile);

  useEffect(() => {
    if (password) {
      if (!passwordError) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [passwordError]);

  return (
    <Wrapper>
      <TitleSection>
        <h1>계정 확인</h1>
        <p className="user-email">{data && data.email}</p>
        <p>회원 탈퇴를 위해 계정 비밀번호를 입력해주세요</p>
      </TitleSection>
      <FormSection className="form-area">
        <PasswordInput
          value={password}
          setValue={setPassword}
          error={passwordError}
        />
      </FormSection>
      <ButtonSection className="button-area">
        <Button disabled={disabled} text="비밀번호 확인" handler={handler} />
      </ButtonSection>
    </Wrapper>
  );
};

type ThirdStepProps = {
  handler: MouseEventHandler<HTMLButtonElement>;
  resetHandler: MouseEventHandler<HTMLButtonElement>;
};
export const SignoutThirdStep = ({
  handler,
  resetHandler,
}: ThirdStepProps): ReactElement => {
  const { data } = useSelector((state: RootState) => state.user.userProfile);
  return (
    <Wrapper>
      <ImageSection className="image-area">
        <img src="/images/crying.svg" alt="crying emogi" />
      </ImageSection>
      <TitleSection>
        <h1>이 계정이 완전히 삭제됩니다</h1>
        <p className="user-email">{data && data.email}</p>
      </TitleSection>
      <ButtonSection className="button-area">
        <Button disabled={false} text="취소" handler={resetHandler} />
        <Button disabled={false} text="확인" type="line" handler={handler} />
      </ButtonSection>
    </Wrapper>
  );
};

export const SignoutResult = ({ handler }: FirstStepProps): ReactElement => {
  return (
    <Wrapper>
      <ImageSection>
        <img src="/images/crying.svg" alt="crying emogi" />
      </ImageSection>
      <TitleSection>
        <h1>계정이 삭제되었습니다</h1>
        <p>이제는 우리가 헤어져야 할 시간 다음에 또 만나요</p>
      </TitleSection>
      <ButtonSection className="button-area">
        <Button disabled={false} text="메인으로 돌아가기" handler={handler} />
      </ButtonSection>
    </Wrapper>
  );
};
