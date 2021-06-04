import styled from '@styles/themed-components';

export const InputTagsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;

  input,
  span.tag {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: ${({ theme }) => theme.space.xxs};
  }

  input {
    width: 50%;
    max-width: 100%;
  }

  span.tag {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary.pressed};
    border-radius: 5px;
    padding: 0 ${({ theme }) => theme.space.xxs};
    margin-right: ${({ theme }) => theme.space.xs};
    ${({ theme }) => theme.concept.glassmorphism.light};
    cursor: pointer;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.secondary.disabled};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.secondary.disabled};
    }
  }
`;
