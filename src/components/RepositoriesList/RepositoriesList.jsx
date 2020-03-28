import React from 'react';

import './RepositoriesList.css'

import RepositoriesListItem from '../RepositoriesListItem/RepositoriesListItem'

const RepositoriesList = ({data = []}) => {
        
        let elements;
        if (data.length === 0) {
            elements = <p className='not-found'> Nothing found </p>;
        } else {
            elements = data.map( item => {
                const { id, ...itemProps } = item;
                return ( 
                    <li key={id}>
                        <RepositoriesListItem {...itemProps} />
                    </li>
                )
            });
        }

    return (
        <ul className='repositories-list' >
           {elements}
        </ul>
    );
}

export default RepositoriesList;