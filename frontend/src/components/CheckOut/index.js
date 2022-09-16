import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listings";
import { fetchUser, getUser } from "../../store/user";
import CheckoutShippingForm from "../CheckoutShippingForm";
import './CheckOut.css'


const CheckOut = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))
    const userId = listing.userId
    const user = useSelector(getUser(userId))

    useEffect(() =>{
        dispatch(fetchListing(listingId))
    }, [])

    useEffect(() =>{
        dispatch(fetchUser(userId))
    }, [])

    console.log(listing)

    

    const shipping = listing.shippingPrice 
    const price = listing.price
    console.log(shipping)
    console.log(price)
    const total = shipping + price



    return(
        <>
        <div class='buy-bar'>
            <h1 id='item-checkout'>Item Checkout </h1>
        </div>
        <div class='checkout-container'>
            <div class='checkout-left'>
                <h4 class='payment-heading'>Shipping address</h4> 
                <CheckoutShippingForm />
                <h4 class='payment-heading'>Payment Method</h4>
                <button>Pay with PayPal</button>
            </div>
            <div class='checkout-right'>
                <div class='checkout-item-container'>
                    <img id='checkout-photo' src={listing.photoUrl} />
                    <div class='checkout-item-details'>
                            <h4>{listing.designerBrand} </h4>
                            <p>{listing.title}   <h5>${listing.price}</h5> </p>
                            <p>Size: {listing.size}</p>
                    </div>

                </div>
                <h3>Order Details</h3>
                <div class='order-details'>
         
                    <div class='order-details-container'>
                        <div class='listing-price-container'>
                            <p>Listing Price</p> <br />
                            <p>Shipping</p>
                        </div>
                        <div class='shipping-price-container'>
                        
                            <p>{listing.price}</p>
                            <p>{listing.shipping_price}</p>
                        </div>
                    </div>

                </div>
                <div className="order-total">
                        <h3>ORDER TOTAL</h3>
                        <h3>${total}</h3>
                </div>
            </div>
        </div>
    
        
        
        </>
    )
}

export default CheckOut