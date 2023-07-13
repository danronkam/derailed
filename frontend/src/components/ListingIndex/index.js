import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings, fetchListings } from "../../store/listings";
import ListingIndexItem from "../ListingIndexItem";
import './ListingIndex.css'

const ListingIndex = () => {
    const dispatch = useDispatch()
    const listings = useSelector(getListings)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchListings())
        setTimeout(function () {
            setIsLoading(false);
           
        }, 2000);
    }, [])

    const total = listings.length;

    return(
        <>
        {isLoading ? (
                <div className="slider-container loading-container">
                   <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/ezgif-2-8d83b97af8.gif" alt="loading"/>    
               </div>
        ) : (
            <>
            <div className='listing-bar'>
            <h3>{total} listings</h3>
            </div>
            <div className='feed-container'>  
                <div className='feed-rightside'>  
                    <h2 className='avaliable-listings'>Avaliable Listings</h2> <br />
                    <ul className='feed-list'>
                        {listings.map(listing => {
                            return <ListingIndexItem key={listing.id} listing={listing} />
                        })}
                    </ul>
                </div>
            </div>
            </>
        
        )}</>
    )
}

export default ListingIndex