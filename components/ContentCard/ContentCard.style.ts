import styled, { withProps } from '@styles/themed-components';

export default styled.div`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.space.sm};
  max-width: 600px;
  margin: ${({ theme }) => theme.space.xxs} 0;
  ${({ theme }) => theme.concept.glassmorphism.deep};
  &:hover {
    background-color: #fff;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.gray.gray04};
  }

  .content-title {
    font-size: 1.1rem;
    font-weight: 600;
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
