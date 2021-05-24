import { Button, PasswordInput } from '@components';
import { verifyPassword } from '@utils/verifyFunctions';
import { passwordStandard } from '@utils/verifyStandard';
import useValidInput from 'hooks/useValidInput';
import { useRouter } from 'next/dist/client/router';
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
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

type Props = {
  email?: string;
  handler: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const SignoutFirstStep = ({ email, handler }: Props): ReactElement => {
  const fakeEmail = 'fakeemail@gmail.com'; // FIXME: 사용자의 이메일 정보를 스토어에서 받아와야 합니다
  email = email || fakeEmail;
  return (
    <Wrapper>
      <ImageSection className="image-area">
        <img src="/images/crying.svg" alt="crying emogi" />
      </ImageSection>
      <TitleSection>
        <h1>정말 떠나시는건가요?</h1>
        <p className="user-email">{email}</p>
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
        <Button disabled={false} text="역시 탈퇴할래요" handler={handler} />
      </ButtonSection>
    </Wrapper>
  );
};

export const SignoutSecondStep = ({ email, handler }: Props): ReactElement => {
  const [disabled, setDisabled] = useState(true);
  const [password, setPassword, passwordError] = useValidInput(
    '',
    verifyPassword,
    passwordStandard
  );

  useEffect(() => {
    if (password) {
      if (!passwordError) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [passwordError]);

  const fakeEmail = 'fakeemail@gmail.com'; // FIXME: 사용자의 이메일 정보를 스토어에서 받아와야 합니다
  email = email || fakeEmail;

  return (
    <Wrapper>
      <TitleSection>
        <h1>계정 확인</h1>
        <p className="user-email">{fakeEmail}</p>
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

export const SignoutResult = (): ReactElement => {
  const router = useRouter();
  const moveToMain = () => {
    router.push('/');
  };
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
        <Button disabled={false} text="OK" handler={moveToMain} />
      </ButtonSection>
    </Wrapper>
  );
};
