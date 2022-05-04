import React from 'react'
import './collectionsOverview.scss'
import CollectionPreviewComponent from '../collection-preview/CollectionPreviewComponent'

const CollectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreviewComponent key={id} {...otherCollectionProps} />
        ))}
    </div>
  )
}


export default CollectionsOverview