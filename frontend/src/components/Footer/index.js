import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
// import './'

const Footer = () => {


    return (
        <>
        <div class='footer-links' >

            <a href="https://www.grailed.com/">GRAILED</a>
        </div>
        <div class='footer-icons'>
            <a href='https://github.com/danronkam/'>  <i class="fab fa-github-square" /></a>
            <a href='https://linkedin.com/in/danronkam'> <i class="fab fa-linkedin"></i> </a>
        </div>
        <a href='https://github.com/danronkam/derailed'> DERAILED </a>
        
        
        </>

    )
}

export default Footer