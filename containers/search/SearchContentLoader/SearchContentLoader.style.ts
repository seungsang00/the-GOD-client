import styled from '@styles/themed-components';

export const SearchContentLoaderStyle = styled.section`
  width: 400px;
  /* FIXME: height를 어떻게 설정해야 할지 모르겠습니다 */
  height: 90vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    /*  스크롤의 화살표가 포함된 영역   */
    display: none;
  }
`;
