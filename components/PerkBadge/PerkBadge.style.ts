import styled from '@styles/themed-components';

export const PerkBadgeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem;
  color: ${({ theme }) => theme.colors.button.default.disabled};

  .perk-icon {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.space.md};
    text-align: center;
    font-size: 30px;
    padding: ${({ theme }) => theme.space.xs};
    ${({ theme }) => theme.concept.glassmorphism005};
    border-radius: 20px;
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    .perk-icon {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
  }

  .perk-text {
    font-size: 0.9rem;
    font-weight: 500;
    padding: ${({ theme }) => theme.space.xs} 0;
    cursor: default;
  }
`;
