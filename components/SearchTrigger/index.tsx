import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { useRouter } from 'next/router';
import { MouseEventHandler, useEffect, useState } from 'react';
import {
  SearchTriggerWrapper,
  TriggerBg,
  Trigger,
  SearchLabel,
  SearchIcon,
} from './SearchTrigger.style';

interface QueryData {
  artist: string;
  location: string;
  dateStart: string;
  dateEnd: string;
}

const SearchTrigger = ({ handler }: { handler: MouseEventHandler }) => {
  const router = useRouter();
  const [queryData, setQueryData] = useState<QueryData | null>(null);
  const { pathname, query } = router;

  useEffect(() => {
    if (pathname === '/search') {
      const { artist, location, dateStart, dateEnd } = query as {
        artist: string;
        location: string;
        dateStart: string;
        dateEnd: string;
      };
      console.log(artist, location, dateStart, dateEnd);
      setQueryData({ artist, location, dateStart, dateEnd });
    }
  }, []);

  return (
    <SearchTriggerWrapper className="search-trigger">
      <TriggerBg className="trigger-bg">
        <Trigger onClick={handler}>
          {router.pathname === '/' || !queryData ? (
            <SearchLabel onClick={handler}>검색하기</SearchLabel>
          ) : (
            <>
              <SearchLabel onClick={handler}>{queryData.artist}</SearchLabel>
              <SearchLabel onClick={handler}>{queryData.location}</SearchLabel>
              <SearchLabel onClick={handler}>{`${moment(
                queryData.dateStart
              ).format('MM월 DD일')} - ${moment(queryData.dateEnd).format(
                'MM월 DD일'
              )}`}</SearchLabel>
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
