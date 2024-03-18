import React from "react";
import { Link } from "react-router-dom";
import './FilterBar.css';

function FilterBar() {

    return(
        <>
        <div className='filterbar-container'>
            <div className='filterbar'>
                    <div className="filter-list-items">
                        <div className='dropdown'>
                            <button className='dropdown-button filter-heading'> 
                                DESIGNERS
                                <i className="fa-solid fa-caret-down" />  
                            </button>
                                <div className='dropdown-content'>
                                    <Link to={`/shop/:Balenciaga`}> Balenciaga </Link>
                                    <Link to={`/shop/:Bape`}> Bape </Link>
                                    <Link to={`/shop/:Dior`}> Dior </Link>
                                    <Link to={`/shop/:Gucci`}> Gucci </Link>
                                    <Link to={`/shop/:Nike`}> Nike </Link>
                                    <Link to={`/shop/:Stussy`}> Stussy </Link>
                                    <Link to={`/shop/:Vintage`}> Vintage </Link>
                                </div>
                        </div>
                    </div>
                    <div className="filter-list-items">
                        <div className='dropdown'>
                            <button className='dropdown-button filter-heading'> 
                                CATEGORIES  
                                <i className="fa-solid fa-caret-down" />
                            </button>
                                <div className='dropdown-content'>
                                    <Link to={`/shop`}> ALL CATEGORIES</Link>
                                    <Link to={`/shop/menswear/:Boots`}> BOOTS </Link>
                                    <Link to={`/shop/menswear/:Casual`}> CASUAL LEATHER SHOES </Link>
                                    <Link to={`/shop/menswear/:Formal`}> FORMAL SHOES </Link>
                                    <Link to={`/shop/menswear/:Hitop`}> HI TOP SNEAKERS </Link>
                                    <Link to={`/shop/menswear/:Lowtop`}> LOW TOP SNEAKERS </Link>
                                    <Link to={`/shop/menswear/:Sandals`}> SANDALS </Link>
                                    <Link to={`/shop/menswear/:Slip`}> SLIP ONS </Link>

                                </div>
                        </div>
                    </div>
                    <div className="filter-list-items">
                        <Link to={`/shop/menswear/:Sneakers`} > 
                            <button className='filter-bar-links click filter-heading'>
                                SNEAKERS 
                            </button> 
                        </Link>
                    </div>
                    <div className="filter-list-items">
                        <Link to={`/shop`}> 
                            <button className='filter-bar-links click filter-heading'> 
                                STAFF PICKS 
                            </button> 
                        </Link>
                    </div>
            </div>
        </div>
        
        
        </>
    )

}

export default FilterBar