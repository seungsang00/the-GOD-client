import React, { ReactElement } from 'react';
import { AvatarProps } from 'interfaces/props';
import { AvatarContainer } from './Avatar.style';

const Avatar = ({
  profileImage,
  size,
  title,
  handler,
}: AvatarProps): ReactElement => {
  return (
    <AvatarContainer
      className="avatar-container"
      title={title}
      size={size}
      onClick={handler}
    >
      <img src={profileImage} alt="avatar" />
    </AvatarContainer>
  );
};

export default Avatar;
