import React, { ReactElement } from 'react';
import { AvatarProps } from 'interfaces/props';
import { AvatarContainer } from './Avatar.style';

const Avatar = ({ profileImage, size, handler }: AvatarProps): ReactElement => {
  return (
    <AvatarContainer className="avatar-container" size={size} onClick={handler}>
      <img src={profileImage} alt="avatar" />
    </AvatarContainer>
  );
};

export default Avatar;
