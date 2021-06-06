import { customMediaQuery } from '@styles/theme';
import styled, { withProps } from '@styles/themed-components';

export const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${customMediaQuery(1050)} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 450px;
  height: 580px;
  min-width: 300px;
  min-height: 300px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &.left {
    margin-right: 5rem;
  }
  &.right {
    margin-left: 5rem;
  }
  ${customMediaQuery(1050)} {
    &.left {
      margin-right: 0;
    }
    &.right {
      margin-left: 0;
    }
  }
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
  &.bg {
    filter: opacity(0.7) !important;
  }
`;

export const TextWrapper = styled.div`
  box-sizing: border-box;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  ${({ theme }) => theme.media.tablet} {
    padding-left: 0;
  }
  z-index: 99;
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
  margin-bottom: 2rem;
`;
