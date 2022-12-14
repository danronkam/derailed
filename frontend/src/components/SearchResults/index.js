import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListings, getListings } from "../../store/listings";
import ListingIndexItem from "../ListingIndexItem";

const SearchResults = () => {
    const {query} = useParams()
    const searchTerm = query.slice(1).toLowerCase()

    const dispatch = useDispatch()
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    let filtered = []

    const filterListings = listings.filter(listing => {
        let brand = listing.designerBrand.toLowerCase()
        let title = listing.title.toLowerCase()
        let description = listing.description.toLowerCase()
        let tag = listing.subCategory.toLowerCase()
        if(searchTerm.includes(' ')) {
            let terms = searchTerm.split(' ')
            for(let i = 0; i < terms.length; i++) {
                let term = terms[i]
                if(brand === term || title.includes(term) || description.includes(term) || tag === term) {
                    filtered.push(listing)
                }
            }

        } else if(brand === searchTerm || title.includes(searchTerm) || description.includes(searchTerm) || tag === searchTerm) {
            filtered.push(listing)
        }
    })
    const total = filtered.length

    return(
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
    )
}

export default SearchResults