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
      background-color: ${({ theme }) => theme.colors.normal};

      &:hover {
        background-color: ${({ theme }) => theme.colors.hover};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.action};
      }
    }
  }

  textarea {
    padding-top: ${({ theme }) => theme.space.xs};
    padding-right: 3rem;
    background-color: ${({ theme }) => theme.colors.lightgrey} !important;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;
