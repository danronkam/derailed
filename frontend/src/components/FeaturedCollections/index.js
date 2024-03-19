import { Link } from "react-router-dom/cjs/react-router-dom"
import './FeaturedCollections.css'

const FeaturedCollections = () => {
    const Features = [
        {
            id: 1,
            img: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
            link: '',
            subHead: '',
        },
        {
            id: 2,
            img: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
            link: '',
            subHead: '',
        },
        {
            id: 3,
            img: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
            link: '',
            subHead: '',
        },
        {
            id: 4,
            img: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
            link: '',
            subHead: '',
        },
    ]

    return(
        <>
        <h1 className="homepage-titles">
            Featured Collections & Stories
        </h1>

        <div className="collections-container">

            <div className="featured-item">
                <a className="featured-link" href="http://www.google.com" target="_blank">
                    <img className="featured-item-img" src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg">

                    </img>
                    <div className="featured-item-desc">
                        <h2 className="featured-item-subhead">
                            trend report
                        </h2>
        
                        <button className="featured-button" exact to="/mens">
                            READ MORE
                        </button>
                    </div>

                </a>
            </div>

            <div className="featured-item">
                <a className="featured-link" href="http://www.google.com" target="_blank">
                    <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg">

                    </img>
                    <div className="featured-item-desc">
                        <h2 className="featured-item-subhead">
                            trend report
                        </h2>
        
                        <Link className="" exact to="/mens">
                            READ MORE
                        </Link>
                    </div>

                </a>
            </div>
            <div className="featured-item">
                <a className="featured-link" href="http://www.google.com" target="_blank">
                    <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg">

                    </img>
                    <div className="featured-item-desc">
                        <h2 className="featured-item-subhead">
                            trend report
                        </h2>
        
                        <Link className="" exact to="/mens">
                            READ MORE
                        </Link>
                    </div>

                </a>
            </div>
            <div className="featured-item">
                <a className="featured-link" href="http://www.google.com" target="_blank">
                    <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg">

                    </img>
                    <div className="featured-item-desc">
                        <h2 className="featured-item-subhead">
                            trend report
                        </h2>
        
                        <Link className="" exact to="/mens">
                            READ MORE
                        </Link>
                    </div>

                </a>
            </div>



        </div>
        
        
        </>
    )
}

export default FeaturedCollections