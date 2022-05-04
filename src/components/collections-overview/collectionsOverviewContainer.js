import React from 'react'
import { useQuery, gql } from '@apollo/client'
import CollectionsOverview from './CollectionsOverview'
import Spinner from '../spinner/SpinnerComponent'

const GET_COLLECTIONS = gql`
    query GetCollections{
        collections {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`

const CollectionsOverviewContainer = () => {

    const {loading, error, data} = useQuery(GET_COLLECTIONS)
    if (loading) return <Spinner />
    if (error) console.log({error})
    if(data) return <CollectionsOverview collections={data.collections} />
}

export default CollectionsOverviewContainer