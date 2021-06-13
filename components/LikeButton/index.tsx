import React, { MouseEventHandler } from 'react';
import { ButtonWrapper, LikeIcon } from './LikeButton.style';

interface LikeButtonProps {
  isActive: boolean;
  handler: MouseEventHandler;
}
const LikeButton = ({ isActive, handler }: LikeButtonProps) => {
  return (
    <ButtonWrapper isActive={isActive} onClick={handler}>
      <LikeIcon className={isActive ? 'liked like-icon' : 'like-icon'}>
        {isActive && (
          <>
            <span className="heart-animation-1"></span>
            <span className="heart-animation-2"></span>
          </>
        )}
      </LikeIcon>
      <span className="text">{isActive ? 'Fan이에요' : 'Fan할래요'}</span>
    </ButtonWrapper>
  );
};

export default LikeButton;
