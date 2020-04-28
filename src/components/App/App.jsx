import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import PropTypes from 'prop-types'
import Header from '../Header/Header';
import RepositoriesList from '../RepositoriesList/RepositoriesList'
import Spinner from '../Spinner/Spinner';
import {ErrorIndicator} from '../ErrorIndicator/ErrorIndicator'

class App extends Component {

    render() {
        const { loading, error } = this.props;        
        
        return (
            <div className='app' >
                <Header />
                {
                    loading ?  <Spinner /> : 
                    error ? <ErrorIndicator /> : <RepositoriesList />
                }
            </div>
        );
    }
}
 

const MapStateToProps = state => {
    return {
        loading: state.app.loading,
        error: state.app.error
    }
}

App.propTypes = {
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
    
}

export default connect(MapStateToProps)(App);

