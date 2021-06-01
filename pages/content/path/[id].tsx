import { Content } from '@interfaces';
import { sampleContentListData } from '@utils/sample-data';
import React, { useMemo, useState } from 'react';
import SearchContentLoader from '../../SearchContentLoader';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '@layouts';

const ContentEditPage = () => {
  // const [focusedID, setFocusedID] = useState<string | null>(null);
  const [isPath, setIsPath] = useState<boolean>(false);
  const [sortedList, setSortedList] = useState<{
    selectedContents: Content[];
    restContents: Content[];
  }>({ selectedContents: [], restContents: sampleContentListData });
  const router = useRouter();
  const { id } = router.query; // 현재 step
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
    <Layout title={`투어 경로 | FansSum`}>
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
    </Layout>
  );
};

export default ContentEditPage;
