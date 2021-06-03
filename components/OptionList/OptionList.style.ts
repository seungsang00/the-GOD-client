import styled from '@styles/themed-components';

export const OptionListStyle = styled.ul`
  width: 100%;
  max-height: 50vh;
  display: flex;
  flex-flow: column wrap;
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  ${({ theme }) => theme.concept.glassmorphism};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bgColor};

  .option-item {
    cursor: pointer;
    font-weight: 600;
    line-height: 1.7rem;
    padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  }
  .option-item:hover {
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ theme }) => theme.concept.glassmorphism.normal};
    border: none;
  }
`;
