import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing, fetchListing, updateListing, deleteListing } from '../../store/listings';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



const ListingEdit = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const history = useHistory();

    let listingData = useSelector(getListing(listingId))
    console.log(listingData)

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    const USERID = listingData.userId
    const PHOTO = listingData.photoUrl

    const [listing, setListing] = useState(listingData)

    const handleSubmit = e => {
        e.preventDefault()
        const newListing = {}
        newListing.id = listingData.id
        newListing.user_id = USERID
        newListing.photo_url = PHOTO
        newListing.title = listing.title
        newListing.price = listing.price
        newListing.shipping_price = listing.shipping_price
        newListing.designer_brand = listing.designer_brand
        newListing.size = listing.size
        newListing.category = listing.category
        newListing.sub_category = listing.sub_category
        newListing.condition = listing.condition
        newListing.country = listing.country
        newListing.color = listing.color
        newListing.description = listing.description
        newListing.sold = false
        
        console.log(newListing)
        
        dispatch(updateListing({listing: newListing}))
        history.push('/shop')

    }
    return(
        <>
            <div class='edit-form-container'>
                <form class="create-form" onSubmit={handleSubmit}>
                    <h3>DETAILS</h3>   
                        <div class='details-container' >
                            <div class='left'> 
                                <label htmlFor='category'>
                                    <select name='category' class='create-inputs' value={listing.category} id='category'  onChange={e=> {setListing({...listing, category: e.target.value})}}>
                                        <option disabled>Department / Category</option>
                                        <option value='Tops'>Tops</option>
                                        <option value='Bottoms'>Bottoms</option>
                                        <option value='Outerwear'>Outerwear</option>
                                        <option value='Footwear'>Footwear</option>
                                        <option value='Accessories'>Accessories</option>
                                    </select>
                                </label>

                                <label htmlFor="edit-brand">
                                    <select class='create-inputs' id='edit-brand' name='edit-brand' value={listing.designer_brand}   onChange={e=> {setListing({...listing, designer_brand: e.target.value})}}>
                                            <option disabled>Designer / Brand </option>
                                            <option value='Bape'>Bape</option>
                                            <option value='Carhartt'>Carhartt</option>
                                            <option value='Gucci'>Gucci</option>
                                            <option value='Nike'>Nike</option>
                                            <option value='Vintage'>Vintage</option>
                                        </select>
            
                                   
                                </label>
                            </div>

                            <div class='right'>
                                <label htmlFor='edit-sub_category'>
                    
                                    <select name='sub_category' class='create-inputs' id='edit-sub_category' value={listingData.sub_category} onChange={e=> {setListing({...listing, sub_category: e.target.value})}} >
                                        <option disabled >Department / Category</option>
                                        <option value='Sneakers'>Sneakers</option>
                                        <option value='Loafers'>Loafers</option>
                                        <option value='Sandles'>Sandles</option>
                                        <option value='Boots'>Boots</option>
                                        <option value='Athletic'>Athletic</option>
                                    </select>
                                </label>

                            
                                <select name='size' class='create-inputs' id='size' value={listing.size} onChange={e=> {setListing({...listing, size: e.target.value})}}>
                                        <option disabled >Size (Please Select Category First) </option>
                                        <option value='XS'>XS</option>
                                        <option value='S'>S</option>
                                        <option value='M'>M</option>
                                        <option value='L'>L</option>
                                        <option value='XL'>XL</option>

                                </select>
                                
                            </div>
                        </div>

                    <div class ='details-container-2' > 
                        <h3> ITEM NAME</h3>
                            <label htmlFor='edit-title' />
                            <input id='edit-title' name='edit-title' class='create-inputs' value={listingData.title} onChange={e=> {setListing({...listing, title: e.target.value})}}/>
                        <h3 > COLOR </h3>
                            <label htmlFor='color' />
                            <select name='color' class='create-inputs' id='color' value={listingData.color} onChange={e=> {setListing({...listing, color: e.target.value})}}>
                                        <option value='Red'>Red</option>
                                        <option value='Orange'>Orange</option>
                                        <option value='Yellow'>Yellow</option>
                                        <option value='Green'>Green</option>
                                        <option value='Blue'>Blue</option>
                                        <option value="Indigo">Indigo </option>
                                        <option value="Violet">Violet </option>

                            </select>
                

                        <h3> CONDITION </h3>
                            <label htmlFor='condition'>
                                <select name='condition' id='condition' class='create-inputs' value={listingData.condition} onChange={e=> {setListing({...listing, condition: e.target.value})}}> 
                                        <option selected disabled></option>
                                        <option value='New/Never Worn'>New/Never Worn</option>
                                        <option value='Gently Used'>Gently Used</option>
                                        <option value='Used'>Used</option>
                                        <option value='Very Worn'>Very Worn</option>
                                </select>
                            </label>
                    </div>
                    <h3> DESCRIPTION </h3>

                        <input type='text' id='description' class='create-inputs' value={listing.description} onChange={e=> {setListing({...listing, description: e.target.value})}} />

                    <h3> PRICE </h3>
                        <div class='price-container' >
                            <i class="fas fa-dollar-sign"></i>
                            <input type='text' id='price' value={listingData.price} onChange={e=> {setListing({...listing, price: e.target.value})}}/>
                        </div>

                    <h3> SHIPPING FROM </h3>

                        <input list='shipping-countries' name='shipping' id='shipping' value={listingData.country} onChange={e=> {setListing({...listing, country: e.target.value})}}/>
                                    <datalist id='shipping-countries'>
                                        <option value="Canada"/>
                                        <option value="United States"/>
                                    </datalist>
                        <label htmlFor='shipping_price'>
                            <input  id='shipping_price' name='shipping_price' type='integer' value={listingData.shipping_price} onChange={e=> {setListing({...listing, shipping_price: e.target.value})}} />
                        </label>

                    <div class='button-container'>
                        <button type='submit' >UPDATE</button>
                       
                    </div>
                </form>
                <button onClick={e => {dispatch(deleteListing(listingId))}}>DELETE</button>
            </div>
        </>
    )
}

export default ListingEdit