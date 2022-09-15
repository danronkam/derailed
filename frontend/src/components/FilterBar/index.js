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
                                    <Link to={`/shop/:CommeDesGarcon`}> Comme Des Garçons' </Link>
                                    <Link to={`/shop/:DriesVanNorton`}> Dries Van Noten </Link>
                                    <Link to={`/shop/:Gucci`}> Gucci </Link>
                                    <Link to={`/shop/:HelmutLang`}> Helmut Lang </Link>
                                    <Link to={`/shop/:IsseyMiyaki`}> Issey Miyaki </Link>
                                    <Link to={`/shop/:Jjjjound`}> Jjjjound </Link>
                                    <Link> Maison Margiela </Link>
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
                                    <Link> Tops </Link>
                                    <Link> Bottoms </Link>
                                    <Link> Outerwear </Link>
                                    <Link> Footwear </Link>
                                    <Link> Tailoring </Link>
                                    <Link> Accessories </Link>
                                </div>
                        </div>
                    </li>
                    <li>
                        <Link exact to=''> <button>SNEAKERS </button> </Link>
                    </li>
                    <li>
                        <Link exact to='/shop/staff-picks'> <button> STAFF PICKS </button> </Link>
                    </li>

                </ul>

            </div>
        </div>
        
        
        </>
    )

}

export default FilterBar