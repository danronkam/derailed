import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import './ListingIndexItem.css'

const ListingIndexItem = ({listing}) => {
    // console.log(listing)
    const dispatch = useDispatch()
    // { photoUrl } = listing;


    const brand = listing.designerBrand
    const capsBrand = brand.toUpperCase()
    return(
        <>
        {/* <img src='https://www.pngitem.com/pimgs/m/238-2381636_happy-face-color-in-smiley-face-hd-png.png'></img> */}
        {/* <h1>{listing.title}</h1> */}
        <Link to={`/listings/${listing.id}`} class='listing-link'>
            <li className="feed-items">
                <img src={listing.photoUrl} class='listing-image'/> 
                <div class='feed-details'>
                    <h3 class='feed-brand'>{capsBrand} {listing.size}</h3>
                    <span class='feed-title'>{listing.title}</span>
                    <span class='feed-price'>${listing.price}</span>
                </div>      
                </li>
            </Link>
            {/* <h1>{listing.sub_category}</h1> */}
            {/* <p>{listing.price}</p> */}

        </>
    )
}

export default ListingIndexItem
