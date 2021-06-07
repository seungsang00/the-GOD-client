import styled from '@styles/themed-components';

export const RangeFormWrapper = styled.article`
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > section:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.xxl};
  }
  /* section 타이틀 */
  .section-title {
    display: flex;
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
  /* 일정 */
  .form-dates-triggers {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .dropdown {
    width: 100%;
    position: relative;
    .dropdown-content {
      width: 640px;
    }
  }
  /* 영업시간 */
  .form-time {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .form-time-open {
    margin-right: ${({ theme }) => theme.space.sm};
  }
  /* 이전, 다음 버튼 */
  .form-move-step-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10%;
  }
`;
