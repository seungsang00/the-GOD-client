import styled from '@styles/themed-components';

export const PerkBadgeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem;
  color: ${({ theme }) => theme.colors.grey};
  &.active {
    color: ${({ theme }) => theme.colors.normal};
  }
  .perk-icon {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.space.md};
    /* box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.3); */
    text-align: center;
    font-size: 30px;
    padding: ${({ theme }) => theme.space.xs};
  }
  .perk-text {
    font-size: 0.8rem;
    padding: ${({ theme }) => theme.space.xxs} 0;
  }
`;
