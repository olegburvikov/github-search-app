import React from 'react';
import { debounce } from 'lodash'
import './Search.css'
import { useDispatch } from 'react-redux';
import { fetchRepos, isInputEmpty } from '../../redux/actions';

export const Search = () => {
    
    const dispatch = useDispatch()    
    const handleChange = debounce(text => onSearch(text.trim()), 500)

    const onSearch = (text) => {
        if(text === '') {
            dispatch(isInputEmpty(true))
        } else {
            dispatch(isInputEmpty(false))
            dispatch(fetchRepos(text))
        }
    }
    
    return (
        <input  
            onInput={(e) => handleChange(e.target.value)} 
            className='search' 
            placeholder='Please write some name of repository for search.' 
        />
    );
    
};

