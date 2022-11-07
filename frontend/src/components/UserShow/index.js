import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../store/user";
import './UserShow.css'
import { useEffect } from "react";
import ListingIndexItem from "../ListingIndexItem";
import { getUser } from "../../store/user";

const UserShow = ({userId}) => {
    const dispatch = useDispatch()
    const user = useSelector(getUser(userId))
    const ID = user.user.id
    const [isLoading, setIsLoading] = useState(true);


    const listings = useSelector(state => Object.values(state.listings))
    let name = user.user.username
    if(!name) {
        name=user.user.email
    }
    useEffect(() => {
        dispatch(fetchUser(ID));
        setTimeout(function () {
            setIsLoading(false);
           
        }, 1000);
    },[])
    let filtered = []

    const filterListings = listings.filter(listing => {
        console.log(listing.userId)

        console.log(ID)
        if(String(listing.userId) === ID) {
            console.log('yes')
            filtered.push(listing)
        }
    });

    console.log(filtered)
    
  
    return(
        <>
        {isLoading ? (
                <div className="slider-container loading-container">
                   <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/ezgif-2-8d83b97af8.gif" />    
               </div>
        ) : (
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
                        {listings.map(listing => {
                            return <ListingIndexItem key={listing.id} listing={listing} />
                        })}
                    </ul>
                </div>
            </div>
            </div>
            </>
        )}
        </>
    )
}

export default UserShow