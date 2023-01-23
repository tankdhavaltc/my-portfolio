import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

const TabItem = ({ item }) => {
    const { title, images, category, id, } = item;
    return (
        <div className='tab-item' data-aos="flip-left">
            <div className="portfolio">
                <img src={images[0].imageUrl} alt="project" />
                <div className="portfolio-info">
                    <div className="portfolio-links">
                        <Link to={`/portfolio/${id}`} ><h4>{title}</h4> <i className="fa-solid fa-link"></i></Link>
                    </div>
                    <p>{category}</p>
                </div>
            </div>
        </div>
    )
}

export default TabItem