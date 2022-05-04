import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useNavigate } from 'react-router-dom';
import CustomButtonComponent from '../custom-button/CustomButtonComponent'
import CartItemComponent from '../cart-item/CartItemComponent'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCartHidden } from '../../redux/cart/cartActions';

import './cartDropdownStyle.scss'

const CartDropdown = ({cartItems, dispatch}) => {
  const history = useNavigate();

  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.length ?(
            cartItems.map(cartItem => 
             (<CartItemComponent key={cartItem.id} item = {cartItem} />)))
             // if cartitems has length, which means there is item in the cart
            :
            (<span className='empty-message'>Your cart is empty</span>)
            // if there is no length, then the cart is empty
            }
        </div>
        <CustomButtonComponent onClick={() => {
          history('/checkout');
          dispatch(toggleCartHidden()) // this will toggle the cart icon again, so the cart
          // dropdown will be closed automatically while we being redirected to checkout page
        }}>GO TO CHECKOUT</CustomButtonComponent>
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({ // pull off cart state from root reducer
  cartItems: selectCartItems
})

export default connect (mapStateToProps) (CartDropdown)