import styled, { css } from 'styled-components';

export default styled.div<{ active: boolean }>`
  position: absolute;
  top: 80px;
  right: 40px;
  display: flex;
  width: fit-content;
  flex-direction: column;
  button {
    font-size: 25px;
  }
  button.guide-root {
    z-index: 999;
    border-radius: 50%;
    padding: ${({ theme }) => theme.space.sm};
    border: 1px solid black;
    ${({ theme }) => theme.concept.glassmorphism.deep};
    color: ${({ theme }) => theme.colors.secondary.pressed};
    ${(props) =>
      props.active &&
      css`
        color: ${({ theme }) => theme.colors.primary.hover};
        background-color: ${({ theme }) => theme.colors.bg.normal};
      `};
    &:hover {
      ${({ theme }) => theme.colors.bg.hover};
    }
  }
  .guide-active-box {
    overflow: hidden;
    margin-top: -${({ theme }) => theme.space.md};
    z-index: 2;
    transition: all 0.2s;
    max-height: ${(props) => (props.active ? '200px' : 0)};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${(props) =>
      props.active &&
      css`
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-width: 0 1px 1px 1px;
        ${({ theme }) => theme.concept.glassmorphism.normal};
      `};
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: ${({ theme }) => theme.space.xs};
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.primary.normal};
      &:hover {
        color: ${({ theme }) => theme.colors.primary.hover};
        ${({ theme }) => theme.concept.glassmorphism.deep};
      }
      &:action {
        color: ${({ theme }) => theme.colors.primary.pressed};
        ${({ theme }) => theme.concept.glassmorphism.light};
      }
      padding: ${({ theme }) => theme.space.xs};
      &:first-child {
        margin-top: ${({ theme }) => theme.space.lg};
      }
    }
  }
`;
