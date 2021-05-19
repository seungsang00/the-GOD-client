import {
  FunctionComponent,
  Component,
  MouseEventHandler,
  ReactElement,
} from 'react';
// modal type
export type ModalProps = {
  readonly isOpen: boolean;
  component: Component | FunctionComponent | ReactElement;
  handler: MouseEventHandler<HTMLDivElement> | undefined;
};
// toggle type
export type ToggleProps = {
  readonly value: boolean;
  readonly icon: 'parking' | 'bus' | 'baby' | 'subway' | 'train' | 'cat';
  handler: MouseEventHandler<HTMLDivElement> | undefined;
};
