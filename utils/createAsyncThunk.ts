import { isExpireToken } from 'modules/auth';
import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAAsyncActionCreatorBuilder = AsyncActionCreatorBuilder<
  [any, any],
  [any, [any, never]],
  [any, [any, never]]
>;

export default function createAsyncThunk<
  A extends AnyAAsyncActionCreatorBuilder,
  F extends (...params: any[]) => Promise<any>
>(asyncActionCreator: A, promiseCreator: F) {
  type Params = Parameters<F>;
  return function thunk(...params: Params) {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;
      dispatch(request(undefined));
      try {
        const result = await promiseCreator(...params);
        dispatch(success(result));
      } catch (e) {
        if (e.response && e.response.status === 401) {
          dispatch(isExpireToken());
        }
        dispatch(failure(e));
      }
    };
  };
}

export function refeshTokenThunk<
  A extends AnyAAsyncActionCreatorBuilder,
  F extends (...params: any[]) => Promise<any>
>(asyncActionCreator: A, promiseCreator: F) {
  type Params = Parameters<F>;
  return function thunk(...params: Params) {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;
      dispatch(request(undefined));
      try {
        const result = await promiseCreator(...params);
        dispatch(success(result));
      } catch (e) {
        dispatch(failure(e));
      }
    };
  };
}
