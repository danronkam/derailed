import React from "react"
import { Link } from "react-router-dom"
import Slider from "../Slider"
import './HomePage.css'
import DesignerBar from "../DesignerBar"
import TrendBar from "../TrendBar"
import StyleSection from "./StyleSection"
import FeaturedCollections from "../FeaturedCollections"

const HomePage =() => {
    return(
        <>
            <Slider/> 
            <StyleSection />
            <FeaturedCollections />
            <TrendBar />
            <DesignerBar />
            
            
            <div className="shop-now-container">

            </div>
        </>
    )
}

export default HomePage