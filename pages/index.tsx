import { Footer } from '@components';
import { Layout } from '@layouts';
import {
  LandingSampleL,
  LandingSampleR,
  MyRouteLanding,
} from 'containers/main';
import { MainContainer } from 'layouts/layouts.style';

const MainPage = () => {
  return (
    <Layout title="FansSum | 팬심이 모여 문화가 되다">
      <MainContainer className="holster">
        <div className="container y mandatory-scroll-snapping" dir="ltr">
          <div>
            <MyRouteLanding />
          </div>
          <div>
            <LandingSampleL />
          </div>
          <div>
            <LandingSampleR />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default MainPage;
