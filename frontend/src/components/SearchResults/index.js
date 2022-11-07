import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListings, getListings } from "../../store/listings";
import ListingIndexItem from "../ListingIndexItem";

const SearchResults = () => {
    const {query} = useParams()
    const dispatch = useDispatch()
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    console.log(listings)

    let filtered = []

    const filterListings = listings.filter(listing => {
        console.log(listing.designerBrand)
        console.log(query)
        if(listing.designerBrand.toLowerCase() === query.slice(1).toLowerCase()) {
            filtered.push(listing)
        }
    })
    const total = filtered.length

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

export default SearchResults