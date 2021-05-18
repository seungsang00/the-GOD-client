import Link from 'next/link';
import Layout from '../components/Layout';
import styled from '@styles/themed-components';
import { InputTags } from '@components';

const MyComponent = styled.div`
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.media.tablet} {
    color: red;
  }
`;
const tagList = ['ENHYPEN', 'BORDER_CARNIVAL', 'COMEBACK'];
const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <MyComponent>디스플레이 크기에 따라 색이 바뀔거에요!</MyComponent>
    <InputTags tagList={tagList} />
  </Layout>
);

export default AboutPage;
