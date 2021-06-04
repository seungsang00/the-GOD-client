import { Carousel, ArtistCard, DataNullLink } from '@components';
import { Artist } from '@interfaces';
import React from 'react';

type PropsType = {
  data: Artist[] | null;
};
const ArtistLoader = ({ data }: PropsType) => {
  if (!data) {
    return (
      <DataNullLink
        title="내가 팔로우 한 아티스트는 여기에서 확인할 수 있어요"
        description="아직 팔로우 한 아티스트가 없어요"
        buttonText="내 아티스트 찾으러가기"
        linkTo="/"
      />
    );
  }
  return (
    <Carousel>
      {data.length === 0 ? (
        <DataNullLink
          title="내가 팔로우 한 아티스트는 여기에서 확인할 수 있어요"
          description="아직 팔로우 한 아티스트가 없어요"
          buttonText="내 아티스트 찾으러가기"
          linkTo="/"
        />
      ) : (
        data.map(({ id, name, group, profileImage }) => (
          <ArtistCard
            key={`artist_${id}`}
            id={id}
            name={name}
            group={group}
            profileImage={profileImage}
          />
        ))
      )}
    </Carousel>
  );
};
export default ArtistLoader;
