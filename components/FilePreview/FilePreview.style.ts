import styled from '@styles/themed-components';

export const PreviewContainer = styled.div`
  width: 100%;
  height: fit-content !important;
  position: relative;

  .button-container {
    font-size: 1.2rem;

    .button-file-remove {
      position: absolute;
      cursor: pointer;
      right: ${({ theme }) => theme.space.xs};
      top: ${({ theme }) => theme.space.xs};
      color: ${({ theme }) => theme.colors.gray.gray02};
      &:hover {
        color: ${({ theme }) => theme.colors.gray.gray03};
      }
      &:active {
        color: ${({ theme }) => theme.colors.gray.gray01};
      }
    }
  }

  img {
    width: 100%;
  }
`;
