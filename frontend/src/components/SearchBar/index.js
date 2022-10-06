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

    }

    return(
        <> 
            <div class='search-container'>
                <form class='search-form' onSubmit={handleSubmit}>
                    <button class='search-icon'> <i class="fas fa-search" /> </button>
                    <input class="search-input"
                            value={query}
                            type="text"
                            placeholder="Search" 
                            onChange={e => {setQuery(e.target.value)}}
                            />
                    <button type='submit' class='search-button'>SEARCH</button>
                </form>
            </div>
        
        </>
    )
}

export default SearchBar