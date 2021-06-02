import styled, { withProps } from '@styles/themed-components';
import { AvatarContainerProps } from 'interfaces/props';

export const AvatarContainer = withProps<AvatarContainerProps, HTMLDivElement>(
  styled.div
)`
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ type }) => (type === 'round' ? '999px' : '20px')};
    border: 1px solid ${({ theme }) => theme.colors.line.line01};
  }

  
  ${({ onClick }) =>
    onClick &&
    `
    &:hover {
      filter: opacity(0.7);
      -webkit-filter:opacity(0.7);
    }

    &:active {
      filter: opacity(0.8);
      -webkit-filter:opacity(0.8);
    }
    `}
  
`;
