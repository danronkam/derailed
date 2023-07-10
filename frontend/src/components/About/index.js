import React from "react";
import './About.css' 

const About = () => {

    const carat = '>'

    return(
        <>
           <div className='ListingShow-MainContent'>
            <div className='leftColumn' >
            <div className='route'>
                <p> <a href='https://github.com/danronkam' target='_blank'> Github </a> {carat} <a href="https://linkedin.com/in/danronkam" target='_blank'> LinkedIn </a> {carat} <a href="http://danronkam.github.io/" target='_blank'> Portfolio </a> </p>
            </div>
                <img src='https://derailed-seed.s3.us-west-1.amazonaws.com/1517616254622+(1).jpeg' alt="bby dan"></img>
            </div>

            <div className='rightColumn'>
                <div className='rightColumn-content'>
                    <div className='item-details'>
                        <a href="http://danronkam.github.io/" target='_blank'> <h3 className='item-brand'>DAN KAM</h3> </a>
                        <p> Software Engineer </p>
                        <p> Size: Men's US 12, EU 46 </p>
                        <p>  Condition: New / Gently Used </p>
                    </div>
                    <div className="item-price">
                        <p></p>
                    </div>
                    <div className="item-shipping">
                        <p className='shipping-paragraph'><strong>FREE </strong> shipping from San Francisco </p> 

                    </div>
                </div>
                <div className='button-container' >
                    
                </div>
                <div className='profile-container' >
                    <a href="http://danronkam.github.io/" className='list-owner' target='_blank'>
                        <img id='pfp' src="https://derailed-seed.s3.us-west-1.amazonaws.com/dankampfp.jpg" alt="Dan Kam Bored Ape"/>
                        <h3 id='about-see-more' >See More From This Software Engineer</h3>
                    </a>
                </div>
                <div className='description-container'>
                    <h3 className='description-heading'>Description</h3>
                    <p className='description-content'>
                        I'm a software engineer with a passion for React, Redux, and a love of old media. I use my skills as a software engineer to design seamless user experiences and my background in publishing to stay on top of the latest design trends.
                        <br />
                        <br />
                        Derailed was made using real listings from across the internet whose prices I'd describe as a little off rails
                        <br />
                        <br /> 
                        That said I'm Currently looking for:
                        <br />
                        Walers Bonner Samba
                        <br />
                        ASICS Tiger x Vivienne Westwood 
                        <br />
                        <br />
                        If you're selling either of those or would like to talk about anything else,
                        <a className="email-button" href="mailto:danronkam@gmail.com">Email Me</a>
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