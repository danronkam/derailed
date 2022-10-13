import React from "react";
import { Link } from "react-router-dom";
import './Slider.css'

function Slider()  {
    const content =[
        {title : 'Shop Accessories', blurb: 'PUT A RING ON IT', path: '/shop/menswear/:Accessories', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/rings.png'},
        {title: 'Shop Outerwear', blurb: 'TOO ICEY', path: '/shop/menswear/:Outerwear', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/puffer.png'},
        {title: 'Get Sneakers Under Retail', blurb: 'SNEAKER STEALS', path: '/shop/menswear/:Sneakers', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/travi.jpg'}   
    ]


    let length = content.length
    let contentIdx = Math.floor(Math.random() * length)
    //  titles = currentSlide[:title]


    function nextSlide() {
        console.log(contentIdx)
        if(contentIdx !== content.length -1) {
            contentIdx += 1
            currentSlide = content[contentIdx]
        } else {
            contentIdx = 0
            currentSlide = content[contentIdx]
            title = currentSlide.title
        }
        console.log(currentSlide)
        
    }

  
    let currentSlide = content[contentIdx]
    let title = currentSlide.title
    let blurb = currentSlide.blurb
    let path = currentSlide.path
    let photoUrl = currentSlide.photoUrl


    return(
        <>
                <button onClick={nextSlide} class='slide-button' id='left'>
            <i class="fas fa-chevron-left"></i>
        </button>
        <Link to={path}>
        <div class='slider-container'>
            <div class='slides' >            
            <div class='slider-left' >
                <h3>{blurb}</h3>
                <h1>{title}</h1>
                <button id='shop-button'>SHOP NOW</button>
            </div>
            <div class='slider-right'>
                <img id='slider-photo' alt='' src={photoUrl} />
            </div>
        </div>

        </div>
        </Link>


        <button onClick={nextSlide} class='slide-button' id='right'>
            <i class="fas fa-chevron-right"></i>
        </button>


 
        </>

    )
}

export default Slider