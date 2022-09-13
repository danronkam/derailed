import React from "react";
import CheckoutShippingForm from "../CheckoutShippingForm";
import './CheckOut.css'


const CheckOut = () => {


    return(
        <>
        <div class='buy-bar'>

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
        <h1>imagine this is a checkout page</h1>
        
        
        </>
    )
}

export default CheckOut