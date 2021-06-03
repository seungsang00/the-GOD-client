import {
  Avatar,
  Button,
  // Button,
  FileInput,
  // FilePreview,
  InputWithLabel,
  TextButton,
} from '@components';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { verifyUsername } from '@utils/verifyFunctions';
import { usernameStandard } from '@utils/verifyStandard';
import useDisabled from 'hooks/useDisabled';
import useValidInput from 'hooks/useValidInput';
import React, { MouseEvent, useEffect, useState } from 'react';
// import { EditPassword } from './EditUserInfo';
import { AccountStyle } from '../account/account.style';

const ProfileSettings = () => {
  // FIXME: 스토어에서 유저 정보를 받아와야 합니다
  const profileImage = undefined;
  const username = 'fakeUser01';

  const { disabled, disabledController } = useDisabled(true);
  const [value, setValue, error] = useValidInput(
    username,
    verifyUsername,
    usernameStandard
  );
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>(
    profileImage || '/images/avatar_default.jpg'
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onloadend = () => {
        console.log(`클라이언트에 업로드된 파일>>`, files[0]);
        setAvatarUrl(reader.result as string);
        setAvatarFile(files[0]);
      };
    }
  };
  const handleUsernameChange = (e: MouseEvent) => {
    // TODO: 사용자 이름 업데이트 요청을 보내는 함수가 추가적으로 실행되어야 합니다
    disabledController(e);
  };

  // TODO: useEffect를 사용해 avatarFile이 변경될 때마다 서버에 프로필 이미지 변경 요청 보내기
  useEffect(() => {
    console.log(error);
    console.log(avatarFile);
  });

  return (
    <AccountStyle>
      <section className="title">
        <h1>프로필 수정</h1>
        <p className="description">여기에서 프로필을 수정할 수 있어요</p>
      </section>
      <div className="content">
        <section id="profileImageEdit">
          <h2>프로필 이미지</h2>
          <div className="avatar-edit">
            <Avatar profileImage={avatarUrl} size={10} />
            <FileInput
              handleFileChange={handleFileChange}
              inputButton={
                <span id="formButton">
                  <FontAwesomeIcon icon={faCamera} />
                </span>
              }
            />
          </div>
        </section>
        <section id="usernameEdit">
          <div className="username-edit-title">
            <h2>닉네임</h2>
            {disabled ? (
              <TextButton
                disabled={false}
                text="수정"
                handler={disabledController}
              />
            ) : (
              <div>
                <TextButton
                  disabled={false}
                  text="취소"
                  handler={disabledController}
                />
                <TextButton
                  disabled={false}
                  text="등록"
                  handler={handleUsernameChange}
                />
              </div>
            )}
          </div>
          <div className="username-edit">
            <InputWithLabel
              label=""
              type="text"
              value={value}
              setValue={setValue}
              disabled={disabled}
            />
          </div>
        </section>
      </div>
    </AccountStyle>
  );
};

export default ProfileSettings;
