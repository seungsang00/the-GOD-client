import styled from 'styled-components';

export default styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.normal};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    text-decoration: underline solid ${({ theme }) => theme.colors.hover} 1px;
  }
  &:active {
    color: ${({ theme }) => theme.colors.action};
  }
`;
