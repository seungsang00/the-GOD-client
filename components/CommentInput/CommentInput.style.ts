import styled from '@styles/themed-components';

export const CommentInputStyle = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  margin: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.xl};
  border-radius: ${({ theme }) => theme.borderRadius};

  .comment-input-section {
    display: flex;
    position: relative;

    .button-comment-submit {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
      cursor: pointer;
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary.normal};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.hover};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.primary.pressed};
      }
    }
  }

  textarea {
    padding-top: ${({ theme }) => theme.space.sm};
    padding-right: 3rem;
    background-color: ${({ theme }) => theme.colors.gray.gray04} !important;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;
