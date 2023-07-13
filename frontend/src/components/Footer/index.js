import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className='footer-links' >
            <a href="https://www.grailed.com/" target="_blank" rel="noreferrer">GRAILED</a>
            <Link to={`/about`}>ABOUT</Link>
        </div>
        <div className='footer-icons'>
            <a href='https://github.com/danronkam/' target="_blank" rel="noreferrer">  <i className="fab fa-github-square" /></a>
            <a href='https://linkedin.com/in/danronkam' target="_blank" rel="noreferrer"> <i className="fab fa-linkedin"></i> </a>
        </div>
        <a href='https://github.com/danronkam/derailed' target="_blank" rel="noreferrer"> DERAILED </a>   
        
        </>

    )
}

export default Footer