import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
    <div class='dropdown'>
      <button class='dropdown-button'>
        <i class="fas fa-user-circle"></i>
      </button>
      <div class='dropdown-content'>
        <ul className="">
            <Link to={`/users/myprofile`}>My Profile</Link>
            <Link to={`/users/${user.id}/edit`}>Settings</Link>
            <p>test</p>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
      </div>


    </div>

      
    </>
  );
}

export default ProfileButton;
