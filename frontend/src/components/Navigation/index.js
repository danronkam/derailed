import React, {useState }  from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import SearchBar from '../SearchBar';
import { Link, useHistory } from 'react-router-dom';
import './Navigation.css';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import SignUpForm from '../SignUpFormModal/SignUpForm';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [loginModal, setLoginModal] = useState(false);
  const [signModal, setSignModal] = useState(false);
  


  const handleToggle = e => {
    e.preventDefault();
    if(loginModal) {
      setLoginModal(false)
      setSignModal(true)
    } else {
      setLoginModal(true)
      setSignModal(false)
    }
  }

  const handleClick = e => {
    e.preventDefault();
    setLoginModal(true)
}

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
        <a onClick={handleClick}>SELL</a>
        <LoginFormModal />
        <SignUpFormModal></SignUpFormModal>

      </>
    );
  }

  return (
    <>   
    <div className='navbar-container'>
      <div className="navbar"> 
      
        <NavLink  to={`/`} id='home-logo'><img id='top_left_logo' src='https://derailed-seed.s3.us-west-1.amazonaws.com/derailed_gif.gif' /> </NavLink>
        <SearchBar />
        <div className='navbar-right'>
          <ul className='navbar-list'>
            <li className='navbar-links'>
              {sessionLinks}
            </li>
          </ul> 
        </div>
      </div>
    </div>
    {loginModal && (
            <Modal id='log_in_modal' onClose={() => setLoginModal(false)}>
            <LoginForm />
            <p>Don't have an account? <a onClick={handleToggle} className='modal-switch'>Sign Up</a></p>

            </Modal>
        )}
         {signModal && (
            <Modal id='sign_up_modal' onClose={() => setSignModal(false)}>
              <SignUpForm />
              <p>Already have an account? <a onClick={handleToggle} className='modal-switch'>Click Here</a></p>

            </Modal>
          )}
    </>

  );
}

export default Navigation;
