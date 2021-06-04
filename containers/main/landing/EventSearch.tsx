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

const EventSearch = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('down', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.3),
    3: useScrollFadeIn('right', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.5),
  };

  return (
    <Wrapper>
      <Image url="/images/myroute__sample.jpg" {...animatedItem[0]} />
      <TextWrapper>
        <Label {...animatedItem[1]}>FansSum for You</Label>
        <Title {...animatedItem[2]}>
          최애 이벤트 카페 찾기, <br />
          이제 팬썸에서 쉽게 찾자!
        </Title>
        <Description {...animatedItem[3]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          suscipit id nisi sit amet maximus.
        </Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default EventSearch;
