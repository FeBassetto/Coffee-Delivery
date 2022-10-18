import expressoTradicional from '../../../../../assets/products/expressoTradicional.svg'
import expressoAmericano from '../../../../../assets/products/expressoAmericano.svg'
import expressoCremoso from '../../../../../assets/products/expressoCremoso.svg'
import expressoGelado from '../../../../../assets/products/expressoGelado.svg'
import cafeComLeite from '../../../../../assets/products/cafeComLeite.svg'
import latte from '../../../../../assets/products/latte.svg'
import capuccino from '../../../../../assets/products/capuccino.svg'
import macchiato from '../../../../../assets/products/macchiato.svg'
import mocaccino from '../../../../../assets/products/mocaccino.svg'
import chocolateQuente from '../../../../../assets/products/chocolateQuente.svg'
import cubano from '../../../../../assets/products/cubano.svg'
import havaiano from '../../../../../assets/products/havaiano.svg'
import arabe from '../../../../../assets/products/arabe.svg'
import irlandes from '../../../../../assets/products/irlandes.svg'
import { CoffeeBoxProps } from '../components/CoffeeBox'

export const productCoffeeList: CoffeeBoxProps[] = [
  {
    image: expressoTradicional,
    types: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    image: expressoAmericano,
    types: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 12.9,
  },
  {
    image: expressoCremoso,
    types: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 14.9,
  },
  {
    image: expressoGelado,
    types: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 12.9,
  },
  {
    image: cafeComLeite,
    types: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    image: latte,
    types: ['Tradicional', 'Com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 17.9,
  },
  {
    image: capuccino,
    types: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 17.9,
  },
  {
    image: macchiato,
    types: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 14.9,
  },
  {
    image: mocaccino,
    types: ['Tradicional', 'Com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 12.9,
  },
  {
    image: chocolateQuente,
    types: ['Especial', 'Com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 11.9,
  },
  {
    image: cubano,
    types: ['Especial', 'alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 18.9,
  },
  {
    image: havaiano,
    types: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 17.9,
  },
  {
    image: arabe,
    types: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 22.9,
  },
  {
    image: irlandes,
    types: ['Especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 24.9,
  },
]
