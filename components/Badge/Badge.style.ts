import styled, { withProps } from '@styles/themed-components';
import { BadgeContainerProps } from 'interfaces/props';

export const BadgeContainer = withProps<BadgeContainerProps, HTMLSpanElement>(
  styled.span
)`
  display: flex;
  align-items: center;
  background-color: ${({ bgcolor, theme }) =>
    bgcolor ? bgcolor : theme.colors.yellow};
  color: ${({ textcolor }) => (textcolor ? textcolor : 'black')};
  margin-right: ${({ theme }) => theme.space.xs};
  border-radius: 7px;
  font-weight: 500;

  ${({ theme }) => theme.media.desktop} {
    font-size: 0.9rem;
    line-height: 1.8rem;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    height: 28px;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 12px;
    height: 24px;
  }
  width: fit-content;
  height: fit-content;
  padding: 0 0.9rem;
`;
