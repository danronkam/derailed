import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing } from "../../store/listings";
import { getUser } from "../../store/user";
import CheckoutShippingForm from "../CheckoutShippingForm";
import './CheckOut.css'


const CheckOut = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))
    const userId = listing.userId
    const user = useSelector(getUser(userId))

    console.log(user)



    return(
        <>
        <div class='buy-bar'>
            <h1>Item CheckOut </h1>
        </div>
        <div class='checkout-container'>
            <div class='left'>
                <h4>Shipping address</h4> 
                <CheckoutShippingForm />
                <h4>Payment Method</h4>
                <button>Pay with PayPal</button>
            </div>
            <div class='right'>
                <div>
            
                </div>
                
            </div>
        </div>
    
        
        
        </>
    )
}

export default CheckOut