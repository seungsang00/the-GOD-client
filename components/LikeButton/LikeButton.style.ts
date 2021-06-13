import styled, { withProps } from '@styles/themed-components';
import { keyframes } from 'styled-components';

// Animations
const heartPulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;
const heartUnlike = keyframes`
  50% { 
    transform: scale(.75); 
  }
`;
const heartFloatMain_1 = keyframes`
  0% { 
    opacity: 0; 
    transform: translate(0) rotate(0);
  }
  50% { 
    opacity: 1; 
    transform: translate(0, -25px) rotate(-20deg);
  }
`;
const heartFloatMain_2 = keyframes`
  0% { 
    opacity: 0; 
    transform: translate(0) rotate(0) scale(0);
  }
  50% { 
    opacity: .9; 
    transform: translate(-10px, -38px) rotate(25deg) scale(1);
  }
`;
const heartFloatSub_1 = keyframes`
  0% {
    visibility: hidden;
    transform: translate(0) rotate(0);
  }
  50% {
    visibility: visible;
    transform: translate(13px, -13px) rotate(30deg);
  }
`;
const heartFloatSub_2 = keyframes`
  0% {
    visibility: hidden;
    transform: translate(0) rotate(0);
  }
  50% {
    visibility: visible;
    transform: translate(18px, -10px) rotate(55deg);
  }
`;
const heartFloatSub_3 = keyframes`
  0% {
    visibility: hidden;
    transform: translate(0) rotate(0);
  }
  50% {
    visibility: visible;
    transform: translate(-10px, -10px) rotate(-40deg);
  }
  100% {
    transform: translate(-50px, 0);
  }
`;
const heartFloatSub_4 = keyframes`
  0% {
    visibility: hidden;
    transform: translate(0) rotate(0);
  }
  50% {
    visibility: visible;
    transform: translate(2px, -18px) rotate(-25deg);
  }
`;

const bezier = `cubic-bezier(.175, .885, .32, 1.275)`;
const pink = `#ff6e6f`;

export const ButtonWrapper = withProps<{ isActive: boolean }, HTMLDivElement>(
  styled.div
)`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 40px;
  padding: 0.45rem 0.75rem;
  border: 2px solid ${({ isActive, theme }) =>
    isActive ? pink : theme.colors.line.line02};
  color: ${({ theme }) => theme.colors.gray.gray01};
  transition: all 0.25s ${bezier};
  filter: grayscale(100%);

  ${({ isActive }) =>
    isActive &&
    `
    color: ${pink};
    border-color: currentColor;
    filter: grayscale(0);
  `}

  &:hover {
    color: ${pink};
    border-color: ${pink};
    filter: grayscale(0);
  }

  & .text {
    font-size: 0.9rem;
    padding-top: 2px;
  }
`;

export const LikeIcon = styled.span`
  width: 18px;
  height: 16px;
  display: inline-block;
  position: relative;
  margin-right: 0.25em;
  font-size: 1.5rem;
  background: url('/images/heart.svg') no-repeat center;
  background-size: 100%;
  animation: ${heartUnlike} 0.25s ${bezier} both;

  /* isActive */
  .liked .like-icon {
    animation: ${heartPulse} 0.25s ${bezier} both;
  }

  [class^='heart-animation-'] {
    background: url('/images/heart.svg') no-repeat center;
    background-size: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 14px;
    opacity: 0;

    &::before,
    &::after {
      content: '';
      background: inherit;
      background-size: 100%;
      width: inherit;
      height: inherit;
      display: inherit;
      position: relative;
      top: inherit;
      left: inherit;
      opacity: 0;
    }
  }

  .heart-animation-1 {
    animation: ${heartFloatMain_1} 1s ${bezier} both;

    &::before,
    &::after {
      width: 12px;
      height: 10px;
      visibility: hidden;
    }
    &::before {
      opacity: 0.6;
      animation: ${heartFloatSub_1} 1s 0.25s ${bezier} both;
    }
    &::after {
      animation: ${heartFloatSub_2} 1s 0.15s ${bezier} both;
      opacity: 0.75;
    }
  }

  .heart-animation-2 {
    animation: ${heartFloatMain_2} 1s 0.1s ${bezier} both;

    &::before,
    &::after {
      width: 10px;
      height: 8px;
      visibility: hidden;
    }
    &::before {
      animation: ${heartFloatSub_3} 1s 0.25s ${bezier} both;
      opacity: 0.25;
    }
    &::after {
      animation: ${heartFloatSub_4} 1s 0.15s ${bezier} both;
      opacity: 0.4;
    }
  }
`;
