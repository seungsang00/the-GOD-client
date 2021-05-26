import React, { useState } from 'react';
import { UnderConstruction } from '@components';
import { Layout } from '@layouts';

const ContentFormPage = () => {
  const [step, setStep] = useState<number>(1);
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };
  return (
    <Layout title={`이벤트 등록 Step${step} | FansSum`}>
      <UnderConstruction
        description={`현재 스텝: step${step} 에 해당하는 컨테이너 컴포넌트가 들어갈 예정입니다`}
      />
    </Layout>
  );
};

export default ContentFormPage;
