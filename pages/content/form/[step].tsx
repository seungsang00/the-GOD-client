import React from 'react';
import { UnderConstruction } from '@components';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '@layouts';

const ContentPage = () => {
  const router = useRouter();
  const { step } = router.query; // 현재 step

  return (
    <Layout title={`이벤트 등록 Step${step} | FansSum`}>
      <UnderConstruction
        description={`현재 스텝: step${step} 에 해당하는 컨테이너 컴포넌트가 들어갈 예정입니다`}
      />
    </Layout>
  );
};

export default ContentPage;
