import { Footer } from '@components';
import { Layout } from '@layouts';
import {
  EventSearch,
  LandingSampleL,
  LandingSampleR,
  MyPost,
  MyRouteLanding,
} from 'containers/main';
import { MainContainer } from 'layouts/layouts.style';
import { getArtistThunk } from 'modules/artist';
import { RootState } from 'modules/reducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MainPage = () => {
  const dispatch = useDispatch();
  const { data: artistData } = useSelector(
    ({ artist }: RootState) => artist.read
  );
  useEffect(() => {
    if (!artistData) {
      dispatch(getArtistThunk());
    }
  }, [artistData]);

  return (
    <Layout title="FansSum | 팬심이 모여 문화가 되다">
      <MainContainer className="holster">
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
