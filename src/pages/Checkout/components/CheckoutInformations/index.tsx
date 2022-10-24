import { CheckoutDetails } from './components/CheckoutDetails'
import { CheckoutInformationsContainer } from './styles'

export function CheckoutInformations() {
  return (
    <CheckoutInformationsContainer>
      <h1 className="title-B">Cafés selcionados</h1>
      <CheckoutDetails />
    </CheckoutInformationsContainer>
  )
}
