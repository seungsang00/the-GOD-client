import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';
import {
  SearchTriggerWrapper,
  TriggerBg,
  Trigger,
  SearchLabel,
  SearchIcon,
} from './SearchTrigger.style';

const SearchTrigger = ({ handler }: { handler: MouseEventHandler }) => {
  const router = useRouter();
  // TODO: store에서 검색 쿼리에 대한 데이터를 받아와서 넣어주어야 합니다
  const searchData = {
    queryData: {
      artist: 'ENHYPEN',
      location: '서울 강남구',
      dateStart: '2021-05-28',
      dateEnd: '2021-06-07',
    },
  };
  const { artist, location, dateStart, dateEnd } = searchData.queryData;

  return (
    <SearchTriggerWrapper className="search-trigger">
      <TriggerBg className="trigger-bg">
        <Trigger onClick={handler}>
          {router.pathname === '/' || !searchData.queryData ? (
            <SearchLabel onClick={handler}>검색하기</SearchLabel>
          ) : (
            <>
              <SearchLabel onClick={handler}>{artist}</SearchLabel>
              <SearchLabel onClick={handler}>{location}</SearchLabel>
              <SearchLabel onClick={handler}>{`${moment(dateStart).format(
                'MM월 DD일'
              )} - ${moment(dateEnd).format('MM월 DD일')}`}</SearchLabel>
            </>
          )}
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIcon>
        </Trigger>
      </TriggerBg>
    </SearchTriggerWrapper>
  );
};

export default SearchTrigger;
