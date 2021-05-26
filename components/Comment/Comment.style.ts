import styled from '@styles/themed-components';

export const CommentStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.space.md};
  font-size: 1.1rem;
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  padding: 0 ${({ theme }) => theme.space.sm};

  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    div.comment-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .comment-info {
        display: flex;
        align-items: flex-end;
      }
    }
  }
  .comment-author {
    font-weight: 600;
  }
  .time-ago {
    margin: 0 ${({ theme }) => theme.space.xs};
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.deepgrey};
    font-weight: 500;
  }
  p {
    padding: ${({ theme }) => theme.space.sm} 0;
  }
  .comment-action-trigger {
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.deepgrey};
    cursor: pointer;
    border-radius: 999px;
    position: relative;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightgrey};
    }
  }
`;
