import styled, { css } from 'styled-components';
export default styled.div<{ active: boolean }>`
  display: flex;
  width: fit-content;
  flex-direction: column;
  button {
    font-size: 25px;
  }
  button.guide-root {
    border-radius: 50%;
    padding: ${({ theme }) => theme.space.sm};
    border: 1px solid black;
  }
  .guide-active-box {
    overflow: hidden;
    margin-top: -${({ theme }) => theme.space.md};
    z-index: -1;
    transition: all 0.2s;
    max-height: ${(props) => (props.active ? '200px' : 0)};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${(props) =>
      props.active &&
      css`
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-width: 0 1px 1px 1px;
        border-color: black;
        border-style: solid;
      `};
    display: flex;
    flex-direction: column;
    button {
      padding: ${({ theme }) => theme.space.xs};
      &:first-child {
        padding-top: ${({ theme }) => theme.space.lg};
      }
    }
  }
`;
