import styled from '@styles/themed-components';

export const FileInputForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.primary.normal};
    padding: ${({ theme }) => theme.space.sm};
    ${({ theme }) => theme.concept.glassmorphism.light};
    font-size: 3rem;
    p {
      margin-top: ${({ theme }) => theme.space.sm};
      font-size: 1rem;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primary.hover};
      background-color: ${({ theme }) => theme.colors.bg.hover};
    }
    &:active {
      color: ${({ theme }) => theme.colors.primary.pressed};
      background-color: ${({ theme }) => theme.colors.bg.focused};
    }
  }
`;
