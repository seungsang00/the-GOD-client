import { InputWithLabelProps } from '@interfaces';
import styled, { withProps } from '@styles/themed-components';

export const Wrapper = withProps<InputWithLabelProps, HTMLDivElement>(
  styled.div
)`
  input {
    margin: ${({ theme }) => theme.space.xs} 0 !important;
  }
  ${({ theme, disabled }) =>
    disabled
      ? `input[disabled=true] {border: 1px solid ${theme.colors.bg.disabled};}`
      : `input[disabled=false] {border: 1px solid ${theme.colors.bg.normal};}`}
`;
