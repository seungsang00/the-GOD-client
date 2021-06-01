import { Content } from '@interfaces';
import { sampleContentListData } from '@utils/sample-data';
import { useMemo, useState } from 'react';
import SearchContentLoader from '../SearchContentLoader';

const SearchPageContainer = () => {
  // const [focusedID, setFocusedID] = useState<string | null>(null);
  const [isPath, setIsPath] = useState<boolean>(false);
  const [sortedList, setSortedList] = useState<{
    selectedContents: Content[];
    restContents: Content[];
  }>({ selectedContents: [], restContents: sampleContentListData });

  const sortList = (id: string) => {
    if (!isPath) {
      setSortedList((state) => {
        const checkItem = state.restContents.find(
          (content) => content.id === id
        );
        if (checkItem) {
          return {
            restContents: [
              ...sampleContentListData.filter((content) => content.id !== id),
            ],
            selectedContents: [checkItem],
          };
        } else {
          return {
            restContents: [...sampleContentListData],
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
      restContents: sampleContentListData,
    });
  };
  useMemo(() => {
    resetHadler();
  }, [isPath]);
  return (
    <main>
      <SearchContentLoader
        selectedContents={sortedList.selectedContents}
        restContents={sortedList.restContents}
        isPath={isPath}
        resetHadler={resetHadler}
        setIsPath={setIsPath}
        handleCardClick={handleCardClick}
      />
    </main>
  );
};

export default SearchPageContainer;
