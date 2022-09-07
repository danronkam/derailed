import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>

      </>
    );
  }

  return (
    <>   
      <div class="navbar"> 
      
      <NavLink exact to="/"><a href=''></a><img id='top_left_logo' src='https://process.fs.grailed.com/eEumRzf9QyS13BicdH4V' /> </NavLink>

        {/* <img id='top_left_logo' src='https://process.fs.grailed.com/eEumRzf9QyS13BicdH4V' />  */}
        <ul>
          <li>
            {/* <NavLink exact to="/">Home</NavLink> */}
            {sessionLinks}
          </li>
        </ul> 
      </div>
    </>

  );
}

export default Navigation;
