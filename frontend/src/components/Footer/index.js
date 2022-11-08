import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
// import './'

const Footer = () => {


    return (
        <>
        <div className='footer-links' >
            <a href="https://www.grailed.com/" target="_blank">GRAILED</a>
            <Link to={`/about`}>ABOUT</Link>
        </div>
        <div className='footer-icons'>
            <a href='https://github.com/danronkam/' target="_blank">  <i className="fab fa-github-square" /></a>
            <a href='https://linkedin.com/in/danronkam' target="_blank"> <i className="fab fa-linkedin"></i> </a>
        </div>
        <a href='https://github.com/danronkam/derailed' target="_blank"> DERAILED </a>
        
        
        </>

    )
}

export default Footer