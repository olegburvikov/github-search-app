import React, { Component } from 'react';
import {debounce} from '../../utils/debounce'
import './Search.css'

export default class Search extends Component {

    state = {
        inputValue: ''
    }
    
    handleInput = (event) => {
        this.setState({inputValue: event.target.value.trim()})
        this.debounceSearchValue();        
    }

    onSearch = () => {
        if(this.state.inputValue !== '') {
            this.props.getSearchValue(this.state.inputValue)
        }
    }

    debounceSearchValue = debounce(this.onSearch, 500);

    render() {
        return (
            <input  onInput={this.handleInput} 
                    className='search' 
                    placeholder='Please write some name of repository for search.' />
        );
    }
    
};