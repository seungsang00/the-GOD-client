import { VerifyFunction } from '@utils/verify';
import { useEffect, useState } from 'react';

const useValidInput = (
  initialState: string,
  verifyFunction: VerifyFunction
) => {
  const [state, setState] = useState<string>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [didInit, setDidInit] = useState<boolean>(false);

  useEffect(() => {
    if (!didInit) {
      // 사용자가 입력하기 전 상태
      setError(null); // 입력 전까지는 error 미노출
      setDidInit(true); // state가 최초 변경되는 시점에 didInit true
    } else {
      setError(verifyFunction(state).errorMessage);
    }
  }, [state]);

  return [state, setState, error] as const;
};

export default useValidInput;
