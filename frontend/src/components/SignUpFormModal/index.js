import React, {useState } from "react";
import { Modal } from "../../context/Modal"; 
import SignUpForm from "./SignUpForm";
import LoginForm from "../LoginFormModal/LoginForm";
import './SignUpForm.css'

function SignUpFormModal() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);

  const handleClick = e => {
    e.preventDefault();
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
          <button id='sign_up_button' className='modal-button' onClick={() => setShowSignModal(true)}>SIGN UP</button>
          {showSignModal && (
            <Modal id='sign_up_modal' onClose={() => setShowSignModal(false)}>
              <SignUpForm />
              <p>Already have an account? <a onClick={handleClick} className='modal-switch'>Click Here</a></p>

            </Modal>
          )}
          {showLoginModal && (
            <>
              <Modal id='log_in_modal' onClose={() => setShowLoginModal(false)}>
                <LoginForm />
                <p>Don't have an account? <a onClick={handleClick} className='modal-switch'>Sign Up</a></p>

              </Modal>

            </>

            
          )}
        </>
      );

}

export default SignUpFormModal