export const RECEIVE_USER = 'users/RECEIVE_USER'

export const getUser = userId => state => {
    if(!state || !state.session) {
        return null
    } else {
        return state.session
    }
}

export const fetchUser = userId => async dispatch => {
    const res = await fetch(`api/users/${userId}`)
    const user = await res.json()
    dispatch({type: RECEIVE_USER, user})
}

const usersReducer = (state = {}, action ) => {
    Object.freeze(state)
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_USER:
            newState[action.user.id] = action.user
        default:
            return newState
    }
}

export const updateUser = userData => async dispatch => {
    const res = await fetch(`api/users/${userData.id}`, {
        method:'PATCH',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const user  = await res.json()
    dispatch({type: RECEIVE_USER, user})
}

export default usersReducer

