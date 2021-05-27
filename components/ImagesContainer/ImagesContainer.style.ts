import styled, { withProps } from '@styles/themed-components';

export const ImagesContainerStyle = withProps<{ max: number }, HTMLDivElement>(
  styled.div
)`
  width: 100%;
  display: grid;
  ${({ max }) => `grid-template-columns: repeat(${max}, 1fr);`};
  grid-gap: ${({ theme }) => theme.space.xs};
  
  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    object-fit: cover;
  }
`;
