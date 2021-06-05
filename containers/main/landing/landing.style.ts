import styled, { withProps } from '@styles/themed-components';

export const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 580px;
  height: 580px;
  min-width: 300px;
  min-height: 300px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
`;
export const Image = withProps<
  {
    url: string;
    size: number;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    zIndex?: number;
  },
  HTMLDivElement
>(styled.div)`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  background: no-repeat center/cover url(${({ url }) => url});
  background-size: contain;
  background-position: center center;
  z-index: ${({ zIndex }) => zIndex};
`;

export const TextWrapper = styled.div`
  box-sizing: border-box;
  width: 580px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.p`
  display: inline-block;
  ${({ theme }) => theme.typography.label};
  color: ${({ theme }) => theme.colors.primary.hover};
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.subtitle};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.description};
  /* color: ${({ theme }) => theme.colors.gray.gray01}; */
  margin-bottom: 2rem;
`;
