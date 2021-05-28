import React, { useState } from 'react';
import { Layout } from '@layouts';
import { OrderSidebar } from '@components';
import CafeInfoForm from 'containers/contents/CafeinfoForm';
import RangeForm from 'containers/contents/RangeForm';
import LocationForm from 'containers/contents/LocationForm';
import { Dates } from '@interfaces';

const ContentFormPage = () => {
  const [step, setStep] = useState<number>(0);
  const [dates, setDates] = useState<Dates>({
    startDate: null,
    endDate: null,
  });
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const nextStep = () => {
    if (step < 2) setStep(step + 1);
    return;
  };
  const prevStep = () => {
    if (step > 0) setStep(step - 1);
    return;
  };
  const submitHandler = () => {
    // 제출 리덕스 실행
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
