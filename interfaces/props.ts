import { MouseEventHandler, ReactNode } from 'react';

export interface TextInputProps {
  placeholder: string;
}

export interface AvatarProps {
  profileImage: string;
  size: number;
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
  value: string;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | ((value: string) => void);
  error: string | null;
}

export interface HorizonProps {
  text?: string;
}

export interface AuthModalProps {
  readonly isOpen: boolean;
  handler: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface AuthContentProps {
  handleChangeContent: MouseEventHandler<HTMLSpanElement> | undefined;
  submitHandler: () => void;
}
