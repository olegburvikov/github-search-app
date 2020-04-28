import { SHOW_LOADER,HIDE_LOADER, SHOW_ERROR, IS_INPUT_EMPTY } from "./actionTypes"

const initialState = {
    loading: false,
    error: false,
    isInputEmpty: true
}

export const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true}
        case HIDE_LOADER:
            return { ...state, loading: false}
        case IS_INPUT_EMPTY:
            return { ...state, isInputEmpty: action.payload }

        case SHOW_ERROR:
            return { ...state, error: true}

        default:
            return state
    }

}
