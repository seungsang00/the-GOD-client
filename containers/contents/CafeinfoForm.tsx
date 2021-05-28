import {
  Carousel,
  Dropdown,
  DropdownTrigger,
  FileInput,
  FilePreview,
  InputTags,
  OptionList,
  TextArea,
  TextButton,
  TextInput,
} from '@components';
import { readFile } from '@interfaces';
import { sampleSearchInputOptions } from '@utils/sample-data';
import {
  inputArtist,
  inputDescription,
  inputImages,
  inputTags,
  inputTitle,
} from 'modules/content';
import { RootState } from 'modules/reducer';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CafeInfoForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const { title, tags, artist } = useSelector(
    ({ content }: RootState) => content.form
  );
  const [artists, setArtists] = useState(
    Object.keys(sampleSearchInputOptions.artist)
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      <section>
        <DropdownTrigger
          value={artist.name}
          placeholder="아티스트 선택"
          onClick={() => {
            dispatch(inputArtist({ ...artist, name: '' }));
            setIsOpen(!isOpen);
          }}
        />
      </section>
      <section>
        <Dropdown visible={isOpen}>
          <OptionList
            list={artists}
            listHandler={(el) => {
              if (sampleSearchInputOptions.artist[el]) {
                setArtists(sampleSearchInputOptions.artist[el]);
              } else {
                setArtists(Object.keys(sampleSearchInputOptions.artist));
                setIsOpen(false);
              }
            }}
            stateHandler={(el) => {
              if (artist.name.length === 0) {
                dispatch(inputArtist({ ...artist, name: el }));
              } else {
                dispatch(
                  inputArtist({ ...artist, name: artist.name + ' ' + el })
                );
              }
            }}
          />
        </Dropdown>
      </section>
      <TextInput
        type="text"
        value={title}
        disabled={false}
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
