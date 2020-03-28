import React, { Component } from 'react';

import './Header.css'
import icon from './icon-github.svg';
import Search from '../Search/Search';

export default class Header extends Component {


    getSearchValue = (value) => {
        this.props.updateInputValue(value);
    }

    render() {
            return (
                <div className='header'>
                    <img className='header__logo' src={icon} alt="GitHub icon"/>
                    <Search getSearchValue={this.getSearchValue} />
                </div>
            );
    }
    
}
