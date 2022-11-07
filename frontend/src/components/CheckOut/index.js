import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing, fetchListing } from "../../store/listings";
import CheckoutShippingForm from "../CheckoutShippingForm";
import './CheckOut.css'


const CheckOut = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))

    useEffect(() =>{
        dispatch(fetchListing(listingId))
    }, [])

    const shipping = listing.shippingPrice 
    const price = listing.price
    const total = shipping + price



    return(
        <>
        <div className='buy-bar'>
            <h1 id='item-checkout'>Item Checkout </h1>
        </div>
        <div className='checkout-container'>
            <div className='checkout-left'>
                <h4 className='payment-heading'>Shipping address</h4> 
                <CheckoutShippingForm />
                <h4 className='payment-heading'>Payment Method</h4>
                <button className="paypal-button">Pay with PayPal</button>
            </div>
            <div className='checkout-right'>
                <div className='checkout-item-container'>
                    <img id='checkout-photo' src={listing.photoUrl} />
                    <div className='checkout-item-details'>
                            <h4>{listing.designerBrand} </h4>
                            <p>{listing.title}   <h5>${listing.price}</h5> </p>
                            <p>Size: {listing.size}</p>
                    </div>

                </div>
                <h3>Order Details</h3>
                <div className='order-details'>
         
                    <div className='order-details-container'>
                        <div className='listing-price-container'>
                            <p>Listing Price</p> <br />
                            <p>Shipping</p>
                        </div>
                        <div className='shipping-price-container'>
                        
                            <p>{listing.price}</p> <br />
                            <p>{listing.shippingPrice}</p>
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