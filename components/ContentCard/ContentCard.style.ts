import styled, { withProps } from '@styles/themed-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.space.sm};
  max-width: 600px;
  margin: ${({ theme }) => theme.space.xxs} 0;
  ${({ theme }) => theme.concept.glassmorphism.deep};
  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.bg.pressed};
  }

  .content-title {
    font-size: 1.1rem;
    font-weight: 600;
    word-break: keep-all;
    line-height: 1.4rem;
  }
  .content-dates {
    display: flex;
    font-size: 1rem;
    justify-content: flex-start;
    align-items: center;
    font-weight: 500;
    margin-top: ${({ theme }) => theme.space.xs};
    & > .dates-badge {
      display: inline-block;
      margin-left: ${({ theme }) => theme.space.xs};
      & > span {
        font-size: 12px;
        font-weight: 600;
        height: 24px;
        background-color: ${({ theme }) => theme.colors.red.hover};
        padding: 0 ${({ theme }) => theme.space.xs};
        padding-top: 3px;
        margin: 0;
      }
    }
  }
  .content-store-info {
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${({ theme }) => theme.space.xxs};
  }
  .content-description {
    margin-top: ${({ theme }) => theme.space.xs};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.1rem;
    height: 3.3rem;
  }
  .content-more-link {
    font-weight: 600;
    margin-top: ${({ theme }) => theme.space.sm};
    margin-right: ${({ theme }) => theme.space.xxs};
    color: ${({ theme }) => theme.colors.gray.gray01};
    font-size: 0.9rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      width: 5rem;
      height: 1.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray.gray04};
      }
    }
    .link-icon {
      font-size: 0.7rem;
      margin-right: ${({ theme }) => theme.space.xxs};
    }
    .link-text {
      margin-top: 2px;
    }
  }
  &.route-wrapper {
    min-width: fit-content;
    margin-top: ${({ theme }) => theme.space.sm + '!important'};
    margin-bottom: ${({ theme }) => theme.space.md + '!important'};
    box-shadow: 0 7px 14px 0 rgba(31, 38, 135, 0.1);
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.hover};
    }
    &:action {
      background-color: ${({ theme }) => theme.colors.primary.pressed};
    }
  }
  &.route-card {
    width: 400px;
    box-shadow: 0 7px 14px 0 rgba(31, 38, 135, 0.1);
    border: 1.5px solid ${({ theme }) => theme.colors.primary.disabled};
    .default-view {
      display: flex;
      justify-content: space-between;

      .artist-avatar {
        display: flex;
        align-items: flex-end;
      }
    }
  }
`;

interface Props {
  isOpen: boolean;
}
export const TimeBadge = withProps<Props, HTMLSpanElement>(styled.span)`
  display: inline-block;
  margin-left: ${({ theme }) => theme.space.xs};
  & > span {
    padding: 0 ${({ theme }) => theme.space.xs};
    background-color: ${({ isOpen, theme }) =>
      isOpen ? theme.colors.green.hover : theme.colors.red.hover};
    font-size: 12px;
    font-weight: 600;
    height: 24px;
    padding-top: 3px;
    margin: 0;
  }
`;
