import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListing, fetchListing, createListing } from '../../store/listings';
import './ListingCreate.css'

const ListingCreate = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const{listingId} = useParams()
    let listingData = useSelector(getListing(listingId))
    

    // const [listing, setListing] = useState(listingData)

    // useEffect(() => {
    //     if(listingData) dispatch(fetchListing(listingId))
    // }, [listingId])

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

    // const [state, setState] = useState({ //state is set to an empty listing
    //     title: '',
    //     price: null,
    //     shipping_price: null,
    //     designer_brand: '',
    //     size: '',
    //     category: '',
    //     sub_category: '',
    //     condition: '',
    //     sold: false,
    //     country: '',
    //     color: '',
    //     description: ''
    // })

        // const handleSubmit = e => {
    //     // console.log(e)
    //     e.preventDefault();
    //     let formData= new FormData()

    //     formData.append('listing[designer_brand]', designer_brand);
    //     formData.append('listing[title]', title);
    //     formData.append('listing[size]', size);
    //     formData.append('listing[category]', category);
    //     formData.append('listing[sub_category]', sub_category);
    //     formData.append('listing[condition]', condition);
    //     formData.append('listing[color]', color);
    //     formData.append('listing[sold]', sold);
    //     formData.append('listing[description]', description);
    //     formData.append('listing[price]', price);
    //     formData.append('listing[shipping_price]', shipping_price);
    //     formData.append('listing[country]', country);





    //     if(photoFile) {
    //         formData.append('listing[photo]', photoFile)
    //     }
    //     // $.ajax({
    //     //     url: '/api/posts',
    //     //     method: 'POST',
    //     //     data: formData,
    //     //     contentType: false,
    //     //     processData: false
    //     //   });
    //     dispatch(createListing(formData))
    //     // console.log(state) 
    //     console.log(formData) 
    // }
    
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
    //     formData.append('listing[title]', this.title);
    //     if (this.photoFile) {
        
    //         formData.append('listing[photo]', this.photoFile);
    //     }
    //     $.ajax({
    //         url: '/api/listings',
    //         method: 'POST',
    //         data: formData,
    //         contentType: false,
    //         processData: false
    //     });
    // }

    function useInput(initialValue) {
        const [value, setValue] = useState(initialValue);
        const onChange = (e) => setValue(e.target.value);
        return [value, onChange];
      }
      
    function useSubmit({ createAction, action, validate, onSuccess }){
        const dispatch = useDispatch();
        const [errors, setErrors] = useState([]);
      
        if (!action) {
          action = createAction?.();
        }
      
        const onSubmit = async (e) => {
          e.preventDefault();
      
          const errors = validate?.();
          if (errors) {
            setErrors(errors);
          } else {
            setErrors([]);
            return dispatch(action).then(
              onSuccess,
              async (res) => {
                let data;
                try {
                  // .clone() essentially allows you to read the response body twice
                  data = await res.clone().json();
                } catch {
                  data = await res.text(); // Will hit this case if, e.g., server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
              }
            );
          }
        };
      
        return [errors, onSubmit];
    }

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

    // const [errors, onSubmit] = useSubmit({
    const handleSubmit = e => {
            // debugger
        e.preventDefault();
        const formData = new FormData();
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
        //   console.log(formData)
      
        if (photoFile) {
            formData.append('photo', photoFile);
        }
        dispatch(createListing(formData))
        //   return createListing(formData);
        // onSuccess: () => history.push('/')
    };



    return(
        <>
        <div class="create-container">
            <h1>Add a new listing</h1>
            <form class="create-form" onSubmit={handleSubmit}>
             <h3>DETAILS</h3>   
                <div class='details-container' >
                    <div class='left'> 
                        <label htmlFor='category'>
                            <select name='category' class='create-inputs' value={category} id='category' onChange={e=> {setCategory(e.target.value)}}>
                                <option selected disabled>Department / Category</option>
                                <option value='Tops'>Tops</option>
                                <option value='Bottoms'>Bottoms</option>
                                <option value='Outerwear'>Outerwear</option>
                                <option value='Footwear'>Footwear</option>
                                <option value='Accessories'>Accessories</option>
                            </select>
                        </label>

                        <label>
    
                            <input list='designer-brands' class='create-inputs' name='designer-brand' id='designer-brand' value={designer_brand} onChange={e=> {setBrand(e.target.value)}}/>
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
            
                            <select name='sub_category' class='create-inputs' id='sub_category' value={sub_category} onChange={e=> {setSub(e.target.value)}}>
                                <option selected disabled >Department / Category</option>
                                <option value='Sneakers'>Sneakers</option>
                                <option value='Loafers'>Loafers</option>
                                <option value='Sandles'>Sandles</option>
                                <option value='Boots'>Boots</option>
                                <option value='Athletic'>Athletic</option>
                            </select>
                        </label>

                    
                        <select name='size' class='create-inputs' id='size' value={size} onChange={e=> {setSize(e.target.value)}} >
                                <option selected disabled >Size (Please Select Category First) </option>
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
                    <label htmlFor='label' />
                    <input id='label' class='create-inputs' placeholder='Item name' value={title} onChange={e=> {setTitle(e.target.value)}}/>
                <h3 > COLOR </h3>
                    <label htmlFor='color' />
                    <input list='colors' placeholder='Designer color name' name='color' value={color} id='color' class='create-inputs' onChange={e=> {setColor(e.target.value)}}/>
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
                        <select name='condition' id='condition' class='create-inputs' value={condition} onChange={e=> {setCondition(e.target.value)}}> 
                                <option selected disabled></option>
                                <option value='New/Never Worn'>New/Never Worn</option>
                                <option value='Gently Used'>Gently Used</option>
                                <option value='Used'>Used</option>
                                <option value='Very Worn'>Very Worn</option>
                        </select>
                    </label>
            </div>
            <h3> DESCRIPTION </h3>

                <input type='text' id='description' class='create-inputs' value={description} onChange={e=> {setDescription(e.target.value)}} placeholder='Add details about conditions, hot the garment fits, additonal measurements, shipping policies, retail price, link to retail page, etc'/>

            <h3> PRICE </h3>
                <div class='price-container' >
                    <i class="fas fa-dollar-sign"></i>
                    <input type='text' id='price' value={price} onChange={e=> {setPrice(e.target.value)}}/>
                </div>

            <h3> SHIPPING FROM </h3>

                <input list='shipping-countries' name='shipping' id='shipping' value={country} onChange={e=> {setCountry(e.target.value)}}/>
                            <datalist id='shipping-countries'>
                                <option value="Canada"/>
                                <option value="United States"/>
                            </datalist>
                <label htmlFor='shipping_price'>
                    <input  id='shipping_price' name='shipping_price' type='integer' value={shipping_price} onChange={e=> {setShipping(e.target.value)}} />
                </label>
            
            <h3> PHOTO </h3>
                <input type="file"  onChange={handleImage} />

            <div class='button-container'>
                <button type='submit' >PUBLISH</button>
            </div>
        </form>
            

        </div>
        
        
        
        
        </>
    )
}

export default ListingCreate