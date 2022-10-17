import { ReactNode } from 'react'
import { IntroContainer, IntroTextInformations } from './styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import IntroImage from '../../../../assets/introImage.svg'
import {
  IconizedInformations,
  IconizedInformationsProps,
} from '../../../../components/IconizedInformations'

export function Intro() {
  const informations: IconizedInformationsProps[] = [
    {
      icon: <ShoppingCart weight="fill" />,
      background: 'darkYellow',
      text: 'Compra simples e segura',
    },
    {
      icon: <Package weight="fill" />,
      background: 'grey',
      text: 'Embalagem mantém o café intacto',
    },
    {
      icon: <Timer weight="fill" />,
      background: 'lightYellow',
      text: 'Entrega rápida e rastreada',
    },
    {
      icon: <Coffee weight="fill" />,
      background: 'purple',
      text: 'O café chega fresquinho até você',
    },
  ]

  return (
    <IntroContainer>
      <IntroTextInformations>
        <div className="titleContainer">
          <h1 className="title-EX">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="subtitle-R">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <div className="informationsContainer">
          {informations.map((information) => (
            <IconizedInformations {...information} key={information.text} />
          ))}
        </div>
      </IntroTextInformations>
      <img src={IntroImage} alt="" />
    </IntroContainer>
  )
}
