import {
  Carousel,
  FileInput,
  FilePreview,
  InputTags,
  TextArea,
  TextInput,
} from '@components';
import { readFile } from '@interfaces';
import React, { ChangeEvent, useState } from 'react';

const CafeInfoForm = ({}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<readFile[]>([]);
  const tagHandler = (tags: string[]) => {
    setTags(tags);
  };
  const fileListToArray = (fileList: FileList) => {
    for (let i = 0; i < fileList.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(fileList[i]);
      reader.onloadend = () => {
        setImages((state) => [
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
  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      fileListToArray(e.target.files);
    }
  };
  return (
    <>
      <select>
        <option>hi</option>
      </select>
      <TextInput />
      <InputTags handler={tagHandler} />
      <TextArea />
      <Carousel col={4}>
        {[
          <div>
            <FileInput handleFileChange={imageHandler} />
          </div>,
          ...images.map((image, _i) => (
            <FilePreview
              url={image.url}
              handleRemoveFile={() => console.log(image.name)}
            />
          )),
        ]}
      </Carousel>
    </>
  );
};

export default CafeInfoForm;
