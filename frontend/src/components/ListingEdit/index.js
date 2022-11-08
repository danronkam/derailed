import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListing, fetchListing, updateListing, deleteListing } from '../../store/listings';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './ListingEdit.css'



const ListingEdit = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const history = useHistory();

    let listingData = useSelector(getListing(listingId))

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    const USERID = listingData.userId
    const PHOTO = listingData.photoUrl

    const [listing, setListing] = useState(listingData)

    const handleClick = e => {
        dispatch(deleteListing(listingId))
        history.push('/')
    }

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
                
        dispatch(updateListing({listing: newListing}))
        history.push('/myprofile')

    }
    return(
        <>
            <div className='listing-edit-form-container'>
                <form className="create-form" onSubmit={handleSubmit}>
                    <h3 className="details-heading">DETAILS</h3>   
                        <div className='details-container' >
                            <div className='left'> 
                                <label htmlFor='category'>
                                    <select name='category' className='create-inputs' value={listing.category} id='category'  onChange={e=> {setListing({...listing, category: e.target.value})}}>
                                        <option selected disabled></option>
                                        <option value='Sneakers'>Sneakers</option>
                                        <option value='Boots'>Boots</option>
                                        <option value='Loafers'>Loafers</option>
                                        <option value='Formal'>Formal</option>
                                        <option value='Slip'>Slip Ons</option>
                                    </select>
                                </label>

                                <label htmlFor="edit-brand">
                                    <select className='create-inputs' id='edit-brand' name='edit-brand' value={listing.designer_brand}   onChange={e=> {setListing({...listing, designer_brand: e.target.value})}}>
                                        <option selected disabled></option>
                                        <option value="Balenciaga"> Balenciaga </option>
                                        <option value="Bape"> Bape </option>
                                        <option value="Gucci"> Gucci </option>
                                        <option value="Nike"> Nike</option>
                                        <option value="Dior"> Dior </option>
                                    </select>
            
                                   
                                </label>
                            </div>

                            <div className='right'>
                                <label htmlFor='edit-sub_category'>
                    
                                    <select name='sub_category' className='create-inputs' id='edit-sub_category' value={listing.sub_category} onChange={e=> {setListing({...listing, sub_category: e.target.value})}} >
                                        <option selected disabled ></option>
                                        <option value='Sneakers'>Hi Top Sneaker</option>
                                        <option value='Loafers'>Low Sneakers</option>
                                        <option value='Sandles'>Leather</option>
                                        <option value='Boots'>Boots</option>
                                        <option value='Athletic'>Athletic</option>
                                    </select>
                                </label>

                            
                                <select name='size' className='create-inputs' id='size' value={listing.size} onChange={e=> {setListing({...listing, size: e.target.value})}}>
                                    <option selected disabled ></option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                    <option value='11'>11</option>
                                    <option value='12'>12</option>
                                    <option value='13'>13</option>
                                </select>
                                
                            </div>
                        </div>

                    <div className ='details-container-2' > 
                        <h3> ITEM NAME</h3>
                            <label htmlFor='edit-title' />
                            <input id='edit-title' name='edit-title' className='create-inputs' value={listing.title} onChange={e=> {setListing({...listing, title: e.target.value})}}/>
                        <h3 > COLOR </h3>
                            <label htmlFor='color' />
                            <select name='color' className='create-inputs' id='color' value={listing.color} onChange={e=> {setListing({...listing, color: e.target.value})}}>
                            <option selected disabled></option>
                                <option value="Red">Red</option>
                                <option value="Pink">Pink</option>
                                <option value="Orange">Orange</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Green">Green</option>
                                <option value="Blue">Blue</option>
                                <option value="Indigo">Indigo</option>
                                <option value="Violet">Violet</option>
                                <option value="Black">Black</option>
                                <option value="White">White</option>
                                <option value="Gray">Gray</option>
                                <option value="Brown">Brown</option>
                                <option value="Tan">Tan</option>
                            </select>
                

                        <h3> CONDITION </h3>
                            <label htmlFor='condition'>
                                <select name='condition' id='condition' className='create-inputs' value={listing.condition} onChange={e=> {setListing({...listing, condition: e.target.value})}}> 
                                        <option selected disabled></option>
                                        <option value='New/Never Worn'>New/Never Worn</option>
                                        <option value='Gently Used'>Gently Used</option>
                                        <option value='Used'>Used</option>
                                        <option value='Very Worn'>Very Worn</option>
                                </select>
                            </label>
                    </div>
                    <div className='details-container-3'>
                        <h3> DESCRIPTION </h3>

                            <textarea type='text' id='description' className='create-inputs' value={listing.description} onChange={e=> {setListing({...listing, description: e.target.value})}} />
                    </div>
                    <div className='details-container-2'>
                        <h3> PRICE </h3>
                            <div className='price-container' >
                                <i className="fas fa-dollar-sign"></i>
                                <input type='text' id='price' value={listing.price} onChange={e=> {setListing({...listing, price: e.target.value})}}/>
                            </div>
                   

                        <h3> SHIPPING FROM </h3>

                            <select name='shipping' id='shipping' value={listing.country} onChange={e=> {setListing({...listing, country: e.target.value})}}>
                                <option value="Asia"> Asia </option>
                                <option value="Canada"> Canada </option>
                                <option value="Europe"> Europe </option>
                                <option value="United States"> United States </option>
                            </select>
                            <label htmlFor='shipping_price'>
                                <input  id='shipping_price' name='shipping_price' type='integer' value={listing.shipping_price} onChange={e=> {setListing({...listing, shipping_price: e.target.value})}} />
                            </label>
                        </div>

                    <div className='button-container'>
                        <button type='submit' >UPDATE</button>
                       
                    </div>
                </form>
                <button onClick={handleClick}>DELETE</button>
            </div>
        </>
    )
}

export default ListingEdit