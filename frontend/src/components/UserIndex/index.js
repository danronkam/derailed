import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings, fetchListings } from "../../store/listings";
import { useParams } from "react-router-dom";
import ListingIndexItem from "../ListingIndexItem";
import LoginFormModal from "../LoginFormModal";
import './UserIndex.css'
import { fetchUser, getUser } from "../../store/user";
// import Listin

const UserIndex = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const listings = useSelector(getListings)
    const user = useSelector(getUser(userId))
    console.log(user)
    console.log(listings)



    useEffect(() => {
        dispatch(fetchListings())
        // dispatch(fetchUser(userId))

    }, [])

    let filtered = []

    const filterListings = listings.filter(listing => {
        console.log(listing.userId)
        // console.log(userId)
        let user = userId
        console.log(user)
        if(String(listing.userId) === userId) {
            console.log('yes')
            filtered.push(listing)
        }
    });

    const total = filtered.length;
    console.log(filtered)

    return(
        <>
        <div className='listing-bar'>
            {/* <p>test</p> */}
            <h3>{total} listings</h3>
        </div>
        <div className='feed-container'>  
            <div className='feed-rightside'>  
                <h2 className='avaliable-listings'>User's Listings</h2> <br />
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

export default UserIndex