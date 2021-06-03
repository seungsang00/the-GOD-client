import styled from '@styles/themed-components';

export const Wrapper = styled.article`
  padding: ${({ theme }) => theme.space.sm};
  color: #222;
  width: 45vw;
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.space.md};

  button {
    margin-left: ${({ theme }) => theme.space.sm};
  }
`;

export const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 45%;
  }
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li.info {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.sm};
    margin: ${({ theme }) => theme.space.xs} 0;
    background-color: ${({ theme }) => theme.colors.gray.gray04};
    border-radius: ${({ theme }) => theme.borderRadius};

    span {
      color: ${({ theme }) => theme.colors.primary.disabled};
      margin-right: ${({ theme }) => theme.space.xs};
    }
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space.lg} 0;
  margin-top: ${({ theme }) => theme.space.sm};

  & > div {
    width: 100%;
  }

  p.error {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.red.hover};
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    text-align: center;
    padding: ${({ theme }) => theme.space.sm} 0;
    margin-top: ${({ theme }) => theme.space.md};
  }
  p.user-email {
    width: fit-content;
    padding: ${({ theme }) => theme.space.xs};
    background-color: ${({ theme }) => theme.colors.primary.disabled};
    font-size: 0.95rem;
    border-radius: 7px;
    margin-bottom: ${({ theme }) => theme.space.lg};
  }

  ${({ theme }) => theme.media.tablet} {
    h1 {
      font-size: 2rem;
    }
  }
  ${({ theme }) => theme.media.mobile} {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
