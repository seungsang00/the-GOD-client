import {
  Avatar,
  Button,
  FileInput,
  FilePreview,
  InputWithLabel,
  TextButton,
} from '@components';
import { verifyUsername } from '@utils/verifyFunctions';
import { usernameStandard } from '@utils/verifyStandard';
import { SignoutModal } from 'containers/auth';
import useDisabled from 'hooks/useDisabled';
import useModal from 'hooks/useModal';
import useValidInput from 'hooks/useValidInput';
import React, { useState } from 'react';
// import { EditPassword } from './EditUserInfo';
import { AccountStyle } from '../account/account.style';

const ProfileSettings = () => {
  // FIXME: 스토어에서 유저 정보를 받아와야 합니다
  const profileImage = undefined;
  const username = 'fakeUser01';

  const [value, setValue, error] = useValidInput(
    username,
    verifyUsername,
    usernameStandard
  );

  const { disabled, disabledController } = useDisabled(true);

  const [avatarUrl, setAvatarUrl] = useState<string>(
    profileImage || '/images/avatar_default.jpg'
  );
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

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

  // TODO: useEffect를 사용해 avatarFile이 변경될 때마다 서버에 프로필 이미지 변경 요청 보내기

  return (
    <AccountStyle>
      <section>
        <h1>프로필 수정</h1>
        <p>여기에서 프로필을 수정할 수 있어요</p>
      </section>
      <section id="profileImageEdit">
        <h2>프로필 사진</h2>
        <div>
          <Avatar profileImage={avatarUrl} size={10} />
          <FileInput
            handleFileChange={handleFileChange}
            inputButton={<span>변경</span>}
          />
        </div>
      </section>
      <section id="usernameEdit">
        <h2>닉네임</h2>
        <div>
          <InputWithLabel
            label=""
            type="text"
            value={value}
            setValue={setValue}
            disabled={disabled}
          />
          <TextButton
            disabled={false}
            text="변경"
            handler={disabledController}
          />
        </div>
      </section>
    </AccountStyle>
  );
};

export default ProfileSettings;
