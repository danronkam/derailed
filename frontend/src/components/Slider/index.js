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



    let sliderIdx = 0
    useEffect(() => {
        const timer = setTimeout(function () {
            setIsLoading(false);
            nextSlide()
          }, 3000);
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
        console.log(slides)
        console.log(sliderIdx)
        
        if(sliderIdx !== content.length -1 ) {
            sliderIdx += 1
            slides[sliderIdx].style.display = "block"
        } else if(sliderIdx === 0) {
            slides[sliderIdx].style.display = "block"
            sliderIdx += 1
        }else {
            console.log('lgtb')
            sliderIdx = 0
            slides[sliderIdx].style.display = "block"

        }
        console.log(currentSlide)
        
    }


  
    let currentSlide = content[sliderIdx]
    let title = currentSlide.title
    let blurb = currentSlide.blurb
    let path = currentSlide.path
    let photoUrl = currentSlide.photoUrl

//     var slidePosition = 1;
// SlideShow(slidePosition);

// // forward/Back controls
// function plusSlides(n) {
//   SlideShow(slidePosition += n);
// }

// //  images controls
// function currentSlide(n) {
//   SlideShow(slidePosition = n);
// }

// function SlideShow(n) {
//   var i;
//   var slides = document.getElementsByClassName("Containers");
//   var circles = document.getElementsByClassName("dots");
//   if (n > slides.length) {slidePosition = 1} reset teh slides
//   if (n < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < circles.length; i++) {
//       circles[i].className = circles[i].className.replace(" enable", "");
//   }
// //   slides[slidePosition-1].style.display = "block";
// //   circles[slidePosition-1].className += " enable";
// } 


    // _______________________________________________________________
    // function plusSlides(n) {
    //     SlideShow(slidePosition += n);
    //   }
      
    //   //  images controls
    //   function currentSlide(n) {
    //     SlideShow(slidePosition = n);
    //   }
    
    // let slidePosition = 0;
    // SlideShow();
    
    // function SlideShow() {
    //   let i;
    //   let slides = document.getElementsByClassName("Containers");
    //   console.log(slides)
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   slidePosition++;
    //   if (slidePosition > slides.length) {slidePosition = 1}
    //   slides[slidePosition-1].style.display = "block";
    //   setTimeout(SlideShow, 2000); // Change image every 2 seconds
    // } 

    // return(
    //     <>
    //         <div className="slideshow-container fade">

    //             {/* <div className="Containers">
    //             <div className="MessageInfo">1 / 3</div>
    //             <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/rings.png" style="width:100%"/>
    //             <div className="Info">First caption</div>
    //             </div>

    //             <div className="Containers">
    //             <div className="MessageInfo">2 / 3</div>
    //             <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/puffer.png" style="width:100%"/>
    //             <div className="Info">Second Caption</div>
    //             </div>

    //             <div className="Containers">
    //             <div className="MessageInfo">3 / 3</div>
    //             <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/travi.jpg" style="width:100%"/>
    //             <div className="Info">Third Caption</div>
    //               </div> */}

    //             {/* <a className="Back" onClick="plusSlides(-1)">&#10094;</a>
    //             <a className="forward" onClick="plusSlides(1)">&#10095;</a> */}
               
    //         </div>
    //             <br/>

    //             {/* <div style="text-align:center">
    //             <span className="dots" onClick={currentSlide(1)}></span>
    //             <span className="dots" onClick={currentSlide(2)}></span>
    //             <span className="dots" onClick={currentSlide(3)}></span>
    //             </div>  */}

    //         <h1>test</h1>
    //     </>
    // )}

   return(
         <>
            {isLoading ? (
                <h1>test</h1>
            ) : (
            <h1>this works</h1>
            )}
         
            <div className="Containers slider-container">
                <div className='slides'>
                    <div className="slider-left">
                        <h3>Formal Shoes for Any Ocassion</h3>
                        <h1>WDNG SZN</h1>
                        <button id='shop-button'>SHOP NOW</button>
                    </div>
                    <div className="slider-right">
                        <div className="MessageInfo"> test 1 </div>
                        <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/rings.png" />
                    </div>
                </div>
            </div>
            <div className="Containers slider-container">
                <div className='slides'>
                    <div className="slider-left">
                        <h3>blurb 2</h3>
                        <h1>title 2</h1>
                        <button id='shop-button'>SHOP NOW</button>
                    </div>
                    <div className="slider-right">
                        <div className="MessageInfo"> test 1 </div>
                        <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/puffer.png" />
                    </div>
                </div>
            </div>
            <div className="Containers slider-container">
                <Link exact to='/shop'>
                <div className='slides'>
                    <div className="slider-left">
                        <h3>blurb 3</h3>
                        <h1>title 3</h1>
                        <button id='shop-button'>SHOP NOW</button>
                    </div>
                    <div className="slider-right">
                        <div className="MessageInfo"> test 1 </div>
                        <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/travi.jpg" />
                    </div>
                </div>
                </Link>
            </div>
          
                    <button onClick={nextSlide} className='slide-button' id='left'>
                <i className="fas fa-chevron-left"></i>
            </button>
            {/* <Link to='/shop'>
            <div className='slider-container'>
                <div className='slides' >            
                <div className='slider-left' >
                    <h3>{blurb}</h3>
                    <h1>{title}</h1>
                    <button id='shop-button'>SHOP NOW</button>
                </div>
                <div className='slider-right'>
                    <img id='slider-photo' alt='' src={photoUrl} />
                </div>
            </div>

            </div>
            </Link> */}


            <button onClick={nextSlide} className='slide-button' id='right'>
                <i className="fas fa-chevron-right"></i>
            </button>


 
       </>

     ) }


export default Slider