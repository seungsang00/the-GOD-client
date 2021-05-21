import Link from 'next/link';
import Layout from '../components/Layout';
import styled from '@styles/themed-components';
import {
  Avatar,
  Badge,
  Footer,
  InputTags,
  OrderSidebar,
  SearchInputs,
  TextArea,
  TextInput,
  TimeSelect,
} from '@components';
import FilePreview from 'components/FilePreview';

const MyComponent = styled.div`
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.media.tablet} {
    color: red;
  }
  ${({ theme }) => theme.media.mobile} {
    color: green;
  }
`;
const tagList = ['ENHYPEN', 'BORDER_CARNIVAL', 'COMEBACK'];
const testHandler = (HHorMM: string) => console.log(HHorMM);
const AboutPage = () => (
  <Layout title="About | FansSum" footer={<Footer />}>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <MyComponent>디스플레이 크기에 따라 색이 바뀔거에요!</MyComponent>
    <TimeSelect setHour={testHandler} setMinutes={testHandler} />
    <OrderSidebar />
    <Badge bgcolor="pink">#ENHYPEN</Badge>
    <Badge textcolor="pink">#ENHYPEN</Badge>
    <SearchInputs />
    <InputTags tagList={tagList} />
    <FilePreview
      url="https://bit.ly/33TugE9"
      handleRemoveFile={() => console.log(`file remove`)}
    />
    <TextInput placeholder="...을 입력해주세요" />
    <TextArea placeholder="...을 입력해주세요" />
    <Avatar profileImage="https://bit.ly/3oqUbfM" size={3} />
    <Avatar profileImage="https://bit.ly/3oqUbfM" size={5} />
  </Layout>
);

export default AboutPage;
