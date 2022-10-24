import styled from 'styled-components'

export const CheckoutFormContainer = styled.section`
  width: 640px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  .form {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;

    > div {
      width: 100%;
      padding: 40px;

      background: ${(props) => props.theme['base-card']};

      border-radius: 6px;
    }
  }
`
const TITLE_COLOR = {
  yellow: 'yellow-900',
  purple: 'purple-900',
} as const

interface TitleContainerProps {
  color: keyof typeof TITLE_COLOR
}

export const TitleContainer = styled.div<TitleContainerProps>`
  width: 100%;

  > p {
    height: 23px;

    display: flex;
    align-items: center;

    position: relative;

    padding-left: calc(22px + 8px); // Width icon + 8px

    span {
      height: 100%;
      display: flex;
      align-items: center;

      position: absolute;
      left: 0;

      color: ${(props) => props.theme[TITLE_COLOR[props.color]]};

      svg {
        height: 22px;
        width: 22px;
      }
    }
  }

  .title {
    font-size: 16px;
  }

  .subtitle {
    font-size: 14px;
  }
`
