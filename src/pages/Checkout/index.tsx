import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutContainer } from './styles'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CheckoutInformations } from './components/CheckoutInformations'
import { useNavigate } from 'react-router-dom'

const newCycleFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, { message: 'Digite um cep válido' })
    .max(9, 'Digite um cep válido'),
  rua: zod.string().min(1, 'Digite seu endereço corretamente'),
  numero: zod.number().min(1, 'Digite o numero corretamente'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Digite seu bairro'),
  cidade: zod.string().min(1, 'Digite sua cidade'),
  uf: zod
    .string()
    .max(2, 'Digite uma UF válida')
    .min(2, 'Digite uma UF válida'),
  paymentMethod: zod.string().min(1, 'Escolha a forma de pagamento'),
})

export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      paymentMethod: '',
    },
  })

  const { handleSubmit, reset } = newCycleForm

  function handleFinishCheckout(data: NewCycleFormData) {
    console.log(data)
    reset()
    navigate('completed')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleFinishCheckout)} action="">
        <FormProvider {...newCycleForm}>
          <CheckoutForm />
          <CheckoutInformations />
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
