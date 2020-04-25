import {combineReducers} from 'redux'
import {reposListReducer} from './reposListReducer'

export const rootReducer = combineReducers({
    repositories: reposListReducer
})