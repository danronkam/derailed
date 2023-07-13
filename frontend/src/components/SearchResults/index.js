import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListings, getListings } from "../../store/listings";
import ListingIndexItem from "../ListingIndexItem";
import { Link } from "react-router-dom";

const SearchResults = () => {
    const {query} = useParams();
    const searchTerm = query.slice(1).toLowerCase();

    const dispatch = useDispatch();
    const listings = useSelector(getListings);

    const [isLoading, setIsLoading] = useState(true);
    const [noListings, setNoListings] = useState(true)

    useEffect(() => {
        dispatch(fetchListings());
        setTimeout(function () {
            setIsLoading(false);
           
        }, 2000);
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
                if(((brand === term || title.includes(term) || description.includes(term) || tag === term)) && noListings) {
                    filtered.push(listing)
                    setNoListings(false)
                } else if ((brand === term || title.includes(term) || description.includes(term) || tag === term)) {
                    filtered.push(listing)
                }
            }

        } else if(((brand === searchTerm || title.includes(searchTerm) || description.includes(searchTerm) || tag === searchTerm)) && noListings) {
            filtered.push(listing)
            setNoListings(false)
        } else if((brand === searchTerm || title.includes(searchTerm) || description.includes(searchTerm) || tag === searchTerm)){
            filtered.push(listing)
        }
    })
    const total = filtered.length
    console.log(noListings)

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
                            {filtered.length === 0 ? (
                                <>
                                <h3> No Listings Avaliable <Link to={`/`} className='return-home'>return home</Link></h3> 
                                
                                </>
                            ) : (
                                <>
                                {filtered.map(listing => {
                                    return <ListingIndexItem key={listing.id} listing={listing} />
                                    })}
                                </>
                            )}
                            
                        </ul>
                    </div>
                </div>
            </>
        )}
       
        
        </>
    )
}

export default SearchResults