import { ReactNode } from 'react';

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
