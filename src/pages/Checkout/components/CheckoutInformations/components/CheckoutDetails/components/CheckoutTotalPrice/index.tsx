import { CheckoutTotalPriceContainer } from './styles'

export function CheckoutTotalPrice() {
  return (
    <CheckoutTotalPriceContainer>
      <h2 className="subtitle-R">Total de itens</h2>
      <h3 className="subtitle-R">R$ 29,70</h3>
      <h2 className="subtitle-R">Entrega</h2>
      <h3 className="subtitle-R">R$ 3,50</h3>
      <h1 className="subtitle-B">Total</h1>
      <h1 className="subtitle-B">R$ 33,20</h1>
    </CheckoutTotalPriceContainer>
  )
}
