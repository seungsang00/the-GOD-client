import { customMediaQuery } from '@styles/theme';
import styled from '@styles/themed-components';

export const SearchTriggerWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  margin-right: ${({ theme }) => theme.space.xxl};
  transform-origin: 0% 0%;
  transition: -ms-transform 150ms ease 0s, -webkit-transform 150ms ease 0s,
    transform 150ms ease 0s, opacity 50ms ease 20ms,
    pointer-events 0ms ease 150ms;
  ${({ theme }) => theme.media.tablet} {
    margin-right: ${({ theme }) => theme.space.lg};
  }
`;

export const TriggerBg = styled.div`
  display: inline-flex;
  max-width: 100%;
  min-width: 20rem;
  text-align: left;
  vertical-align: middle;
  border-radius: 40px;
  transition: box-shadow 0.2s ease;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%) !important;

  ${({ theme }) => theme.media.tablet} {
    width: 45vw;
    min-width: 380px;
  }
  ${customMediaQuery(650)} {
    width: fit-content;
    min-width: fit-content;
  }
`;

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  width: 100%;
  height: 48px;
  min-width: 0px;
  position: relative;
  z-index: 1;
  appearance: none;
  background: transparent;
  border: 1px solid transparent;
  ${({ theme }) => theme.media.mobile} {
    height: 40px;
  }
`;

export const SearchLabel = styled.div`
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  flex: 1 1 auto;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 ${({ theme }) => theme.space.md};
  ${customMediaQuery(650)} {
    &.query-trigger {
      padding: 0 ${({ theme }) => theme.space.xs};
      padding-right: 30vw;
    }
    &.query-data {
      padding: 0 ${({ theme }) => theme.space.xs};
    }
  }
  ${customMediaQuery(550)} {
    &.query-trigger {
      padding: 0 ${({ theme }) => theme.space.xs};
      padding-right: 20vw;
    }
  }
  ${customMediaQuery(490)} {
    &.query-trigger {
      padding: 0 ${({ theme }) => theme.space.xs};
      padding-right: 15vw;
    }
  }
  ${customMediaQuery(450)} {
    &.query-trigger {
      padding: 0 ${({ theme }) => theme.space.xs};
      padding-right: 10vw;
    }
  }
  ${customMediaQuery(430)} {
    &.query-trigger {
      padding: 0 ${({ theme }) => theme.space.xs};
      padding-right: ${({ theme }) => theme.space.sm};
    }
  }
`;

export const SearchIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.normal};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary.pressed};
  }
  ${({ theme }) => theme.media.mobile} {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
`;
