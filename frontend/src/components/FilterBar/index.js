import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './FilterBar.css';

function FilterBar() {



    return(
        <>
        <div className='filterbar-container'>
            <div className='filterbar'>
                    <div className="filter-list-items">
                        <div className='dropdown'>
                            <button className='dropdown-button'> DESIGNERS  
                            </button>
                                <div className='dropdown-content'>
                                    <Link exact to={`/shop/:Balenciaga`}> Balenciaga </Link>
                                    <Link exact to={`/shop/:Bape`}> Bape </Link>
                                    <Link exact to={`/shop/:Dior`}> Dior </Link>
                                    <Link exact to={`/shop/:Gucci`}> Gucci </Link>
                                    <Link exact to={`/shop/:Nike`}> Nike </Link>
                                    <Link exact to={`/shop/:Stussy`}> Stussy </Link>
                                    <Link exact to={`/shop/:Vintage`}> Vintage </Link>
                                </div>
                        </div>
                    </div>
                    <div className="filter-list-items">
                        <div className='dropdown'>
                            <button className='dropdown-button'> CATEGORIES  
                                <i className="fa-solid fa-caret-down"></i>
                            </button>
                                <div className='dropdown-content'>
                                    <Link exact to={`/shop`}> ALL CATEGORIES</Link>
                                    <Link exact to={`/shop/menswear/:Boots`}> BOOTS </Link>
                                    <Link exact to={`/shop/menswear/:Casual`}> CASUAL LEATHER SHOES </Link>
                                    <Link exact to={`/shop/menswear/:Formal`}> FORMAL SHOES </Link>
                                    <Link exact to={`/shop/menswear/:Hitop`}> HI TOP SNEAKERS </Link>
                                    <Link exact to={`/shop/menswear/:Lowtop`}> LOW TOP SNEAKERS </Link>
                                    <Link exact to={`/shop/menswear/:Sandals`}> SANDALS </Link>
                                    <Link exact to={`/shop/menswear/:Slides`}> SLIP ONS </Link>

                                </div>
                        </div>
                    </div>
                    <div className="filter-list-items">
                        <Link exact to={`/shop/menswear/:Sneakers`} > <button className='filter-bar-links'>SNEAKERS </button> </Link>
                    </div>
                    <div className="filter-list-items">
                        <Link exact to='/shop'> <button className='filter-bar-links'> STAFF PICKS </button> </Link>
                    </div>
            </div>
        </div>
        
        
        </>
    )

}

export default FilterBar