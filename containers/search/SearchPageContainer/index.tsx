import { Content } from '@interfaces';
import { getContentListThunk } from 'modules/content/actions/read';
import { RootState } from 'modules/reducer';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchContentLoader from '../SearchContentLoader';

const SearchPageContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    ({ content }: RootState) => content.list
  );
  const contentList = data?.contents;

  // const [focusedID, setFocusedID] = useState<string | null>(null);
  const [isPath, setIsPath] = useState<boolean>(false);
  const [sortedList, setSortedList] = useState<{
    selectedContents: Content[];
    restContents: Content[];
  }>({ selectedContents: [], restContents: contentList as Content[] });

  const sortList = (id: string) => {
    if (!isPath && contentList) {
      setSortedList((state) => {
        const checkItem = state.restContents.find(
          (content) => content.id === id
        );
        if (checkItem) {
          return {
            restContents: [
              ...contentList.filter((content) => content.id !== id),
            ],
            selectedContents: [checkItem],
          };
        } else {
          return {
            restContents: [...contentList],
            selectedContents: [],
          };
        }
      });
    } else {
      setSortedList((state) => {
        const checkItem = state.restContents.find(
          (content) => content.id === id
        );
        if (checkItem) {
          return {
            selectedContents: [...state.selectedContents, checkItem],
            restContents: [
              ...state.restContents.filter((content) => content.id !== id),
            ],
          };
        } else {
          const prevContent = state.selectedContents.find(
            (content) => content.id === id
          ) as Content;
          return {
            restContents: [...state.restContents, prevContent],
            selectedContents: [
              ...state.selectedContents.filter((content) => content.id !== id),
            ],
          };
        }
      });
    }
  };
  const handleCardClick = (id: string) => {
    sortList(id);
  };
  const resetHadler = () => {
    setSortedList({
      selectedContents: [],
      restContents: contentList as Content[],
    });
  };
  useMemo(() => {
    resetHadler();
  }, [isPath]);

  useEffect(() => {
    const { artistId, location, dateStart, dateEnd } = router.query;
    dispatch(
      getContentListThunk({
        artistId: artistId as string,
        location: location as string,
        dateStart: dateStart as string,
        dateEnd: dateEnd as string,
      })
    );
  }, []);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  return (
    <main>
      {loading ? (
        <div>loading...</div>
      ) : !data || (contentList && contentList.length === 0) ? (
        <div>null data</div>
      ) : (
        <SearchContentLoader
          selectedContents={sortedList.selectedContents}
          restContents={sortedList.restContents}
          isPath={isPath}
          resetHadler={resetHadler}
          setIsPath={setIsPath}
          handleCardClick={handleCardClick}
        />
      )}
    </main>
  );
};

export default SearchPageContainer;
