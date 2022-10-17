import styled from 'styled-components'

export const IntroContainer = styled.main`
  width: 100%;
  height: 544px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    z-index: -1;

    background: ${(props) => props.theme['purple-100']};
    filter: blur(80px);
  }
`
export const IntroTextInformations = styled.div`
  width: 588px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 66px;

  .titleContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;

    .title-EX {
      font-size: 48px;
      line-height: 62.5px;
    }

    .subtitle-R {
      font-size: 20px;
      line-height: 26px;
    }
  }

  .informationsContainer {
    font-size: 16px;
    line-height: 21px;

    display: grid;
    grid-template-columns: auto auto;
    gap: 40px;

    > div {
      display: flex;
      gap: 12px;
      align-items: center;
    }
  }
`
