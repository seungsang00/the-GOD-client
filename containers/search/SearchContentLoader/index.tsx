import { ContentCard, DataNullLink, GuideButton } from '@components';
import { SearchContentLoaderProps } from '@interfaces';
import { createSharedContentThunk } from 'modules/content';
import { RootState } from 'modules/reducer';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
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
  const router = useRouter();
  const nullData = {
    description: '이벤트 주최자이신가요? 지금 이벤트를 등록해보세요!',
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
  const [focusedPin, setFocusedPin] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 37.537187, lng: 127.005476 });
  const setMapCenter = (lat: number, lng: number) => {
    setFocusedPin({ lat, lng });
  };
  const sharedHandler = () => {
    dispatch(createSharedContentThunk(selectedContents));
    router.push('/mypage');
  };
  useEffect(() => {
    if (restContents && restContents[0]) {
      const { lat, lng } = restContents[0].address.location;
      setFocusedPin({ lat, lng });
    }
  }, [restContents]);
  useEffect(() => {
    if (shared.data) {
      clipBoardAction(shared.data.id);
    }
  }, [shared]);

  return (
    <SearchContentLoaderStyle id="SearchContentLoader">
      <ContentListWrapper
        style={{
          overflow: 'scroll',
        }}
      >
        {!restContents && <DataNullLink {...nullData} />}
        {restContents &&
          restContents.length === 0 &&
          selectedContents.length === 0 && <DataNullLink {...nullData} />}
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
              handleClickCard={setMapCenter}
            />
          ))}
      </ContentListWrapper>
      <div
        className="root-mode-trigger"
        style={{
          position: 'absolute',
          width: '100vw',
          zIndex: 6,
          top: 0,
          right: 0,
        }}
      >
        <GuideButton
          active={isPath}
          activeHandler={() => setIsPath((state) => !state)}
          resetHandler={resetHadler}
          shareHandler={sharedHandler}
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
          latLng={focusedPin}
        />
      </div>
    </SearchContentLoaderStyle>
  );
};
export default SearchContentLoader;
