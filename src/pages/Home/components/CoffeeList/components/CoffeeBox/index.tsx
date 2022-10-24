import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeBoxContainer } from './styles'

export interface CoffeeBoxProps {
  image: string
  types: string[]
  name: string
  description: string
  price: number
}

export function CoffeeBox(props: CoffeeBoxProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <CoffeeBoxContainer>
      <img src={props.image} alt="" className="coffeeImage" />

      <div className="coffeeType">
        {props.types.map((type) => (
          <h3 className="subtitle-B" key={props.name + Math.random() * 100}>
            {type}
          </h3>
        ))}
      </div>

      <h1 className="title-B coffeeTitle">{props.name}</h1>
      <h2 className="subtitle-R coffeeSubtitle">{props.description}</h2>

      <div className="coffeeInformations">
        <p className="subtitle-R">
          R$<span className="title-EX">{props.price}</span>
        </p>

        <div className="coffeeInformations__Buttons">
          <div>
            <button
              onClick={() => setQuantity((quantity) => quantity - 1)}
              disabled={quantity === 1}
            >
              <Minus weight="bold" />
            </button>
            <span className="subtitle-R">{quantity}</span>
            <button onClick={() => setQuantity((quantity) => quantity + 1)}>
              <Plus weight="bold" />
            </button>
          </div>

          <button>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </div>
    </CoffeeBoxContainer>
  )
}
