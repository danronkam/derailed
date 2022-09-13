/*
action constants
*/

export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING'
export const REMOVE_LISTING =  'listings/REMOVE_LISTING'


export const getListing = listingId => state => {
    if(!state || !state.listings) {
        return null
    } else {
        return state.listings[listingId]
    }
}

export const getListings = state => {
    if(!state.listings) {
        return []
    } else {
        return Object.values(state.listings)
    }
}
/* 
action functions
*/

export const fetchListings  = () => async dispatch =>{
    const res = await fetch(`api/listings`)
    const payload = await res.json()
    dispatch({type: RECEIVE_LISTINGS, payload})
}

export const fetchListing = listingId => async dispatch => {
    const res = await fetch(`api/listings/${listingId}`)
    const listing = await res.json()
    dispatch({type: RECEIVE_LISTING, listing})
}

export const createListing = (listingData) => async dispatch => {
    console.log('i am here')
    const res = await fetch(`api/listings`, {
        method: 'POST',
        body: JSON.stringify(listingData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const payload = await res.json()
    dispatch({type: RECEIVE_LISTING, payload})
}

export const updateListing = listingData => async dispatch => {
    const res = await fetch(`/api/listings/${listingData.id}`, {
        method:'PATCH',
        body: JSON.stringify(listingData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const listing = await res.json()
    dispatch({type: RECEIVE_LISTING, listing})
}

export const deleteListing = listingId => async dispatch => {
    const res = await fetch(`api/listings/${listingId}`, {
        method: 'DELETE'
    })
    if(res.ok) {
        dispatch({type: REMOVE_LISTING, listingId})
    }
}

/*
reducer
*/

const listingsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = {...state}
    // debugger

    switch(action.type){
        case RECEIVE_LISTINGS:
            return action.payload.listings

        case RECEIVE_LISTING:
                newState[action.payload.id] = action.payload
                return newState
        case REMOVE_LISTING:
            delete newState[action.listingId]
            return newState
        default:
            return state
    }

}

export default listingsReducer