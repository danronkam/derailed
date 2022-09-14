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
                                    <Link> Comme Des Garçons' </Link>
                                    <Link> Dries Van Noten </Link>
                                    <Link> Gucci </Link>
                                    <Link> Helmut Lang </Link>
                                    <Link> Issey Miyaki </Link>
                                    <Link> Jjjjound </Link>
                                    <Link> Maison Margiela </Link>
                                    <Link> Nike </Link>
                                    <Link> Stussy </Link>
                                    <Link> Tumi </Link>
                                    <Link> Vintage </Link>
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