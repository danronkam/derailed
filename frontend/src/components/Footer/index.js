import React from "react";
import { Link } from "react-router-dom";
// import './'

const Footer = () => {


    return (
        <>
        <div class='footer-links' >
            <Link > About </Link>
            <Link > Contact </Link>
            <Link > Trust </Link>
            <Link > Grailed </Link>
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