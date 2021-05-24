import styled from '@styles/themed-components';

export const SidebarContainer = styled.div`
  width: 15%;
  height: 100%;
  min-width: 180px;
  position: sticky;
  top: 80px;
  left: 0px;
  display: flex;
  flex-direction: column;

  li.list-item {
    width: fit-content;
    padding: ${({ theme }) => theme.space.xxs} ${({ theme }) => theme.space.xs};
    height: 100%;
    font-weight: 600;
    border-radius: 8px;
    background-color: #fff;
    line-height: 2rem;
    align-self: flex-start;
    margin-bottom: ${({ theme }) => theme.space.xs};
    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
    }

    & > div.active {
      border-bottom: 2px solid red;
    }
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
