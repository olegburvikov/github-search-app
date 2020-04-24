import React, { useState } from 'react';
import { debounce } from 'lodash'
import './Search.css'

const Search = ({getSearchValue}) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleInput = (event) => {
        setInputValue({inputValue: event.target.value.trim()})
        debouncedSearchValue();        
    }

    const onSearch = () => {
        if(inputValue !== '') {
            getSearchValue(inputValue)
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