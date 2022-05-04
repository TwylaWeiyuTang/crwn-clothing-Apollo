import React from 'react'
import './formInputStyle.scss'

const FormInputComponent = ({handleChange, label, ...otherProps}) => {
  return (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        { 
            label ? /* If there is a label props being passed in, then we will generate a lable html */
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {/* if there is the value being typed by the user in the label field, 
                then we will apply the property of shrink, otherwise it will be an empty string  */}
                {label}
            </label>)
            : null
        }
    </div>
  )
}

export default FormInputComponent