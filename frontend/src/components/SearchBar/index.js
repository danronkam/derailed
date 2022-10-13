import React from "react";
import './SearchBar.css'

const SearchBar = () => {

    return(
        <> 
            <div className='search-container'>
                <form className='search-form'>
                    <button className='search-icon'> <i className="fas fa-search" /> </button>
                    <input className="search-input"
                            type="text"
                            placeholder="Search" 
                            />
                    <button type='submit' className='search-button'>SEARCH</button>
                </form>
            </div>
        
        </>
    )
}

export default SearchBar