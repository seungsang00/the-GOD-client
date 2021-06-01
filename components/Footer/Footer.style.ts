import styled from '@styles/themed-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.space.sm};

  section.copyright {
    text-align: center;
    margin: ${({ theme }) => theme.space.xs} 0;
    font-size: 12px;
  }
  .author {
    font-weight: 500;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 7rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${({ theme }) => theme.space.sm};
  background-color: orange;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-radius: 20px;

  .footer-brand-info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: ${({ theme }) => theme.space.sm};
    margin-top: ${({ theme }) => theme.space.lg};
    margin-right: ${({ theme }) => theme.space.xxl};

    h3.logo {
      font-size: 1.7rem;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: ${({ theme }) => theme.space.xs};
    }

    span.slogan {
      font-size: 14px;
      margin-bottom: ${({ theme }) => theme.space.xxs};
    }
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 14px;

    .footer-brand-info {
      display: none;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 12px;

    .footer-brand-info {
      display: none;
    }
  }
`;

export const FooterSection = styled.section`
  margin: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  h6 {
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
  li {
    margin: ${({ theme }) => theme.space.xs} 0;
  }
`;
