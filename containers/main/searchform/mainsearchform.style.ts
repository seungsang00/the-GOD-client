import styled from '@styles/themed-components';

export const MainSearchFormContainer = styled.article`
  .trigger-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.media.mobile} {
    .inactive {
      display: none;
    }
  }
`;
