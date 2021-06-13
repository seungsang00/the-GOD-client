import { Footer, ScrollToTopButton } from '@components';
import { Layout } from '@layouts';
import { EventSearch, MyPost, MyRouteLanding } from 'containers/main';
import { MainContainer } from 'layouts/layouts.style';

const MainPage = () => {
  return (
    <Layout title="FansSum | 팬심이 모여 문화가 되다">
      <MainContainer id="main" className="holster">
        <div className="container y mandatory-scroll-snapping" dir="ltr">
          <div>
            <EventSearch />
          </div>
          <div>
            <MyPost />
          </div>
          <div>
            <MyRouteLanding />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
        <ScrollToTopButton />
      </MainContainer>
    </Layout>
  );
};

export default MainPage;
