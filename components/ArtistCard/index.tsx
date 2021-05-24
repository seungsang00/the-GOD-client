import React, { ReactElement } from 'react';
import { CardWrapper, AvatarContainer } from './ArtistCard.style';

interface ArtistCardProps {
  id: string;
  name: string;
  group: string | null;
  profileImage: string;
}
const ArtistCard = ({
  id,
  name,
  group,
  profileImage,
}: ArtistCardProps): ReactElement => {
  return (
    <CardWrapper id={`artist${id}`}>
      <AvatarContainer>
        <img src={profileImage} alt={`${group ? group + '/' : ''}${name}`} />
      </AvatarContainer>
      <span>{`${group ? group + '/' : ''}${name === '전체' ? '' : name}`}</span>
    </CardWrapper>
  );
};

export default ArtistCard;
