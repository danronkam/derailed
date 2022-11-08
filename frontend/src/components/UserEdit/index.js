import React, { useEffect, useState } from "react";
import { fetchUser, getUser, updateUser } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";
import './UserEdit.css'
import { useForm } from "react-hook-form";
import EditForm from './EditForm.js'


const UserEdit = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    let userData = useSelector(getUser(userId))
    const date = userData.user.createdAt.slice(0, 4)
    const email = userData.user.email
    const history = useHistory();

    const userInfo = {
        email: `{email}`,
        username: `{userData.email}`
    }

    useEffect(() => {
        dispatch(fetchUser(userId))
    }, [userId])


    const [user, setUser] = useState(userData)



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
        dispatch(updateUser(newUser))
        history.push("/myprofile")
    }

    return(
        <>
        <div className='user-show-bar'>
            <div className='user-logo'>
                <i className="fa-solid fa-circle-user" id='avatar'></i>
            </div>
            <div className='user-show-info'>
                <h4>{user.user.username}</h4>
                <h5>joined in {date}</h5>
                <i className="fa-solid fa-globe"></i>
            </div>
        </div>
        <div className='edit-form-container' >
            <h3 className='user-edit-title'>Edit Your Profile</h3>
            <form className='edit-form' onSubmit={handleSubmit}>
                <div className='form-row-1'>
                    <label htmlFor="user_username"> Username <br />  </label>
                        <input id='user_username' className='log_in_inputs' defaultValue={user.user.username} onChange={e => {setUser({...user, username: e.target.value})}} />
                   
                    <label htmlFor="user_email"> Email    </label>
                        <input id='user_email' className='log_in_inputs' defaultValue={email} onChange={e => {setUser({...user, email: e.target.value})}}/>
                  
                </div>
                <div className='form-row-2'>

             
                </div>
                <input type='submit' className='login_button' value="Update"/> 

            </form>
            <button onClick={logout} className='login_button' >Log Out</button>
        </div>

        </>
    )
}

export default UserEdit