import { Dispatch, SetStateAction } from 'react';

// useScrollFadeIn
export type Direction = 'up' | 'down' | 'left' | 'right';

// useTextInput
export interface IInputEvent {
  value: string;
  onChange: ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: ({
    key,
  }: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick?: () => void;
  setValue?: Dispatch<SetStateAction<string>>;
}

// useValidInput
export type VerifyResult = {
  isValid: boolean;
  errorMessage: string | null;
};
export type VerifyFunction = (regExp: RegExp, value: string) => VerifyResult;
