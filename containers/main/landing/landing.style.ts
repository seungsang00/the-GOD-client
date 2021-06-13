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
  width: 600px;
  height: 580px;
  min-width: 300px;
  min-height: 300px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &.left {
    margin-right: 3rem;
  }
  &.right {
    margin-left: 3rem;
  }
  ${customMediaQuery(1050)} {
    &.left {
      margin-right: 0;
    }
    &.right {
      margin-left: 0;
    }
  }
  ${customMediaQuery(600)} {
    width: 480px;
    height: 460px;
  }
  ${customMediaQuery(520)} {
    width: 400px;
    height: 380px;
  }
`;
export const Image = withProps<
  {
    url: string;
    size: number;
    width?: number;
    height?: number;
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
  width: ${({ size, width }) => (width ? width : size)}rem;
  height: ${({ size, height }) => (height ? height : size)}rem;
  background: no-repeat center/cover url(${({ url }) => url});
  background-size: contain;
  background-position: center center;
  z-index: ${({ zIndex }) => zIndex};
  &.bg {
    filter: opacity(0.7) !important;
  }
  ${customMediaQuery(600)} {
    width: ${({ size, width }) => (width ? width * 0.8 : size * 0.8)}rem;
    height: ${({ size, height }) => (height ? height * 0.8 : size * 0.8)}rem;
  }
  ${customMediaQuery(520)} {
    width: ${({ size, width }) => (width ? width * 0.7 : size * 0.7)}rem;
    height: ${({ size, height }) => (height ? height * 0.7 : size * 0.7)}rem;
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
  ${customMediaQuery(520)} {
    width: 100%;
  }
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
  ${customMediaQuery(520)} {
    font-size: 1.5rem;
  }
  ${customMediaQuery(450)} {
    font-size: 1.3rem;
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.description};
  margin-bottom: 2rem;
  word-break: keep-all;
`;
