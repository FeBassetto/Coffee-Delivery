import { AddressFormContainer, StyledFormInput } from './styles'
import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { NewCycleFormData } from '../../../..'
import { TitleContainer } from '../../styles'

interface FormInputs {
  placeholder: string
  name: keyof NewCycleFormData
  width: string
  type?: string
  maxLength?: number
  asNumber: boolean
}

export function AddressForm() {
  const { register } = useFormContext()

  const formInputs: FormInputs[] = [
    {
      placeholder: 'CEP',
      width: '200px',
      name: 'cep',
      maxLength: 9,
      asNumber: false,
    },
    {
      placeholder: 'Rua',
      width: '560px',
      name: 'rua',
      maxLength: 60,
      asNumber: false,
    },
    {
      placeholder: 'Número',
      width: '200px',
      name: 'numero',
      type: 'number',
      maxLength: 5,
      asNumber: true,
    },
    {
      placeholder: 'Complemento',
      width: '348px',
      name: 'complemento',
      maxLength: 40,
      asNumber: false,
    },
    {
      placeholder: 'Bairro',
      width: '200px',
      name: 'bairro',
      maxLength: 20,
      asNumber: false,
    },
    {
      placeholder: 'Cidade',
      width: '276px',
      name: 'cidade',
      maxLength: 30,
      asNumber: false,
    },
    {
      placeholder: 'UF',
      width: '60px',
      name: 'uf',
      maxLength: 2,
      asNumber: false,
    },
  ]

  return (
    <AddressFormContainer className="addressForm">
      <TitleContainer color="yellow">
        <p className="subtitle-R title">
          <span className="icon">
            <MapPinLine />
          </span>
          Endereço de Entrega
        </p>
        <p className="subtitle-R subtitle">
          Informe o endereço onde deseja receber seu pedido
        </p>
      </TitleContainer>
      <div className="addressForm__form">
        {formInputs.map((input) => (
          <StyledFormInput
            className="subtitle-R"
            {...input}
            {...register(input.name, { valueAsNumber: input.asNumber })}
            key={input.placeholder}
          />
        ))}
      </div>
    </AddressFormContainer>
  )
}
