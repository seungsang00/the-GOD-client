import styled from '@styles/themed-components';

export default styled.div`
  ${({ theme }) => theme.zIndex.depth03};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  padding: ${({ theme }) => theme.space.xs};
  cursor: default;
  .modal-box {
    z-index: 999;
    background-color: white;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.1);
    ${({ theme }) => theme.concept.glassmorphism.deep};
    max-width: 75%;
    max-height: 75%;
    position: relative;
    .modal-close {
      line-height: 1;
      display: inline-block;
      position: absolute;
      right: ${({ theme }) => theme.space.xxs};
      top: -24px;
      color: ${({ theme }) => theme.colors.secondary.hover};
      cursor: pointer;
    }
    .modal-component-box {
      margin: ${({ theme }) => theme.space.xs};
      padding: ${({ theme }) => theme.space.xs};
    }
  }
`;
