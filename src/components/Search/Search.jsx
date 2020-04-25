import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash'
import './Search.css'
import { useDispatch } from 'react-redux';
import { fetchRepos } from '../../redux/actions';

const Search = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')
    
    const handleInput = (event) => {
        setInputValue({inputValue: event.target.value.trim()})
        debouncedSearchValue();        
    }

    const onSearch = () => {
        if(inputValue !== '') {
            dispatch(fetchRepos(inputValue))
        }
    }
    const debouncedSearchValue = debounce(onSearch, 500);

    return (
        <input  
            onInput={handleInput} 
            className='search' 
            placeholder='Please write some name of repository for search.' 
        />
    );
    
};


export default Search;