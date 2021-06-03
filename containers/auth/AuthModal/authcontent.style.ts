import styled from '@styles/themed-components';

export const LoginContainer = styled.article``;

export const FormSection = styled.section`
  & > button {
    width: 100%;
  }

  p.error {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.red.hover};
    margin-bottom: ${({ theme }) => theme.space.xs};
  }
`;

export const OAuthSection = styled.section`
  min-width: 270px;
  height: fit-content;
  display: grid;

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 2.5rem);
    grid-gap: ${({ theme }) => theme.space.xs};

    & > button:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 2.5rem);
    grid-gap: ${({ theme }) => theme.space.xs} 0;

    & > button {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

export const LinkSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.sm};

  .auth-link {
    cursor: pointer;
    font-weight: 500;
    margin-left: ${({ theme }) => theme.space.xxs};
    color: ${({ theme }) => theme.colors.primary.normal};
    &:hover {
      color: ${({ theme }) => theme.colors.primary.hover};
    }
    &:active {
      color: ${({ theme }) => theme.colors.primary.pressed};
    }
  }
`;
