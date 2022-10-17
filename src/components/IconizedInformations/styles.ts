import styled from 'styled-components'

export const ICON_BACKGROUNDCOLOR = {
  darkYellow: 'yellow-900',
  lightYellow: 'yellow-500',
  grey: 'base-text',
  purple: 'purple-500',
} as const

interface IconBackgroundColor {
  iconBackgroundColor: keyof typeof ICON_BACKGROUNDCOLOR
}

export const StyledIcon = styled.span<IconBackgroundColor>`
  width: 32px;
  height: 32px;

  padding: 8px;

  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.white};
  background: ${(props) =>
    props.theme[ICON_BACKGROUNDCOLOR[props.iconBackgroundColor]]};
`
