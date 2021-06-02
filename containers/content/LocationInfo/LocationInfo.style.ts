import styled from '@styles/themed-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => theme.concept.glassmorphism.normal};

  h2 {
    font-size: 1.2rem;
    padding: ${({ theme }) => theme.space.sm} 0;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 256px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
