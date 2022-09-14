import { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
import CommentCreate from "../CommentCreate";
import './ListingShow.css'


const ListingShow = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId])

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

    console.log(listing)

    const handlePress = e => {
        dispatch() //what am i dispatching from here? i want to pass the item into here into /checkout
    }

    const carat = '>'

    if (!listing) {return null}
    return(
        <>
        <div class='route'>
            <p> <Link> {listing.designerBrand} </Link> {carat} <Link>{listing.category} </Link> {carat} <Link> {listing.subCategory} </Link> {carat} {listing.title}</p>
        </div>
        <div class='ListingShow-MainContent'>
            <div class='leftColumn' >
                <img src={listing.photoUrl}></img>
            </div>

            <div class='rightColumn'>
                <div class='rightColumn-content'>
                    <div class='item-details'>
                        <Link> <h3 class='item-brand'>{listing.designerBrand}</h3> </Link>
                        <p>{listing.title}</p>
                        <p> Size:  {listing.size}</p>
                        <p> Color:  {listing.color}</p>
                        <p>  Condition: {listing.condition}</p>
                    </div>
                    <div className="item-price">
                        <p>${listing.price}</p>
                    </div>
                    <div className="item-shipping">
                        <p>{shipping} Shipping: {country} to</p> 
                        <input ></input>
                    </div>
                </div>
                <div class='button-container' >
                    <Link to={`/checkout/${listing.id}`} ><button> Purchase </button> </Link>
                </div>
                <div class='profile-container' >

                </div>
                <div class='description-container'>
                    <h3>Description</h3>
                    <p>{listing.description}</p>
                </div>
            </div>


        </div>
        <CommentCreate/>
        </>
    )
}

export default ListingShow

        // {/* <img src={listing.photoURL}></img> */}
