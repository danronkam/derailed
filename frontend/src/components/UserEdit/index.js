import React, { useEffect, useState } from "react";
import { fetchUser, getUser, updateUser } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";
import './UserEdit.css'


const UserEdit = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    let userData = useSelector(getUser(userId))
    const date = userData.user.createdAt.slice(0, 4)
    const email = userData.user.email
    const username = userData.user.username
    const bottom = userData.user.waist_size
    const top = userData.user.top_size
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchUser(userId))
    }, [userId])


    const [user, setUser] = useState(userData)


    console.log(user)

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    const handleSubmit = e => {
        const newUser = {}
        newUser.id = user.user.id
        newUser.email = user.email
        newUser.top_size = user.top_size
        newUser.waist_size = user.waist_size
        newUser.username = user.username
        // user.id = user.user.id
        e.preventDefault()
        console.log(newUser)
        dispatch(updateUser(newUser))
        history.push("/")
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
            <h3 class='user-edit-title'>Edit Your Profile</h3>
            <form class='edit-form' onSubmit={handleSubmit}>
                <div class='form-row-1'>
                    <label htmlFor="user_username"> Username <br />  </label>
                        <input id='user_username' class='log_in_inputs' value={user.username} onChange={e => {setUser({...user, username: e.target.value})}} />
                   
                    <label htmlFor="user_email"> Email    </label>
                        <input id='user_email' class='log_in_inputs' value={email} onChange={e => {setUser({...user, email: e.target.value})}}/>
                  
                </div>
                <div class='form-row-2'>
                    {/* <label htmlFor="user_location"> Location
                            <select id='user_location'>
                                <option value="Canada">Canada</option>
                                <option value="United States">United  States</option>
                            </select>
                    </label> */}
                    <label htmlFor="user_top"> Top Size <br /> </label>
                        <select id='user_top' value={top} class='log_in_inputs' onChange={e => {setUser({...user, top_size: e.target.value})}}>
                            <option value='XS'>XS</option>
                            <option value='S'>S</option>
                            <option value='M'>M</option>
                            <option value='L'>L</option>
                            <option value='XL'>XL</option>
                            <option value='2XL'>2XL</option>
                        </select>
                    
                    <label htmlFor="user_bottom"> Bottom Size   <br />     </label>
                    <select id='user_bottom' value={bottom} class='log_in_inputs' onChange={e => {setUser({...user, waist_size: e.target.value})}}>
                            <option value='28'>28</option>
                            <option value='29'>29</option>
                            <option value='30'>30</option>
                            <option value='31'>31</option>
                            <option value='32'>32</option>
                            <option value='33'>33</option>
                            <option value='34'>34</option>
                            <option value='35'>35</option>
                            <option value='36'>36</option>
                        </select>
             
                </div>
                <input type='submit' class='login_button' value="Update"/> 
                {/* <input type='submit'> Update </input> */}

            </form>
            <button onClick={logout} class='login_button' >Log Out</button>
        </div>

        </>
    )
}

export default UserEdit