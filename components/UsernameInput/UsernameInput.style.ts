import styled from '@styles/themed-components';

export const InputField = styled.div<{ error: string | null }>`
  input {
    width: 100%;
    height: 32px;
    border: 2px solid grey;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: ${({ theme }) => theme.space.xs};
  }

  input.valid {
    border-color: ${({ theme }) => theme.colors.green};
  }

  input.invalid {
    border-color: ${({ theme }) => theme.colors.red};
  }

  p.error {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.red};
  }
`;
