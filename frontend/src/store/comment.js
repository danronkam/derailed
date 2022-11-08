import csrfFetch from "./csrf";

export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS'
export const RECEIVE_COMMENT ='comments/RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT'

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

export const fetchComments = (listingId) => async dispatch =>{
    const res = await csrfFetch(`/api/listings/${listingId}/comments`)
    const payload = await res.json()
    dispatch({type: RECEIVE_COMMENTS, payload})
    return res
}

//i dont think i need a comments show? you dont look at a comment you look at the index

export const createComment = (commentData) => async dispatch => {
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
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    })
    if(res.ok) {
        dispatch({type: REMOVE_COMMENT, commentId})
    }
}

const commentsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = {...state}

    switch(action.type) {
    case RECEIVE_COMMENTS:
        if (action.payload) {
            return action.payload;
        } else {
            return newState;
        }
    case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment
            return newState
    case REMOVE_COMMENT:
        delete newState[action.commentId]
        return newState
    default:
        return state
    }
}

export default commentsReducer