import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListings, getListings } from "../../store/listings";
import { getUser } from "../../store/user";
import './UserShow.css'
import { useEffect } from "react";


const UserShow = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const user = useSelector(getUser(userId))
    const date = user.user.createdAt.slice(0, 4)
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    },[])
    
    console.log(listings)
    console.log(user.user.id)
    return(
        <>
        <div class='user-show-container'>
            <div class='user-show-bar'>
                <div class='user-logo'>
                    <i class="fa-solid fa-circle-user" id='avatar'></i>
                </div>
                <div class='user-show-info'>
                    <h4>{user.user.username}</h4>
                    <h5>joined in {date}</h5>
                    <i class="fa-solid fa-globe"></i>
                </div>
            </div>

        </div>
        <h1>figure out how to grab users listings</h1>
        <h3>{user.user.email}</h3>
        <h3>{user.user.id}</h3>
        <h3>{user.user.username}</h3>
        </>
    )
}

export default UserShow