import {
  Carousel,
  FileInput,
  FilePreview,
  InputTags,
  TextArea,
  TextButton,
  TextInput,
} from '@components';
import { readFile } from '@interfaces';
import {
  inputDescription,
  inputImages,
  inputTags,
  inputTitle,
} from 'modules/content';
import { RootState } from 'modules/reducer';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CafeInfoForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const { title, tags } = useSelector(({ content }: RootState) => content.form);
  const [images, setImages] = useState<readFile[]>([]);
  const { description } = useSelector(({ content }: RootState) => content.form);
  const dispatch = useDispatch();

  const tagHandler = (tags: string[]) => {
    dispatch(inputTags(tags));
  };

  useEffect(() => {
    dispatch(inputImages(images));
  }, [images]);

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
      <TextInput
        initValue={title}
        onChange={(e) => {
          const { value } = e.target;
          dispatch(inputTitle(value));
        }}
      />
      <InputTags tagList={tags} handler={tagHandler} />
      <TextArea
        disabled={false}
        onChange={(e) => {
          const { value } = e.target;
          dispatch(inputDescription(value));
        }}
        value={description}
      />
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
      <TextButton disabled={false} handler={onSubmit} text="다음" />
    </>
  );
};

export default CafeInfoForm;
