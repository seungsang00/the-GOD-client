import styled from '@styles/themed-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.space.sm};
  ${({ theme }) => theme.concept.glassmorphism}
  position: fixed;
  top: 0;
  left: 0;
  ${({ theme }) => theme.zIndex.depth04 + ' !important'};

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
  .auth-modal-trigger {
    & > button {
      min-width: 60px;
    }
  }
`;

export const SearchField = styled.section`
  padding-top: 60px;

  & > div {
    align-items: flex-start !important;
    ${({ theme }) => theme.zIndex.depth03 + ' !important'};
    min-height: calc(100vh-60px);
    height: 100% !important;
    padding-top: 65px;
    background-color: transparent;
    border: none;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    position: fixed;
    top: 0px;

    .modal-box {
      width: 100%;
      max-width: 100% !important;
      background-color: transparent !important;
      box-shadow: none !important;

      .modal-component-box {
        background-color: transparent !important;
        border: none;
        padding: 0 ${({ theme }) => theme.space.md};
      }
    }
  }

  .modal-close {
    display: none !important;
  }
`;
