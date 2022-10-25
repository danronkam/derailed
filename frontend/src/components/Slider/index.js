import React from "react";
import { Link } from "react-router-dom";
import './Slider.css'

function Slider()  {
    const content =[
        {title : 'Shop Accessories', blurb: 'PUT A RING ON IT', path: '/shop/menswear/:Accessories', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/rings.png'},
        {title: 'Shop Outerwear', blurb: 'TOO ICEY', path: '/shop/menswear/:Outerwear', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/puffer.png'},
        {title: 'Get Sneakers Under Retail', blurb: 'SNEAKER STEALS', path: '/shop/menswear/:Sneakers', photoUrl: 'https://derailed-seed.s3.us-west-1.amazonaws.com/travi.jpg'}   
    ]


    // let length = content.length
    // let contentIdx = Math.floor(Math.random() * length)
    // //  titles = currentSlide[:title]


    // function nextSlide() {
    //     console.log(contentIdx)
    //     if(contentIdx !== content.length -1) {
    //         contentIdx += 1
    //         currentSlide = content[contentIdx]
    //     } else {
    //         contentIdx = 0
    //         currentSlide = content[contentIdx]
    //         title = currentSlide.title
    //     }
    //     console.log(currentSlide)
        
    // }

  
    // let currentSlide = content[contentIdx]
    // let title = currentSlide.title
    // let blurb = currentSlide.blurb
    // let path = currentSlide.path
    // let photoUrl = currentSlide.photoUrl

    var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 


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

    return(
        <>
            <div className="slideshow-container fade">

                <div className="Containers">
                <div className="MessageInfo">1 / 3</div>
                <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/rings.png" style="width:100%"/>
                <div className="Info">First caption</div>
                </div>

                <div className="Containers">
                <div className="MessageInfo">2 / 3</div>
                <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/puffer.png" style="width:100%"/>
                <div className="Info">Second Caption</div>
                </div>

                <div className="Containers">
                <div className="MessageInfo">3 / 3</div>
                <img src="https://derailed-seed.s3.us-west-1.amazonaws.com/travi.jpg" style="width:100%"/>
                <div className="Info">Third Caption</div>
                  </div>

                <a className="Back" onClick="plusSlides(-1)">&#10094;</a>
                <a className="forward" onClick="plusSlides(1)">&#10095;</a>
               
            </div>
                <br/>

                <div style="text-align:center">
                <span className="dots" onClick="currentSlide(1)"></span>
                <span className="dots" onClick="currentSlide(2)"></span>
                <span className="dots" onClick="currentSlide(3)"></span>
                </div> 

            <h1>test</h1>
        </>
    )}

    {/* // return(
    //     <>
    //             <button onClick={nextSlide} className='slide-button' id='left'>
    //         <i className="fas fa-chevron-left"></i>
    //     </button>
    //     <Link to={path}>
    //     <div className='slider-container'>
    //         <div className='slides' >            
    //         <div className='slider-left' >
    //             <h3>{blurb}</h3>
    //             <h1>{title}</h1>
    //             <button id='shop-button'>SHOP NOW</button>
    //         </div>
    //         <div className='slider-right'>
    //             <img id='slider-photo' alt='' src={photoUrl} />
    //         </div>
    //     </div>

    //     </div>
    //     </Link>


    //     <button onClick={nextSlide} className='slide-button' id='right'>
    //         <i className="fas fa-chevron-right"></i>
    //     </button>


 
    //     </>

    // ) */}


export default Slider