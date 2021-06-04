import {
  Avatar,
  Button,
  FileInput,
  InputWithLabel,
  TextButton,
} from '@components';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { verifyUsername } from '@utils/verifyFunctions';
import { usernameStandard } from '@utils/verifyStandard';
import useDisabled from 'hooks/useDisabled';
import useValidInput from 'hooks/useValidInput';
import { updateProfileImageThunk, updateUserNameThunk } from 'modules/user';
import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AccountStyle } from '../account/account.style';

const ProfileSettings = ({
  profileImage,
  name,
}: {
  profileImage: string;
  name: string;
}) => {
  const dispatch = useDispatch();
  const { disabled, disabledController } = useDisabled(true);
  const [value, setValue, _error] = useValidInput(
    name,
    verifyUsername,
    usernameStandard
  );
  const [avatarFile, setAvatarFile] = useState<Blob | null>(null);
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
        setAvatarUrl(reader.result as string);
        setAvatarFile(files[0]);
      };
    }
  };

  const handleUsernameChange = (e: MouseEvent) => {
    dispatch(updateUserNameThunk(value));
    disabledController(e);
  };

  const handleProfileImageChange = (_e: MouseEvent) => {
    const formdata = new FormData();
    formdata.append('profileImage', avatarFile as Blob);
    dispatch(updateProfileImageThunk(formdata));
  };

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
            <div className="avatar-edit-buttons">
              <FileInput
                handleFileChange={handleFileChange}
                inputButton={
                  <span id="formButton">
                    <FontAwesomeIcon icon={faCamera} /> <span>사진 업로드</span>
                  </span>
                }
              />
              <Button
                disabled={avatarFile ? false : true}
                text="프로필 이미지 변경하기"
                handler={handleProfileImageChange}
              />
            </div>
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
