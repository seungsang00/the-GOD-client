import React from 'react';
import useScrollFadeIn from 'hooks/useScrollFadeIn';
import {
  Wrapper,
  ImageWrapper,
  Image,
  TextWrapper,
  Label,
  Title,
  Description,
} from './landing.style';

const EventSearch = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.5),
    5: useScrollFadeIn('up', 1, 0.6),
    6: useScrollFadeIn('up', 1, 0.7),
    7: useScrollFadeIn('up', 1, 1.0),
  };

  return (
    <Wrapper>
      <ImageWrapper className="landing-images left">
        <Image
          url="/images/landing_search001.svg"
          size={34}
          top={'0px'}
          left={'0px'}
          zIndex={1}
          {...animatedItem[0]}
        />
        <Image
          url="/images/landing_search002.svg"
          size={25}
          bottom={'70px'}
          left={'-100px'}
          zIndex={2}
          {...animatedItem[1]}
        />
        <Image
          url="/images/landing_search003.svg"
          size={24}
          bottom={'80px'}
          right={'-80px'}
          zIndex={3}
          {...animatedItem[2]}
        />
        <Image
          url="/images/landing_search004.svg"
          size={20}
          bottom={'30px'}
          left={'140px'}
          zIndex={4}
          {...animatedItem[3]}
        />
        <Image
          url="/images/landing_search005.svg"
          size={5}
          top={'180px'}
          right={'10px'}
          zIndex={5}
          {...animatedItem[7]}
        />
      </ImageWrapper>
      <TextWrapper>
        <Label {...animatedItem[4]}>FansSum for You</Label>
        <Title {...animatedItem[5]}>
          최애 이벤트 카페 찾기, <br />
          이제 팬썸에서 쉽게 찾자!
        </Title>
        <Description {...animatedItem[6]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          suscipit id nisi sit amet maximus.
        </Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default EventSearch;
