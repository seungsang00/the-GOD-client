import { useState } from 'react';

const useTextInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);

  const inputEvent = {
    value: value,
    onChange: ({
      target,
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(target.value);
    },
    onKeyDown: ({
      key,
    }: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      switch (key) {
        case 'Enter':
          console.log('Enter');
          break;
        default:
          break;
      }
    },
    onClick: () => {
      console.log('Click');
    },
  };
  return { value, inputEvent };
};

export default useTextInput;
