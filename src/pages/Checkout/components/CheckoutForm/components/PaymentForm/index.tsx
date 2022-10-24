import { TitleContainer } from '../../styles'
import {
  PaymentButtonContainer,
  PaymentFormContainer,
  StyledPaymentButton,
} from './styles'
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

export function PaymentForm() {
  const { watch, setValue } = useFormContext()

  const paymentMethod = watch('paymentMethod')

  const methods = {
    credit: 'credit',
    debit: 'debit',
    cash: 'cash',
  }

  return (
    <PaymentFormContainer>
      <TitleContainer color="purple">
        <p className="subtitle-R title">
          <span className="icon">
            <CurrencyDollar />
          </span>
          Endereço de Entrega
        </p>
        <p className="subtitle-R subtitle">
          Informe o endereço onde deseja receber seu pedido
        </p>
      </TitleContainer>
      <PaymentButtonContainer>
        <StyledPaymentButton
          type="button"
          className={`subtitle-R ${
            paymentMethod === methods.credit ? 'active' : ''
          }`}
          onClick={() => setValue('paymentMethod', methods.credit)}
        >
          <CreditCard /> Cartão de Crédito
        </StyledPaymentButton>

        <StyledPaymentButton
          type="button"
          className={`subtitle-R ${
            paymentMethod === methods.debit ? 'active' : ''
          }`}
          onClick={() => setValue('paymentMethod', methods.debit)}
        >
          <Bank /> Cartão de Débito
        </StyledPaymentButton>

        <StyledPaymentButton
          type="button"
          className={`subtitle-R ${
            paymentMethod === methods.cash ? 'active' : ''
          }`}
          onClick={() => setValue('paymentMethod', methods.cash)}
        >
          <Money />
          Dinheiro
        </StyledPaymentButton>
      </PaymentButtonContainer>
    </PaymentFormContainer>
  )
}
