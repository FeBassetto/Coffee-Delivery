import { BoxCheckoutProduct } from './components/BoxCheckoutProduct'
import { CheckoutDetailsContainer } from './styles'
import TesteImage from '../../../../../../assets/products/arabe.svg'
import { CheckoutTotalPrice } from './components/CheckoutTotalPrice'

export function CheckoutDetails() {
  const existProducts = true

  return (
    <CheckoutDetailsContainer>
      {existProducts ? (
        <div>
          <BoxCheckoutProduct
            productImage={TesteImage}
            productName="Testando"
            productPrice={19.9}
            productQuantity={2}
          />
          <CheckoutTotalPrice />
          <button type="submit">confirmar Pedido</button>
        </div>
      ) : (
        <div className="emptyCheckout">
          <h1 className="title-EX">Sem produtos</h1>
        </div>
      )}
    </CheckoutDetailsContainer>
  )
}
