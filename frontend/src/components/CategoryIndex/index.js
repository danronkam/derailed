import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listings";
import { useParams } from "react-router-dom";
import ListingIndexItem from "../ListingIndexItem";
import { useState } from "react";


const CategoryIndex = () => {
    const dispatch = useDispatch()
    const {category} = useParams()
    const listings = useSelector(getListings)
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        dispatch(fetchListings())
        setTimeout(function () {
            setIsLoading(false);
        }, 5000);
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
        {isLoading ? (
                <div className="slider-container loading-container">
                   <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/ezgif-2-8d83b97af8.gif" />    
               </div>
        ) : (
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
                                console.log(listing)
                                return <ListingIndexItem key={listing.id} listing={listing} />
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )}
       
        
        </>
    )
}

export default CategoryIndex