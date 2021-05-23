import styled from '@styles/themed-components';

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.space.sm};
  background-color: orange;

  .footer-brand-info {
    display: flex;
    align-items: flex-end;

    h3.logo {
      font-size: 1.7rem;
      font-weight: 600;
      cursor: pointer;
      margin-right: ${({ theme }) => theme.space.sm};
    }

    span {
      margin-bottom: ${({ theme }) => theme.space.xxs};
    }
  }

  .author {
    font-weight: 500;
  }
`;
