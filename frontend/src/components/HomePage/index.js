import React from "react"
import { Link } from "react-router-dom"
import Slider from "../Slider"
import './HomePage.css'

const HomePage =() => {
    return(
        <>
        <div className='content-container'>
        <Slider/> 
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
                            <img className='category-photos'alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/Tairloring.jpg'/>
                            <h3>Slides</h3>
                        </Link>
                    </li>
                    <li className='homepage-list-items'>
                        <Link exact to={`/shop/menswear/:Slipon`}>
                            <img className='category-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/accessories.jpg'/>
                            <h3>Slip Ons</h3>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <img src='https://derailed-seed.s3.us-west-1.amazonaws.com/1.jpg'></img> //image test */}
            <div className='trend-container'>
                <h1 className='homepage-titles' > Shop Latest Trends</h1>
                <ul className="homepage-lists">
                    <Link exact to={`/shop/menswear/:Bottoms`}>
                        <li className='homepage-list-items' >
                            <img className='trend-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/trend1.jpeg'/>
                            <h3>Cowboy Boots</h3>
                        </li>
                    </Link >
                    <Link exact to={`/shop/menswear/:Footwear`}>
                        <li className='homepage-list-items'>
                            <img className='trend-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/trend2.jpeg'/>
                            <h3>Designer Boots</h3>
                        </li>
                    </Link>
                    <Link exact to={`/shop/menswear/:Shirts`}>
                        <li className='homepage-list-items'>
                            <img className='trend-photos' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/trend3.jpeg'/>
                            <h3>Birkenstock Bostons</h3>
                        </li>
                    </Link>
                </ul>
            </div>
            
            {/* <div className='style-container'>
                <h1>Shop by Style</h1>
                    <ul className="homepage-lists">
                        <li className='homepage-list-items'>
                            <img className='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Footwear</h3>
                        </li>
                        <li className='homepage-list-items'>
                            <img className='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Outerwear</h3>
                        </li>
                        <li className='homepage-list-items'>
                            <img className='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Tops</h3>
                        </li>
                        <li className='homepage-list-items'>
                            <img className='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Bottoms</h3>
                        </li>
                        <li className='homepage-list-items'>
                            <img className='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Tailoring</h3>
                        </li>
                        <li className='homepage-list-items'>
                            <img className='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Accessories</h3>
                        </li>
                    </ul>
            </div> */}
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
                            <Link to={`/shop/:Carhartt`}>  
                                <img className='designer-circle' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/carhartt.jpg'/> <br></br>
                           
                            </Link>
                        </li>
                        <li className='homepage-list-items'>    
                            <Link to={`/shop/:LV`}>  
                                <img className='designer-circle' alt='' src='https://derailed-seed.s3.us-west-1.amazonaws.com/lv.jpg'/> <br></br>
                              
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