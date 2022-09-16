import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './FilterBar.css';

function FilterBar() {



    return(
        <>
        <div class='filterbar-container'>
            <div class='filterbar'>
                <ul class='filter-list'>
                    <li>
                        <div class='dropdown'>
                            <button class='dropdown-button'> DESIGNERS  
                            </button>
                                <div class='dropdown-content'>
                                    <Link to={`/shop/:Adidas`}> Adidas </Link>
                                    <Link to={`/shop/:Bape`}> Bape </Link>
                                    <Link to={`/shop/:Dime`}> Dime MTL </Link>
                                    <Link to={`/shop/:Gucci`}> Gucci </Link>
                                    <Link to={`/shop/:Jjjjound`}> Jjjjound </Link>
                                    <Link to={`/shop/:Nike`}> Nike </Link>
                                    <Link to={`/shop/:Stussy`}> Stussy </Link>
                                    <Link to={`/shop/:Tumi`}> Tumi </Link>
                                    <Link to={`/shop/:Vintage`}> Vintage </Link>
                                </div>
                        </div>
                    </li>
                    <li>
                        <div class='dropdown'>
                            <button class='dropdown-button'> MENSWEAR  
                                <i class="fa-solid fa-caret-down"></i>
                            </button>
                                <div class='dropdown-content'>
                                    <Link to={`/shop`}> All Categories </Link>
                                    <Link to={`/shop/menswear/:Tops`}> Tops </Link>
                                    <Link to={`/shop/menswear/:Bottoms`}> Bottoms </Link>
                                    <Link to={`/shop/menswear/:Outerwear`}> Outerwear </Link>
                                    <Link to={`/shop/menswear/:Footwear`}> Footwear </Link>
                                 
                                    <Link to={`/shop/menswear/:Tailoring`}> Tailoring </Link>
                                    <Link to={`/shop/menswear/:Accessories`}> Accessories </Link>
                                </div>
                        </div>
                    </li>
                    <li>
                        <Link exact to={`/shop/menswear/:Sneakers`} > <button class='filter-bar-links'>SNEAKERS </button> </Link>
                    </li>
                    <li>
                        <Link exact to='/shop'> <button class='filter-bar-links'> STAFF PICKS </button> </Link>
                    </li>

                </ul>

            </div>
        </div>
        
        
        </>
    )

}

export default FilterBar