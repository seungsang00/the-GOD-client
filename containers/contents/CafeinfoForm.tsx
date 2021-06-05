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
import { FormStepOne } from '@layouts';
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
    <FormStepOne className="form-step-001">
      <section className="form-artist">
        <div className="section-title">
          <h2>아티스트</h2>
          <span className="section-description">
            이벤트의 주인공을 선택해주세요
          </span>
        </div>
        <DropdownTrigger
          value={artistName}
          placeholder="누구를 위한 이벤트 인가요?"
          onClick={() => {
            dispatch(
              inputArtist({ name: '', id: '', profileImage: '', type: 'solo' })
            );
            data && setArtists(data);
            setArtistName('');
            setIsOpen(!isOpen);
          }}
        />
        <div className="dropdown">
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
        </div>
      </section>
      <section className="form-title">
        <div className="section-title">
          <h2>타이틀</h2>
          <span className="section-description">
            컨텐츠 타이틀을 입력해주세요 (ex. "엔하이픈 희승 데뷔 1주년 이벤트")
          </span>
        </div>
        <TextInput
          type="text"
          value={title}
          disabled={false}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(inputTitle(value));
          }}
          placeholder='컨텐츠 타이틀을 입력해주세요 (ex. "엔하이픈 희승 데뷔 1주년 이벤트" )'
        />
      </section>
      <section className="form-hashtags">
        <div className="section-title">
          <h2>해시태그</h2>
          <span className="section-description">
            태그를 입력해주세요 (입력한 태그를 클릭하면 삭제할 수 있어요)
          </span>
        </div>
        <InputTags tagList={tags} handler={tagHandler} />
      </section>
      <section className="form-description">
        <div className="section-title">
          <h2>이벤트 내용</h2>
          <span className="section-description">
            이벤트 상세내용을 입력해주세요. (ex. 이벤트 소개글, 이벤트 특전 내용
            등)
          </span>
        </div>
        <TextArea
          disabled={false}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(inputDescription(value));
          }}
          value={description}
          placeholder="이벤트 상세내용을 입력해주세요. (ex. 이벤트 소개글, 이벤트 특전 내용 등)"
        />
      </section>
      <section className="form-images">
        <div className="section-title">
          <h2>이미지 파일</h2>
          <span className="section-description">
            이벤트 카페의 사진 또는 동영상 파일을 업로드할 수 있어요.
          </span>
        </div>
        <div className="file-input">
          <FileInput handleFileChange={imageHandler} />
        </div>
        <div className="images">
          <Carousel col={4}>
            {[
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
        </div>
      </section>
      <section>
        <Button disabled={disabled} text="다음" handler={onSubmit} />
      </section>
    </FormStepOne>
  );
};

export default CafeInfoForm;
