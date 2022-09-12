import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListing, fetchListing, createListing } from '../../store/listings';
import './ListingCreate.css'

const ListingCreate = () => {
    const dispatch = useDispatch()
    const{listingId} = useParams()
    let listingData = useSelector(getListing(listingId))

    useEffect(() => {
        if(listingData) dispatch(fetchListing(listingId))
    }, [listingId])
    
    const designers = ['Acne Studios', 'Adidas', 'Alexander McQueen', 'Amiri', 'Balenciaga', 'Bape', 'Bottega Veneta', 'Celine', 'Chanel', 'Chrome Hearts', 'Comme Des Garcons', 'Dior', 'Dries Van Noten', 'Fear of God', 'Gucci', 'Jacquemus', 'Kapital', 'Loewe', 'Louis Vuitton', 'Maison Margiela', 'Nike', 'Number (N)ine', 'Off-White', 'Prada', 'Raf Simons', 'Rick Owns', 'Saint Laurent Paris', 'Stone Island', 'Supreme', 'Undercover', 'Vintage']

    // const handleSubmit= e => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('listing[title]', this.state.title);
    //     if (this.state.photoFile) {
        
    //         formData.append('listing[photo]', this.state.photoFile);
    //     }
    //     $.ajax({
    //         url: '/api/listings',
    //         method: 'POST',
    //         data: formData,
    //         contentType: false,
    //         processData: false
    //     });
    // }

    return(
        <>
        <div class="create-container">
            <h1>Add a new listing</h1>
            <form class="create-form" autoComplete='off' >
             <h3>DETAILS</h3>   
                <div class='details-containter' >
                    <div class='left'> 
                        <label htmlFor='category'>
        
                            <select name='category' class='create-inputs' id='category'>
                                <option selected disabled>Department / Category</option>
                                <option value='Tops'>Tops</option>
                                <option value='Bottoms'>Bottoms</option>
                                <option value='Outerwear'>Outerwear</option>
                                <option value='Footwear'>Footwear</option>
                                <option value='Accessories'>Accessories</option>
                            </select>
                        </label>

                        <label>
    
                            <input list='designer-brands' class='create-inputs' name='designer-brand' id='designer-brand' />
                                <datalist id='designer-brands'>
                                    <option value="Helmut Lang"/>
                                    <option value="Carhartt"/>
                                    <option value="Vintage"/>
                                    <option value="Dries Van Norton"/>
                                    <option value="Nike"/>
                                </datalist>
                        </label>
                    </div>

                    <div class='right'>
                        <label htmlFor='sub-category'>
            
                            <select name='sub-category' class='create-inputs' id='sub-category'>
                                <option selected disabled>Department / Category</option>
                                <option value='Tops'>Tops</option>
                                <option value='Bottoms'>Bottoms</option>
                                <option value='Outerwear'>Outerwear</option>
                                <option value='Footwear'>Footwear</option>
                                <option value='Accessories'>Accessories</option>
                            </select>
                        </label>

                    
                        <select name='size' class='create-inputs' id='size'>
                                <option selected disabled>Size (Please Select Category First) </option>
                                <option value='Tops'>Tops</option>
                                <option value='Bottoms'>Bottoms</option>
                                <option value='Outerwear'>Outerwear</option>
                                <option value='Footwear'>Footwear</option>
                                <option value='Accessories'>Accessories</option>
                        </select>
                        
                    </div>
                </div>

                
            <h3> ITEM NAME</h3>
                <label htmlFor='label' />
                <input id='label' class='create-inputs' placeholder='Item name'/>
            <h3 > COLOR </h3>
                <label htmlFor='label' />
                <input list='colors' placeholder='Designer color name' name='color' id='color' class='create-inputs'/>
                            <datalist id='colors'>
                                <option value="Red"/>
                                <option value="Orange"/>
                                <option value="Yellow"/>
                                <option value="Green"/>
                                <option value="Blue"/>
                                <option value="Indigo"/>
                                <option value="Violet"/>
                            </datalist>
          

            <h3> CONDITION </h3>
                <select name='condition' id='condition' class='create-inputs'> 
                                <option selected disabled></option>
                                <option value='Tops'>New/Never Worn</option>
                                <option value='Bottoms'>Gently Used</option>
                                <option value='Outerwear'>Used</option>
                                <option value='Footwear'>Very Worn</option>
                </select>
            <h3> DESCRIPTION </h3>

                <input type='text' id='description' class='create-inputs' placeholder='Add details about conditions, hot the garment fits, additonal measurements, shipping policies, retail price, link to retail page, etc'/>

            <h3> PRICE </h3>
                <div class='price-container' >
                    <i class="fas fa-dollar-sign"></i>
                    <input type='text' id='price' />
                </div>

            <h3> SHIPPING FROM </h3>

                <input list='shipping-countries' name='shipping' id='shipping' />
                            <datalist id='shipping-countries'>
                                <option value="Canada"/>
                                <option value="United States"/>
                            </datalist>
            <h3> PHOTO </h3>
                <input type="file" id="myFile" name="filename" />

            <div class='button-container'>
                <button type='submit' >PUBLISH</button>
            </div>
            </form>
            

        </div>
        
        
        
        
        </>
    )
}

export default ListingCreate