import React from 'react'
import { connect } from 'react-redux'
import CustomButtonComponent from '../custom-button/CustomButtonComponent'
import { addItem } from '../../redux/cart/cartActions'
import './collectionItemStyle.scss'

const CollectionItemComponent = ({item, addItem}) => {
  const { name, price, imageUrl} = item // desrtucture all the properties from each item
  return (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
        <div className='collection-footer'>
            <span className='name'> {name} </span>
            <span className='price'> {price} </span>
        </div>
        <CustomButtonComponent onClick={() => addItem(item)} inverted> 
          Add to cart 
        </CustomButtonComponent>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect (null, mapDispatchToProps) (CollectionItemComponent)