import styled from '@styles/themed-components';

export const Wrapper = styled.article`
  padding: ${({ theme }) => theme.space.sm};
  color: #000;
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.space.md};
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
    background-color: #eee;
    border-radius: ${({ theme }) => theme.borderRadius};

    span {
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
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3rem;
    padding: ${({ theme }) => theme.space.sm} 0;
  }
  p.user-email {
    width: fit-content;
    padding: ${({ theme }) => theme.space.xs};
    background-color: lightsteelblue;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: ${({ theme }) => theme.space.sm};
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
