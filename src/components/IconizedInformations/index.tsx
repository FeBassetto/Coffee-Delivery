import { ReactNode } from 'react'
import { ICON_BACKGROUNDCOLOR, StyledIcon } from './styles'

export interface IconizedInformationsProps {
  icon: ReactNode
  background: keyof typeof ICON_BACKGROUNDCOLOR
  text: string
  secondaryText?: string
  breakRow?: boolean
}

export function IconizedInformations(props: IconizedInformationsProps) {
  return (
    <div key={props.text}>
      <StyledIcon iconBackgroundColor={props.background}>
        {props.icon}
      </StyledIcon>
      <div>
        <p className="subtitle-R">
          {props.text}{' '}
          {props.secondaryText && !props.breakRow && (
            <span className="subtitle-B">{props.secondaryText}</span>
          )}
        </p>
        {props.secondaryText && props.breakRow && (
          <p className="subtitle-B">{props.secondaryText}</p>
        )}
      </div>
    </div>
  )
}
