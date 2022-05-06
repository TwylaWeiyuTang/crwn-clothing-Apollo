import React from 'react'
import HeaderComponent from './HeaderComponent'
import { useReactiveVar } from '@apollo/client'
import { cartHidden } from '../cart-icon/CartIconComponent'

const HeaderContainer = () => {
  const isCartHidden = useReactiveVar(cartHidden)
    return (
    <HeaderComponent hidden={isCartHidden} />
  )
}

export default HeaderContainer