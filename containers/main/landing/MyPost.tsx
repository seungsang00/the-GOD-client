import React from 'react';
import useScrollFadeIn from 'hooks/useScrollFadeIn';
import {
  Wrapper,
  Image,
  TextWrapper,
  Label,
  Title,
  Description,
  ImageWrapper,
} from './landing.style';

const MyPost = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.1),
    2: useScrollFadeIn('up', 1, 0.2),
    3: useScrollFadeIn('up', 1, 0.3),
    4: useScrollFadeIn('up', 1, 0.35),
    5: useScrollFadeIn('up', 1, 0.4),
    6: useScrollFadeIn('up', 1, 0.5),
    7: useScrollFadeIn('up', 1, 0.6),
    8: useScrollFadeIn('up', 1, 0.7),
    9: useScrollFadeIn('up', 1, 0.8),
    10: useScrollFadeIn('up', 1, 0.9),
    11: useScrollFadeIn('up', 1, 1.0),
    12: useScrollFadeIn('up', 1, 1.05),
    13: useScrollFadeIn('up', 1, 1.1),
  };

  return (
    <Wrapper>
      <TextWrapper>
        <Label {...animatedItem[5]}>FansSum Post</Label>
        <Title {...animatedItem[6]}>
          내 아티스트의 행복한 순간들,
          <br /> 팬썸에서 함께 기념해요!
        </Title>
        <Description {...animatedItem[10]}>
          기쁨은 나누면 9999배가 되니까! <br />
          팬썸에 내 아티스트의 행복한 순간을 위한 컵홀더 이벤트를 등록하고, 더
          많은 팬들과 공유해보세요!
        </Description>
      </TextWrapper>
      <ImageWrapper className="landing-images right">
        <Image
          url="/images/landing_post002.svg"
          size={45}
          width={40}
          bottom={'0%'}
          right={'0%'}
          zIndex={2}
          {...animatedItem[1]}
        />
        <Image
          url="/images/landing_post004.svg"
          size={27}
          height={20}
          bottom={'17%'}
          left={'0px'}
          zIndex={4}
          {...animatedItem[0]}
        />
        <Image
          url="/images/landing_post004_02.svg"
          size={14}
          bottom={'8%'}
          left={'0px'}
          zIndex={4}
          {...animatedItem[4]}
        />
        <Image
          url="/images/landing_post005.svg"
          size={20}
          bottom={'0%'}
          right={'0%'}
          zIndex={5}
          {...animatedItem[7]}
        />
        <Image
          url="/images/landing_post006.svg"
          size={15}
          bottom={'30%'}
          left={'1%'}
          zIndex={6}
          {...animatedItem[8]}
        />
        <Image
          url="/images/landing_post007.svg"
          size={24}
          height={20}
          bottom={'34%'}
          left={'25%'}
          zIndex={5}
          {...animatedItem[9]}
        />
        <Image
          url="/images/landing_post008.svg"
          size={10}
          height={8}
          top={'20%'}
          right={'18%'}
          zIndex={6}
          {...animatedItem[11]}
        />
        <Image
          url="/images/landing_post010.svg"
          size={18}
          height={8}
          top={'7%'}
          right={'14%'}
          zIndex={5}
          {...animatedItem[12]}
        />
        <Image
          url="/images/landing_post011.svg"
          size={16}
          height={12}
          top={'20%'}
          right={'5%'}
          zIndex={7}
          {...animatedItem[13]}
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default MyPost;
