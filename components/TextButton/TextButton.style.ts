import styled from 'styled-components';

export default styled.button`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline solid ${({ theme }) => theme.colors.hover} 1px;
  }
  &:active {
  }
`;
