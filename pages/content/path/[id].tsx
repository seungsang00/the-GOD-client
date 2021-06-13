import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '@layouts';
import PathLoader from 'containers/contents/PathLoader';
import { useDispatch, useSelector } from 'react-redux';
import { getSharedContentThunk } from 'modules/content/actions/read';
import { RootState } from 'modules/reducer';
import { Error, Loading } from '@containers';

const ContentEditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    ({ content }: RootState) => content.path
  );

  useEffect(() => {
    if (id) {
      dispatch(getSharedContentThunk(id as string));
    }
  }, [id]);

  return (
    <Layout title={`투어 경로 | FansSum`}>
      {loading && <Loading />}
      {error && <Error />}
      {data && (
        <main>
          <PathLoader contents={data.contents} />
        </main>
      )}
    </Layout>
  );
};

export default ContentEditPage;
