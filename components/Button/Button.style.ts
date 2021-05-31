import styled, { withProps } from '@styles/themed-components';
import { MouseEventHandler } from 'react';

type Props = {
  readonly disabled: boolean;
  handler: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default withProps<Props, HTMLButtonElement>(styled.button)`
  border: 1px solid black;
  min-width: 240px;
  height: 30px;
  ${({ theme }) => theme.media.desktop} {
    padding: 0 16px;
  }
  ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding: 0 8px;
    font-size: 12px;
  }
  &:hover {
    background-color: rgba(233, 233, 233, 0.4);
  }
  &:active {
    background-color: rgba(233, 233, 233, 1);
  }

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;
