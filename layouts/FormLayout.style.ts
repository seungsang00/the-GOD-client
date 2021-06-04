import styled from '@styles/themed-components';

export const FormLayout = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: ${({ theme }) => theme.space.xl};
`;

export const FormStepOne = styled.article`
  & > section {
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
  .section-title {
    display: flex;
    /* flex-flow: row wrap; */
    justify-content: flex-start;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space.sm};
    & > h2 {
      font-size: 1.15rem;
      font-weight: 600;
      margin-right: ${({ theme }) => theme.space.sm};
      white-space: nowrap;
    }
    & > span.section-description {
      font-size: 0.9rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      opacity: 0.9;
    }
  }
  .form-artist {
    button {
      width: 100%;
      height: 3rem;
      text-align: left;
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 1px solid ${({ theme }) => theme.colors.line.line02};
      background-color: ${({ theme }) => theme.colors.line.line04};
      padding: ${({ theme }) => theme.space.xxs + ' ' + theme.space.sm};
    }
    .dropdown {
      position: relative;
    }
  }
  .form-title {
    input {
      width: 100%;
      height: 3rem;
      text-align: left;
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 1px solid ${({ theme }) => theme.colors.line.line02};
      background-color: ${({ theme }) => theme.colors.line.line04};
      padding: ${({ theme }) => theme.space.xxs + ' ' + theme.space.sm};
      font-weight: 500;
      font-size: 1.1rem;

      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary.hover};
        background-color: ${({ theme }) => theme.colors.bg.focused};
      }
    }
  }
  .form-images {
    .file-input {
      width: 100%;
      /* display: flex;
      justify-content: center;
      align-items: center; */
      margin-bottom: ${({ theme }) => theme.space.sm};
    }
  }
`;
