import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listings";
import { useParams } from "react-router-dom";
import ListingIndexItem from "../ListingIndexItem";


const DesignerIndex = () => {
    const dispatch = useDispatch()
    const {designerBrand} = useParams()
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    },[])

    console.log(listings)

    let filtered = []

    const filterListings = listings.filter(listing => {
        // debugger
        if(listing.designerBrand === designerBrand.slice(1)) {
            filtered.push(listing)
        }
    });

    const total = filtered.length
    console.log(designerBrand.slice(1))
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
                        return <ListingIndexItem key={listing.id} listing={listing} />
                    })}
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default DesignerIndex