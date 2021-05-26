import styled from 'styled-components';

export default styled.div<{ value: boolean }>`
  position: absolute;
  top: 4px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(233, 233, 233, 0.2);
  input {
    display: none;
  }
  .toggle-box {
    text-align: center;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.normal};
    &:active {
      color: ${({ theme }) => theme.colors.action};
    }

    ${({ theme }) => theme.media.tablet} {
      font-size: 27px;
    }

    ${({ theme }) => theme.media.mobile} {
      font-size: 24px;
    }
  }
  /* space */
  /* margin-left: 0 ${({ theme }) => theme.space.sm};

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.space.sm};
  } */
`;
