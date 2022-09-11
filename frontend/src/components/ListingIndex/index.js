import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listings";
import ListingIndexItem from "../ListingIndexItem";
import './ListingIndex.css'
// import Listin

const ListingIndex = () => {
    const dispatch = useDispatch()
    const listings = useSelector(getListings)
    console.log(listings)


    // console.log(listings)

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
            <h2>Avaliable Listings</h2> <br />
            {listings.map(listing => {
                return <ListingIndexItem key={listing.id} listing={listing} />
            })}
        </div>
        </>
    )
}

export default ListingIndex