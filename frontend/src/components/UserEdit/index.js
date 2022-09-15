import React, { useEffect, useState } from "react";
import { fetchUser, getUser, updateUser } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../../store/session';


const UserEdit = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    let userData = useSelector(getUser(userId))
    const date = userData.user.createdAt.slice(0, 4)
    const email = userData.user.email
    const username = userData.user.username
    const bottom = userData.user.waist_size
    const top = userData.user.top_size

    useEffect(() => {
        dispatch(fetchUser(userId))
    }, [userId])


    const [user, setUser] = useState(userData)


    console.log(user)

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log(user)
        dispatch(updateUser(user))

    }

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
            <form class='edit-form' onSubmit={handleSubmit}>
                <div class='form-row-1'>
                    <label htmlFor="user_username"> Username
                        <input id='user_username'  onChange={e => {setUser({...user, username: e.target.value})}} />
                    </label>
                    <label htmlFor="user_email"> Email
                        <input id='user_email'  onChange={e => {setUser({...user, email: e.target.value})}}/>
                    </label>
                </div>
                <div class='form-row-2'>
                    {/* <label htmlFor="user_location"> Location
                            <select id='user_location'>
                                <option value="Canada">Canada</option>
                                <option value="United States">United  States</option>
                            </select>
                    </label> */}
                    <label htmlFor="user_top"> Top Size
                        <select id='user_top'  onChange={e => {setUser({...user, top_size: e.target.value})}}>
                            <option value='XS'>XS</option>
                            <option value='S'>S</option>
                            <option value='M'>M</option>
                            <option value='L'>L</option>
                            <option value='XL'>XL</option>
                            <option value='2XL'>2XL</option>
                        </select>
                    </label>
                    <label htmlFor="user_bottom"> Bottom Size
                    <select id='user_bottom'  onChange={e => {setUser({...user, bottom_size: e.target.value})}}>
                            <option value='28'>28</option>
                            <option value='28'>29</option>
                            <option value='28'>30</option>
                            <option value='28'>31</option>
                            <option value='28'>32</option>
                            <option value='28'>33</option>
                            <option value='28'>34</option>
                            <option value='28'>36</option>
                            <option value='28'>37</option>
                        </select>
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