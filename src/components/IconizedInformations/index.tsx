import { ReactNode } from 'react'
import { ICON_BACKGROUNDCOLOR, StyledIcon } from './styles'

export interface IconizedInformationsProps {
  icon: ReactNode
  background: keyof typeof ICON_BACKGROUNDCOLOR
  text: string
}

export function IconizedInformations(props: IconizedInformationsProps) {
  return (
    <div key={props.text}>
      <StyledIcon iconBackgroundColor={props.background}>
        {props.icon}
      </StyledIcon>
      <p className="subtitle-R">{props.text}</p>
    </div>
  )
}
