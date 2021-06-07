import { Button } from '@components';
import { useRouter } from 'next/dist/client/router';
import { ReactElement } from 'react';
import { Wrapper } from './UnderConstruction.style';

type Props = {
  description?: string;
};
const UnderConstruction = ({ description }: Props): ReactElement => {
  description = description || 'We will be back asap :)';
  const router = useRouter();
  const moveToMain = () => {
    router.push('/');
  };
  return (
    <Wrapper>
      <h1>서비스 준비중입니다</h1>
      <p>보다 나은 서비스 제공을 위하여 페이지 준비중입니다.</p>
      <p>{description}</p>
      <Button disabled={false} text="메인으로 돌아가기" handler={moveToMain} />
    </Wrapper>
  );
};

export default UnderConstruction;
