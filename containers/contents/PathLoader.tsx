import { ContentCard } from '@components';
import { Content } from '@interfaces';
import { SearchContentLoaderStyle } from 'containers/search/SearchContentLoader/SearchContentLoader.style';
import SearchMapContainer from 'containers/search/SearchContentLoader/SearchMapContainer';
import React from 'react';

const PathLoader = ({ contents }: { contents: Content[] }) => {
  return (
    <>
      <SearchContentLoaderStyle>
        <div
          style={{
            zIndex: 99,
            overflow: 'scroll',
          }}
        >
          {contents.map((content) => (
            <ContentCard
              key={`content_${content.id}`}
              contentData={content}
              isOpen={true}
              handleClick={() => {}}
            />
          ))}
        </div>
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
