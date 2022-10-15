import { CartCount, HeaderContainer, StyledButton } from './styles'
import { NavLink } from 'react-router-dom'
import headerLogo from '../../assets/headerLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export function Header() {
  const [cartItemsCount, setCartItemsCount] = useState(1)

  return (
    <HeaderContainer>
      <NavLink to="/" end>
        <img src={headerLogo} alt="" />
      </NavLink>

      <div>
        <StyledButton statusColor="purple">
          <MapPin weight="fill" />
          <span>Botucatu, SP</span>
        </StyledButton>

        <NavLink to="/checkout" title="checkout">
          <StyledButton statusColor="yellow">
            <ShoppingCart weight="fill" />
            {cartItemsCount > 0 && <CartCount>{cartItemsCount}</CartCount>}
          </StyledButton>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
