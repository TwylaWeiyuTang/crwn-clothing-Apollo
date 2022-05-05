import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

import CollectionComponent from './CollectionPageComponent'
import Spinner from '../../components/spinner/SpinnerComponent'

const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
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

const CollectionContainer = () => {
    const { collectionId } = useParams()
    const {loading, error, data} = useQuery(GET_COLLECTION_BY_TITLE, {
        variables: {title: collectionId}
    })
    if (loading) return <Spinner />
    if (error) return `Error! ${error}`
    return (
    <CollectionComponent collection={data.getCollectionsByTitle} />
  )
}

export default CollectionContainer