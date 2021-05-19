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
    border-radius: 999px;
  }
`;
