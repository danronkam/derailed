import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listings";
import { useParams } from "react-router-dom";
import ListingIndexItem from "../ListingIndexItem";


const FilteredIndex = () => {
    const dispatch = useDispatch()
    const {designerBrand} = useParams()
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    },[])

    const filtered = listings.filter(listing => {
        return listing.designer_brand === designerBrand;
    });
    const total = filtered.length
    console.log(total)
    console.log(filtered)

    return(
        <>
        <div className='listing-bar'>
            {/* <p>test</p> */}
            <h3>{total} listings</h3>
        </div>
       
        <div className='feed-container'>  
            <div className='feed-rightside'>  
                <h2 className='avaliable-listings'>Avaliable Listings</h2>
                <ul className='feed-list'>
                    {filtered.map(listing => {
                        return <ListingIndexItem key={listing.id} listing={listing} />
                    })}
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default FilteredIndex