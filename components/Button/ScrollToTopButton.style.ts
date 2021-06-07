import styled from '@styles/themed-components';
import { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translate3d(0, 0px, 0);
  }
  100% {
    transform: translate3d(0, -20px, 0);
  }
`;

export const TopLinkStyle = styled.button`
  position: absolute;
  top: 90vh;
  right: 5vw;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  span {
    font-size: 0.9rem;
  }

  &:hover {
    animation: ${bounce} 0.4s alternate infinite ease-in;
  }
`;
