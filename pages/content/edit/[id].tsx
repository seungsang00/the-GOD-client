import React from 'react';
import { UnderConstruction } from '@components';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '@layouts';

const ContentEditPage = () => {
  const router = useRouter();
  const { id } = router.query; // 현재 step

  return (
    <Layout title={`컨텐츠 수정 | FansSum`}>
      <UnderConstruction
        description={`컨텐츠 수정 (content ID: ${id}) 에 해당하는 컨테이너 컴포넌트가 들어갈 예정입니다`}
      />
    </Layout>
  );
};

export default ContentEditPage;
