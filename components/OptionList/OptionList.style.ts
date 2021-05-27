import styled from '@styles/themed-components';

export const OptionListStyle = styled.ul`
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  .option-item {
    cursor: pointer;
    font-weight: 600;
    line-height: 1.7rem;
    padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  }
  .option-item:hover {
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.grey} !important;
  }
`;
