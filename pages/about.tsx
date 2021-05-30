import Link from 'next/link';
import { Layout } from '@layouts';
import styled from '@styles/themed-components';
import {
  Avatar,
  Badge,
  /* Carousel,
  FileInput,
  InputTags,
  OrderSidebar, */
  // TextArea,
  TextInput,
  TimeSelect,
} from '@components';
import FilePreview from 'components/FilePreview';
import useModal from 'hooks/useModal';
import { SignoutModal, MainSearchForm } from '@containers';
import useTextInput from 'hooks/useTextInput';
import React from 'react';
import LocationForm from 'containers/contents/LocationForm';
// import { readFile } from '@interfaces';

const MyComponent = styled.div`
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.media.tablet} {
    color: red;
  }
  ${({ theme }) => theme.media.mobile} {
    color: green;
  }
`;

// const tagList = ['ENHYPEN', 'BORDER_CARNIVAL', 'COMEBACK'];
const testHandler = (HHorMM: string) => console.log(HHorMM);

const AboutPage = () => {
  const { isOpen, modalController } = useModal();
  // const [_files, setFiles] = useState<readFile[]>([]);
  /*  const fileListToArray = (fileList: FileList) => {
    for (let i = 0; i < fileList.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(fileList[i]);
      reader.onloadend = () => {
        setFiles((state) => [
          ...state,
          {
            data: fileList[i],
            name: fileList[i].name,
            url: reader.result as string,
          },
        ]);
      };
    }
  }; */
  /*  const testFilehandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      fileListToArray(e.target.files);
    }
  }; */
  const { inputEvent } = useTextInput('');
  const { value, onChange } = inputEvent;
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
      <LocationForm onPrev={() => {}} onSubmit={() => {}} />
      <MyComponent>디스플레이 크기에 따라 색이 바뀔거에요!</MyComponent>
      <TextInput
        type="text"
        value={value}
        onChange={onChange}
        disabled={false}
      />

      <br />
      <br />
      <br />
      <br />
      <h2>MainSearchForm</h2>
      <MainSearchForm />
      <div style={{ width: '100%', padding: '40px' }}>
        <label htmlFor="modal">login modal button</label>
        <button style={{ border: 'solid 1px red' }} onClick={modalController}>
          modal active button : signout
        </button>
        <SignoutModal isOpen={isOpen} handler={modalController} />
      </div>

      <TimeSelect setHour={testHandler} setMinutes={testHandler} />
      <Badge bgcolor="pink">#ENHYPEN</Badge>
      <Badge textcolor="pink">#ENHYPEN</Badge>
      {/* <InputTags tagList={tagList} /> */}
      <FilePreview
        url="https://bit.ly/33TugE9"
        handleRemoveFile={() => console.log(`file remove`)}
      />
      {/* <TextInput placeholder="...을 입력해주세요" /> */}
      {/* <TextArea placeholder="...을 입력해주세요" /> */}
      <Avatar profileImage="https://bit.ly/3oqUbfM" size={3} />
      <Avatar profileImage="https://bit.ly/3oqUbfM" size={5} />
    </Layout>
  );
};

export default AboutPage;
