import styled from '@styles/themed-components';

export const StyledTextInput = styled.input`
  width: 100%;
  height: 2rem;
  padding: ${({ theme }) => theme.space.sm};
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
`;
