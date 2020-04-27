import { FETCH_REPOS, SHOW_LOADER, HIDE_LOADER } from "./actionTypes";
import GithubApiService from '../services/api-service';

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


export const fetchRepos = (name) => {
    return async dispatch => {
        dispatch(showLoader());
        const result = await apiService.getReposInfo(name);
        dispatch({
            type: FETCH_REPOS,
            payload: result
        })
        dispatch(hideLoader());
    }
}