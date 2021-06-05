import styled from '@styles/themed-components';

const FormStyle = styled.div<{ step: number }>`
  display: flex;
  height: calc(100vh - 60px);
  overflow-y: hidden;
  width: 100vw;
  color: ${({ theme }) => theme.colors.black};
  h2 {
    font-weight: 500;
    /* margin-bottom: 1rem; */
  }

  > div:first-child {
    z-index: 3;
    padding: ${({ theme }) => theme.space.sm};
  }
  > div:last-child {
    padding: 5px;
    width: 100%;
    .range {
      .time {
        display: flex;
        justify-content: space-between;
        > div {
          flex: 1 0;
          margin: 1rem;
        }
      }
    }

    .location {
      * {
        z-index: 2;
        box-sizing: border-box;
      }
      .location-box {
        position: relative;
        height: 100%;
      }
      .location-search-box {
        max-width: 450px;
        width: 30%;
        ${({ theme }) => theme.media.tablet} {
          max-width: 100%;
          width: 100%;
        }
        height: 100%;
        padding: ${({ theme }) => theme.space.xs};
        ${({ theme }) => theme.concept.glassmorphism}
        > section {
          display: flex;
          justify-content: space-around;
          margin-top: 10vh;
          align-self: flex-end;
          > button {
            min-width: 40%;
            width: 40%;
          }
        }
      }
      #preview {
        display: flex;
        border-radius: ${({ theme }) => theme.borderRadius};
        margin: ${({ theme }) => theme.space.xs} 0;
        padding: ${({ theme }) => theme.space.xs};
        background-color: rgba(255, 255, 255, 0.8);
        > div {
          h2 {
            /* margin-bottom: ${({ theme }) => theme.space.xs}; */
          }
        }
        #mapAddress {
          padding: ${({ theme }) => theme.space.xs};
        }
        #detailAddr {
        }
      }
      #map {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
      }
      .perks {
        display: flex;
        flex-wrap: wrap;
        > div {
          margin-bottom: ${({ theme }) => theme.space.sm};
          flex: 1 0 33%;
        }
      }
    }
    > section {
      display: flex;
      flex-direction: column;
      height: 100%;

      > section {
        padding: 15px;
        :last-child {
          display: flex;
          justify-content: space-around;
          margin-top: 10vh;
          width: 100%;
          align-self: flex-end;
          text-align: center;
        }

        :first-child {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;

          > div {
            padding: 1rem;
            /* box-shadow: 0 2px 14px 2px inset rgba(233, 153, 153, 0.3); */
            border-radius: ${({ theme }) => theme.borderRadius};
            margin: 15px 0;
            width: 100%;
            display: flex;
            > div {
              text-align: center;
              width: 50%;
            }
          }

          .dropdown {
            flex: 0 0 100%;
            position: relative;
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
`;
export default FormStyle;
