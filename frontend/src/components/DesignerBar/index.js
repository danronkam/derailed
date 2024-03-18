import React from "react"
import { Link } from "react-router-dom"


const DesignerBar = () =>  {


    return(
        <>
            <div className='designer-container'>
                    <h1 className='homepage-titles' >Popular Designers</h1>
                    <div>
                        <ul className="homepage-lists">
                            <li className='homepage-list-circles'>    
                                <Link to={`/shop/:Nike`}>  
                                    <img className='designer-circle' alt='Nike Logo' src='https://derailed-seed.s3.us-west-1.amazonaws.com/nike.jpg'/> <br></br>
                                
                                </Link>
                            </li>
                            <li className='homepage-list-items'>    
                                <Link to={`/shop/:Adidas`}>  
                                    <img className='designer-circle' alt='Adidas Logo' src='https://derailed-seed.s3.us-west-1.amazonaws.com/adidas.jpg'/> <br></br>
                            
                                </Link>
                            </li>
                            <li className='homepage-list-items'>    
                                <Link to={`/shop/:Bape`}>  
                                    <img className='designer-circle' alt='Bape Logo' src='https://derailed-seed.s3.us-west-1.amazonaws.com/bape_black_logo.jpg'/> <br></br>
                                
                                </Link>
                            </li>
                            <li className='homepage-list-items'>    
                                <Link to={`/shop/:Gucci`}>  
                                    <img className='designer-circle' alt='Gucci Logo' src='https://derailed-seed.s3.us-west-1.amazonaws.com/Vector-Gucci-Logo-Transparent-PNG.png'/> <br></br>
                                
                                </Link>
                            </li >
                            <li className='homepage-list-items'>    
                                <Link to={`/shop/:Stussy`}>  
                                    <img className='designer-circle' alt='Stussy Logo' src='https://derailed-seed.s3.us-west-1.amazonaws.com/stussy.jpg'/> <br></br>
                        
                                </Link>
                            </li>
                        
                        </ul>
                    </div>
            
                </div>
        </>
    )
}

export default DesignerBar