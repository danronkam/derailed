import React from "react";
import './About.css' 
import { Link } from "react-router-dom";

const About = () => {

    const carat = '>'

    return(
        <>
           <div className='ListingShow-MainContent'>
            <div className='leftColumn' >
            <div className='route'>
                <p> <Link to={``}> Github </Link> {carat} <Link to={``}> LinkedIn </Link> {carat} <Link to={``}> Portfolio </Link> </p>
            </div>
                <img src='https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc='></img>
            </div>

            <div className='rightColumn'>
                <div className='rightColumn-content'>
                    <div className='item-details'>
                        <Link> <h3 className='item-brand'>DAN KAM</h3> </Link>
                        <p> Software Engineer </p>
                        <p> Size: Men's US 12, EU 46 </p>
                        <p>  Condition: New / Gently Used </p>
                    </div>
                    <div className="item-price">
                        <p></p>
                    </div>
                    <div className="item-shipping">
                        <p className='shipping-paragraph'><strong>FREE </strong> shipping from San Fransisco </p> 

                    </div>
                </div>
                <div className='button-container' >
                    
                </div>
                <div className='profile-container' >
                    <Link to={``} className='list-owner' >
                        <img id='pfp' src="https://derailed-seed.s3.us-west-1.amazonaws.com/dankampfp.jpg"/>
                    <h3 id='see-more' >See More From This Software Engineer</h3>
                    </Link>
                </div>
                <div className='description-container'>
                    <h3 className='description-heading'>Description</h3>
                    <p className='description-content'>
                        I'm a software engineer with a passion for React, Redux, and a love of old media. I use my skills as a software engineer to design seamless user experiences and my background in publishing to stay on top of the latest design trends.
                        <br />
                        
                    </p>
                </div>
                <div >
                    <h3 className='posted-date'> Posted in 2022</h3>
                </div>
            </div>



        </div>
        </>
    )
}

export default About