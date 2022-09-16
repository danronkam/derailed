import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listings";
import ListingIndexItem from "../ListingIndexItem";
import './ListingIndex.css'
// import Listin

const ListingIndex = () => {
    const dispatch = useDispatch()
    const listings = useSelector(getListings)
    console.log(listings)


    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    const total = listings.length
    console.log(total)

    return(
        <>
        <div class='listing-bar'>
            {/* <p>test</p> */}
            <h3>{total} listings</h3>
        </div>
       
        <div class='feed-container'>  
            <div class='feed-rightside'>  
                <h2 class='avaliable-listings'>Avaliable Listings</h2> <br />
                <ul class='feed-list'>
                    {listings.map(listing => {
                        return <ListingIndexItem key={listing.id} listing={listing} />
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}

export default ListingIndex