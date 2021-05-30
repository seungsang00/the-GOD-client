import styled from '@styles/themed-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.space.sm};
  ${({ theme }) => theme.concept.glassmorphism}
  position: sticky;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  .logo {
    font-size: 1.7rem;
    font-weight: 600;
    cursor: pointer;
    margin-right: ${({ theme }) => theme.space.sm};
  }
  nav.gnb {
    cursor: pointer;
  }
  nav {
    display: flex;
    align-items: center;
  }
`;
