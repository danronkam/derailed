import csrfFetch from "./csrf";
import { RECEIVE_LISTING } from "./listings";

export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS'
export const RECEIVE_COMMENT ='comments/RECEIVE_COMMENT'
export const REMOVE_LISTING = 'comments/REMOVE_COMMENT'

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
    const res = await csrfFetch(`/api/comments`)
    const payload = await res.json()
    dispatch({type: RECEIVE_COMMENTS, payload})
}

//i dont think i need a comments show? you dont look at a comment you look at the index

export const createComment = (commentData) => async dispatch => {
    console.log(commentData)
    const res = await csrfFetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const comment = await res.json()
    dispatch({type: RECEIVE_COMMENT, comment})
}

export const deleteComment = commentId => async dispatch => {
    const res = await csrfFetch(`/api/listings/${commentId}`, {
        method: 'DELETE'
    })
    if(res.ok) {
        dispatch({type: REMOVE_LISTING, commentId})
    }
}

const commentsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = {...state}

    switch(action.type) {
    case RECEIVE_COMMENTS:
        return action.payload.listings

    case RECEIVE_COMMENT:
            newState[action.payload.id] = action.payload
            return newState
    case REMOVE_LISTING:
        delete newState[action.commentId]
        return newState
    case RECEIVE_LISTING:
        return {...action.payload.comments}
    default:
        return state
    }
}

export default commentsReducer