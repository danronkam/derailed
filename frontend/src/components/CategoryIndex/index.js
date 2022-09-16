import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listings";
import { useParams } from "react-router-dom";
import ListingIndexItem from "../ListingIndexItem";


const CategoryIndex = () => {
    const dispatch = useDispatch()
    const {category} = useParams()
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    },[])
    console.log(category)
    console.log(listings)

    let filtered = []

    const filterListings = listings.map(listing => {
        // console.log(listing.category)
        if((listing.category === category.slice(1)) || (listing.subCategory === category.slice(1))){
            
            filtered.push(listing)
        }
    });

    const total = filtered.length
    console.log(category.slice(1))
    console.log(filtered)

    return(
        <>
        <div class='listing-bar'>
            {/* <p>test</p> */}
            <h3>{total} listings</h3>
        </div>
       
        <div class='feed-container'>  
            <div class='feed-rightside'>  
                <h2 class='avaliable-listings'>Avaliable Listings</h2>
                <ul class='feed-list'>
                    {filtered.map(listing => {
                        console.log(listing)
                        return <ListingIndexItem key={listing.id} listing={listing} />
                    })}
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default CategoryIndex