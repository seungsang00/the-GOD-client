import { ContentCard } from '@components';
import { Content } from '@interfaces';
import {
  ContentListWrapper,
  SearchContentLoaderStyle,
} from 'containers/search/SearchContentLoader/SearchContentLoader.style';
import SearchMapContainer from 'containers/search/SearchContentLoader/SearchMapContainer';
import React, { useState } from 'react';

const PathLoader = ({ contents }: { contents: Content[] }) => {
  const [focusedPin, setFocusedPin] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 37.537187, lng: 127.005476 });
  const handleClickCard = (lat: number, lng: number) => {
    setFocusedPin({ lat, lng });
    console.log({ lat, lng });
  };
  return (
    <>
      <SearchContentLoaderStyle>
        <ContentListWrapper
          style={{
            zIndex: 99,
            overflow: 'scroll',
          }}
        >
          {contents &&
            contents.map((content) => (
              <ContentCard
                key={`content_${content.id}`}
                contentData={content}
                isOpen={true}
                handleClick={() => {}}
                handleClickCard={handleClickCard}
              />
            ))}
        </ContentListWrapper>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 2,
            top: 0,
            left: 0,
          }}
        >
          <SearchMapContainer
            contents={contents}
            path={contents}
            handleClick={() => {}}
            latLng={focusedPin}
          />
        </div>
      </SearchContentLoaderStyle>
    </>
  );
};
export default PathLoader;
