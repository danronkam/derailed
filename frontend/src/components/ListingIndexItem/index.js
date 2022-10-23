import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './ListingIndexItem.css'
import { Modal } from '../../context/Modal';
import LoginForm from "../LoginFormModal/LoginForm";
import SignUpForm from "../SignUpFormModal/SignUpForm";

import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";

const ListingIndexItem = ({listing}) => {
    // console.log(listing)
    const dispatch = useDispatch()
    const [loginModal, showLoginModal] = useState(false);
    const [signModal, showSignModal] = useState(false);


    const sessionUser = useSelector(state => state.session.user);

    let link = `/listings/${listing.id}`;

    const handleClick = e => {
        e.preventDefault();
        if(!sessionUser){
            console.log('test')
            showLoginModal(true)
        } else {

        }

    }
    

    const brand = listing.designerBrand
    const capsBrand = brand.toUpperCase()
    return(
        <>
        {/* <img src='https://www.pngitem.com/pimgs/m/238-2381636_happy-face-color-in-smiley-face-hd-png.png'></img> */}
        {/* <h1>{listing.title}</h1> */}
        {loginModal && (
            <Modal id='log_in_modal' onClose={() => showLoginModal(false)}>
            <LoginForm />
            </Modal>
        )}
         {signModal && (
            <Modal id='sign_up_modal' onClose={() => showSignModal(false)}>
              <SignUpForm />
            </Modal>
          )}

        <Link onClick={handleClick} className='listing-link' >
            <li className="feed-items">
                <img src={listing.photoUrl} className='listing-image'/> 
                <div className='feed-details'>
                    <h3 className='feed-brand'>{capsBrand} {listing.size}</h3>
                    <span className='feed-title'>{listing.title}</span>
                    <span className='feed-price'>${listing.price}</span>
                </div>      
                </li>
            </Link>
            {/* <h1>{listing.sub_category}</h1> */}
            {/* <p>{listing.price}</p> */}

        </>
    )
}

export default ListingIndexItem
