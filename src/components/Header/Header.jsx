import React from 'react';
import PropTypes from 'prop-types'

import './Header.css'
import iconSVG from './icon-github.svg';
import Search from '../Search/Search';

const Header = () => {

    return (
        <div className='header'>
            <img className='header__logo' src={iconSVG} alt="GitHub icon"/>
            <Search />
        </div>
    );

    
}
Header.propTypes = {
    onInputValue: PropTypes.func.isRequired
}

export default Header;