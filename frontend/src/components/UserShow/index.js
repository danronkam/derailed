import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListings, getListings } from "../../store/listings";
import { fetchUser, getUser } from "../../store/user";
import './UserShow.css'
import { useEffect } from "react";
import ListingIndexItem from "../ListingIndexItem";


const UserShow = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    // const user = useSelector(getUser(userId))
    const user = useSelector(state => state.users)
    // const date = user.createdAt.slice(0, 4)
    const listings = useSelector(state => Object.values(state.listings))

    useEffect(() => {
        dispatch(fetchUser(userId))
    },[])
    
    console.log(listings)
    console.log(user)
    return(
        <>
        <div class='user-show-container'>
            <div class='user-show-bar'>
                <div class='user-logo'>
                    <i class="fa-solid fa-circle-user" id='avatar'></i>
                </div>
                <div class='user-show-info'>
                    <h4>{user.username}</h4>
                    <h5>joined in {}</h5>
                    <i class="fa-solid fa-globe"></i>
                </div>
            </div>
            <div class='feed-container'>  
                <div class='feed-leftside' >
                
            </div>
            <div class='user-feed'>  
                <h2 class='avaliable-listings'>Avaliable Listings</h2> <br />
                <ul class='feed-list'>
                    {listings.map(listing => {
                        return <ListingIndexItem key={listing.id} listing={listing} />
                    })}
                </ul>
            </div>
        </div>
        </div>

        {/* <h3>{user.user.email}</h3>
        <h3>{user.user.id}</h3>
        <h3>{user.user.username}</h3> */}
        </>
    )
}

export default UserShow