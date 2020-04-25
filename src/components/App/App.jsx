import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';

import Header from '../Header/Header';
import RepositoriesList from '../RepositoriesList/RepositoriesList'
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

class App extends Component {

    

    render() {

        // const {data, loading, inputValue, error} = this.state;        
        // const content = !(loading || error) && inputValue !== '' ? <RepositoriesList data={ data } /> : null;
        const data = this.props.items;
        return (
            <div className='app' >
                <Header />
                <RepositoriesList data={ data } />
                {/* {content}
                {loading && <Spinner/>}
                {error && <ErrorIndicator/>} */}
            </div>
        );
    }
}


const MapStateToProps = state => {
    return {
        items: state.repositories.reposList
    }
}

export default connect(MapStateToProps)(App);

