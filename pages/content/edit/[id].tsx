import React, { useEffect, useState } from 'react';
import { FormLayout, FormStyle, Layout } from '@layouts';
import { useDispatch, useSelector } from 'react-redux';
import {
  initForm,
  inputArtist,
  inputDates,
  inputDescription,
  inputId,
  inputImages,
  inputLocation,
  inputPerks,
  inputTags,
  inputTimes,
  inputTitle,
  updateContentThunk,
} from 'modules/content';
import { RootState } from 'modules/reducer';
import { OrderSidebar } from '@components';
import CafeInfoForm from 'containers/contents/CafeinfoForm';
import RangeForm from 'containers/contents/RangeForm';
import LocationForm from 'containers/contents/LocationForm';
import { useRouter } from 'next/router';
import { getContentThunk } from 'modules/content/actions/read';
import { Content, ToggleProps } from '@interfaces';

const ContentEditPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [step, setStep] = useState<number>(0);
  const { form, update, current } = useSelector(
    ({ content }: RootState) => content
  );
  const [images, setImages] = useState<
    { data: File; name: string; url: string }[]
  >([]);
  const dispatch = useDispatch();

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
    return;
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
    return;
  };

  const submitHandler = () => {
    dispatch(updateContentThunk(form));
  };

  useEffect(() => {
    dispatch(getContentThunk(id as string));
    // dispatch(initForm());
  }, [id]);
  const fetchImageController = async (url: string) => {
    if (!window) return;
    const blob = await fetch(url).then((r) => r.blob());
    const ext = url.split('.').pop();
    const filename = url.split('/').pop();
    const metadata = { type: `image/${ext}` };
    const file = new File([blob], filename as string, metadata);
    setImages((state) => [
      ...state,
      {
        data: file,
        name: file.name,
        url: url,
      },
    ]);
  };

  const fetchContentData = (content: Content) => {
    images.length === 0 && content.images.forEach(fetchImageController);
    dispatch(inputId(content.id));
    dispatch(inputTitle(content.title));
    dispatch(inputDescription(content.description));
    dispatch(
      inputArtist({
        id: content.artist.id,
        name: content.artist.name,
        type: content.artist.group ? 'group' : 'solo',
        profileImage: content.artist.profileImage,
      })
    );
    dispatch(inputTags(content.tags));
    dispatch(inputDates(content.date));
    dispatch(inputTimes(content.time));
    dispatch(inputLocation(content.address));
    dispatch(inputLocation(content.address));
    for (let perk in content.perks) {
      content.perks[perk] && dispatch(inputPerks(perk as ToggleProps['icon']));
    }
  };

  useEffect(() => {
    if (current.data) {
      fetchContentData(current.data);
    }
  }, [current.data]);

  useEffect(() => {
    dispatch(inputImages(images));
  }, [images]);
  useEffect(() => {
    return () => {
      dispatch(initForm());
    };
  }, []);

  useEffect(() => {
    if (update.data) {
      router.push(`/content/${id}`);
    }
  }, [update.data]);

  return (
    <Layout title={`컨텐츠 수정 step ${step + 1} | FansSum`}>
      <FormStyle step={step}>
        <div>
          <OrderSidebar step={step} />
        </div>
        <FormLayout>
          <div>
            {[
              <section key="info" className="info">
                <CafeInfoForm onSubmit={nextStep} />
              </section>,
              <section key="range" className="range">
                <RangeForm onPrev={prevStep} onSubmit={nextStep} />
              </section>,
              <section key="location" className="location">
                <LocationForm onPrev={prevStep} onSubmit={submitHandler} />
              </section>,
            ].filter((_el, i) => i === step)}
          </div>
        </FormLayout>
      </FormStyle>
    </Layout>
  );
};

export default ContentEditPage;
