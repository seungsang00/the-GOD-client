import { Content } from '@interfaces';
import {
  MouseEventHandler,
  ReactNode,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import { SharedContent } from './reducer';

export interface PerkProps {
  perk: string;
  isActive: boolean;
}

export interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: string;
  value: string;
  onChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: ({
    key,
  }: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick?: () => void;
  disabled?: boolean;
  placeholder?: string;
}

export interface AvatarProps extends AvatarContainerProps {
  profileImage: string;
  title?: string;
  handler?: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface AvatarContainerProps {
  size: number;
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
}

export interface SearchContentLoaderProps {
  data: Content[] | null;
  focusedID: string | null;
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
  submitHandler: (email: string, password: string, userName?: string) => void;
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
  children: ReactNode;
  handler: MouseEventHandler;
}

export interface ContentCardProps {
  focusedID: string | null; // 현재 디테일 영역이 열려있는 컨텐츠id
  contentData: Content;
  handleClick: (id: string) => void;
}
