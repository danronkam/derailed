import React from "react";
import './Slider.css'

function Slider()  {
    const content =[
        {title : 'Shop Accessories', blurb: 'PUT A RING ON IT', path: '', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/rings.png'},
        {title: 'Shop Outerwear', blurb: 'TOO ICEY', path: '', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'},
        {title: 'Sell Your Listings On Grailed', blurb: 'SELL FASTER', path: '', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'},
        {title: 'Shop Sneakers and Get Them Under Retail', blurb: 'SNEAKER STEALS', path: '', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/istockphoto-1147544807-612x612.jpg'}   
    ]



    let contentIdx = 0
    //  titles = currentSlide[:title]


    function nextSlide() {
        console.log(contentIdx)
        if(contentIdx != content.length -1) {
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
        <div class='slider-container'>
            <div class='slider-left' >
                <h3>{blurb}</h3>
                <h1>{title}</h1>
                <button id='shop-button'>SHOP NOW</button>
            </div>
            <div class='slider-right'>
                <img id='slider-photo' src={photoUrl} />
            </div>
            <button onClick={nextSlide} class='slide-button' id='left'>
            <i class="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextSlide} class='slide-button' id='right'>
            <i class="fas fa-chevron-right"></i>
        </button>
        </div>
 
        </>

    )
}

export default Slider