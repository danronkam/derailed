import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import './ListingIndexItem.css'

const ListingIndexItem = ({listing}) => {
    // console.log(listing)
    const dispatch = useDispatch()
    // { photoUrl } = listing;

    return(
        <>
        {/* <img src='https://www.pngitem.com/pimgs/m/238-2381636_happy-face-color-in-smiley-face-hd-png.png'></img> */}
        {/* <h1>{listing.title}</h1> */}

            <div class='feed-item'>
                <img src={listing.photoUrl}></img> <br></br>
                <Link to={`/listings/${listing.id}`} class='listing-brand'>{listing.designerBrand} {listing.size}</Link> <br></br>
                <Link to={`/listings/${listing.id}`} class='listing-title'>{listing.title}</Link> 
                <p>{listing.price}</p>
            </div>      

            {/* <h1>{listing.sub_category}</h1> */}
            {/* <p>{listing.price}</p> */}

        </>
    )
}

export default ListingIndexItem
