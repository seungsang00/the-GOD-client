import styled, { withProps } from '@styles/themed-components';
import { AvatarContainerProps } from 'interfaces/props';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 16rem;
  height: 14rem;
  ${({ theme }) => theme.concept.glassmorphism};
  border-radius: 16px;
  padding: ${({ theme }) => theme.space.xs};
  margin-right: ${({ theme }) => theme.space.sm};

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: ${({ theme }) => theme.space.sm};
  }

  ${({ theme }) => theme.media.mobile} {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.space.sm};
  }
`;

export const AvatarContainer = withProps<AvatarContainerProps, HTMLDivElement>(
  styled.div
)`
  height: 10rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.media.mobile} {
    width: 10rem;
    height: 8rem;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
  }

  
  ${({ onClick }) =>
    onClick &&
    `
    &:hover {
      filter: opacity(0.7);
      -webkit-filter:opacity(0.7);
    }

    &:active {
      filter: opacity(0.8);
      -webkit-filter:opacity(0.8);
    }
    `}
  
`;
