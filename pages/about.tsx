import Link from 'next/link';
import { Layout } from '@layouts';
import styled from '@styles/themed-components';
import {
  Avatar,
  Badge,
  Carousel,
  FileInput,
  InputTags,
  OrderSidebar,
  SearchInputs,
  TextArea,
  TextInput,
  TimeSelect,
} from '@components';
import FilePreview from 'components/FilePreview';
import useModal from 'hooks/useModal';
import { SignoutModal } from 'containers/auth';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { readFile } from '@interfaces';

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

const AboutPage = () => {
  const { isOpen, modalController } = useModal();
  const [inputValue, setInputValue] = useState<string>('');
  const [files, setFiles] = useState<readFile[]>([]);
  const fileListToArray = (fileList: FileList) => {
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
  };
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  const testFilehandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      fileListToArray(e.target.files);
    }
  };
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
      <MyComponent>디스플레이 크기에 따라 색이 바뀔거에요!</MyComponent>
      <div style={{ width: '100%', padding: '40px' }}>
        <label htmlFor="modal">login modal button</label>
        <button style={{ border: 'solid 1px red' }} onClick={modalController}>
          modal active button : signout
        </button>
        <SignoutModal isOpen={isOpen} handler={modalController} />
      </div>

      <TimeSelect setHour={testHandler} setMinutes={testHandler} />
      <OrderSidebar />
      <Badge bgcolor="pink">#ENHYPEN</Badge>
      <Badge textcolor="pink">#ENHYPEN</Badge>
      <SearchInputs />
      <InputTags tagList={tagList} handler={() => {}} />
      <FileInput handleFileChange={testFilehandler} />
      <Carousel col={4}>
        {[
          <div>
            <FileInput handleFileChange={testFilehandler} />
          </div>,
          ...files.map((file, _i) => (
            <FilePreview
              url={file.url}
              handleRemoveFile={() => console.log(file.name)}
            />
          )),
        ]}
      </Carousel>
      <TextInput
        changeHandler={setInputValue}
        placeholder="...을 입력해주세요"
      />
      <TextArea placeholder="...을 입력해주세요" />
      <Avatar profileImage="https://bit.ly/3oqUbfM" size={3} />
      <Avatar profileImage="https://bit.ly/3oqUbfM" size={5} />
    </Layout>
  );
};

export default AboutPage;
