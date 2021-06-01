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
`;

export const TriggerBg = styled.div`
  display: inline-flex;
  max-width: 100%;
  min-width: 20rem;
  text-align: left;
  vertical-align: middle;
  border: 1px solid #ddd !important;
  border-radius: 40px;
  transition: box-shadow 0.2s ease;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%) !important;
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
`;

export const SearchIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.button.default.normal};
  display: flex;
  justify-content: center;
  align-items: center;
`;
