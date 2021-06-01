import styled from 'styled-components';

export default styled.div<{ value: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  input {
    display: none;
  }
  .toggle-box {
    text-align: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.normal};
    &:active {
      color: ${({ theme }) => theme.colors.action};
    }

    ${({ theme }) => theme.media.tablet} {
      font-size: 1.6rem;
    }

    ${({ theme }) => theme.media.mobile} {
      font-size: 1.2rem;
    }
  }
  /* space */
  /* margin-left: 0 ${({ theme }) => theme.space.sm};

  ${({ theme }) => theme.media.tablet} {
    padding: 0 ${({ theme }) => theme.space.sm};
  } */
`;
