import React from 'react'
import { connect } from 'react-redux'
import { makeVar, useReactiveVar } from '@apollo/client'
import { createStructuredSelector } from 'reselect'
import './cartIconStyle.scss'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { ReactComponent as ShoppingIcon} from '../../assets/bag.svg'

export const cartHidden = makeVar(true)

const CartIconComponent = ({ itemCount}) => {
  const isCartHidden = useReactiveVar(cartHidden)
  return (
    <div className='cart-icon' onClick={()=>cartHidden(!isCartHidden)}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
  )
}


const mapStateToProps = createStructuredSelector ({ // pull off cart state from root reducer
  itemCount: selectCartItemsCount
  // whole state gotten passed in, and it goes to selectors to reference that state
  // selectCartItemsCount refers to selectCartItems, selectCartItems refers to selectCart, which
  // uses cart state from the whole state
})
// this is a selector, because it gets a state, and then pull off a small portion from that state

export default connect (mapStateToProps)(CartIconComponent)
// make toggleCartHidden available as a props in the above component