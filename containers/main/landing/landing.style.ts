import styled, { withProps } from '@styles/themed-components';

export const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Image = withProps<{ url: string }, HTMLDivElement>(styled.div)`
  width: 580px;
  height: 580px;
  min-width: 300px;
  min-height: 300px;
  background: no-repeat center/cover url(${({ url }) => url});
  background-size: contain;
  background-position: center center;
`;

export const TextWrapper = styled.div`
  box-sizing: border-box;
  width: 580px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.p`
  display: inline-block;
  ${({ theme }) => theme.typography.label};
  ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.subtitle};
  ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.description};
  ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;
`;
