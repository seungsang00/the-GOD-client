import React, { useState } from 'react';
import { Layout } from '@layouts';
import { OrderSidebar } from '@components';
import CafeInfoForm from 'containers/contents/CafeinfoForm';
import RangeForm from 'containers/contents/RangeForm';
import LocationForm from 'containers/contents/LocationForm';
import { createThunk } from 'modules/content';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';

const ContentFormPage = () => {
  const [step, setStep] = useState<number>(0);
  const { form } = useSelector(({ content }: RootState) => content);
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
    dispatch(createThunk(form));
  };
  return (
    <Layout title={`이벤트 등록 Step${step} | FansSum`}>
      <OrderSidebar />
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
  );
};

export default ContentFormPage;
