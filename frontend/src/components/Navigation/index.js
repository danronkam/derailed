import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import SearchBar from '../SearchBar';
import { Link, useHistory } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>    
      <Link to={`/shop`}>SHOP</Link> 
      <Link to={`/sell`}>SELL</Link>
      <ProfileButton user={sessionUser} id='profile_menu' /></>
  
    );
  } else {
    sessionLinks = (
      <>
       
        <Link to={`/shop`}>SHOP</Link>
        <Link >SELL</Link>
        <LoginFormModal />
        <SignUpFormModal></SignUpFormModal>

      </>
    );
  }

  return (
    <>   
    <div className='navbar-container'>
      <div className="navbar"> 
      
        <NavLink exact to="/" id='home-logo'><img id='top_left_logo' src='https://process.fs.grailed.com/eEumRzf9QyS13BicdH4V' /> </NavLink>
        <SearchBar />
          {/* <img id='top_left_logo' src='https://process.fs.grailed.com/eEumRzf9QyS13BicdH4V' />  */}
        <div className='navbar-right'>
          <ul className='navbar-list'>
            <li className='navbar-links'>
              {/* <NavLink exact to="/">Home</NavLink> */}
              {sessionLinks}
            </li>
          </ul> 
        </div>
      </div>
    </div>
      
    </>

  );
}

export default Navigation;
