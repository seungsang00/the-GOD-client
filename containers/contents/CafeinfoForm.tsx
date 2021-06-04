import {
  Button,
  Carousel,
  Dropdown,
  DropdownTrigger,
  FileInput,
  FilePreview,
  InputTags,
  OptionList,
  TextArea,
  TextInput,
} from '@components';
import { nullChecker } from '@utils/contentUtils';
import { sampleSearchInputOptions } from '@utils/sample-data';
import {
  inputArtist,
  inputDescription,
  inputImages,
  inputTags,
  inputTitle,
} from 'modules/content';
import { RootState } from 'modules/reducer';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CafeInfoForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const {
    title,
    tags,
    artist,
    description,
    images: preImages,
  } = useSelector(({ content }: RootState) => content.form);
  const [artists, setArtists] = useState(
    Object.keys(sampleSearchInputOptions.artist)
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [images, setImages] =
    useState<{ data: File; name: string; url: string }[]>(preImages);
  const dispatch = useDispatch();

  const tagHandler = (tags: string[]) => {
    dispatch(inputTags(tags));
  };

  useEffect(() => {
    setDisabled(nullChecker({ title, tags, artist, description, preImages }));
  }, [title, tags, artist, description, preImages]);

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
  useMemo(() => {
    setImages(preImages);
  }, [preImages]);

  useEffect(() => {
    dispatch(inputImages(images));
  }, [images]);

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
        <span className="dropdown">
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
        </span>
      </section>
      <section>
        <h2>글 제목</h2>
        <TextInput
          type="text"
          value={title}
          disabled={false}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(inputTitle(value));
          }}
        />
      </section>
      <section>
        <h2>해시태그</h2>
        <InputTags tagList={tags} handler={tagHandler} />
      </section>
      <section>
        <h2>이벤트 내용</h2>
        <TextArea
          disabled={false}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(inputDescription(value));
          }}
          value={description}
        />
      </section>
      <section>
        <h2>이벤트 이미지</h2>
        <Carousel col={4}>
          {[
            <div>
              <FileInput handleFileChange={imageHandler} />
            </div>,
            ...images.map((image, i) => (
              <FilePreview
                url={image.url}
                handleRemoveFile={() => {
                  setImages((state) => [
                    ...state.slice(0, i),
                    ...state.slice(i + 1, state.length),
                  ]);
                }}
              />
            )),
          ]}
        </Carousel>
      </section>
      <section>
        <Button disabled={disabled} text="다음" handler={onSubmit} />
      </section>
    </>
  );
};

export default CafeInfoForm;
