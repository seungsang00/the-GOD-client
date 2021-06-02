import styled, { withProps } from '@styles/themed-components';
import { BadgeContainerProps } from 'interfaces/props';

export const BadgeContainer = withProps<BadgeContainerProps, HTMLSpanElement>(
  styled.span
)`
  display: flex;
  align-items: center;
  background-color: ${({ bgcolor, theme }) =>
    bgcolor ? bgcolor : theme.colors.dark.hover};
  color: ${({ textcolor }) => (textcolor ? textcolor : '#fff')};
  margin-right: ${({ theme }) => theme.space.xs};
  margin-bottom: ${({ theme }) => theme.space.xs};
  border-radius: 10px;
  font-weight: 500;
  cursor: default;

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
