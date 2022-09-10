import { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchListing, getListing } from "../../store/listings";
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
        shipping = listing.shippingPrice
    }

    if (!listing) {return null}
    return(
        <>
        <div class='ListingShow-MainContent'>
            <div class='leftColumn' >
                <img src={listing.photoUrl}></img>
            </div>

            <div class='rightColumn'>
                <div class='item-details'>
                    <p>{listing.designerBrand}</p>
                    <p>{listing.title}</p>
                    <p>{listing.size}</p>
                    <p>{listing.condition}</p>
                </div>
                <div className="item-price">
                    <p>{listing.price}</p>
                </div>
                <div className="item-shipping">
                    <p>{shipping} Shipping to United States</p>
                </div>

            </div>


        </div>
        
        </>
    )
}

export default ListingShow

        // {/* <img src={listing.photoURL}></img> */}
