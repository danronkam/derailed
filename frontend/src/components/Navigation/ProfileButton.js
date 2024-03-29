import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const userId = user.id
  
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
    <div className='dropdown'>
      <button className='dropdown-button'>
        <i className="fas fa-user-circle logo-Hover"></i>
      </button>
      <div className='dropdown-content'>
        <ul className="">
            <Link to={`/myprofile`} userid={userId}>My Profile</Link>
            <Link to={`/myprofile/edit`}>Settings</Link>
          </ul>
      </div>


    </div>

      
    </>
  );
}

export default ProfileButton;
