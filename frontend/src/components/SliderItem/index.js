import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import './SliderItem.css'

const SliderItem = ({content}) => {


    return(
        <>
            <div className='slider-container'>
                <div className='slider-left' >
                    <h1>{content.blurb}</h1>
                    <h1>{content.title}</h1>
                    <button>SHOP NOW</button>
                </div>
                <div className='slider-right'>
                    <img src={content.photoUrl} />
                </div>





            </div>
        </>
    )
}

export default SliderItem