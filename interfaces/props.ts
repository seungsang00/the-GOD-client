import { Content } from '@interfaces';
import {
  ChangeEvent,
  MouseEventHandler,
  KeyboardEvent,
  ReactNode,
  SetStateAction,
} from 'react';
import { IInputEvent } from './hooks';
import { SharedContent } from './reducer';

export interface PerkProps {
  perk: string;
  isActive: boolean;
}

export interface TextInputProps extends IInputEvent {
  id?: string;
  type: string;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
}

export interface AvatarProps extends AvatarContainerProps {
  profileImage: string;
  type?: 'round' | 'square';
  title?: string;
  handler?: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface AvatarContainerProps {
  size: number;
  type?: 'round' | 'square';
}

export interface BadgeProps extends BadgeContainerProps {
  children: ReactNode;
}

export interface BadgeContainerProps {
  textcolor?: string;
  bgcolor?: string;
}

export interface TimeSelectProps {
  setHour: (HH: string) => void;
  setMinutes: (MM: string) => void;
  initTime?: {
    hour: string;
    minute: string;
  };
}

export interface VerifiedInputProps {
  value: string | undefined;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | ((value: string) => void);
  error: string | null;
  disabled?: boolean;
}

export interface HorizonProps {
  text?: string;
}

export interface CutomModalProps {
  readonly isOpen: boolean;
  handler: MouseEventHandler<HTMLDivElement> | undefined;
  setIsOpen: (value: SetStateAction<boolean>) => void;
}

export interface SearchContentLoaderProps {
  restContents: Content[];
  selectedContents: Content[];
  isPath: boolean;
  resetHadler: () => void;
  setIsPath: React.Dispatch<React.SetStateAction<boolean>>;
  handleCardClick: (id: string) => void;
}

export type ContentLoaderPropsType = {
  data: Content[] | null;
  type: 'myContent' | 'bookmarks';
};
export type PathContentLoaderPropsType = {
  data: SharedContent[] | null;
};

export interface AuthContentProps {
  handleChangeContent: MouseEventHandler<HTMLSpanElement> | undefined;
  submitHandler: (email: string, password: string, userName: string) => void;
}

export interface InputWithLabelProps {
  label: string;
  value?: string;
  type?: string;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | ((value: string) => void);
  disabled?: boolean;
}

export interface AccountOptionsProps {
  handler: MouseEventHandler<HTMLButtonElement | HTMLDivElement> | undefined;
}

export interface FileInputProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputButton?: ReactNode;
}

export interface FlyoutProps {
  isOpen: boolean;
  children: ReactNode;
  handler: MouseEventHandler;
}

export interface ContentCardProps {
  isOpen: boolean; // 현재 디테일 영역이 열려있는 컨텐츠id
  contentData: Content;
  handleClick: (id: string) => void;
}

export interface CommentInputProps {
  handler: MouseEventHandler;
  value: string;
  onChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: ({
    key,
  }: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick?: () => void;
}

export interface PopupContentProps {
  isNoti: boolean;
  description: string;
  buttonText?: string;
  buttonHandler: (e: React.MouseEvent | undefined) => void;
}

export interface PopupProps extends PopupContentProps {
  isOpen: boolean;
  modalController: (e: React.MouseEvent | undefined) => void;
}

export interface PopupWithTitleContentProps extends PopupContentProps {
  title: string;
}

export interface PopupWithTitleProps extends PopupProps {
  title: string;
}
