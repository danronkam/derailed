import React from "react";
import { Link } from "react-router-dom";
import './Slider.css'
import { useState } from "react";
import { useEffect } from "react";

function Slider()  {
    const content =[
        {title : 'Shop Accessories', blurb: 'PUT A RING ON IT', path: '/shop/menswear/:Accessories', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/rings.png'},
        {title: 'Shop Outerwear', blurb: 'TOO ICEY', path: '/shop/menswear/:Outerwear', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/puffer.png'},
        {title: 'Get Sneakers Under Retail', blurb: 'SNEAKER STEALS', path: '/shop/menswear/:Sneakers', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/travi.jpg'}   
    ]
    const [isLoading, setIsLoading] = useState(true);



    let sliderIdx = 2
    useEffect(() => {
        const timer = setTimeout(function () {
            setIsLoading(false);
            nextSlide()
          }, 1000);
          return () => clearTimeout(timer);
            }, []);

    //  titles = currentSlide[:title]


    function nextSlide() {
        var slides = document.getElementsByClassName("Containers");
        // var circles = document.getElementsByClassName("dots");

        let i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        if(!slides){
            
        }else if(sliderIdx !== content.length -1 ) {
            sliderIdx += 1
            slides[sliderIdx].style.display = "block"
        } else if(sliderIdx === 0) {
            slides[sliderIdx].style.display = "block"
            sliderIdx += 1
        }else {
            sliderIdx = 0
            slides[sliderIdx].style.display = "block"

        }
        setTimeout(nextSlide, 8000)

    }


  
    let currentSlide = content[sliderIdx]
    let title = currentSlide.title
    let blurb = currentSlide.blurb
    let path = currentSlide.path
    let photoUrl = currentSlide.photoUrl


   return(
         <>
            {isLoading ? (
                <>
                    <div className="slider-container loading-container">
                        <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/ezgif-2-8d83b97af8.gif" />    
                    </div>

                </>
             
            ) : (
                <div></div>
            )}
         
            <div className="Containers slider-container">
                <Link to={`/shop/menswear/:Formal`}>
                <div className='slides'>
                    <div className="slider-left">
                        <h3>Formal Shoes for Any Ocassion</h3>
                        <h1>WDNG SZN</h1>
                        <button id='shop-button'>SHOP NOW</button>
                    </div>
                    <div className="slider-right">
                        <div className="MessageInfo"> test 1 </div>
                        <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/2018-02_GQ_Essential-Dress-Shoes_3x2.webp" className="slider-photo" />
                    </div>
                </div>
                </Link>
            </div>
            <div className="Containers slider-container">
                <Link to={`/shop/menswear/:Sneakers`}>
                    <div className='slides'>
                        <div className="slider-left">
                            <h3>Unique Sneakers</h3>
                            <h1>OUT THERE DESIGNS</h1>
                            <button id='shop-button'>SHOP NOW</button>
                        </div>
                        <div className="slider-right">
                            <div className="MessageInfo"> test 1 </div>
                            <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/GQ-sneakers.webp" className="slider-photo"/>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="Containers slider-container">
                <Link to='/shop'>
                <div className='slides'>
                    <div className="slider-left">
                        <h3>Prep Reimagined</h3>
                        <h1>CHUNKY LOAFERS</h1>
                        <button id='shop-button'>SHOP NOW</button>
                    </div>
                    <div className="slider-right">
                        <div className="MessageInfo"> test 1 </div>
                        <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/GQ-Loafers-Weejuns-050120.webp"  className="slider-photo" />
                    </div>
                </div>
                </Link>
            </div>
    


 
       </>

     ) }


export default Slider