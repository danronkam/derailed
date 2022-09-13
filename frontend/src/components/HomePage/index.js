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
                <h1>Shop Latest Trends</h1>
                <ul class="homepage-lists">
                    <li class='homepage-list-items' >
                        <img class='trend-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                        <h3>Cool Pants</h3>
                    </li>
                    <li class='homepage-list-items'>
                        <img class='trend-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                        <h3>Designer Boots</h3>
                    </li>
                    <li class='homepage-list-items'>
                        <img class='trend-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                        <h3>Summer Tees</h3>
                    </li>
                </ul>
            </div>
            <div class='menswear-container'>
                <h1>Shop Menswear</h1>
                <ul class="homepage-lists">
                    <li class='homepage-list-items'>
                        <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                        <h3>Footwear</h3>
                    </li>
                    <li class='homepage-list-items'>
                        <img class='category-photos'src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                        <h3>Outerwear</h3>
                    </li>
                    <li class='homepage-list-items'> 
                        <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                        <h3>Tops</h3>
                    </li>
                    <li class='homepage-list-items'>
                        <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                        <h3>Bottoms</h3>
                    </li>
                    <li class='homepage-list-items'>
                        <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                        <h3>Tailoring</h3>
                    </li>
                    <li class='homepage-list-items'>
                        <img class='category-photos' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/>
                        <h3>Accessories</h3>
                    </li>
                </ul>
            </div>
            <div class='style-container'>
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
            </div>
            <div class='designer-container'>
                <h1>Popular Designers</h1>
                <div>
                    <ul class="homepage-lists">
                        <li class='homepage-list-items'>    
                            <Link>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/> <br></br>
                                Nike 
                            </Link>
                        </li>
                        <li class='homepage-list-items'>    
                            <Link>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/> <br></br>
                                Nike 
                            </Link>
                        </li>
                        <li class='homepage-list-items'>    
                            <Link>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/> <br></br>
                                Nike 
                            </Link>
                        </li>
                        <li class='homepage-list-items'>    
                            <Link>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/> <br></br>
                                Nike 
                            </Link>
                        </li >
                        <li class='homepage-list-items'>    
                            <Link>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/> <br></br>
                                Nike 
                            </Link>
                        </li>
                        <li class='homepage-list-items'>    
                            <Link>  
                                <img class='designer-circle' src='https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'/> <br></br>
                                Nike 
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