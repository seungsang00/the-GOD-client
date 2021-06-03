import styled from '@styles/themed-components';

export const PreviewContainer = styled.div`
  width: 100%;
  position: relative;

  .button-container {
    font-size: 1.2rem;

    .button-file-remove {
      position: absolute;
      cursor: pointer;
      right: ${({ theme }) => theme.space.xs};
      top: ${({ theme }) => theme.space.xs};
    }
  }

  img {
    width: 100%;
  }
`;
