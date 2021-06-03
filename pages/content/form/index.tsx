import React, { useEffect, useState } from 'react';
import { Layout } from '@layouts';
import { OrderSidebar } from '@components';
import CafeInfoForm from 'containers/contents/CafeinfoForm';
import RangeForm from 'containers/contents/RangeForm';
import LocationForm from 'containers/contents/LocationForm';
import { createThunk } from 'modules/content';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { initRead } from 'modules/content/actions/read';
import FormStyle from '@styles/formstyle.style';

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
  useEffect(() => {
    dispatch(initRead());
  }, []);
  return (
    <Layout title={`이벤트 등록 Step${step + 1} | FansSum`}>
      <FormStyle step={step}>
        <div>
          <OrderSidebar step={step} />
        </div>
        <div>
          {[
            <section className="info">
              <CafeInfoForm onSubmit={nextStep} />
            </section>,
            <section className="range">
              <RangeForm onPrev={prevStep} onSubmit={nextStep} />
            </section>,
            <section className="location">
              <LocationForm onPrev={prevStep} onSubmit={submitHandler} />
            </section>,
          ].filter((_el, i) => i === step)}
        </div>
      </FormStyle>
    </Layout>
  );
};

export default ContentFormPage;
