import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignUpForm from '../SignUpFormModal/SignUpForm';

function LoginFormModal() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);


  const handleClick = e => {
    e.preventDefault();
    console.log('hey')
    if(showLoginModal) {
      setShowLoginModal(false)
      setShowSignModal(true)
    } else {
      setShowLoginModal(true)
      setShowSignModal(false)
    }
  }

  return (
    <>
      <button id='log_in_button' onClick={() => setShowLoginModal(true)}>LOGIN</button>
      {showLoginModal && (
        <>
          <Modal id='log_in_modal' onClose={() => setShowLoginModal(false)}>
            <LoginForm />
            <p>Don't have an account? <a onClick={handleClick}>Sign Up</a></p>

          </Modal>

        </>

        
      )}
      {showSignModal && (
            <Modal id='sign_up_modal' onClose={() => setShowSignModal(false)}>
              <SignUpForm />
              <p>Already have an account? <a onClick={handleClick}>Click Here</a></p>

            </Modal>
        )}
    </>
  );
}

export default LoginFormModal;