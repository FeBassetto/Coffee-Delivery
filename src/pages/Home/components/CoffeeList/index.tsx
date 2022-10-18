import { CoffeeBox } from './components/CoffeeBox'
import { CoffeeListContainer, ListContainer } from './styles'
import { productCoffeeList } from './helpers/productCoffeeList'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1 className="title-EX">Nossos cafés</h1>
      <ListContainer>
        {productCoffeeList.map((product) => (
          <CoffeeBox
            image={product.image}
            types={product.types}
            name={product.name}
            description={product.description}
            price={product.price}
            key={product.name}
          />
        ))}
      </ListContainer>
    </CoffeeListContainer>
  )
}
