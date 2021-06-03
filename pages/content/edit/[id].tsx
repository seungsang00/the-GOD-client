import React, { useEffect, useState } from 'react';
import { Layout } from '@layouts';
import { useDispatch, useSelector } from 'react-redux';
import { initForm, updateThunk } from 'modules/content';
import { RootState } from 'modules/reducer';
import { OrderSidebar } from '@components';
import CafeInfoForm from 'containers/contents/CafeinfoForm';
import RangeForm from 'containers/contents/RangeForm';
import LocationForm from 'containers/contents/LocationForm';
import { useRouter } from 'next/router';

const ContentEditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [step, setStep] = useState<number>(0);
  const { form, update } = useSelector(({ content }: RootState) => content);
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
    dispatch(updateThunk(form));
  };
  useEffect(() => {
    if (form) {
      dispatch(initForm());
    }
  }, []);
  useEffect(() => {
    if (update.data) {
      router.push(`/content/${id}`);
    }
  }, [update.data]);

  return (
    <Layout title={`컨텐츠 수정 | FansSum`}>
      <Layout title={`이벤트 글 수정 Step${step + 1} | FansSum`}>
        <OrderSidebar step={step} />
        <div>
          {[
            <section>
              <CafeInfoForm onSubmit={nextStep} />
            </section>,
            <section>
              <RangeForm onPrev={prevStep} onSubmit={nextStep} />
            </section>,
            <section>
              <LocationForm onPrev={prevStep} onSubmit={submitHandler} />
            </section>,
          ].filter((_el, i) => i === step)}
        </div>
      </Layout>
    </Layout>
  );
};

export default ContentEditPage;
