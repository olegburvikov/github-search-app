import {combineReducers} from 'redux'
import {reposListReducer} from './reposListReducer'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
    repositories: reposListReducer,
    app: appReducer
})