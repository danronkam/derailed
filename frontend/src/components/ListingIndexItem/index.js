import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './ListingIndexItem.css'
import { Modal } from '../../context/Modal';
import LoginForm from "../LoginFormModal/LoginForm";
import SignUpForm from "../SignUpFormModal/SignUpForm";
import { fetchListing } from "../../store/listings";
import { useHistory } from "react-router-dom";


import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";

const ListingIndexItem = ({listing}) => {
    const dispatch = useDispatch()
    const [loginModal, setLoginModal] = useState(false);
    const [signModal, setSignModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignModal, setShowSignModal] = useState(false);
    const history = useHistory();


    const sessionUser = useSelector(state => state.session.user);

    let link = `/listings/${listing.id}`;

    const handleClick = e => {
        e.preventDefault();
        if(!sessionUser){
            setLoginModal(true)
        } else {
            history.push(link)
        }
    }

    const handleToggle = e => {
        e.preventDefault();
        if(showLoginModal) {
          setShowLoginModal(false)
          setShowSignModal(true)
        } else {
          setShowLoginModal(true)
          setShowSignModal(false)
        }
      }

    
    

    const brand = listing.designerBrand
    const capsBrand = brand.toUpperCase()
    return(
        <>
        {/* <img src='https://www.pngitem.com/pimgs/m/238-2381636_happy-face-color-in-smiley-face-hd-png.png'></img> */}
        {/* <h1>{listing.title}</h1> */}
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

        <a onClick={handleClick} className='listing-link' >
            <li className="feed-items">
                <img src={listing.photoUrl} className='listing-image'/> 
                <div className='feed-details'>
                    <h3 className='feed-brand'>{capsBrand} {listing.size}</h3>
                    <span className='feed-title'>{listing.title}</span>
                    <span className='feed-price'>${listing.price}</span>
                </div>      
                </li>
            </a>
            {/* <h1>{listing.sub_category}</h1> */}
            {/* <p>{listing.price}</p> */}

        </>
    )
}

export default ListingIndexItem
