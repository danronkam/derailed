import React from "react"
import { Link } from "react-router-dom"
import Slider from "../Slider"
import './HomePage.css'
import DesignerBar from "../DesignerBar"

const HomePage =() => {
    return(
        <>
            <div className="slider-container">
                <Slider/> 
            </div>
            <div className='menswear-container'>
                <h1 className='homepage-titles' >Shop Menswear</h1>
                <ul className="homepage-lists">
                    <li className='homepage-list-items'>
                        <Link to={`/shop/menswear/:Boots`}>
                            <img className='category-photos' alt='Boots' src='https://derailed-seed.s3.us-west-1.amazonaws.com/footwear.jpg'/>
                            <h3>Boots</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'>
                        <Link to={`/shop/menswear/:Sneakers`}>
                            <img className='category-photos' alt='Sneakers' src='https://derailed-seed.s3.us-west-1.amazonaws.com/trend3.jpeg'/>
                            <h3>Sneakers</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'> 
                        <Link to={`/shop/menswear/:Formal`}>
                            <img className='category-photos' alt='Formal' src='https://derailed-seed.s3.us-west-1.amazonaws.com/IMG_2829.jpg'/>
                            <h3>Formal</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'>
                        <Link to={`/shop/menswear/:Loafers`} >
                            <img className='category-photos' alt='Loafers' src='https://derailed-seed.s3.us-west-1.amazonaws.com/IMG_2852.jpg'/>
                            <h3>Loafers</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'>
                        <Link to={`/shop/menswear/:Slides`}>
                            <img className='category-photos'alt='Slides' src='https://derailed-seed.s3.us-west-1.amazonaws.com/slides.jpg'/>
                            <h3>Slides</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'>
                        <Link to={`/shop/menswear/:Slips`}>
                            <img className='category-photos' alt='Slips' src='https://derailed-seed.s3.us-west-1.amazonaws.com/slip.jpg'/>
                            <h3>Slip Ons</h3>
                        </Link>
                    </li>
                </ul>
            </div>

            
            
            <DesignerBar />


            
            
            
            <div className="shop-now-container">

            </div>
        </>
    )
}

export default HomePage