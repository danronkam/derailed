import React from "react"
import { Link } from "react-router-dom"
import Slider from "../Slider"
import './HomePage.css'

const HomePage =() => {
    return(
        <>
        <div className='content-container'>
            <div className="home-slider-container">
                <Slider/> 
            </div>
            <div className='menswear-container'>
                <h1 className='homepage-titles' >Shop Menswear</h1>
                <ul className="homepage-lists">
                    <li className='homepage-list-items'>
                        <Link exact to={`/shop/menswear/:Boots`}>
                            <img className='category-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/footwear.jpg'/>
                            <h3>Boots</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'>
                        <Link exact to={`/shop/menswear/:Sneakers`}>
                            <img className='category-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/trend3.jpeg'/>
                            <h3>Sneakers</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'> 
                        <Link exact to={`/shop/menswear/:Formal`}>
                            <img className='category-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/IMG_2829.jpg'/>
                            <h3>Formal</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'>
                        <Link exact to={`/shop/menswear/:Loafers`} >
                            <img className='category-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/IMG_2852.jpg'/>
                            <h3>Loafers</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'>
                        <Link exact to={`/shop/menswear/:Slides`}>
                            <img className='category-photos'alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/slides.jpg'/>
                            <h3>Slides</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'>
                        <Link exact to={`/shop/menswear/:Slips`}>
                            <img className='category-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/slip.jpg'/>
                            <h3>Slip Ons</h3>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='trend-container'>
                <h1 className='homepage-titles' > Shop Latest Trends</h1>
                <ul className="homepage-lists">
                    <Link exact to={`/shop/menswear/:Boots`}>
                        <li className='homepage-list-items' >
                            <img className='trend-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/cowboy_boots.webp'/>
                            <h3>Cowboy Boots</h3>
                        </li>
                    </Link >
                    <Link exact to={`/shop/menswear/:Footwear`}>
                        <li className='homepage-list-items'>
                            <img className='trend-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/designer_boots.jpg'/>
                            <h3>Designer Boots</h3>
                        </li>
                    </Link>
                    <Link exact to={`/shop/menswear/:Shirts`}>
                        <li className='homepage-list-items'>
                            <img className='trend-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/ald-newbalance.webp'/>
                            <h3>ALD x New Balance</h3>
                        </li>
                    </Link>
                </ul>
            </div>
            
            <div className='designer-container'>
                <h1 className='homepage-titles' >Popular Designers</h1>
                <div>
                    <ul className="homepage-lists">
                        <li className='homepage-list-circles'>    
                            <Link to={`/shop/:Nike`}>  
                                <img className='designer-circle' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/nike.jpg'/> <br></br>
                             
                            </Link>
                        </li>
                        <li className='homepage-list-items'>    
                            <Link to={`/shop/:Adidas`}>  
                                <img className='designer-circle' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/adidas.jpg'/> <br></br>
                           
                            </Link>
                        </li>
                        <li className='homepage-list-items'>    
                            <Link to={`/shop/:Bape`}>  
                                <img className='designer-circle' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/bape_black_logo.jpg'/> <br></br>
                              
                            </Link>
                        </li>
                        <li className='homepage-list-items'>    
                            <Link to={`/shop/:Gucci`}>  
                                <img className='designer-circle' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/Vector-Gucci-Logo-Transparent-PNG.png'/> <br></br>
                              
                            </Link>
                        </li >
                        <li className='homepage-list-items'>    
                            <Link to={`/shop/:Stussy`}>  
                                <img className='designer-circle' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/stussy.jpg'/> <br></br>
                     
                            </Link>
                        </li>
                       
                    </ul>
                </div>
        
            </div>
            <div className="shop-now-container">

            </div>
        </div>
        </>
    )
}

export default HomePage