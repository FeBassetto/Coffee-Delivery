import styled from 'styled-components'

export const CoffeeBoxContainer = styled.div`
  width: 256px;
  height: 310px;

  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  text-align: center;

  .coffeeImage {
    width: 120px;
    height: 120px;

    margin-top: -20px;
    margin-bottom: 12px;
  }

  .coffeeType {
    display: flex;
    gap: 12px;

    margin-bottom: 16px;

    text-transform: uppercase;

    h3 {
      color: ${(props) => props.theme['yellow-900']};
      background: ${(props) => props.theme['yellow-100']};

      padding: 4px 8px;

      border-radius: 100px;
    }
  }

  .coffeeTitle {
    margin-bottom: 8px;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .coffeeSubtitle {
    margin-bottom: 33px;

    color: ${(props) => props.theme['base-label']};
  }

  .coffeeInformations {
    width: 208px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme['base-text']};
    }

    .coffeeInformations__Buttons {
      display: flex;
      gap: 8px;

      > div {
        width: 72px;
        height: 38px;

        display: flex;
        align-items: center;
        justify-content: space-around;

        background: ${(props) => props.theme['base-button']};

        button {
          width: calc(100% / 3);
          height: 100%;

          background: inherit;
          color: ${(props) => props.theme['purple-500']};

          :hover {
            cursor: pointer;
            color: ${(props) => props.theme['purple-900']};
          }

          svg {
            height: 14px;
            width: 14px;
          }
        }

        span {
          color: ${(props) => props.theme['base-title']};
        }
      }

      > button {
        width: 38px;
        height: 38px;

        border-radius: 6px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${(props) => props.theme['purple-900']};
        color: ${(props) => props.theme.white};

        :hover {
          background: ${(props) => props.theme['purple-500']};

          cursor: pointer;
        }

        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }

  .title-EX {
    font-size: 24px;
    line-height: 31px;
  }

  .title-B {
    font-size: 20px;
    line-height: 26px;
  }

  .subtitle-B {
    font-size: 10px;
    line-height: 13px;
  }

  .subtitle-R {
    font-size: 14px;
    line-height: 18px;
  }
`
