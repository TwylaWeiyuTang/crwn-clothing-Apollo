import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { auth } from '../../firebase/firebaseUtils'
import { signOut } from 'firebase/auth'
import CartIconComponent from '../cart-icon/CartIconComponent'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'

import './headerStyle.scss'
import { ReactComponent as Logo} from '../../assets/crown.svg'


const HeaderComponent = ({currentUser, hidden}) => {
  return (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? // if the user is signed in, then the sign out button shows
                (<div className='option' onClick={() => signOut(auth)}>SIGN OUT</div>)
                : // if the user is not signed in, we will have them sign in first
                (<Link className='option' to='/signin'> SIGN IN </Link>)
            }
            <CartIconComponent />
        </div>
        {
            hidden ? null : // if the hidden state is true, then render nothing
            <CartDropdown />
        }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({ // createStructuredSelector will automatically
    // pass our top level state into each selector
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(HeaderComponent) 
// connect is a higher order component
// this is for us to use the user state that is stored in redux  user reducer