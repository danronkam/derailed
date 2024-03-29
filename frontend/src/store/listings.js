import csrfFetch from "./csrf"
import { RECEIVE_USER } from "./user"

export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING'
export const REMOVE_LISTING =  'listings/REMOVE_LISTING'

export const receiveListings = (payload) => ({
    type: RECEIVE_LISTINGS,
    payload
})

export const receiveListing = (payload) => ({
    type: RECEIVE_LISTING,
    payload
})


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

// SearchBar TODO WRITE FILTERED LISTINGS

// export const getSearchedListings = (query) => async dispatch => {
//     const res = await csrfFetch()
// }


// SearchBar


/* 
action functions
*/

export const fetchListings  = () => async dispatch =>{
    const res = await csrfFetch(`/api/listings`)
    const payload = await res.json()
    dispatch({type: RECEIVE_LISTINGS, payload})
}

export const fetchListing = listingId => async dispatch => {
    const res = await csrfFetch(`/api/listings/${listingId}`)
    const listing = await res.json()
    dispatch({type: RECEIVE_LISTING, listing})
}


export const createListing = (listingData) => async dispatch => {
    // debugger
    const res = await csrfFetch(`/api/listings`, {
        method: 'POST',
        body: listingData,
        headers: {
            'Accept': 'application/json'
        }
    })
    const payload = await res.json()
    dispatch({type: RECEIVE_LISTING, payload})
}

export const updateListing = listingData => async dispatch => {
    const res = await csrfFetch(`/api/listings/${listingData.listing.id}`, {
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
    const res = await csrfFetch(`/api/listings/${listingId}`, {
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

    switch(action.type){
        case RECEIVE_LISTINGS:
            return action.payload.listings

        case RECEIVE_LISTING:
                newState[action.listing.id] = action.listing
                return newState
        case REMOVE_LISTING:
            delete newState[action.listingId]
            return newState
        case RECEIVE_USER:
            return {...action.payload.listings}
        default:
            return state
    }

}

export default listingsReducer