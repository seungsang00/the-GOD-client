import { Footer } from '@components';
import { MainSearchForm } from '@containers';
import { Layout } from '@layouts';
import {
  LandingSampleL,
  LandingSampleR,
  MyRouteLanding,
} from 'containers/main';

const MainPage = () => {
  return (
    <Layout title="FansSum | 팬심이 모여 문화가 되다" footer={<Footer />}>
      <MainSearchForm />
      <MyRouteLanding />
      <LandingSampleL />
      <LandingSampleR />
    </Layout>
  );
};

export default MainPage;
