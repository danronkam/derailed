import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import './ListingIndexItem.css'

const ListingIndexItem = ({listing}) => {
    const dispatch = useDispatch()


    return(
        <>
        {/* <img src='https://www.pngitem.com/pimgs/m/238-2381636_happy-face-color-in-smiley-face-hd-png.png'></img> */}
        {/* <h1>{listing.title}</h1> */}

            <div class='feed-item'>
                <img src="https://i.pinimg.com/originals/cb/7d/48/cb7d48c589412612f5fd4a554e36a325.png"></img> <br></br>
                <Link to={`/listings/${listing.id}`} class='listing-brand'>{listing.designerBrand} {listing.price}</Link> <br></br>
                <Link to={`/listings/${listing.id}`} class='listing-title'>{listing.title}</Link> 
            </div>      

            {/* <h1>{listing.sub_category}</h1> */}
            {/* <p>{listing.price}</p> */}

        </>
    )
}

export default ListingIndexItem
