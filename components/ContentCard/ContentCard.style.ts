import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid red;
  padding: ${({ theme }) => theme.space.sm};
  max-width: 600px;
  margin: ${({ theme }) => theme.space.xxs} 0;
  background-color: '#e3e3e3';
  &:hover {
    background-color: '#fff';
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.lightgrey};
  }
`;
