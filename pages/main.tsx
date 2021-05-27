import { Footer } from '@components';
import { MainSearchForm } from '@containers';
import { Layout } from '@layouts';

const MainPage = () => {
  return (
    <Layout title="FansSum | 팬심이 모여 문화가 되다" footer={<Footer />}>
      <MainSearchForm />
      <article>랜딩페이지... 뭘 넣어야할까요</article>
    </Layout>
  );
};

export default MainPage;
