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
import { IArtist, IGroupArtist, IMember } from '@interfaces';
import { nullChecker } from '@utils/contentUtils';
import { getArtistThunk } from 'modules/artist';
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
  const { data } = useSelector(({ artist }: RootState) => artist.read);
  const [artists, setArtists] =
    useState<(IGroupArtist | IArtist | IMember)[]>();
  const [artistName, setArtistName] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [images, setImages] =
    useState<{ data: File; name: string; url: string }[]>(preImages);
  const dispatch = useDispatch();

  const tagHandler = (tags: string[]) => {
    dispatch(inputTags(tags));
  };

  useEffect(() => {
    setArtistName(artist.name);
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

  useEffect(() => {
    dispatch(getArtistThunk());
  }, []);

  useEffect(() => {
    if (data) {
      setArtists(data);
    }
  }, [data]);

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
          value={artistName}
          placeholder="아티스트 선택"
          onClick={() => {
            dispatch(
              inputArtist({ name: '', id: '', profileImage: '', type: 'solo' })
            );
            data && setArtists(data);
            setArtistName('');
            setIsOpen(!isOpen);
          }}
        />
        <span className="dropdown">
          <Dropdown visible={isOpen}>
            {artists && (
              <OptionList
                list={artists}
                listHandler={(key) => {
                  const selectedArtist = artists.filter(
                    (el) => el.name === key
                  )[0] as IGroupArtist;
                  if (selectedArtist && selectedArtist.type === 'group') {
                    const { member } = selectedArtist as IGroupArtist;
                    setArtists(member);
                  } else {
                    dispatch(inputArtist(selectedArtist));
                    data && setArtists(data);
                    setIsOpen(false);
                  }
                }}
                stateHandler={(key) => {
                  const selectedArtist = artists.filter(
                    (el) => el.name === key
                  )[0] as IGroupArtist;
                  if (artistName) {
                    setArtistName(selectedArtist.name);
                  } else {
                    setArtistName((state) => state + ' ' + selectedArtist.name);
                  }
                }}
              />
            )}
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
