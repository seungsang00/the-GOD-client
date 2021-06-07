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
  // TODO: 다음 기능이 추가되어야 합니다
  // 아티스트 언팔로우 기능
  // 컴포넌트 클릭 시 아티스트 검색 결과 페이지(?)로 이동
  return (
    <CardWrapper id={`artist${id}`}>
      <AvatarContainer>
        <img src={profileImage} alt={`${group ? group + '/' : ''}${name}`} />
      </AvatarContainer>
      <span className="artist-name">{`${group ? group + '/' : ''}${
        name === '전체' ? '' : name
      }`}</span>
    </CardWrapper>
  );
};

export default ArtistCard;
