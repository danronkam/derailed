import React from "react";
import { Link } from "react-router-dom";
import './Slider.css'
import { useState } from "react";
import { useEffect } from "react";

function Slider()  {
    const content = {
        title: 'THE PLATFORM FOR PERSONAL STYLE',
        sub: "Buy, sell, discover authenticated pieces from the world's top brands.",
        butt1: {text: "SHOP MENSWEAR", src:"/mens"},
        butt2: {text: "SHOP WOMANS", src: "/womans"}
    }
    const [isLoading, setIsLoading] = useState(true);
    


    let sliderIdx = 2
    useEffect(() => {
        const timer = setTimeout(function () {
            setIsLoading(false);
          }, 1000);
          return () => clearTimeout(timer);
            }, []);

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
         
                <div className="splash-container"> 
                    <div className="text-wrapper">
                        <h1>{`${content.title}`}</h1>
                        <h2>{`${content.sub}`}</h2>
                        <div className="butt-container">
                            <Link exact to={`${content.butt1.src}`}>{content.butt1.text}</Link>
                            <Link exact to={`${content.butt2.src}`}>{content.butt2.text}</Link>
                        </div>
                        
                    </div>

                    <img src="https://craftsnippets.com/articles_images/placeholder/placeholder.jpg" />
                </div>
    


 
       </>

     ) }


export default Slider