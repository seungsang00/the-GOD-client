import { TextInputProps } from '@interfaces';
import styled, { withProps } from '@styles/themed-components';

export const StyledTextInput = withProps<TextInputProps, HTMLInputElement>(
  styled.input
)`
  width: 100%;
  height: 2rem;
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme, disabled }) =>
    disabled
      ? `background-color: ${theme.colors.bg.disabled};`
      : `border: 1px solid ${theme.colors.line.line01}; background-color: ${theme.colors.bg.normal};`};
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.normal};
    background-color: ${({ theme }) => theme.colors.bg.focused};
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
  padding-top: ${({ theme }) => theme.space.sm};
  padding-right: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.line.line02};
  background-color: ${({ theme }) => theme.colors.line.line04};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.hover};
    background-color: ${({ theme }) => theme.colors.bg.focused};
  }
`;
