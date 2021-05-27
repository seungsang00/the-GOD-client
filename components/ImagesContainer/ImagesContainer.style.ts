import styled from '@styles/themed-components';

export const ImagesContainerStyle = styled.div`
  width: 100%;
  img {
    border-radius: ${({ theme }) => theme.borderRadius};
    object-fit: cover;
  }
`;
