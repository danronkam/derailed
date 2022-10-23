import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../store/user";
import './UserShow.css'
import { useEffect } from "react";
import ListingIndexItem from "../ListingIndexItem";
import { getUser } from "../../store/user";


const UserShow = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const user = useSelector(getUser(userId))
    console.log(user)
    // const user = useSelector(state => state.users)
    // const rawDate = user.createdAt.year
    // const date = rawDate.slice(0, 4)
    const listings = useSelector(state => Object.values(state.listings))
    let name = user.user.username
    if(!name) {
        name=user.user.email
    }
    useEffect(() => {
        dispatch(fetchUser(userId))
    },[])
    let filtered = []

    const filterListings = listings.filter(listing => {
        console.log(listing.userId)
        // console.log(userId)
        let user = userId
        console.log(user)
        if(String(listing.userId) === userId) {
            console.log('yes')
            filtered.push(listing)
        }
    });
    
    // console.log(rawDate)
  
    return(
        <>
        <div className='user-show-container'>
            <div className='user-show-bar'>
                <div className='user-logo'>
                    <i className="fa-solid fa-circle-user" id='avatar'></i>
                </div>
                <div className='user-show-info'>
                    <h4 id='user-show-name'>{name}</h4>
                    <h5 className='user-show-text'>Joined in 2022</h5>
                    <i className="fa-solid fa-globe"></i>
                    <p>{user.country}</p>
                </div>
                <div className='feedback-container'>
                    <h5 className='user-show-text'>no feedback yet</h5>
                </div>
            </div>
            <div className='feed-container'>  
                <div className='feed-leftside' >
                
            </div>
            <div className='user-feed'>  
                <h2 className='avaliable-listings'>Avaliable Listings</h2> <br />
                <ul className='feed-list'>
                    {filtered.map(listing => {
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