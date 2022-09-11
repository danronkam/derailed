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

    // console.log(listings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    return(
        <>
        <h2>Avaliable Listings</h2>
        <div class='feed-container'>   

            {listings.map(listing => {
                return <ListingIndexItem key={listing.id} listing={listing} />
            })}
        </div>
        </>
    )
}

export default ListingIndex