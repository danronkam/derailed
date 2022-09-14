import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
// import './'

const Footer = () => {


    return (
        <>
        <div class='footer-links' >
            <Link > ABOUT </Link>
            <Link > CONTACT </Link>
            <Link > TRUST </Link>
            <a href="grailed.com">GRAILED</a>
        </div>
        <div class='footer-icons'>
            <i class="fab fa-github-square"></i>
            <i class="fab fa-linkedin"></i>
            <h9>Derailed </h9>
        </div>
        
        
        </>

    )
}

export default Footer