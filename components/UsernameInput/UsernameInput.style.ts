import styled from '@styles/themed-components';

export const InputField = styled.div<{ error: string | null }>`
  input {
    width: 100%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.bg.focused};
    border-radius: 999px;
    margin-bottom: ${({ theme }) => theme.space.xs};
    padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  }

  input.valid {
    border-color: ${({ theme }) => theme.colors.green.normal};
  }

  input.invalid {
    border-color: ${({ theme }) => theme.colors.red.normal};
  }
`;
