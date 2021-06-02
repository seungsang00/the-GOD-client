import styled from '@styles/themed-components';

export const InputField = styled.div<{ error: string | null }>`
  input {
    width: 100%;
    height: 32px;
    border: 1px solid ${({ theme }) => theme.colors.line.line01};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: ${({ theme }) => theme.space.xs};
  }

  input.valid {
    border-color: ${({ theme }) => theme.colors.green.normal};
  }

  input.invalid {
    border-color: ${({ theme }) => theme.colors.red.normal};
  }
`;
