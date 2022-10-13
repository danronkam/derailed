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
                                    <Link exact to={`/shop/:Adidas`}> Adidas </Link>
                                    <Link exact to={`/shop/:Bape`}> Bape </Link>
                                    <Link exact to={`/shop/:Dime`}> Dime MTL </Link>
                                    <Link exact to={`/shop/:Gucci`}> Gucci </Link>
                                    <Link exact to={`/shop/:Jjjjound`}> Jjjjound </Link>
                                    <Link exact to={`/shop/:Nike`}> Nike </Link>
                                    <Link exact to={`/shop/:Stussy`}> Stussy </Link>
                                    <Link exact to={`/shop/:Tumi`}> Tumi </Link>
                                    <Link exact to={`/shop/:Vintage`}> Vintage </Link>
                                </div>
                        </div>
                    </div>
                    <div className="filter-list-items">
                        <div className='dropdown'>
                            <button className='dropdown-button'> MENSWEAR  
                                <i className="fa-solid fa-caret-down"></i>
                            </button>
                                <div className='dropdown-content'>
                                    <Link exact to={`/shop`}> All Categories </Link>
                                    <Link exact to={`/shop/menswear/:Tops`}> Tops </Link>
                                    <Link exact to={`/shop/menswear/:Bottoms`}> Bottoms </Link>
                                    <Link exact to={`/shop/menswear/:Outerwear`}> Outerwear </Link>
                                    <Link exact to={`/shop/menswear/:Footwear`}> Footwear </Link>
                                    <Link exact to={`/shop/menswear/:Tailoring`}> Tailoring </Link>
                                    <Link exact to={`/shop/menswear/:Accessories`}> Accessories </Link>
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