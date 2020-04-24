import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import GithubApiService from '../../services/api-service';
import PropTypes from 'prop-types'

import Header from '../Header/Header';
import RepositoriesList from '../RepositoriesList/RepositoriesList'
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

class App extends Component {

   

    apiService = new GithubApiService();

    state = {
        data: [],
        loading: false,
        inputValue: ''
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateInputValue = (value) => {
        this.setState({ inputValue: value })
        this.updateData(this.state.inputValue)
    }

    onDataLoaded = (data) => {
        this.setState({ 
            data,
            loading: false,
            error: false
        });
    };

    updateData(value) {
        this.setState({ loading: true })
        
        this.apiService
            .getReposInfo(value)
            .then(this.onDataLoaded)
            .catch(this.onError);
    }

    render() {
        const {data, loading, inputValue, error} = this.state;
        const content = !(loading || error) && inputValue !== '' ? <RepositoriesList data={ data } /> : null;

        return (
            <div className='app' >
                <Header updateInputValue={this.updateInputValue} />
                {content}
                {loading && <Spinner/>}
                {error && <ErrorIndicator/>}
            </div>
        );
    }
}



export default connect()(App);

