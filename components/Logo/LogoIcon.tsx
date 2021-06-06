import styled, { withProps } from '@styles/themed-components';

export const LogoWrapper = withProps<{ size: number }, HTMLDivElement>(
  styled.div
)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${({ size }) => size}rem;
    height: ${({ size }) => size}rem;
    object-fit: contain;
  }
`;

const LogoIcon = ({ size }: { size: number }) => {
  return (
    <LogoWrapper size={size}>
      <img src="/images/logo_icon.svg" alt="fanssum logo" />
    </LogoWrapper>
  );
};

export default LogoIcon;
