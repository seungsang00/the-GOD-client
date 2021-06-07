import styled from '@styles/themed-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 1.1rem;
  }
  padding: 32px 8px 18px;

  .button-area {
    display: flex;
    justify-content: flex-end;
    margin-top: ${({ theme }) => theme.space.md};

    button {
      width: 80px;
    }
  }
`;
