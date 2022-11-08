import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSearchedListings } from "../../store/listings";


import './SearchBar.css'

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = e =>{
        e.preventDefault();
        if(!query) {
        } else {
            history.push(`/search/:${query}`)
        }
    }

    return(
        <> 
            <div className='search-container'>
                <form className='search-form' onSubmit={handleSubmit}>
                    <button className='search-icon'> <i className="fas fa-search" /> </button>
                    <input className="search-input"
                            type="text"
                            placeholder="Search" 
                            onChange={e => {setQuery(e.target.value)}}
                            />
                    <button type='submit' className='search-button'>SEARCH</button>
                </form>
            </div>
        
        </>
    )
}

export default SearchBar