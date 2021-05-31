import React from 'react';
import useScrollFadeIn from 'hooks/useScrollFadeIn';
import {
  Wrapper,
  Image,
  TextWrapper,
  Label,
  Title,
  Description,
} from './landing.style';

const MyRouteLanding = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.5),
  };

  return (
    <Wrapper>
      <Image url="/images/myroute__sample.jpg" {...animatedItem[0]} />
      <TextWrapper>
        <Label {...animatedItem[1]}>My FansSum Route</Label>
        <Title {...animatedItem[2]}>
          컵홀더 투어를 계획하시나요? FansSum에서 나만의 투어 루트를
          만들어보세요!
        </Title>
        <Description {...animatedItem[3]}>
          검색결과 페이지에서 마이루트 버튼을 클릭해 나만의 투어 루트를 만들 수
          있어요!
        </Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default MyRouteLanding;
