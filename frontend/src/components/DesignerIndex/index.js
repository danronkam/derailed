import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listings";
import { useParams } from "react-router-dom";
import ListingIndexItem from "../ListingIndexItem";


const DesignerIndex = () => {
    const dispatch = useDispatch()
    const {designerBrand} = useParams()
    const listings = useSelector(getListings)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchListings())
        setTimeout(function () {
            setIsLoading(false);
           
        }, 2000);
    },[])

    let filtered = []

    const filterListings = listings.filter(listing => {
        if(listing.designerBrand === designerBrand.slice(1)) {
            filtered.push(listing)
        }
    });

    const total = filtered.length


    return(
        <>
         {isLoading ? (
                <div className="slider-container loading-container">
                   <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/ezgif-2-8d83b97af8.gif" />    
               </div>
        ) : (
            <>
            <div className='listing-bar'>
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
        )}
        
        
        </>
    )
}

export default DesignerIndex