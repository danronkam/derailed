import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListing, fetchListing, createListing } from '../../store/listings';
import './ListingCreate.css'
import { useHistory } from 'react-router-dom';

const ListingCreate = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const{listingId} = useParams()
    let listingData = useSelector(getListing(listingId))
    const history = useHistory();
    const [errors, setErrors] = useState(false)
    const [wordCount, setWordCount] =useState(true)

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [shipping_price, setShipping] = useState(0);
    const [designer_brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [category, setCategory] = useState('');
    const [sub_category, setSub] = useState('');
    const [condition, setCondition] = useState('');
    const [sold, setSold] = useState(false);
    const [country, setCountry] = useState('');
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [photoFile, setPhotoFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);

    const handleImage = e => {
        // const fileReader = new FileReader();
        const file = e.currentTarget.files[0]

        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              setPhotoFile(file);
              setPhotoUrl(fileReader.result);
            };
        }
    }




    const handleSubmit = e => {
        setErrors(false)
        e.preventDefault();
        if(!title || !price || !shipping_price || !designer_brand || !size || !category || !sub_category || !condition || !country || !color || ! description ) {
            setErrors(true)
        } else {
            const formData = new FormData();
            formData.append('user_id', sessionUser.id)
            formData.append('title', title);
            formData.append('price', price);
            formData.append('shipping_price', shipping_price);
            formData.append('designer_brand', designer_brand);
            formData.append('size', size);
            formData.append('category', category);
            formData.append('sub_category', sub_category);
            formData.append('condition', condition);
            formData.append('sold', sold);
            formData.append('country', country);
            formData.append('color', color);
            formData.append('description', description);
            formData.append('photoFile', photoFile);
            formData.append('photoUrl', photoUrl);
          
            if (photoFile) {
                formData.append('photo', photoFile);
            }
            dispatch(createListing(formData))
    
            history.push('/shop')
        }  
    };



    return(
        <>
        <div className="create-container">
            <h1 className='create-headers'>Add a new listing</h1>
            <form className="create-form" onSubmit={handleSubmit}>
             <h3 className='create-headers'>DETAILS</h3>   
             
                <div className='details-container' >
                    <div className='left'> 
                    <h3>Category</h3>
                        <label htmlFor='category'>
                            <select name='category' className='create-inputs' value={category} id='category' onChange={e=> {setCategory(e.target.value)}}>
                                <option disabled></option>
                                <option value='Sneakers'>Sneakers</option>
                                <option value='Boots'>Boots</option>
                                <option value='Loafers'>Loafers</option>
                                <option value='Formal'>Formal</option>
                                <option value='Slip'>Slip Ons</option>
                            </select>
                        </label>
                    <h3>Brand</h3>

                        <label htmlFor='designer-brand'>
    
                            <select className='create-inputs' name='designer-brand' id='designer-brand' value={designer_brand} onChange={e=> {setBrand(e.target.value)}}>
                                    <option  disabled></option>
                                    <option value="Balenciaga"> Balenciaga </option>
                                    <option value="Bape"> Bape </option>
                                    <option value="Gucci"> Gucci </option>
                                    <option value="Nike"> Nike</option>
                                    <option value="Dior"> Dior </option>
                                    <option value="Dior"> Other </option>

                            </select>
                        </label> 
                        <p className='contact-admin'>Don't see the brand you need? <Link className='contact-admin-link' to={`/about`}>Contact an Admin</Link></p>
                    </div>

                    <div className='right'>
                    <h3>Tag</h3>

                        <label htmlFor='sub_category'>
            
                            <select defaultValue='test' name='sub_category' className='create-inputs' id='sub_category' value={sub_category} onChange={e=> {setSub(e.target.value)}}>
                                <option  disabled ></option>
                                <option value='Sneakers'>Hi Top Sneaker</option>
                                <option value='Loafers'>Low Sneakers</option>
                                <option value='Sandles'>Leather</option>
                                <option value='Boots'>Boots</option>
                                <option value='Athletic'>Athletic</option>
                                <option value='NA'>N/A</option>

                            </select>
                        </label>

                    <h3>Size(US Mens)</h3>

                        <select name='size' className='create-inputs' id='size' value={size} onChange={e=> {setSize(e.target.value)}} >
                                <option  disabled ></option>
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
                    <label htmlFor='label' />
                    <input id='label' className='create-inputs' placeholder='Item name' value={title} onChange={e=> {setTitle(e.target.value)}}/>
                <h3 > COLOR </h3>
                    <label htmlFor='color' />
                    <select  placeholder='Designer color name' name='color' value={color} id='color' className='create-inputs' onChange={e=> {setColor(e.target.value)}}>
                        <option  disabled></option>
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
                <p className='contact-admin'>Don't see the brand you need? <Link className='contact-admin-link' to={`/about`}>Contact an Admin</Link></p>


                <h3> CONDITION </h3>
                    <label htmlFor='condition'>
                        <select name='condition' id='condition' className='create-inputs' value={condition} onChange={e=> {setCondition(e.target.value)}}> 
                                <option  disabled></option>
                                <option value='New/Never Worn'>New/Never Worn</option>
                                <option value='Gently Used'>Gently Used</option>
                                <option value='Used'>Used</option>
                                <option value='Very Worn'>Very Worn</option>
                        </select>
                    </label>
            </div>
            <div className='details-container-3'>
                
                <h3> DESCRIPTION </h3>

                <textarea type='text' id='description' className='create-inputs' value={description} onChange={e=> {setDescription(e.target.value)}} placeholder='Add details about conditions, hot the garment fits, additonal measurements, shipping policies, retail price, link to retail page, etc'/>
            </div>
            <div className='details-container-2'>
                <h3> PRICE </h3>

                    <div className='price-container' >
                        <input type='text'  value={price} className='create-inputs' onChange={e=> {setPrice(e.target.value)}}/>
                    </div>

                <h3> SHIPPING FROM </h3>

                    <select list='shipping-countries' className='create-inputs' name='shipping' id='shipping' value={country} onChange={e=> {setCountry(e.target.value)}}>
                        <option value="Asia"> Asia </option>
                        <option value="Canada"> Canada </option>
                        <option value="Europe"> Europe </option>
                        <option value="United States"> United States </option>
                    </select>
                    <label htmlFor='shipping_price'>
                        <input  id='shipping_price' name='shipping_price' type='integer' className='create-inputs' value={shipping_price} onChange={e=> {setShipping(e.target.value)}} />
                    </label>
                
                <h3> PHOTO </h3>
                    <input type="file"  onChange={handleImage} />
            </div>
            {errors ? (
                <>
                    <div className='errors-container'>
                        <h3 className='errors_text'>Please enter all Fields Correctly</h3>
                    </div>
                </>
            ) : (
                <>
                
                </>
            )}
            <div className='button-container'>
                <button type='submit' className='login_button'>PUBLISH</button>
            </div>
            

        </form>
            

        </div>
        
        
        
        
        </>
    )
}

export default ListingCreate