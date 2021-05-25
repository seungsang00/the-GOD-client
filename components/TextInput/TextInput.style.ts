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
      ? `background: lightgrey;`
      : `background: #fff !important; 
      border: 1px solid ${theme.colors.normal}`}
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
`;
