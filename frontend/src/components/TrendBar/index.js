import {Link} from "react-router-dom"

const TrendBar = () => {


    return(
        <>
            <div className='trend-container'>
                <h1 className='homepage-titles' > Shop Latest Trends</h1>
                <ul className="homepage-lists">
                    <Link to={`/search/:western%20boots`}>
                        <li className='homepage-list-items' >
                            <img className='trend-photos' alt='Cowboy Boots' src='https://derailed-seed.s3.us-west-1.amazonaws.com/cowboy_boots.webp'/>
                            <h3>Cowboy Boots</h3>
                        </li>
                    </Link >
                    <Link to={`/search/:designer%20boots`}>
                        <li className='homepage-list-items'>
                            <img className='trend-photos' alt='Designer Boots' src='https://derailed-seed.s3.us-west-1.amazonaws.com/designer_boots.jpg'/>
                            <h3>Designer Boots</h3>
                        </li>
                    </Link>
                    <Link to={`/shop/:New%20Balance`}>
                        <li className='homepage-list-items'>
                            <img className='trend-photos' alt='ALD' src='https://derailed-seed.s3.us-west-1.amazonaws.com/ald-newbalance.webp'/>
                            <h3>ALD x New Balance</h3>
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default TrendBar