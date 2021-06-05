import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IGroupArtist } from '@interfaces';
import { RootState } from 'modules/reducer';
import moment from 'moment';
import { useRouter } from 'next/router';
import { MouseEventHandler, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const { data: artistList } = useSelector(
    ({ artist }: RootState) => artist.read
  );

  const [queryData, setQueryData] = useState<QueryData | null>(null);

  const { pathname, query } = router;

  const findArtistByArtistId = (id: string, artistList: any) => {
    for (let obj of artistList) {
      if (obj.id === id) {
        return obj.name;
      } else if (obj.type === 'solo') {
        continue;
      } else {
        const { member } = obj as IGroupArtist;
        for (let memberObj of member) {
          if (memberObj.id === id) {
            return memberObj.name;
          } else {
            continue;
          }
        }
      }
    }
  };

  useMemo(() => {
    if (pathname === '/search' && artistList) {
      const { artistId, location, dateStart, dateEnd } = query as {
        artistId: string;
        location: string;
        dateStart: string;
        dateEnd: string;
      };
      const artist = findArtistByArtistId(artistId, artistList) as string;
      artist && setQueryData({ artist, location, dateStart, dateEnd });
    }
  }, [artistList]);

  return (
    <SearchTriggerWrapper className="search-trigger">
      <TriggerBg className="trigger-bg">
        <Trigger onClick={handler}>
          {router.pathname === '/' || !queryData ? (
            <SearchLabel className="query-trigger" onClick={handler}>
              검색하기
            </SearchLabel>
          ) : (
            <>
              <SearchLabel className="query-data" onClick={handler}>
                {queryData.artist}
              </SearchLabel>
              <SearchLabel className="query-data" onClick={handler}>
                {queryData.location}
              </SearchLabel>
              <SearchLabel className="query-data" onClick={handler}>{`${moment(
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
