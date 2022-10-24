import styled from 'styled-components'

export const BoxCheckoutProductContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: auto auto;
  gap: 8px;

  align-items: center;

  padding: 30px 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  button {
    background: inherit;
    padding: 8px;

    height: 32px;

    border-radius: 6px;

    svg {
      color: ${(props) => props.theme['purple-900']};
    }

    .subtitle-R {
      font-size: 16px;
    }
  }

  img {
    height: 64px;
    width: 64px;
    grid-row: span 2;
  }

  h1 {
    grid-row: span 1;
    grid-column: span 2;
    font-size: 16px;
  }

  span {
    justify-self: flex-end;
    font-size: 16px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 6px;

    button:hover {
      color: ${(props) => props.theme['purple-100']};

      cursor: pointer;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
  }

  > div,
  > button {
    grid-row: span 1;

    background: ${(props) => props.theme['base-button']};
  }
`
