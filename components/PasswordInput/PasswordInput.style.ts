import styled from '@styles/themed-components';

export const PasswordInputField = styled.div`
  input {
    width: 100%;
    height: 32px;
    border: 2px solid grey;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: ${({ theme }) => theme.space.xxs};
  }

  input.valid {
    border-color: ${({ theme }) => theme.colors.green};
  }

  input.invalid {
    border-color: ${({ theme }) => theme.colors.red};
  }

  div {
    position: relative;
  }

  #visibleController {
    position: absolute;
    top: 8px;
    right: 8px;

    svg {
      color: inherit;
    }
  }

  #visibleController.inactive {
    color: lightgray;
  }
`;
