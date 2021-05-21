import styled from '@styles/themed-components';

export const LoginContainer = styled.article``;

export const OAuthSection = styled.section`
  & > div {
    min-width: 270px;
    height: 2.5rem;
  }

  & > div.row-first {
    margin-bottom: ${({ theme }) => theme.space.xs};
  }

  & > div.row-second {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${({ theme }) => theme.space.xs};
  }
`;
