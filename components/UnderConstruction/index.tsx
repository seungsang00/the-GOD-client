import { ReactElement } from 'react';
import { Wrapper } from './UnderConstruction.style';

type Props = {
  description?: string;
};
const UnderConstruction = ({ description }: Props): ReactElement => {
  description = description || 'We will be back asap :)';
  return (
    <Wrapper>
      <h1>서비스 준비중입니다</h1>
      <p>보다 나은 서비스 제공을 위하여 페이지 준비중입니다.</p>
      <p>{description}</p>
    </Wrapper>
  );
};

export default UnderConstruction;
