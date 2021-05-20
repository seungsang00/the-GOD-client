import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';

/* TODO: reducer 분리 작업은 꼭 해본다.
  1. code factory를 꼭 만들어서 비동기처리를 일괄적으로 처리하는 state를 가질 것
  2. 비동기 처리에 따른 독립적인 reducer를 만들어 개별 state로 분리할 것
*/
const rootReducer = combineReducers({
  user,
  auth,
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;
