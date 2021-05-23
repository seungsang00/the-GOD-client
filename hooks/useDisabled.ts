import { MouseEventHandler, useState } from 'react';

const useDisabled = (initState: boolean) => {
  const [disabled, setDisabled] = useState<boolean>(initState);
  const disabledController: MouseEventHandler = (e) => {
    e.stopPropagation();
    setDisabled(!disabled);
  };
  return { disabled, disabledController };
};
export default useDisabled;
