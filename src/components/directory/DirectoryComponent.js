import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './directoryStyle.scss'
import MenuItemComponent from '../menu-item/MenuItemComponent'
import { selectDirectorySections } from './directorySelectors'

const Directory = ({sections}) => {
        return (
            <div className='directory-menu'>
                {sections.map(({id, ...otherSectionPros})=> (
                    <MenuItemComponent key={id} {...otherSectionPros} />
                ))}

                {/* ...otherSectionProps is the same as declaring , title, imageUrl, size, linkUrl*/}
            </div>
        )
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps) (Directory)