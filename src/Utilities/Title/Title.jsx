import React from 'react'
import "./style.css";

const Title = ({ name }) => {
    return (
        <div className='page-title' data-aos="zoom-in">
            <p className="text-center text-uppercase fw-bold h2">{name}</p>
            <div className="title-border"></div>
        </div>
    )
}

export default Title