import React from "react"
import { Link } from "react-router-dom"
import Slider from "../Slider"
import './HomePage.css'

const HomePage =() => {
    return(
        <>
        <div class='homepage-container'>
        <Slider/> 

            <div class='trend-container'>
                <h1 class='homepage-titles' > Shop Latest Trends</h1>
                <ul class="homepage-lists">
                    <li class='homepage-list-items' >
                        <img class='trend-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/cool_pants.jpg'/>
                        <h3>Cool Pants</h3>
                    </li>
                    <li class='homepage-list-items'>
                        <img class='trend-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/designer_boots.jpg'/>
                        <h3>Designer Boots</h3>
                    </li>
                    <li class='homepage-list-items'>
                        <img class='trend-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/vintage_pants.jpg'/>
                        <h3>Summer Tees</h3>
                    </li>
                </ul>
            </div>
            <div class='menswear-container'>
                <h1 class='homepage-titles' >Shop Menswear</h1>
                <ul class="homepage-lists">
                    <li class='homepage-list-items'>
                        <Link to={`/shop/menswear/:Footwear`}>
                            <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/footwear.jpg'/>
                            <h3>Footwear</h3>
                        </Link>
                    </li>
                    <li class='homepage-list-items'>
                        <Link to={`/shop/menswear/:Outerwear`}>
                            <img class='category-photos'src='https://derailed-seed.s3.us-west-1.amazonaws.com/outerwear.jpg'/>
                            <h3>Outerwear</h3>
                        </Link>
                    </li>
                    <li class='homepage-list-items'> 
                        <Link to={`/shop/menswear/:Tops`}>
                            <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/tops.jpg'/>
                            <h3>Tops</h3>
                        </Link>
                    </li>
                    <li class='homepage-list-items'>
                        <Link to={`/shop/menswear/:Bottoms`} >
                            <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/bottoms.jpg'/>
                            <h3>Bottoms</h3>
                        </Link>
                    </li>
                    <li class='homepage-list-items'>
                        <Link to={`/shop/menswear/:Tailoring`}>
                            <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/Tairloring.jpg'/>
                            <h3>Tailoring</h3>
                        </Link>
                    </li>
                    <li class='homepage-list-items'>
                        <Link to={`/shop/menswear/:Accessories`}>
                            <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/accessories.jpg'/>
                            <h3>Accessories</h3>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <div class='style-container'>
                <h1>Shop by Style</h1>
                    <ul class="homepage-lists">
                        <li class='homepage-list-items'>
                            <img class='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Footwear</h3>
                        </li>
                        <li class='homepage-list-items'>
                            <img class='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Outerwear</h3>
                        </li>
                        <li class='homepage-list-items'>
                            <img class='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Tops</h3>
                        </li>
                        <li class='homepage-list-items'>
                            <img class='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Bottoms</h3>
                        </li>
                        <li class='homepage-list-items'>
                            <img class='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Tailoring</h3>
                        </li>
                        <li class='homepage-list-items'>
                            <img class='style-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                            <h3>Accessories</h3>
                        </li>
                    </ul>
            </div> */}
            <div class='designer-container'>
                <h1 class='homepage-titles' >Popular Designers</h1>
                <div>
                    <ul class="homepage-lists">
                        <li class='homepage-list-circles'>    
                            <Link to={`/shop/:Nike`}>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/nike.jpg'/> <br></br>
                             
                            </Link>
                        </li>
                        <li class='homepage-list-items'>    
                            <Link to={`/shop/:Carhartt`}>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/carhartt.jpg'/> <br></br>
                           
                            </Link>
                        </li>
                        <li class='homepage-list-items'>    
                            <Link>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/lv.jpg'/> <br></br>
                              
                            </Link>
                        </li>
                        <li class='homepage-list-items'>    
                            <Link to={`/shop/:Gucci`}>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/mm6.jpg'/> <br></br>
                              
                            </Link>
                        </li >
                        <li class='homepage-list-items'>    
                            <Link to={`/shop/:Stussy`}>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/stussy.jpg'/> <br></br>
                     
                            </Link>
                        </li>
                       
                    </ul>
                </div>
        
            </div>
        </div>
        </>
    )
}

export default HomePage