import React from "react";
import './SearchBar.css'

const SearchBar = () => {

    return(
        <> 
            <div class='search-container'>
                <form class='search-form'>
                    <button class='search-icon'> <i class="fas fa-search" /> </button>
                    <input class="search-input"
                            type="text"
                            placeholder="Search" 
                            />
                    <button type='submit' class='search-button'>SEARCH</button>
                </form>
            </div>
        
        </>
    )
}

export default SearchBar