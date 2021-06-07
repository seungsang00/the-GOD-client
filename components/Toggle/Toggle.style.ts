import styled from 'styled-components';

export default styled.div<{ value: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(233, 233, 233, 0.2);
  input {
    display: none;
  }
  .toggle-box {
    width: 5rem;
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: ${({ theme }) => theme.space.sm};
    margin: 0 ${({ theme }) => theme.space.sm};
    cursor: pointer;
    .toggle-icon {
      width: 4rem;
      min-height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.15);
      text-align: center;
      font-size: 30px;
      padding: ${({ theme }) => theme.space.xs};
    }
    .toggle-text {
      margin: ${({ theme }) => theme.space.xs} 0;
      text-align: center;
      word-break: keep-all;
      font-weight: 600;
      font-size: 0.95rem;
    }
    &:active {
      .toggle-icon {
        box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.1) inset;
      }
    }
  }
  color: ${(props) =>
    props.value
      ? props.theme.colors.secondary.normal
      : props.theme.colors.gray.gray02};
`;
