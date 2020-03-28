import React, { Component } from 'react';

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

    debounce = (f, t) => {
        return function (args) {
            let previousCall = this.lastCall;
            this.lastCall = Date.now();
            if (previousCall && ((this.lastCall - previousCall) <= t)) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => f(args), t);
        }
    }

    debounceSearchValue = this.debounce(this.onSearch, 500);

    render() {
        return (
            <input  onInput={this.handleInput} 
                    className='search' 
                    placeholder='Please write some name of repository for search.' />
        );
    }
    
};