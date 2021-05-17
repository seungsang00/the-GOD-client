import styled from '@styles/themed-components';

export default styled.div`
  z-index: 999;
  color: red;
  display: flex;
  justify-content: center;
  min-height: 75%;
  padding: ${({ theme }) => theme.space.xs};
  .modal-box {
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid black;
    width: 75%;
    position: relative;
    .modal-close {
      line-height: 1;
      display: inline-block;
      position: absolute;
      right: ${({ theme }) => theme.space.xs};
      top: ${({ theme }) => theme.space.xs};
    }
    .modal-component-box {
      border: 1px solid red;
      padding: ${({ theme }) => theme.space.xs};
    }
  }
`;
