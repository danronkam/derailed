import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListing, fetchListing, createListing } from '../../store/listings';
import './ListingCreate.css'

const ListingCreate = () => {
    const dispatch = useDispatch()
    const{listingId} = useParams()
    let listingData = useSelector(getListing(listingId))
    

    const [listing, setListing] = useState(listingData)

    useEffect(() => {
        if(listingData) dispatch(fetchListing(listingId))
    }, [listingId])

    // const [selectedFile, setSelectedFile] = useState(); //currently picked file
	// const [isFilePicked, setIsFilePicked] = useState(false); //has a filed been picked

	// const changeHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// 	setIsSelected(true);
	// };

	// const handleSubmission = () => {
	// 	const formData = new FormData();

	// 	formData.append('File', selectedFile);

	// 	fetch(
	// 		'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
	// 		{
	// 			method: 'POST',
	// 			body: formData,
	// 		}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => {
	// 			console.log('Success:', result);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 		});
	// };
	// };

    const [state, setState] = useState({ //state is set to an empty listing
        title: '',
        price: null,
        shipping_price: null,
        designer_brand: '',
        size: '',
        category: '',
        sub_category: '',
        condition: '',
        sold: false,
        country: '',
        color: '',
        description: ''
    })

    const handleImage = e => {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0]

        fileReader.onloadend = () => {
            setState(prevState => {
                return { ...prevState, photoFile: file}
            })
            setState(prevState => {
                return { ...prevState, photoUrl: fileReader.result }
            })
        }
        
        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            setState({...state}, { photoFile: null })
            setState({...state}, { photoUrl: null })
        }
    }

    const handleSubmit = e => {
        // console.log(e)
        e.preventDefault();
        let formData= new FormData()

        formData.append('listing[designer_brand]', state.designer_brand);
        formData.set('listing[title]', state.title);
        formData.append('listing[size]', state.size);
        formData.append('listing[category]', state.category);
        formData.append('listing[sub_category]', state.sub_category);
        formData.append('listing[condition]', state.condition);
        formData.append('listing[color]', state.color);
        formData.append('listing[sold]', state.sold);
        formData.append('listing[description]', state.description);
        formData.append('listing[price]', state.price);
        formData.append('listing[shipping_price]', state.shipping_price);
        formData.append('listing[country]', state.country);





        if(state.photoFile) {
            formData.append('listing[photo]', state.photoFile)
        }
        // $.ajax({
        //     url: '/api/posts',
        //     method: 'POST',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        //   });
        dispatch(createListing(formData))
        console.log(state) 
        console.log(formData) 
    }
    
    // const designers = ['Acne Studios', 'Adidas', 'Alexander McQueen', 'Amiri', 'Balenciaga', 'Bape', 'Bottega Veneta', 'Celine', 'Chanel', 'Chrome Hearts', 'Comme Des Garcons', 'Dior', 'Dries Van Noten', 'Fear of God', 'Gucci', 'Jacquemus', 'Kapital', 'Loewe', 'Louis Vuitton', 'Maison Margiela', 'Nike', 'Number (N)ine', 'Off-White', 'Prada', 'Raf Simons', 'Rick Owns', 'Saint Laurent Paris', 'Stone Island', 'Supreme', 'Undercover', 'Vintage']

    // const handleSubmit = e => {
    //     // debugger
    //     e.preventDefault()
    //     console.log(state)
    //     dispatch(createListing(state))
    //     // debugger
    // }

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
            <form class="create-form" autoComplete='off' onSubmit={handleSubmit}>
             <h3>DETAILS</h3>   
                <div class='details-containter' >
                    <div class='left'> 
                        <label htmlFor='category'>
                            <select name='category' class='create-inputs' value={state.category} id='category' onChange={e => {setState({...state, category: e.target.value})}}>
                                <option selected disabled>Department / Category</option>
                                <option value='Tops'>Tops</option>
                                <option value='Bottoms'>Bottoms</option>
                                <option value='Outerwear'>Outerwear</option>
                                <option value='Footwear'>Footwear</option>
                                <option value='Accessories'>Accessories</option>
                            </select>
                        </label>

                        <label>
    
                            <input list='designer-brands' class='create-inputs' name='designer-brand' id='designer-brand' value={state.designer_brand} onChange={e => {setState({...state, designer_brand: e.target.value})}}/>
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
                        <label htmlFor='sub_category'>
            
                            <select name='sub_category' class='create-inputs' id='sub_category' value={state.sub_category} onChange={e => {setState({...state, sub_category: e.target.value})}}>
                                <option selected disabled>Department / Category</option>
                                <option value='Sneakers'>Sneakers</option>
                                <option value='Loafers'>Loafers</option>
                                <option value='Sandles'>Sandles</option>
                                <option value='Boots'>Boots</option>
                                <option value='Athletic'>Athletic</option>
                            </select>
                        </label>

                    
                        <select name='size' class='create-inputs' id='size' value={state.size} onChange={e => {setState({...state, size: e.target.value})}}>
                                <option selected disabled>Size (Please Select Category First) </option>
                                <option value='XS'>XS</option>
                                <option value='S'>S</option>
                                <option value='M'>M</option>
                                <option value='L'>L</option>
                                <option value='XL'>XL</option>

                        </select>
                        
                    </div>
                </div>

                
            <h3> ITEM NAME</h3>
                <label htmlFor='label' />
                <input id='label' class='create-inputs' placeholder='Item name' value={state.title} onChange={e => {setState({...state, title: e.target.value})}}/>
            <h3 > COLOR </h3>
                <label htmlFor='color' />
                <input list='colors' placeholder='Designer color name' name='color' id='color' class='create-inputs' onChange={e => {setState({...state, color: e.target.value})}}/>
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
                <label htmlFor='condition'>
                    <select name='condition' id='condition' class='create-inputs' value={state.condition} onChange={e => {setState({...state, condition: e.target.value})}}> 
                            <option selected disabled></option>
                            <option value='New/Never Worn'>New/Never Worn</option>
                            <option value='Gently Used'>Gently Used</option>
                            <option value='Used'>Used</option>
                            <option value='Very Worn'>Very Worn</option>
                    </select>
                </label>
            <h3> DESCRIPTION </h3>

                <input type='text' id='description' class='create-inputs' value={state.description} onChange={e => {setState({...listing, state: e.target.value})}} placeholder='Add details about conditions, hot the garment fits, additonal measurements, shipping policies, retail price, link to retail page, etc'/>

            <h3> PRICE </h3>
                <div class='price-container' >
                    <i class="fas fa-dollar-sign"></i>
                    <input type='text' id='price' value={state.price} onChange={e => {setState({...listing, price: e.target.value})}}/>
                </div>

            <h3> SHIPPING FROM </h3>

                <input list='shipping-countries' name='shipping' id='shipping' value={state.country} onChange={e => {setState({...state, country: e.target.value})}}/>
                            <datalist id='shipping-countries'>
                                <option value="Canada"/>
                                <option value="United States"/>
                            </datalist>
                <label htmlFor='shipping_price'>
                    <input  id='shipping_price' name='shipping_price' type='integer' value={state.shipping_price} onChange={e => {setState({...state, shipping_price: e.target.value})}} />
                </label>
            
            <h3> PHOTO </h3>
                <input type="file" id="myFile" name="filename" onChange={handleImage} />

            <div class='button-container'>
                <button type='submit' >PUBLISH</button>
            </div>
        </form>
            

        </div>
        
        
        
        
        </>
    )
}

export default ListingCreate