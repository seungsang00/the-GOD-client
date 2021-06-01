import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '@layouts';
import PathLoader from 'containers/contents/PathLoader';
import { useDispatch, useSelector } from 'react-redux';
import { getSharedContentThunk } from 'modules/content/actions/read';
import { RootState } from 'modules/reducer';
// import { DataNullLink } from '@components';
import { sampleContentListData } from '@utils/sample-data';

const ContentEditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { path } = useSelector(({ content }: RootState) => content);

  useEffect(() => {
    if (id) {
      dispatch(getSharedContentThunk(id as string));
    }
  }, [id]);

  return (
    <Layout title={`투어 경로 | FansSum`}>
      <main>
        {path.data ? (
          <PathLoader contents={path.data.contents} />
        ) : (
          <>
            <PathLoader contents={sampleContentListData} />
            {/* 
            FIXME: 로딩 데이터가 없는경우 처리
            <DataNullLink
            title="오류"
            description="오류"
            buttonText="홈으로"
            linkTo="/"
          /> */}
          </>
        )}
      </main>
    </Layout>
  );
};

export default ContentEditPage;
