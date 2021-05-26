import {
  FunctionComponent,
  Component,
  MouseEventHandler,
  ReactElement,
  // Dispatch,
  // SetStateAction,
} from 'react';
// modal type
export type ModalProps = {
  readonly isOpen: boolean;
  component: Component | FunctionComponent | ReactElement;
  handler: MouseEventHandler<HTMLDivElement> | undefined;
};

export interface DataNullLinkProps {
  title: string;
  description: string;
  buttonText: string;
  linkTo: string;
}

// toggle type
export type ToggleProps = {
  readonly value: boolean;
  readonly icon:
    | 'parking'
    | 'bus'
    | 'baby'
    | 'subway'
    | 'train'
    | 'cat'
    | 'sort';
  handler: MouseEventHandler<HTMLDivElement> | undefined;
};
// bookmark button type
export type BookmarkButtonProps = {
  readonly value: boolean;
  handler: MouseEventHandler<HTMLDivElement> | undefined;
};

//button type
export type ButtonProps = {
  readonly disabled: boolean;
  readonly text: string;
  handler: MouseEventHandler<HTMLButtonElement> | undefined;
};
// guide Button type
export interface GuideButtonProps {
  // TODO: handler type change;
  active: boolean;
  resetHandler: MouseEventHandler<HTMLButtonElement> | undefined;
  shareHandler: MouseEventHandler<HTMLButtonElement> | undefined;
  activeHandler: MouseEventHandler<HTMLButtonElement> | undefined;
}
// Carousel component Props
// TODO:아직 옆에 보여주는걸 못넣음
export interface CarouselProps {
  isArrow?: boolean;
  isPage?: boolean;
  // isPreview?: boolean;
  col?: 4 | 2 | 1;
  children: JSX.Element[] | JSX.Element;
}
