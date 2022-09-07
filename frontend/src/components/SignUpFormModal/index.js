import React, {useState } from "react";
import { Modal } from "../../context/Modal"; 
import SignUpForm from "./SignUpForm";

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button id='sign_up_button' onClick={() => setShowModal(true)}>SIGN UP</button>
          {showModal && (
            <Modal id='sign_up_modal' onClose={() => setShowModal(false)}>
              <SignUpForm />
            </Modal>
          )}
        </>
      );

}

export default SignUpFormModal