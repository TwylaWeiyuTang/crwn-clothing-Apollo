import React from 'react'
import './customButtonStyle.scss'

const CustomButtonComponent = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
  return (
    <button className={`${inverted ? 'inverted': ''}
      ${isGoogleSignIn ? 'google-sign-in': ''} 
      custom-button`} {...otherProps}>
        {/* if isGoogleSignIn is true, we will render googe-sign-in property */}
        {children}
    </button>
  )
}

export default CustomButtonComponent