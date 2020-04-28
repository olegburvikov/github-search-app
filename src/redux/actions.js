import { FETCH_REPOS, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, IS_INPUT_EMPTY } from "./actionTypes";
import GithubApiService from '../services/apiService';

const apiService = new GithubApiService();
    
export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const isInputEmpty = (value) => {
    return {
        type: IS_INPUT_EMPTY,
        payload: value
    }
}

export const fetchRepos = (name) => {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const result = await apiService.getReposInfo(name);
            dispatch({
                type: FETCH_REPOS,
                payload: result
            })  
            dispatch(hideLoader());
        }
        catch(e) {
            dispatch({
                type: SHOW_ERROR
            })
            dispatch(hideLoader());
        }

    }
}