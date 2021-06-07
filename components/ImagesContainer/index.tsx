import { ReactElement } from 'react';
import { ImagesContainerStyle } from './ImagesContainer.style';

export interface ImagesContainerProps {
  title: string;
  images: string[];
  max: number;
}
const ImagesContainer = ({
  title,
  images,
  max,
}: ImagesContainerProps): ReactElement => {
  return (
    <ImagesContainerStyle max={max}>
      {images.slice(0, max).map((link: string, i: number) => (
        <img src={link} key={i} alt={`${title}-img-${i}`} />
      ))}
    </ImagesContainerStyle>
  );
};

export default ImagesContainer;
