import { IconizedInformations } from '../../../../components/IconizedInformations'
import { InformationsContainer } from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export function Informations() {
  const endereco = 'Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS'
  const entrega = '20 min - 30 min'
  const paymentMethod = 'Cartao de Credito'

  return (
    <InformationsContainer>
      <IconizedInformations
        background="purple"
        text={`Entrega em`}
        secondaryText={endereco}
        icon={<MapPin weight="fill" />}
      />
      <IconizedInformations
        background="lightYellow"
        text={`Previsão de entrega`}
        secondaryText={entrega}
        breakRow={true}
        icon={<Timer weight="fill" />}
      />
      <IconizedInformations
        background="darkYellow"
        text={`Pagamento na entrega`}
        secondaryText={paymentMethod}
        breakRow={true}
        icon={<CurrencyDollar weight="fill" />}
      />
    </InformationsContainer>
  )
}
