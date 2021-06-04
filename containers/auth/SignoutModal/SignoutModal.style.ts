import styled from '@styles/themed-components';

export const ModalStyle = styled.div`
  .modal-overlay {
    ${({ theme }) => theme.concept.glassmorphism.light};
    .modal-box {
      .modal-component-box {
        border: none;
      }
      .modal-close {
        display: none;
      }
    }
  }
`;
