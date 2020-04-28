import React from 'react';
import { useSelector } from 'react-redux'
import './RepositoriesList.css';
import RepositoriesListItem from '../RepositoriesListItem/RepositoriesListItem';


const RepositoriesList = () => {

    const data = useSelector(state => state.repositories.reposList)
    const isInputEmpty = useSelector(state => state.app.isInputEmpty)
    
    if (isInputEmpty) return null;
    return (
        
        <ul className='repositories-list' >
           { data.length === 0 ? 
                <p className='not-found'> Nothing found </p> :
                data.map( ({ id, ...itemProps }) => (
                    <li key={id}>
                        <RepositoriesListItem {...itemProps} />
                    </li>
                )) 
            }
        </ul>
    );
}   

export default RepositoriesList;