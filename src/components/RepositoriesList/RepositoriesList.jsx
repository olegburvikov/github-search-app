import React from 'react';
import PropTypes from 'prop-types'
import './RepositoriesList.css';

import RepositoriesListItem from '../RepositoriesListItem/RepositoriesListItem';

const RepositoriesList = ({data = []}) => {
    return (
        <ul className='repositories-list' >
           { data.length === 0 ? 
                <p className='not-found'> Nothing found </p> :
                data.map( ({ id, ...itemProps }) => <li key={id}><RepositoriesListItem {...itemProps} /></li>) 
            }
        </ul>
    );
}

RepositoriesList.propTypes = {
    data: PropTypes.array.isRequired
}       

export default RepositoriesList;