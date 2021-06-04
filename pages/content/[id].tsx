import React, { useEffect } from 'react';
import { Layout } from '@layouts';
import { ContentPageContainer, Loading } from '@containers';
import { sampleContentData } from '../../utils/sample-data';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { getContentThunk } from 'modules/content/actions/read';

const ContentPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id: contentId } = router.query as { id: string };
  const { loading, error, data } = useSelector(
    (state: RootState) => state.content.current
  );
  useEffect(() => {
    if (contentId) dispatch(getContentThunk(contentId));
  }, [contentId]);
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  // TODO: 에러 발생시 커스텀 404 페이지 띄우기

  return (
    <Layout title={`${data && data.title} | FansSum::팬심이 모여 문화가 되다`}>
      {loading ? <Loading /> : data && <ContentPageContainer {...data} />}
    </Layout>
  );
};

export default ContentPage;
