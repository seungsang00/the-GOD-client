import { Content } from '@interfaces';
import { sampleContentListData } from '@utils/sample-data';
import { useState } from 'react';
import SearchContentLoader from '../SearchContentLoader';

const SearchPageContainer = () => {
  const [focusedID, setFocusedID] = useState<string | null>(null);
  const [sortedList, setSortedList] = useState<Content[] | null>(
    sampleContentListData
  );
  const sortList = (focusedId: string) => {
    const focusedData = sortedList?.find((content) => content.id === focusedId);
    const restData = sortedList?.filter(
      (content) => content.id !== focusedId
    ) as Content[];
    return [focusedData, ...restData];
  };
  const handleCardClick = (id: string) => {
    setFocusedID(id);
    setSortedList(sortList(id) as Content[]);
  };

  return (
    <main>
      <SearchContentLoader
        data={sortedList}
        focusedID={focusedID}
        handleCardClick={handleCardClick}
      />
    </main>
  );
};

export default SearchPageContainer;
