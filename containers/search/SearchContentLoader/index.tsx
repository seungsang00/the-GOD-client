import { ContentCard, DataNullLink } from '@components';
import { SearchContentLoaderProps } from '@interfaces';
import React, { ReactElement } from 'react';
import { SearchContentLoaderStyle } from './SearchContentLoader.style';

const SearchContentLoader = ({
  data,
  focusedID,
  handleCardClick,
}: SearchContentLoaderProps): ReactElement => {
  const nullData = {
    description: '검색 결과',
    title: '일치하는 검색결과가 없어요 ㅠㅠ',
    buttonText: '이벤트 등록하기',
    linkTo: '/',
  };
  if (!data) {
    return <DataNullLink {...nullData} />;
  }
  return (
    <SearchContentLoaderStyle>
      {data.map((content) => (
        <ContentCard
          key={`content_${content.id}`}
          contentData={content}
          focusedID={focusedID}
          handleClick={handleCardClick}
        />
      ))}
    </SearchContentLoaderStyle>
  );
};
export default SearchContentLoader;
