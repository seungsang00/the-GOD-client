import { customMediaQuery } from '@styles/theme';
import styled from '@styles/themed-components';

export const SidebarContainer = styled.div`
  height: 100%;
  position: sticky;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary.normal};
  border-radius: ${({ theme }) => theme.borderRadius};

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
    ${({ theme }) => theme.concept.glassmorphism.deep};

    ${({ theme }) => theme.media.tablet} {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  ${({ theme }) => theme.media.desktop} {
    width: 15rem;
  }
  ${customMediaQuery(1024)} {
    width: 6rem;
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
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.5rem;
`;

export const StepGuideContainer = styled.div`
  font-size: 1.2rem;
  font-family: 'GmarketSansM';
  margin-left: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.colors.textColor};
  ${customMediaQuery(1024)} {
    display: none;
  }
  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
