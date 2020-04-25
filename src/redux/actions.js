import { FETCH_REPOS } from "./actionTypes";
import GithubApiService from '../services/api-service';

const apiService = new GithubApiService();
    
export const fetchRepos = (name) => {
    return async dispatch => {
        const result = await apiService.getReposInfo(name);
        dispatch({
            type: FETCH_REPOS,
            payload: result
        })
    }
}