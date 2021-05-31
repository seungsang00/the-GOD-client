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
}

// useValidInput
export type VerifyResult = {
  isValid: boolean;
  errorMessage: string | null;
};
export type VerifyFunction = (regExp: RegExp, value: string) => VerifyResult;
