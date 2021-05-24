import React from 'react';
import { UnderConstruction } from '@components';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '@layouts';

const ContentPage = () => {
  const router = useRouter();
  const { id } = router.query; // 현재 step

  const contentTitle = '엔하이픈 컴백 기념 이벤트'; // FIXME: 현재 페이지 컨텐츠의 타이틀을 불러와야 합니다
  return (
    <Layout title={`${contentTitle} | FansSum::팬심이 모여 문화가 되다`}>
      <UnderConstruction
        description={`컨텐츠(id:${id}) 내용이 들어갈 예정입니다`}
      />
    </Layout>
  );
};

export default ContentPage;
