import { BoxCheckoutProductContainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

interface BoxCheckoutProps {
  productImage: string
  productName: string
  productPrice: number
  productQuantity: number
}

export function BoxCheckoutProduct(props: BoxCheckoutProps) {
  return (
    <BoxCheckoutProductContainer>
      <img src={props.productImage} alt="" />
      <h1 className="subtitle-R">{props.productName}</h1>
      <span className="subtitle-B">R$ {props.productPrice}</span>
      <div>
        <button>
          <Minus weight="bold" />
        </button>
        <span className="subtitle-R">{props.productQuantity}</span>
        <button>
          <Plus weight="bold" />
        </button>
      </div>
      <button>
        <Trash />
        <span className="subtitle-R">Remover</span>
      </button>
    </BoxCheckoutProductContainer>
  )
}
