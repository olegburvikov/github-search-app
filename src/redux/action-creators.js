import { FETCH_ITEMS } from "./actionTypes";

export const createPost = (post) => {
    return {
        type: FETCH_ITEMS,
        payload: post
    }
}