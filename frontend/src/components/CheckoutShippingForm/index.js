import React from "react";
import './CheckoutShippingForm.css'

const CheckoutShippingForm = () => {

    return(
        <>
        <div className='shippingform-container'>
            <form className='shippingform'>
                <div >
                    <h3 className='shipping-titles'>Name </h3>
                    <label>
                        <input type='text' className='shipping-name'></input>
                    </label>
                </div>
                <div className='shipping-content-container'>
                    <div className='shipping-content-container-left'>
                        <h3 className='shipping-titles'> Street address</h3>
                            <label> 
                                <input type='text' className='fullsized'/>
                            </label>
                    </div>
                    <div className='shipping-content-container-right'>
                        <h3 className='shipping-titles' > Apt/Suite </h3>
                            <label>
                                <input type='text' className='halfsized'/>
                            </label>
                    </div>
                </div>
                <div className='shipping-content-container'> 
                    <div className='shipping-content-container-left'> 
                        <h3 className='shipping-titles'>City</h3>
                            <label> 
                                <input type='text' className='fullsized'></input>
                            </label>
                    </div>
                    <div className='shipping-content-container-right'>

                        <h3 className='shipping-titles'>State</h3>
                            <label> 
                                <input type='text' className='halfsized'/>
                            </label>
                    </div>
                </div>
                <div className='shipping-content-container'>
                    <div className='shipping-content-container-left'>
                        <h3 className='shipping-titles'>Country</h3>
                            <label> 
                                <input type='text' className='fullsized'/>
                            </label>
                    </div>
                    <div className='shipping-content-container-right'>
                        <h3 className='shipping-titles'>ZIP code</h3>
                            <label> 
                                <input type='text' className='halfsized'/>
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