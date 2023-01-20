import React from 'react'
import ProgressBar from 'react-animated-progress-bar';
import "./style.css";

const SkillProgressBar = ({ title, width }) => {
    return (
        <div className='progressbar'>
            <span className='fw-bold'>{title}</span>
            <ProgressBar
                width="400px"
                height="10px"
                rect
                fontColor="#222222"
                percentage={width}
                trackPathColor="#f3f3f3"
            />
        </div>
    )
}

export default SkillProgressBar;