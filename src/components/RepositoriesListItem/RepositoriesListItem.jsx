import React from 'react';

import './RepositoriesListItem.css'

function RepositoriesListItem({name, url, stars, description, date}) {
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
                <time className='repositories-list-item__date' >{date}</time>
            </div>
        </div>
    );
}

export default RepositoriesListItem;