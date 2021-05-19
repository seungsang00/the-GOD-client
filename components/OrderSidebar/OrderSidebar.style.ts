import styled from '@styles/themed-components';

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: orchid;

  ul {
    padding: 0 ${({ theme }) => theme.space.sm};
  }

  li.step {
    display: flex;
    align-items: center;
    min-height: 3rem;
    margin: ${({ theme }) => theme.space.sm} 0;
    padding: ${({ theme }) => theme.space.xs};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ theme }) => theme.concept.glassmorphism}

    ${({ theme }) => theme.media.tablet} {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  ${({ theme }) => theme.media.desktop} {
    width: 18rem;
  }

  ${({ theme }) => theme.media.tablet} {
    width: 5rem;
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  font-size: 2rem;
`;

export const StepGuideContainer = styled.div`
  margin-left: ${({ theme }) => theme.space.sm};

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
