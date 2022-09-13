import React, { useEffect } from "react";
import { fetchUser, getUser } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../../store/session';


const UserEdit = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const user = useSelector(getUser(userId))
    const date = user.user.createdAt.slice(0, 4)

    useEffect(() => {
        dispatch(fetchUser(userId))
    })

    console.log(user)

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return(
        <>
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
        <div class='edit-form-container' >
            <h3 class='edit-title'>Edit Your Profile</h3>
            <form class='edit-form' >
                <div class='form-row-1'>
                    <label htmlFor="user_username"> Username
                        <input id='user_username' />
                    </label>
                    <label htmlFor="user_email"> Email
                        <input id='user_email' />
                    </label>
                </div>
                <div class='form-row-2'>
                    <label htmlFor="user_location"> Location
                        <input id='user_location' />
                    </label>
                    <label htmlFor="user_top"> Top Size
                        <input id='user_top' />
                    </label>
                    <label htmlFor="user_bottom"> Bottom Size
                        <input id='user_bottom' />
                    </label>
                </div>
                <input type='submit' value="Update"/> 
                {/* <input type='submit'> Update </input> */}

            </form>
            <button onClick={logout} >Log Out</button>
        </div>

        </>
    )
}

export default UserEdit