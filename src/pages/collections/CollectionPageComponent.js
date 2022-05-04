import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import CollectionItemComponent from '../../components/collection-item/CollectionItemComponent'
import { selectCollection } from '../../redux/shop/shopSelectors'
import './collectionPageStyle.scss'


const CollectionComponent = () => {
  const { collectionId } = useParams()
  const collection = useSelector((state) => selectCollection(collectionId)(state))
  // this is like mapStateToProps
  const {title, items} = collection

  return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => <CollectionItemComponent key={item.id} item={item}/>)}
        </div>
    </div>
  )
}


export default CollectionComponent