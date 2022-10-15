import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 104px;
  padding: 32px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;

    align-items: center;
    gap: 12px;
  }
`

const STATUS_COLOR = {
  yellow: {
    color: 'yellow-900',
    backgroundColor: 'yellow-100',
  },
  purple: {
    color: 'purple-900',
    backgroundColor: 'purple-100',
  },
} as const

interface ButtonColors {
  statusColor: keyof typeof STATUS_COLOR
}

export const StyledButton = styled.button<ButtonColors>`
  padding: 8px;
  font-size: 14px;

  color: ${(props) => props.theme[STATUS_COLOR[props.statusColor].color]};
  background: ${(props) =>
    props.theme[STATUS_COLOR[props.statusColor].backgroundColor]};

  font-family: Roboto, sans-serif;

  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  gap: 4px;

  transition: all 0.5s;

  :hover {
    cursor: pointer;
  }

  svg {
    height: 22px;
    width: 22px;
  }
`

export const CartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['yellow-100']};
  background: ${(props) => props.theme['yellow-900']};

  width: 20px;
  height: 20px;

  border-radius: 100%;
`
