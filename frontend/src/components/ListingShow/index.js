import { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import CommentCreate from "../CommentCreate";
import './ListingShow.css'
import CommentIndex from "../CommentIndex";
import { fetchUser, getUser } from "../../store/user";


const ListingShow = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))
    const listingOwner = useSelector(getUser(listing.userId))
    

    const date = listing.createdAt
    // const year = date.slice(0,4)
    useEffect(() => {
        dispatch(fetchUser(listing.userId))
    }, [listing.userId])

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

    console.log('THIS IS THE LISTING OWNER:')
    console.log(listing.userId)
    console.log(listingOwner)

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

    console.log(listing)

    const handlePress = e => {
        dispatch() //what am i dispatching from here? i want to pass the item into here into /checkout
    }

    const carat = '>'

    if (!listing) {return null}
    return(
        <>
  
        <div class='ListingShow-MainContent'>
            <div class='leftColumn' >
            <div class='route'>
                <p> <Link> {captBrand} </Link> {carat} <Link>{listing.category} </Link> {carat} <Link> {listing.subCategory} </Link> {carat} {listing.title}</p>
            </div>
                <img src={listing.photoUrl}></img>
            </div>

            <div class='rightColumn'>
                <div class='rightColumn-content'>
                    <div class='item-details'>
                        <Link> <h3 class='item-brand'>{captBrand}</h3> </Link>
                        <p>{listing.title}</p>
                        <p> Size: Men's US {listing.size}</p>
                        <p> Color:  {listing.color}</p>
                        <p>  Condition: {listing.condition}</p>
                    </div>
                    <div className="item-price">
                        <p>${listing.price}</p>
                    </div>
                    <div className="item-shipping">
                        <p class='shipping-paragraph'><strong>{shipping}</strong> shipping from {country}</p> 

                    </div>
                </div>
                <div class='button-container' >
                    <Link to={`/checkout/${listing.id}`} ><button class='purchase-button'> Purchase </button> </Link>
                    <Link to={`/listings/${listing.id}/edit`} ><button class='purchase-button'> Edit </button> </Link>
                </div>
                <div class='profile-container' >
                    <Link to={`/users/${listing.userId}`} class='list-owner'>
                    <i class="fa-solid fa-circle-user" id='avatar'></i>
                    </Link>
                </div>
                <div class='description-container'>
                    <h3 class='description-heading'>Description</h3>
                    <p class='description-content'>{listing.description}</p>
                </div>
                <div >
                    <h3 class='posted-date'> Posted in {date}</h3>
                </div>
            </div>



        </div>
        <CommentCreate/>
        <CommentIndex listingId={listingId}/>
        </>
    )
}

export default ListingShow

        // {/* <img src={listing.photoURL}></img> */}
