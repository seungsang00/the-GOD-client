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
  top: 0;
  left: 0;

  nav {
    display: flex;
    align-items: center;
  }
`;
