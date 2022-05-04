import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collections-overview/collectionsOverviewContainer';
import CollectionComponent from '../collections/CollectionPageComponent';

const ShopComponent = () => {
    return (
     <div className='shop-page'>
         <Routes>
             <Route path='/' element = {<CollectionsOverviewContainer />} />
             {/* since we are in shop component, React router already knows we are in /shop router,
              so we just need to use '/' to specify the route we are in now */}
             <Route path=':collectionId' element={ <CollectionComponent />} />
             {/* this is like '/shop/:collectionId */}
         </Routes>
    </div>
    )
}


export default ShopComponent