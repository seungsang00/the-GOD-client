import {
  FunctionComponent,
  Component,
  MouseEventHandler,
  ReactElement,
} from 'react';
export type ModalProps = {
  isOpen: Boolean;
  component: Component | FunctionComponent | ReactElement;
  handler: MouseEventHandler<HTMLDivElement> | undefined;
};
