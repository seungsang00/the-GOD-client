import { ContentCard, DataNullLink, GuideButton } from '@components';
import { SearchContentLoaderProps } from '@interfaces';
import { createSharedContentThunk } from 'modules/content';
import { RootState } from 'modules/reducer';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SearchContentLoaderStyle,
  ContentListWrapper,
} from './SearchContentLoader.style';
import SearchMapContainer from './SearchMapContainer';

const SearchContentLoader = ({
  selectedContents,
  restContents,
  isPath,
  resetHadler,
  setIsPath,
  handleCardClick,
}: SearchContentLoaderProps): ReactElement => {
  const nullData = {
    description: '검색 결과',
    title: '일치하는 검색결과가 없어요 ㅠㅠ',
    buttonText: '이벤트 등록하기',
    linkTo: '/',
  };
  const contentList = restContents;
  if (
    restContents &&
    restContents.length === 0 &&
    selectedContents.length === 0
  ) {
    return <DataNullLink {...nullData} />;
  }
  const { shared } = useSelector(({ content }: RootState) => content);
  const dispatch = useDispatch();
  const clipBoardAction = (id: string) => {
    const t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = id;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  };
  useEffect(() => {
    if (shared.data) {
      clipBoardAction(shared.data.id);
    }
  }, [shared]);

  return (
    <SearchContentLoaderStyle>
      <ContentListWrapper
        style={{
          overflow: 'scroll',
        }}
      >
        {selectedContents.map((content) => (
          <ContentCard
            key={`s_content_${content.id}`}
            contentData={content}
            isOpen={true}
            handleClick={handleCardClick}
          />
        ))}
        {restContents &&
          restContents.map((content) => (
            <ContentCard
              key={`r_content_${content.id}`}
              contentData={content}
              isOpen={false}
              handleClick={handleCardClick}
            />
          ))}
      </ContentListWrapper>
      <div className="root-mode-trigger">
        <GuideButton
          active={isPath}
          activeHandler={() => setIsPath((state) => !state)}
          resetHandler={resetHadler}
          shareHandler={() => {
            dispatch(createSharedContentThunk(selectedContents));
          }}
        />
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
          contents={contentList}
          path={selectedContents}
          handleClick={handleCardClick}
        />
      </div>
    </SearchContentLoaderStyle>
  );
};
export default SearchContentLoader;
