import { FETCH_REPOS } from "./actionTypes"

const initialState = {
    reposList: []
}

export const reposListReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_REPOS:
            return { ...state, reposList: action.payload}

        default: 
            return state
    }

}