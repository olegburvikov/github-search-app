import React, { Component } from 'react';

import './App.css';
import GithubApiService from '../../services/github-api-service';

import Header from '../Header/Header';
import RepositoriesList from '../RepositoriesList/RepositoriesList'
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

export default class App extends Component {

    GithubApiService = new GithubApiService();

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
        console.log('request', this.state.inputValue);
        this.setState({ 
            data,
            loading: false,
            error: false
        });
    };

    updateData(value) {
        this.setState({ loading: true })
        
        this.GithubApiService
            .getReposInfo(value)
            .then(this.onDataLoaded)
            .catch(this.onError);
    }

    render() {
        const {data, loading, inputValue, error} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) && inputValue !== '' ? <RepositoriesList data={ data } /> : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        return (
            <div className='app' >
                <Header updateInputValue={this.updateInputValue} />
                {content}
                {spinner}
                {errorMessage}
            </div>
        );
    }
    
}

