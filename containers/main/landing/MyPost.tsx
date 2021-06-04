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

const MyPost = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.5),
  };

  return (
    <Wrapper>
      <TextWrapper>
        <Label {...animatedItem[1]}>label Here</Label>
        <Title {...animatedItem[2]}>내가 직접 이벤트 등록하기</Title>
        <Description {...animatedItem[3]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          suscipit id nisi sit amet maximus.
        </Description>
      </TextWrapper>
      <Image url="/images/myroute__sample.jpg" {...animatedItem[0]} />
    </Wrapper>
  );
};

export default MyPost;
