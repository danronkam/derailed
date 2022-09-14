import csrfFetch from "./csrf";

export const getComment = commentId => state => {
    if(!state || !state.comments) {
        return null
    } else {
        return state.comments[commentId]
    }
}

export const getComments = state => {
    if(!state.comments) {
        return []
    } else {
        return Object.values(state.comments)
    }
}

/* 
action functions
*/

export const fetchComments  = () => async dispatch =>{
    const res = await csrfFetch(`/api/listings`)
    const payload = await res.json()
    dispatch({type: RECEIVE_LISTINGS, payload})
}
