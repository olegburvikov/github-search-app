import React from 'react';
import {dateConverter} from '../../services/date-service'
import PropTypes from 'prop-types'
import './RepositoriesListItem.css'

const RepositoriesListItem = ({name, url, stars, description, date}) => {
    return (
        <div className='repositories-list-item'>
            <a  className='repositories-list-item__name' 
                href={url}
                rel='noopener noreferrer'
                target='_blank'>
                    {name}
            </a>
            <div className='repositories-list-item__description'>{description}</div>
            <div className='repositories-list-item__footer' >
                <div className='repositories-list-item__stars'>{stars}</div>
                <time className='repositories-list-item__date' >{ `Updated on ${dateConverter(date)}` }</time>
            </div>
        </div>
    );
}

RepositoriesListItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default RepositoriesListItem;