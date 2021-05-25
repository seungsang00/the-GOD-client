import styled from '@styles/themed-components';

export const OptionsButtonContainer = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.space.xs};

  border-radius: 999px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  button {
    cursor: pointer;
    padding-top: 2px;
  }
`;
