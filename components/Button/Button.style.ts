import styled, { withProps } from '@styles/themed-components';
import { MouseEventHandler } from 'react';

type Props = {
  type: string;
  readonly disabled: boolean;
  handler: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default withProps<Props, HTMLButtonElement>(styled.button)`
  height: 40px;
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: #fff;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.primary.disabled : theme.colors.primary.normal};
  background-color: ${({ type, theme }) =>
    type === 'submit' && theme.colors.green.normal};
  background-color: ${({ type }) => type === 'line' && 'transparent'};
  border: ${({ type, theme }) =>
    type === 'line' && `1px solid ${theme.colors.primary.normal}`};
  color: ${({ type, theme }) => type === 'line' && theme.colors.primary.normal};
  &:hover {
    color: ${({ type }) => type === 'line' && '#fff'};
    background-color: ${({ disabled, type, theme }) =>
      disabled
        ? theme.colors.primary.disabled
        : type === 'submit'
        ? theme.colors.green.hover
        : theme.colors.primary.hover};
  }
  &:active {
    background-color: ${({ type, theme }) =>
      type === 'submit'
        ? theme.colors.green.pressed
        : theme.colors.primary.pressed};
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding: 0 16px;
    font-size: 12px;
  }
`;
