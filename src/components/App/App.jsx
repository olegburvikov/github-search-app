import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';

import Header from '../Header/Header';
import RepositoriesList from '../RepositoriesList/RepositoriesList'
import Spinner from '../Spinner/Spinner';
import {ErrorIndicator} from '../ErrorIndicator/ErrorIndicator'

class App extends Component {

    

    render() {

        const {data, loading} = this.props;        
        return (
            <div className='app' >
                <Header />
                {
                    loading ? 
                    <Spinner /> : 
                    <RepositoriesList data={ data } />
                }
            </div>
        );
    }
}


const MapStateToProps = state => {
    return {
        items: state.repositories.reposList,
        loading: state.app.loading
    }
}

export default connect(MapStateToProps)(App);

