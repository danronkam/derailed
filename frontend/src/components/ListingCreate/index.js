import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListing, fetchListing, createListing } from '../../store/listings';


const ListingCreate = () => {
    const dispatch = useDispatch()
    const{listingId} = useParams()
    let listingData = useSelector(getListing(listingId))


    
    const designers = ['Acne Studios', 'Adidas', 'Alexander McQueen', 'Amiri', 'Balenciaga', 'Bape', 'Bottega Veneta', 'Celine', 'Chanel', 'Chrome Hearts', 'Comme Des Garcons', 'Dior', 'Dries Van Noten', 'Fear of God', 'Gucci', 'Jacquemus', 'Kapital', 'Loewe', 'Louis Vuitton', 'Maison Margiela', 'Nike', 'Number (N)ine', 'Off-White', 'Prada', 'Raf Simons', 'Rick Owns', 'Saint Laurent Paris', 'Stone Island', 'Supreme', 'Undercover', 'Vintage']

    return(
        <>
        <div class="create-container">
            <h1>Add a new listing</h1>
            <form class="create-form" autoComplete='off'>
             <h3>DETAILS</h3>

                <div class='left '> 
                    <label htmlFor='category'>
      
                        <select name='category' id='category'>
                            <option selected disabled>Department / Category</option>
                            <option value='Tops'>Tops</option>
                            <option value='Bottoms'>Bottoms</option>
                            <option value='Outerwear'>Outerwear</option>
                            <option value='Footwear'>Footwear</option>
                            <option value='Accessories'>Accessories</option>
                        </select>
                    </label>

                    <label>
   
                        <input list='designer-brands' name='designer-brand' id='designer-brand' />
                            <datalist id='designer-brands'>
                                <option value="Helmut Lang"/>
                                <option value="Carhartt"/>
                                <option value="Vintage"/>
                                <option value="Dries Van Norton"/>
                                <option value="Nike"/>
                            </datalist>
                    </label>
                </div>

                <div>
                    <label htmlFor='sub-category'>
        
                        <select name='sub-category' id='sub-category'>
                            <option selected disabled>Department / Category</option>
                            <option value='Tops'>Tops</option>
                            <option value='Bottoms'>Bottoms</option>
                            <option value='Outerwear'>Outerwear</option>
                            <option value='Footwear'>Footwear</option>
                            <option value='Accessories'>Accessories</option>
                        </select>
                    </label>

                
                    <select name='size' id='size'>
                            <option selected disabled>Size (Please Select Category First) </option>
                            <option value='Tops'>Tops</option>
                            <option value='Bottoms'>Bottoms</option>
                            <option value='Outerwear'>Outerwear</option>
                            <option value='Footwear'>Footwear</option>
                            <option value='Accessories'>Accessories</option>
                    </select>
                    
                </div>

            
            <h3> ITEM NAME</h3>
                <label htmlFor='label' />
                <input id='label' />
            <h3> COLOR </h3>
                <label htmlFor='label' />
                <input list='colors' name='color' id='color' />
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
                <select name='condition' id='condition'>
                                <option selected disabled></option>
                                <option value='Tops'>New/Never Worn</option>
                                <option value='Bottoms'>Gently Used</option>
                                <option value='Outerwear'>Used</option>
                                <option value='Footwear'>Very Worn</option>
                </select>
            <h3> DESCRIPTION </h3>

                <input type='text' id='description' />

            <h3> PRICE </h3>

                <input type='text' id='description' />

            <h3> SHIPPING FROM </h3>

                <input list='shipping-countries' name='shipping' id='shipping' />
                            <datalist id='shipping-countries'>
                                <option value="Canada"/>
                                <option value="United States"/>
                            </datalist>
            <h3> PHOTO </h3>
                <input type="file" id="myFile" name="filename" />

            </form>


        </div>
        
        
        
        
        </>
    )
}

export default ListingCreate