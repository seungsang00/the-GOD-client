import { Layout } from '@layouts';
import SearchPageContainer from 'containers/search/SearchPageContainer';

const SearchPage = () => {
  return (
    <Layout>
      <main>
        <SearchPageContainer />
      </main>
    </Layout>
  );
};

export default SearchPage;
