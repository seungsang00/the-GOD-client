import { Content } from '@interfaces';
import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';
import { SharedContent } from './reducer';

export interface TextInputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: ChangeEventHandler;
  disabled?: boolean;
}

export interface AvatarProps {
  profileImage: string;
  size: number;
  title?: string;
  handler?: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface AvatarContainerProps {
  size: number;
}

export interface BadgeProps {
  children: ReactNode;
  textcolor?: string;
  bgcolor?: string;
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

export type ContentLoaderPropsType = {
  data: Content[] | null;
  type: 'myContent' | 'bookmarks';
};
export type PathContentLoaderPropsType = {
  data: SharedContent[] | null;
};

export interface AuthContentProps {
  handleChangeContent: MouseEventHandler<HTMLSpanElement> | undefined;
  submitHandler: () => void;
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
