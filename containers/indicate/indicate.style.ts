import styled from '@styles/themed-components';
import { keyframes } from 'styled-components';

const bouncing = keyframes`
  0% {
    transform: translate3d(0, 10px, 0) scale(1.2, 0.85);
  }
  100% {
    transform: translate3d(0, -20px, 0) scale(0.9, 1.1);
  }
`;

export const Wrapper = styled.main`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: ${({ theme }) => theme.space.lg};

    &.icon {
      animation: ${bouncing} 0.4s alternate infinite
        cubic-bezier(0.6, 0.05, 0.15, 0.95);
    }
    &.error-image {
      margin-top: ${({ theme }) => theme.space.lg};
    }
  }
  p {
    font-size: 1rem;
    padding: ${({ theme }) => theme.space.xs} 0;
  }
  button {
    margin: ${({ theme }) => theme.space.md} 0;
  }
`;
