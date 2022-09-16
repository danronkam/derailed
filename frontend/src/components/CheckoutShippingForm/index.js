import React from "react";
import './CheckoutShippingForm.css'

const CheckoutShippingForm = () => {

    return(
        <>
        <div class='shippingform-container'>
            <form class='shippingform'>
                <div >
                    <h3 class='shipping-titles'>Name </h3>
                    <label>
                        <input type='text' class='shipping-name'></input>
                    </label>
                </div>
                <div class='shipping-content-container'>
                    <div class='shipping-content-container-left'>
                        <h3 class='shipping-titles'> Street address</h3>
                            <label> 
                                <input type='text' class='fullsized'/>
                            </label>
                    </div>
                    <div class='shipping-content-container-right'>
                        <h3 class='shipping-titles' > Apt/Suite </h3>
                            <label>
                                <input type='text' class='halfsized'/>
                            </label>
                    </div>
                </div>
                <div class='shipping-content-container'> 
                    <div class='shipping-content-container-left'> 
                        <h3 class='shipping-titles'>City</h3>
                            <label> 
                                <input type='text' class='fullsized'></input>
                            </label>
                    </div>
                    <div class='shipping-content-container-right'>

                        <h3 class='shipping-titles'>State</h3>
                            <label> 
                                <input type='text' class='halfsized'/>
                            </label>
                    </div>
                </div>
                <div class='shipping-content-container'>
                    <div class='shipping-content-container-left'>
                        <h3 class='shipping-titles'>Country</h3>
                            <label> 
                                <input type='text' class='fullsized'/>
                            </label>
                    </div>
                    <div class='shipping-content-container-right'>
                        <h3 class='shipping-titles'>ZIP code</h3>
                            <label> 
                                <input type='text' class='halfsized'/>
                            </label>
                    </div>
                </div>
                
                {/* <input type='submit' /> */}
            </form>
        </div>
        
        </>
    )
}
export default CheckoutShippingForm