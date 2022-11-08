import { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import CommentCreate from "../CommentCreate";
import './ListingShow.css'
import CommentIndex from "../CommentIndex";
import { fetchUser, getUser } from "../../store/user";
import { useHistory } from "react-router-dom";


const ListingShow = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))
    const history = useHistory()
    // const listingOwner = useSelector(getUser(listing.userId))



    const sessionUser = useSelector(state => state.session.user);


    // useEffect(() => {
    //     dispatch(fetchUser(listing.userId))
    // }, [listing.userId])

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])
    
    let buttons;
    if (!listing) {
        history.push(`/`)

    } else if(sessionUser.id === listing.userId) {
        buttons = (
        <>    
        <Link to={`/checkout/${listing.id}`} ><button className='purchase-button'> Purchase </button> </Link>
        <Link to={`/listings/${listing.id}/edit`} ><button className='purchase-button'> Edit </button> </Link>
        </>
      );
    } else {
        buttons = (
        <> 
         <Link to={`/checkout/${listing.id}`} ><button className='purchase-button'> Purchase </button> </Link>
  
        </>
      );
    }
    

    const date = listing.createdAt
    // const year = date.slice(0,4)




    let shipping;
    if(listing.shippingPrice === 0) {
        shipping = 'FREE'
    } else {
        shipping = '+ $' + listing.shippingPrice
    }

    let country;
    if(listing.country === 'Canada') {
        country = 'CA'
    } else {
        country = 'US'
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    let brand = listing.designerBrand
    let captBrand = capitalize(brand)

    // const handlePress = e => {
    //     dispatch() //what am i dispatching from here? i want to pass the item into here into /checkout
    // }

    const carat = '>'

    if (!listing) {return null}
    return(
        <>
        <div className="listingshow-container">
            <div className='ListingShow-MainContent'>
                <div className='leftColumn' >
                <div className='route'>
                    <p> <Link to={`/shop/:${captBrand}`}> {captBrand} </Link> {carat} <Link to={`/shop/menswear/:${listing.category}`}>{listing.category} </Link> {carat} <Link to={`/shop/menswear/:${listing.subCategory}`}> {listing.subCategory} </Link> {carat} {listing.title}</p>
                </div>
                    <img src={listing.photoUrl}></img>
                </div>

                <div className='rightColumn'>
                    <div className='rightColumn-content'>
                        <div className='item-details'>
                            <Link to={`/shop/:${captBrand}`}> <h3 className='item-brand'>{captBrand}</h3> </Link>
                            <p>{listing.title}</p>
                            <p> Size: Men's US {listing.size}</p>
                            <p> Color:  {listing.color}</p>
                            <p>  Condition: {listing.condition}</p>
                        </div>
                        <div className="item-price">
                            <p>${listing.price}</p>
                        </div>
                        <div className="item-shipping">
                            <p className='shipping-paragraph'><strong>{shipping}</strong> shipping from {country}</p> 

                        </div>
                    </div>
                    <div className='button-container' >
                        {buttons}
                    </div>
                    <div className='profile-container' >
                        <Link to={`/users/${listing.userId}`} className='list-owner' >
                        <i className="fa-solid fa-circle-user" id='avatar'></i>
                        <h3 id='see-more' >See More From This Store</h3>
                        </Link>
                    </div>
                    <div className='description-container'>
                        <h3 className='description-heading'>Description</h3>
                        <p className='description-content'>{listing.description}</p>
                    </div>
                    <div >
                        <h3 className='posted-date'> Posted in {date}</h3>
                    </div>
                </div>
            </div>
            <div className="comment-container">
                    <CommentIndex listingId={listingId}/>
                    <CommentCreate/>
            </div>
        </div>

        </>
    )
}

export default ListingShow

        // {/* <img src={listing.photoURL}></img> */}
