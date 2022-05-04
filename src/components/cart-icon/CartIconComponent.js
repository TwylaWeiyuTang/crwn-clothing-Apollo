import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './cartIconStyle.scss'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { ReactComponent as ShoppingIcon} from '../../assets/bag.svg'

const CartIconComponent = ({toggleCartHidden, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) // trigger the toggleCartHidden in cart reducer

const mapStateToProps = createStructuredSelector ({ // pull off cart state from root reducer
  itemCount: selectCartItemsCount
  // whole state gotten passed in, and it goes to selectors to reference that state
  // selectCartItemsCount refers to selectCartItems, selectCartItems refers to selectCart, which
  // uses cart state from the whole state
})
// this is a selector, because it gets a state, and then pull off a small portion from that state

export default connect (mapStateToProps, mapDispatchToProps)(CartIconComponent)
// make toggleCartHidden available as a props in the above component