import React from "react";

const CheckoutShippingForm = () => {

    return(
        <>
        <div class='shippingform-container'>
            <form class='shippingform'>
                <label> Name
                    <input type='text'></input>
                </label>
                <label> Street address
                    <input type='text' class='fullsized'/>
                </label>
                <label> Apt/Suite
                    <input type='text' class='halfsized'/>
                </label>
                <label> City
                    <input type='text'></input>
                </label>
                <label> State
                    <input type='text' class='halfsized'/>
                </label>
                <label> Country
                    <select name='category' class='create-inputs' id='category'>
                        <option defaultValue={{ label: "Select Category", value: 0 }} disabled></option>
                        <option value='Tops'>Canada</option>
                        <option value='Bottoms'>United States</option>
                    </select>
                </label>
                <label> ZIP code
                    <input type='text' class='halfsized'/>
                </label>
                <input type='submit' />
            </form>
        </div>
        
        </>
    )
}
export default CheckoutShippingForm