import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { CheckoutFormContainer } from './styles'

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <h1 className="title-B">Complete seu pedido</h1>
      <div className="form">
        <AddressForm />
        <PaymentForm />
      </div>
    </CheckoutFormContainer>
  )
}
