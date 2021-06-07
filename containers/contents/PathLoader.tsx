import { ContentCard } from '@components';
import { Content } from '@interfaces';
import {
  ContentListWrapper,
  SearchContentLoaderStyle,
} from 'containers/search/SearchContentLoader/SearchContentLoader.style';
import SearchMapContainer from 'containers/search/SearchContentLoader/SearchMapContainer';
import React from 'react';

const PathLoader = ({ contents }: { contents: Content[] }) => {
  console.log(contents);
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
          />
        </div>
      </SearchContentLoaderStyle>
    </>
  );
};
export default PathLoader;
