import { Informations } from './components/Informations'
import { CompletedOrderContainer } from './styles'
import deliveryImage from '../../assets/common/delivery.svg'

export function CompletedOrder() {
  return (
    <CompletedOrderContainer>
      <div className="completedOrder__title">
        <h1 className="title-EX">Uhu! Pedido confirmado</h1>
        <h2 className="subtitle-R">
          Agora é só aguardar que logo o café chegará até você
        </h2>
      </div>
      <Informations />
      <img src={deliveryImage} alt="" />
    </CompletedOrderContainer>
  )
}
