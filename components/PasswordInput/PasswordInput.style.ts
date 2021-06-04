import styled from '@styles/themed-components';

export const PasswordInputField = styled.div`
  input {
    width: 100%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.bg.hover};
    border-radius: 999px;
    margin-bottom: ${({ theme }) => theme.space.xs};
    padding: 0 ${({ theme }) => theme.space.sm};
  }

  input.valid {
    border-color: ${({ theme }) => theme.colors.green.normal};
  }

  input.invalid {
    border-color: ${({ theme }) => theme.colors.red.normal};
  }

  div {
    position: relative;
  }

  #visibleController {
    position: absolute;
    top: 11px;
    right: 16px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary.hover};

    svg {
      color: inherit;
    }
  }

  #visibleController.inactive {
    color: ${({ theme }) => theme.colors.secondary.disabled};
  }
`;
