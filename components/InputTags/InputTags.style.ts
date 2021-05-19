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

  span.tag {
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 0 ${({ theme }) => theme.space.xxs};
    margin-right: ${({ theme }) => theme.space.xs};
    /* TODO: 버튼 스타일에 맞춰서 normal, hover, action 스타일 추가하기 */
  }
`;
